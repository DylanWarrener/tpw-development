<template>
	<div id="container">
		<header-component />
		<router-view ref="body" />
		<footer-component @scroll-to-top="scrollToTop" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Utils
import { scrollToElement } from "./utils/utils";

// Stores
import parentStore from "@/store";

// Components
import Header from "@/components/header/header.vue";
import Footer from "@/components/footer/footer.vue";

export default defineComponent({
	name: "app-component",
	components: {
		"header-component": Header,
		"footer-component": Footer,
	},
	methods: {
		scrollToTop(): void {
			const bodyRef = this.$refs["body"];
			scrollToElement(bodyRef);
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
	async beforeCreate() {
		// Get common firestore document
		//const commonTextualData: any = await this.storeCommon.getFirestoreDocument("common");
		// Store document in local state
		//this.storeCommon.setTextualData(commonTextualData);
	},
});
</script>

<style lang="scss">
// Built-In scss modules
@use "sass:meta";

// Custom modules
@use "@/styles/defaults";
@use "@/styles/functions";
@use "@/styles/all/typeography";
@use "@/styles/all/colors";

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: typeography.$font-family-primary;
	color: colors.$color-dark-text;
}

html {
	font-size: defaults.$html;
}

body > *,
button {
	font-size: typeography.$font-size-base;
	cursor: default;
}

p {
	line-height: meta.call(
		meta.get-function($name: font-size-pow, $css: false, $module: "functions"),
		typeography.$font-size-base,
		typeography.$font-size-golden-ratio,
		1
	);
}

h1 {
	font-size: meta.call(
		meta.get-function($name: font-size-pow, $css: false, $module: "functions"),
		typeography.$font-size-base,
		typeography.$font-size-golden-ratio,
		3
	);
	text-transform: typeography.$font-transform-h1;
	font-weight: typeography.$font-weight-h1;
}

h2 {
	font-size: meta.call(
		meta.get-function($name: font-size-pow, $css: false, $module: "functions"),
		typeography.$font-size-base,
		typeography.$font-size-golden-ratio,
		2
	);
	text-transform: typeography.$font-transform-h2;
	font-weight: typeography.$font-weight-h2;
	font-variant: typeography.$font-variant-h2;
}

h3 {
	font-size: meta.call(
		meta.get-function($name: font-size-pow, $css: false, $module: "functions"),
		typeography.$font-size-base,
		typeography.$font-size-golden-ratio,
		1
	);
	text-transform: typeography.$font-transform-h3;
	font-weight: typeography.$font-weight-h3;
	font-style: typeography.$font-style-h3;
}

h4 {
	font-size: meta.call(
		meta.get-function($name: font-size-pow, $css: false, $module: "functions"),
		typeography.$font-size-base,
		typeography.$font-size-golden-ratio,
		1
	);
}

ul {
	list-style-type: none;
}

a {
	text-decoration: none;
}

button {
	background: transparent;
}

a,
button,
select {
	cursor: pointer;
}

#container {
	//border: 2px solid black;
	display: flex;
	flex-direction: column;
}

// For screen sizes: <= xsmall
@media only screen and (max-width: defaults.$extra-small) {
	body > *,
	button {
		font-size: typeography.$font-size-mobile-base;
	}

	h1 {
		font-size: meta.call(
			meta.get-function($name: font-size-pow, $css: false, $module: "functions"),
			typeography.$font-size-mobile-base,
			typeography.$font-size-golden-ratio,
			3
		);
	}

	h2 {
		font-size: meta.call(
			meta.get-function($name: font-size-pow, $css: false, $module: "functions"),
			typeography.$font-size-mobile-base,
			typeography.$font-size-golden-ratio,
			2
		);
	}

	h3 {
		font-size: meta.call(
			meta.get-function($name: font-size-pow, $css: false, $module: "functions"),
			typeography.$font-size-mobile-base,
			typeography.$font-size-golden-ratio,
			1
		);
	}
}
</style>
