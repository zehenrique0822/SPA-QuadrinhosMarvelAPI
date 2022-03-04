import axios from 'axios';
import md5 from 'md5';

const http = axios.create({
    baseURL: 'http://gateway.marvel.com'
})

const apikey = '9c0264e74355a3dbb4ad363a1d70fcde';
const privateKey = '74cceade0af119f96660d4280cd9878345c23931';

const time = Number(new Date());
const hash = md5(time + privateKey + apikey);

// Requisições na API da Marvel com AXIOS
export const api = {
    getAllComics: async () => {
        let req = await http.get('/v1/public/comics', {
            params: {
                ts: time,
                apikey,
                hash,
                limit: 20
            }
        });
        let data;
        data = req.data.data.results.map((item: any) => {
            return { id: item.id, title: item.title, thumbnail: item.thumbnail, price: (item.prices[0].price === 0 ? 9.99 : item.prices[0].price), raro: false, amount: 0 }
        })
        return data;
    },
    getComic: async (id: string) => {
        let req = await http.get(`/v1/public/comics/${id}`, {
            params: {
                ts: time,
                apikey,
                hash,
            }
        });

        let data;
        data = req.data.data.results.map((item: any) => {
            return { id: item.id, title: item.title, thumbnail: item.thumbnail, price: (item.prices[0].price === 0 ? 9.99 : item.prices[0].price), raro: false, amount: 0 }
        })
        return data;
    }
}