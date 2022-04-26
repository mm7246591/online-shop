module.exports = {
    devServer: {
        //設定完成後重啟npm
        proxy: {
            "/api": {
                target: "https://online-shop-yan.herokuapp.com/",
                pathRewrite: {
                    "^/api": "", //萬用字元
                },
                ChangeOrigin: true,
                ws: true,
            },
        },
    },
};