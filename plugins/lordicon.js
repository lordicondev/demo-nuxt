// plugins/lordicon.js
import { defineNuxtPlugin } from '#app';
import lottie from 'lottie-web';

export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.client) {
        (async () => {
            const { defineElement } = await import('@lordicon/element');

            // define "lord-icon" custom element with default properties
            defineElement(lottie.loadAnimation);
        })();
    }
});