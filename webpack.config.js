const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "jopit",
        projectName: "web-toolkit",
        webpackConfigEnv,
        argv,
    });

    return merge(defaultConfig, {
        devServer: {
            port: 9696
        }
    });
};
