import axios from 'axios';
import md5 from 'md5';

const http = axios.create({
    baseURL: 'http://gateway.marvel.com'
})

    const apikey = '9c0264e74355a3dbb4ad363a1d70fcde';
    const privateKey = '74cceade0af119f96660d4280cd9878345c23931';

    const time = Number(new Date());
    const hash = md5(time + privateKey + apikey);

// Requisição com AXIOS
export const api = {
    getAllHqs: async () => {
        let req = await http.get('/v1/public/comics',{        
                params: {
                  ts: time,
                  apikey,
                  hash,        
                  limit: 100
                }
        });
        return req.data.data.results;
    }
}