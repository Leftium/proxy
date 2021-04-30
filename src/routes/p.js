import fetch from 'node-fetch'

export async function get(params) {
    let request = params.request;
    let context = params.request;
    console.log(JSON.stringify(params, null, 4));

    let r = await fetch(request.query.get('u'));
    let text = await r.text()

    text = text.replace(/^var entries = /, '');
    let data = JSON.parse(text);

    let headers = {
        'Access-Control-Allow-Origin': '*'
    }
    return {
        headers,
        body: data
    };

}