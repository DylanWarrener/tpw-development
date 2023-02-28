<template>
	<div class="be_inspired">
		<container-section-component :heading="beInspiredHeading" :subheading="beInspiredSubheading">
			<template #content>
				<carousel-container-component></carousel-container-component>
			</template>
		</container-section-component>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore from "@/store";

// Components
import ContainerSectionContent from "@/components/containers/section/container-section-content.vue";
import CarouselContainer from "@/components/containers/carousel/container-carousel.vue";

export default defineComponent({
	name: "be-inspired-component",
	components: {
		"container-section-component": ContainerSectionContent,
		"carousel-container-component": CarouselContainer,
	},
	computed: {
		// Get textual data
		beInspiredHeading(): string {
			return this.storeCommon.getTextualData.section.beInspired.carousel.text.heading;
		},
		beInspiredSubheading(): string {
			return this.storeCommon.getTextualData.section.beInspired.carousel.text.subheading;
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>

<style scoped lang="scss">
@use "@/styles/all/colors";

.be_inspired {
	//border: 2px solid red;
	background-color: colors.$theme-secondary-hex;
}
</style>
