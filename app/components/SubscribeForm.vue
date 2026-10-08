<script setup lang="ts">
import type { LordIconElement } from '@lordicon/element';

/** A form that posts to a server route; the icon plays once the server has answered. */
const icon = useTemplateRef<LordIconElement>('icon');
const email = ref('');
const message = ref('');

async function subscribe() {
    const result = await $fetch('/api/subscribe', {
        method: 'POST',
        body: { email: email.value },
    });
    message.value = result.message;
    void icon.value?.play({ from: 'start' });
}
</script>

<template>
    <form class="form" @submit.prevent="subscribe">
        <lord-icon ref="icon" src="/icons/confetti.json" />
        <input
            v-model="email"
            type="email"
            required
            placeholder="you@example.com"
            aria-label="Email"
            class="input"
        />
        <button class="button">Subscribe</button>
        <p role="status" class="status">{{ message }}</p>
    </form>
</template>

<style scoped>
.form {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    margin-top: 16px;
}

.input {
    min-width: 220px;
    padding: 9px 14px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font: inherit;
}

.status {
    flex-basis: 100%;
    min-height: 1.5em;
    color: var(--muted);
}
</style>
