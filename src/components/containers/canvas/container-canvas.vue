<template>
	<div class="canvas" :style="background">
		<quote-box-component></quote-box-component>
		<button-container-component :btn-text="btnText" @click="emitScroll">
			<template #icon>
				<span class="btn_icon material-icons">
					{{ btnIcon }}
				</span>
			</template>
		</button-container-component>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Utils
import { getBackgroundImgSrc } from "@/utils/utils";

// Stores
import parentStore from "@/store";

// Components
import QuoteBox from "@/components/body/common/quote-box.vue";
import BtnContainer from "@/components/containers/buttons/button.vue";

export default defineComponent({
	name: "container-canvas-component",
	components: {
		"quote-box-component": QuoteBox,
		"button-container-component": BtnContainer,
	},
	computed: {
		btnText(): string {
			return this.storeCommon.getSectionCanvasBtnText;
		},
		btnIcon(): string {
			return this.storeCommon.getTextualData.icons.navigate;
		},
		background(): string {
			//const color = "";
			const image = getBackgroundImgSrc("css", this.$route.name!);
			const position = "center";
			const size = "cover";
			//const repeat = "no-repeat";
			//const origin = "center";
			//const clip = "";
			//const attachment = "";
			//console.log("The name of the route is: ", image);

			return `background: ${image} ${position} / ${size}`;
		},
	},
	methods: {
		emitScroll(): void {
			this.$emit("scrollPageIntoView");
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>

<style scoped lang="scss">
@use "@/styles/all/spacing";
@use "@/styles/all/transitions";

.canvas {
	//border: 2px solid blue;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: spacing.$gap_pixel_canvas_elements;
	position: relative;
	height: spacing.$height_viewport_canvas;
	padding: spacing.$padding_percentage_canvas;
}
</style>
