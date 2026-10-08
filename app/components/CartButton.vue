<script setup lang="ts">
/** A toggle: the icon follows the button's `aria-pressed`, which follows Vue state. */
const props = defineProps<{ initialInCart: boolean }>();

const inCart = ref(props.initialInCart);
</script>

<template>
    <button type="button" class="button" :aria-pressed="inCart" @click="inCart = !inCart">
        <lord-icon
            src="/icons/morph-shopping.json"
            trigger="follow"
            target="button"
            state="morph-select"
            current-color
        />
        In cart
    </button>
</template>
