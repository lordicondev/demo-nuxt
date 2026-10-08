<script setup lang="ts">
/** One example: the icon, and the attributes that make it. */
defineProps<{ code: string; dark?: boolean }>();
</script>

<template>
    <figure class="tile" :class="{ dark }">
        <slot />
        <figcaption>
            <code>{{ code }}</code>
        </figcaption>
    </figure>
</template>
