// ==UserScript==
// @name         ZynthioticTanks
// @namespace    nullptr
// @version      1.0
// @author       nullptr
// @description  zont sosi
// @match        https://genesistanki.online/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=genesistanki.online
// @run-at       document-start
// @resource     myjs https://raw.githubusercontent.com/typedef73/ZynthioticTanks/refs/heads/main/client.js?v=1.2
// @grant        GM_getResourceText
// @updateURL    https://raw.githubusercontent.com/typedef73/ZynthioticTanks/refs/heads/main/tm.js
// @downloadURL  https://raw.githubusercontent.com/typedef73/ZynthioticTanks/refs/heads/main/tm.js
// ==/UserScript==

(async function () {
    'use strict';

    if (window.__tmRewritten) return;
    window.__tmRewritten = true;

    const code = GM_getResourceText('myjs');
    if (!code) return;

    document.open();

    const res = await fetch(location.href, { credentials: 'include' });
    const html = (await res.text()).replace(/<script[^>]*\ssrc=["'][^"']*client\.js[^"']*["'][^>]*>\s*<\/script>/i,() => `<script>${code}<\/script>`);

    document.write(html);
    document.close();
})();
