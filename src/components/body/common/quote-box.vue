<template>
	<div class="quote__box">
		<container-section-content>
			<template #heading>
				<h1 class="content__heading">
					{{ heading }}
				</h1>
			</template>
			<template #subheading>
				<h3 class="content__subheading">
					{{ quote }}
				</h3>
			</template>
		</container-section-content>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore from "@/store";

// Components
import ContainerSectionContent from "@/components/containers/section/container-section-content.vue";

export default defineComponent({
	name: "container-quote-box-component",
	components: {
		"container-section-content": ContainerSectionContent,
	},
	computed: {
		heading(): string {
			return this.storeCommon.getSectionCanvasHeading;
		},
		quote(): string {
			return this.storeCommon.getSectionCanvasQuote;
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>

<style lang="scss">
@use "@/styles/all/spacing";
@use "@/styles/all/colors";
@use "@/styles/all/borders";

.quote__box {
	//border: 2px solid green;
	padding: spacing.$padding_pixel_quote_box;
	background-color: colors.$theme-secondary-rgba;
	border-radius: borders.$radius-quote-box;

	.content__heading {
		//border: 2px solid red;
	}

	.content__subheading {
		padding: 10px;
	}
}
</style>
