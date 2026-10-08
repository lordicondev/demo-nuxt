/** A stand-in for data that is personal, or slow to come. */
export default defineEventHandler(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return [
        { id: 1, title: 'Secure your account', icon: '/icons/lock.json' },
        { id: 2, title: 'Earn rewards', icon: '/icons/coins.json' },
        { id: 3, title: 'Add an extension', icon: '/icons/puzzle.json' },
    ];
});
