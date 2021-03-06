import axios from "axios";
//全域性配置
// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = process.env.API_ROOT;
//攔截器
axios.interceptors.request.use(
    (config) => {
        if (localStorage.getItem("Authorization")) {
            config.headers["Authorization"] = JSON.parse(
                localStorage.getItem("Authorization")
            );
        }
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
        if (error.response.status === 401) {
            localStorage.removeItem("Authorization");
            localStorage.removeItem("User");
        }
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
                resolve(res);
            })
            .catch((err) => {
                const { message } = err.response.data;
                reject(message);
            });
    });
}