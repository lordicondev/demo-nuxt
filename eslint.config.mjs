// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    rules: {
        // Prettier formats the markup, <img /> included.
        'vue/html-self-closing': 'off',
    },
});
