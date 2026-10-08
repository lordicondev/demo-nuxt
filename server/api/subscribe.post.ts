/** A stand-in for signing someone up: a mailing list, a database. */
export default defineEventHandler(async (event) => {
    const { email } = await readBody<{ email: string }>(event);
    return { message: `Subscribed: ${email}` };
});
