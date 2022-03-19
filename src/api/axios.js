import axios from "axios";
//全域性配置
// axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.API_ROOT;
//攔截器
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// get
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });
}
// post
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then((res) => {
                console.log(res);
                resolve(res.data);
            })
            .catch((err) => {
                console.log(err.response);
                reject(err.data);
            });
    });
}