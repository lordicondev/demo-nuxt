<script setup lang="ts">
useHead({ title: 'Vue state' });

// Fetched on the server with the page, from server/api/products.get.ts.
const { data: products } = await useFetch('/api/products');
</script>

<template>
    <div>
        <h1>Icons that follow Vue state</h1>
        <p class="lead">
            Vue owns the state and puts it on an element, as an attribute;
            <code>trigger="follow"</code> keeps the icon in step with it. Nothing else to wire up:
            no watchers, no refs.
        </p>

        <h2>A toggle, from the server's data</h2>
        <p class="note">
            Each button carries <code>aria-pressed</code>. The products come from a server route,
            with <code>useFetch</code>, and the headphones are in the cart when the page arrives:
            their icon starts on the second look, without playing. Click to see it morph.
        </p>
        <ul class="products">
            <li v-for="product in products" :key="product.id" class="product">
                <span>
                    {{ product.name }} <span class="price">{{ product.price }}</span>
                </span>
                <CartButton :initial-in-cart="product.inCart" />
            </li>
        </ul>

        <h2>A process, in stages</h2>
        <p class="note">
            <code>follow(data-state, busy=loop-cycle, done=morph-check)</code> gives each value its
            animation: a loop while busy, a check when done, and back.
        </p>
        <div class="actions">
            <DownloadButton />
        </div>

        <h2>Played from code, after a request</h2>
        <p class="note">
            A template ref gives the element, with <code>play()</code>. The form posts the address
            to a server route with <code>$fetch</code>, and the icon plays when the server has
            answered.
        </p>
        <SubscribeForm />

        <p class="next">
            <NuxtLink to="/server-rendering" class="link">Next: server rendering →</NuxtLink>
        </p>
    </div>
</template>

<style scoped>
.products {
    max-width: 480px;
    margin-top: 16px;
    list-style: none;
}

.product {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
}

.price {
    margin-left: 6px;
    color: var(--muted);
}

.next {
    margin-top: 48px;
}
</style>
