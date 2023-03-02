const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/main.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "dist",
	},
	devtool: "inline-source-map",
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
};
