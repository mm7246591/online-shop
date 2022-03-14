module.exports = {
    devServer: {
        //設定完成後重啟npm
        proxy: {
            "/api": {
                target: "http://localhost:3000/",
                ChangeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": "", //萬用字元
                },
            },
        },
    },
};