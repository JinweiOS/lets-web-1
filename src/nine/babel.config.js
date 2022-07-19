const presets = [["@babel/preset-env", {
    // 此配置项的值可以配置为 entry/usage
    // entry: 注入目标环境不支持的所有 built-in 类型语法
    // usage: 注入目标环境不支持的所有被用到的 built-in 类型语法
    useBuiltIns: 'usage',
    // built-in 需要 corejs 的支持。corejs3 支持对象的实例方法
    corejs: 3
}]]
// const presets = ["@vue/babel-preset-app"]

const plugins = [["@babel/plugin-proposal-decorators", { "version": "2021-12" }], "@babel/plugin-proposal-class-properties"]
// {
//     "plugins": [

//       ["@babel/plugin-proposal-decorators", { "legacy": true }]
//     ]
//   }

module.exports = {
    presets: presets,
    plugins: plugins
}

