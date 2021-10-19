import axios from 'axios';
axios.defaults.withCredentials = true;
export const methodType = {
    POST: 'post',
    PUT: 'put',
    GET: 'get',
    DELETE: 'delete',
};

const BASE_URL = process.env.BASE_URL || "http://localhost:3000/api";

export const requestApiWithBody = async ({ httpMethod, requestUrl, body, headers }) => {
    try {
        console.log(requestUrl);
        const res = await axios[httpMethod](BASE_URL + requestUrl, body, { headers });
        return res;
    } catch (error) {
        // location.href = '/';

        throw error.response;
    }
};

export const requestApi = async ({ httpMethod, requestUrl, headers }) => {
    console.log(BASE_URL);
    try {
        console.log(requestUrl);
        const res = await axios[httpMethod](
            BASE_URL + requestUrl,
            {
                headers,
                credentials: 'same-origin',
            },
            { withCredentials: true }
        );
        return res;
    } catch (error) {
        // location.href = '/';

        throw error.response;
    }
};
