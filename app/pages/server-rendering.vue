<script setup lang="ts">
useHead({ title: 'Server rendering' });

const CSS = `@layer base {
    lord-icon {
        display: inline-block;
        width: 64px;
        height: 64px;
    }

    lord-icon:not(:defined) > * {
        width: 100%;
        height: 100%;
    }
}`;
</script>

<template>
    <div>
        <h1>Server rendering</h1>
        <p class="lead">
            The server sends <code>&lt;lord-icon&gt;</code> with its attributes, and whatever you
            put inside it. The icon loads once the page runs, and takes over.
        </p>

        <h2>A placeholder, from the first frame</h2>
        <p class="note">
            Children show until the icon is ready: here a still of each icon, a plain
            <code>&lt;img&gt;</code>. Turn JavaScript off in DevTools and reload to see what the
            server sends.
        </p>
        <div class="grid">
            <ExampleTile code="<img> inside">
                <lord-icon src="/icons/lock.json" trigger="hover">
                    <img src="/icons/lock.svg" alt="" width="64" height="64" />
                </lord-icon>
            </ExampleTile>
            <ExampleTile code="<img> inside">
                <lord-icon src="/icons/coins.json" trigger="hover">
                    <img src="/icons/coins.svg" alt="" width="64" height="64" />
                </lord-icon>
            </ExampleTile>
        </div>

        <h2>A size before the script runs</h2>
        <p class="note">
            Until the script runs, the element has no size of its own. A rule in your global CSS
            gives it one, so nothing on the page moves when the icon loads. In
            <code>@layer base</code>, it gives way to your classes; with Tailwind 4 and Nuxt UI,
            whose classes sit in a layer, it has to, as a rule outside any layer beats them:
        </p>
        <pre class="code">{{ CSS }}</pre>

        <h2>Loading when it is needed</h2>
        <p class="note">
            <code>loading="lazy"</code> waits until the icon is in view;
            <code>loading="interaction"</code> until the pointer or the keyboard reaches it, with
            the placeholder on show until then. Hover the second one.
        </p>
        <div class="grid">
            <ExampleTile code='loading="lazy"'>
                <lord-icon src="/icons/puzzle.json" trigger="hover" loading="lazy">
                    <img src="/icons/puzzle.svg" alt="" width="64" height="64" loading="lazy" />
                </lord-icon>
            </ExampleTile>
            <ExampleTile code='loading="interaction"'>
                <lord-icon src="/icons/lock.json" trigger="hover" loading="interaction">
                    <img src="/icons/lock.svg" alt="" width="64" height="64" />
                </lord-icon>
            </ExampleTile>
        </div>

        <h2>Rendered in the browser, after the page</h2>
        <p class="note">
            This part fetches its data in the browser once the page is up, with
            <code>useLazyFetch</code> and <code>server: false</code>, as for data that is personal
            or slow. Its icons need nothing more: they load as soon as Vue renders them, and
            <code>intro</code> brings them in.
        </p>
        <RecommendationList />
    </div>
</template>
