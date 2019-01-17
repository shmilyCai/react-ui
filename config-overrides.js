const { addBabelPlugin } = require('customize-cra');

//按需加载配置
function override(config, env) {
    return config;
};
module.exports = override(addBabelPlugin(["import", {
    "libraryName": "antd",
    "libraryDirectory": "es",
    "style": "css"
}]));