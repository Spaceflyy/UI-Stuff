const path = require("path");
// eslint-disable-next-line import/no-unresolved
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",

	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Development",
		}),
	],
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "imgs/[name][ext][query]",
		clean: true,
	},
	// optimization: {
	// 	runtimeChunk: "single",
	// },
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};
