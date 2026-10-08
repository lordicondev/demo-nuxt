<script setup lang="ts">
// Fetched in the browser, once the page is up: the server sends the page without waiting.
const { data: recommendations } = useLazyFetch('/api/recommendations', { server: false });
</script>

<template>
    <div v-if="recommendations" class="grid">
        <figure v-for="item in recommendations" :key="item.id" class="tile">
            <lord-icon :src="item.icon" intro="in-reveal" trigger="hover" target="figure" />
            <figcaption>{{ item.title }}</figcaption>
        </figure>
    </div>
    <p v-else class="note">Loading recommendations…</p>
</template>
