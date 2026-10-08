/** A stand-in for your data: a database, a CMS, the session. */
export default defineEventHandler(() => [
    { id: 1, name: 'Headphones', price: '$129', inCart: true },
    { id: 2, name: 'Keyboard', price: '$89', inCart: false },
]);
