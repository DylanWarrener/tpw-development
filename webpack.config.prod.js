const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./src/main.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	devtool: "none",
	module: {
		rules: [
			/* Deal with Typescript files */
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			/* Deal with Vue files */
			{},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	plugins: [new CleanPlugin().CleanWebpackPlugin()],
};
