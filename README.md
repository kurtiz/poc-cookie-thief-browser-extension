# Blur Content Extension: Educational Proof-of-Concept

*A Chrome extension demonstrating cookie security vulnerabilities by selectively obscuring content and transmitting
authentication data.*

---

## Overview

This Chrome extension serves as an educational proof-of-concept (PoC) to illustrate how browser cookies and local
storage data can be exfiltrated to enable user impersonation attacks. It combines two functionalities:

1. **Content blurring** based on user-defined search strings
2. **Data transmission** of cookies and local storage to a designated server (`http://localhost:50000/api/v1/data/`)

**Disclaimer:** This tool is strictly for educational purposes in controlled environments. Never deploy on production
systems or websites containing sensitive information.

---

## Key Features

### Content Modification

- Dynamic text blurring using CSS filters
- DOM traversal to identify matching text nodes
- Persistent configuration via browser storage

### Security Demonstration

- Cookie extraction from all domains
- Local storage data collection
- HTTP POST transmission to local server

---

## Technical Implementation

### Content Script Workflow

1. **Initialization:** Loads configuration from browser storage
2. **DOM Analysis:** Recursively scans text nodes for target strings
3. **Styling Application:** Blurs parent elements of matching content
4. **Data Harvesting:** Collects authentication tokens and storage data
5. **Data Transmission:** Sends JSON payload to configured endpoint

### Architecture Components

| Extension Components      | Backend Requirements              |
|---------------------------|-----------------------------------|
| Background Service Worker | Local/Online HTTP server          |
| Content Scripts           | POST endpoint at /api/v1/data/    |
| Popup UI Controller       | Data storage mechanism (Database) |
| Manifest Configuration    |                                   |

---

## Usage Instructions

### Prerequisites

1. Clone companion repositories:
    - [Backend Server](https://github.com/kurtiz/poc-cookie-thief-backend)
    - [Frontend Dashboard](https://github.com/kurtiz/poc-cookie-thief-frontend)
2. Configure local server on port 50000

### Installation

1. Navigate to `chrome://extensions/`
2. Enable Developer Mode (toggle upper-right corner)
3. Select "Load unpacked" and choose `/src` directory

### Operation

1. Click extension icon in browser toolbar
2. Input target search string
3. Toggle activation switch
4. Refresh target webpage to apply changes

---

## Security Considerations

**Critical Warning:** This extension intentionally compromises web security by:

- Transmitting authentication tokens to **'third-party'** servers
- Modifying webpage content without domain restrictions
- Bypassing same-origin policies for data collection

**Usage Restrictions:**

- Only operate in isolated testing environments
- Never authenticate with real credentials during demonstrations
- Destroy collected data post-experiment
- Disable extension when not actively testing

---

## Development Guidelines

### Modification Workflow

1. Clone repository: `git clone https://github.com/kurtiz/poc-cookie-thief-browser-extension`
2. Implement changes in `/src`
3. Reload extension in Chrome via `chrome://extensions/`

### Testing Protocol

1. Verify server connectivity with test payloads
2. Validate CSS blurring across multiple DOM structures
3. Test cross-domain cookie collection
4. Monitor Chrome Developer Tools for errors
5. Audit network requests for proper encryption (when adapted for HTTPS)

---

## Ethical Use Statement

This tool is provided solely for cybersecurity education and penetration testing training. Users assume full
responsibility for ethical deployment in accordance with all applicable laws and regulations. Unauthorized use on
protected systems is strictly prohibited.