// ==UserScript==
// @name        Instagram Dark Mode Redirect
// @description Redirect to Instagram's official dark theme site.
// @version     1.0
// @author      afn (https://github.com/xafn)
// @namespace   https://github.com/xafn/userscripts/blob/main/instagram/dark-mode-redirect.js
// @license     MIT
// @match       https://www.instagram.com/
// @include     *://www.instagram.com/*
// @run-at      document-body
// @grant       none
// ==/UserScript==

let css = `
  #splash-screen {
    background-color: var(--ig-secondary-background) !important;
  }
`;

let styleSheet = document.createElement("style");
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

if (window.location.search !== "?theme=dark") {
  window.location.search = "?theme=dark";
}