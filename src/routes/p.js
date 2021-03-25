import axios from 'axios'

export async function get(request, context) {

    let r = await axios.get(request.query.get('u'));

    let data = r.data;
    if (typeof data == 'string' && data.match(/^var entries = /)) {
        data = data.replace(/^var entries = /, '');
        data = JSON.parse(data);
    }

    return {
        body: data
    };

}