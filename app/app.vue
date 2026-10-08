<script setup lang="ts">
useHead({
    titleTemplate: (title) => (title ? `${title} · Lordicon × Nuxt` : 'Lordicon × Nuxt'),
    meta: [
        {
            name: 'description',
            content: 'Animated Lordicon icons in a Nuxt app, with @lordicon/element.',
        },
    ],
});
</script>

<template>
    <NuxtRouteAnnouncer />
    <header class="header">
        <NuxtLink to="/" class="brand">Lordicon × Nuxt</NuxtLink>
        <nav class="nav">
            <NuxtLink to="/">Basics</NuxtLink>
            <NuxtLink to="/state">Vue state</NuxtLink>
            <NuxtLink to="/server-rendering">Server rendering</NuxtLink>
        </nav>
    </header>
    <main class="main">
        <NuxtPage />
    </main>
</template>
