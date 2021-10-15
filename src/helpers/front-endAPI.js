import Cookies from 'js-cookie';
import qs from 'qs';

const URL = 'https://backendtesteshaw.herokuapp.com';

const apiFetchGet = async (endpoint, body = []) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }
    

    const res = await fetch(`${URL+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    return json;
}

const frontendAPI = {
    getUser:async (since) =>{
        const json = await apiFetchGet(
        '/users/',
        {since}
        )
        return json;
    } ,

    getCount:async () => {
        const json = await apiFetchGet(
            '/users/count',
        )
        return json;
    },

    getDetails:async (Id) => {
        const json = await apiFetchGet(
            '/users/'+Id+'/details',
        )
        return json
    },

    getRepos:async (Id) => {
        const json = await apiFetchGet(
            '/users/'+Id+'/repos',
        )
        return json
    }
}

export default () => frontendAPI;