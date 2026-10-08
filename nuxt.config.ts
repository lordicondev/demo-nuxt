// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint'],

    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
        },
    },

    css: ['~/assets/css/main.css'],

    // <lord-icon> is a custom element, not a Vue component: Vue renders it as it is.
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag === 'lord-icon',
        },
    },
});
