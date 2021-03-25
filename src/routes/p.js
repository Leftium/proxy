import fetch from 'node-fetch'

export async function get(request, context) {

    let r = await fetch(request.query.get('u'));
    let text = await r.text()

    text = text.replace(/^var entries = /, '');
    let data = JSON.parse(text);

    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    return {
        headers,
        body: data
    };

}