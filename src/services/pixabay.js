import axios from 'axios';

const PIXABAY_API_URL = 'https://pixabay.com/api/';
const API_KEY = '40188796-142b3a6aed6b1a3d407973769';
const AXIOS_CLIENT = axios.create({
    baseURL: PIXABAY_API_URL,
    params: {
        key: API_KEY,
    },
});

export const searchImages = async (query, page) => {
    const response = await AXIOS_CLIENT.get('', {
        params: {
            q: query,
            image_type: 'photo',
            page: page,
            per_page: 12,
            orientation: 'horizontal',
        },
    }); 
    const return_data = {
        hits: response.data.hits.map(({ id, webformatURL, tags, largeImageURL }) => ({ id, webformatURL, tags, largeImageURL })),
        canLoadMore: response.data.totalHits > page * 12,
    }
    return return_data;
}
