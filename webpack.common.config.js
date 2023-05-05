const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
	entry: {
		bundle: path.resolve(__dirname, "./src/main.ts"),
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "dist",
		clean: true,
	},
	module: {
		rules: [
			/* Deals with Vue files */
			{
				test: /\.vue$/,
				loader: "vue-loader",
				exclude: /node_modules/,
			},
			/* Deals with Typescript files */
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			/* Deals with JavaScript files */
			// this will apply to both plain `.js` files
			// AND `<script>` blocks in `.vue` files
			{
				test: /\.js$/,
				loader: "babel-loader",
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
				exclude: /node_modules/,
			},
			/* Deals with CSS import files */
			// this will apply to both plain `.css` files
			// AND `<style>` blocks in `.vue` files
			{
				test: /\.css$/i,
				use: ["vue-style-loader", "style-loader", "css-loader"],
			},
			/* Deals with SCSS import files (either using node-sass or dart-sass) */
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							// Prefer dart-sass
							implementation: require("sass"),
						},
					},
				],
			},
			/* Deals with font imports */
			/*
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
            */
			/* Deals with Image import files */
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".vue"],
	},
	plugins: [
		// Make sure to include the plugin
		new VueLoaderPlugin(),
	],
};
