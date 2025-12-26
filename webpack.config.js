// noinspection WebpackConfigHighlighting

const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "@jopitnow/web-toolkit",
        libraryTarget: "umd",
        globalObject: "this"
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    mode: "development"
};
