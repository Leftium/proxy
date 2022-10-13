import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ url }) => {
    const targetUrl = url.searchParams.get('u') || '';
    const fetched = await fetch(targetUrl);

    let text = await fetched.text();
    text = text.replace(/^var entries = /, '');

    return new Response(text, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });
}