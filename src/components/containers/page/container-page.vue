<template>
	<main class="page">
		<template v-if="canvasActive">
			<container-canvas-component @scroll-page-into-view="scrollPageIntoView" />
		</template>
		<template v-if="beInspiredActive">
			<be-inspired-component ref="beInspired" />
		</template>
		<template v-if="portfolioActive">
			<portfolio-component />
		</template>
		<template v-if="reviewsActive">
			<reviews-component />
		</template>
		<template v-if="processOfEliminationActive">
			<process-of-elimination-component />
		</template>
		<template v-if="latestNewsActive">
			<latest-news-component />
		</template>
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Utils
import { scrollToElement } from "@/utils/utils";

// Components
import ContainerCanvas from "@/components/containers/canvas/container-canvas.vue";
import BeInspired from "@/components/body/sections/be-inspired.vue";
import Portfolio from "@/components/body/sections/portfolio.vue";
import Reviews from "@/components/body/sections/reviews.vue";
import ProcessOfElimination from "@/components/body/sections/process-of-elimination.vue";
import LatestNews from "@/components/body/sections/latest-news.vue";

export default defineComponent({
	name: "container-page-component",
	components: {
		"container-canvas-component": ContainerCanvas,
		"be-inspired-component": BeInspired,
		"portfolio-component": Portfolio,
		"reviews-component": Reviews,
		"process-of-elimination-component": ProcessOfElimination,
		"latest-news-component": LatestNews,
	},
	props: {
		canvasActive: { type: Boolean, required: true },
		beInspiredActive: { type: Boolean, required: true },
		portfolioActive: { type: Boolean, required: true },
		reviewsActive: { type: Boolean, required: true },
		processOfEliminationActive: { type: Boolean, required: true },
		latestNewsActive: { type: Boolean, required: true },
	},
	methods: {
		scrollPageIntoView() {
			const beInspiredRef = this.$refs["beInspired"];
			scrollToElement(beInspiredRef);
		},
	},
});
</script>

<style scoped lang="scss">
.page {
	//border: 2px solid white;
	display: flex;
	flex-direction: column;
	z-index: 0;
}
</style>
