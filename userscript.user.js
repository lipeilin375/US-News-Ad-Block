// ==UserScript==
// @name         US News Auto Close Ad Prefer
// @namespace    https://github.com/lipeilin375/US-News-Ad-Block
// @version      0.2
// @description  Close US News site's turn off ad blocker dialog automatically.
// @author       BillyLin
// @match        https://*.usnews.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=usnews.com
// @updateURL    https://raw.gitmirror.com/lipeilin375/US-News-Ad-Block/main/userscript.user.js
// @downloadURL  https://raw.gitmirror.com/lipeilin375/US-News-Ad-Block/main/userscript.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const path = "body > div.fc-ab-root > div > div.fc-ab-dialog.fc-dialog > button"

    function waitForElement(selector, callback, timeout = 10000) {
        const observer = new MutationObserver((mutations, obs) => {
            const element = document.querySelector(selector);
            if (element) {
                callback(element);
                obs.disconnect();
            }
        });
        observer.observe(document, {
            childList: true,
            subtree: true,
        });
        timer = setTimeout(() => {
            observer.disconnect();
        }, timeout);
    }
    waitForElement(path, (element) => {
        element.click()
        console.log("Block Dialog Removed")
    });
})();
