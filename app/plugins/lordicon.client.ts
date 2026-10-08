import { defineElement } from '@lordicon/element';

// Defines <lord-icon> in the browser, before the app hydrates. On the server, Vue renders the
// tag with its attributes, and the icon takes over once this has run.
export default defineNuxtPlugin(() => {
    defineElement();
});
