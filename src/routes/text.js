import fetch from 'node-fetch'

export async function get(request, context) {
    let r = await fetch(request.query.get('u'));
    let text = await r.text()

    let headers = {
        'Access-Control-Allow-Origin': '*'
    }
    return {
        headers,
        body: text
    };

}