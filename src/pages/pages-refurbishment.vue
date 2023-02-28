<template>
	<container-page-component
		:canvas-active="canvasActive"
		:be-inspired-active="beInspiredActive"
		:portfolio-active="portfolioActive"
		:reviews-active="reviewsActive"
		:process-of-elimination-active="processOfEliminationActive"
		:latest-news-active="latestNewsActive"
	/>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import ParentStore, { childStores } from "@/store";

// Components
import ContainerPage from "@/components/containers/page/container-page.vue";

export default defineComponent({
	name: "refurbishment-page-component",
	components: {
		"container-page-component": ContainerPage,
	},
	computed: {
		// Get page section state
		canvasActive(): boolean {
			return this.storeCommon.getSectionCanvasActive;
		},
		beInspiredActive(): boolean {
			return this.storeCommon.getSectionBeInspiredActive;
		},
		portfolioActive(): boolean {
			return this.storeCommon.getSectionPortfolioActive;
		},
		reviewsActive(): boolean {
			return this.storeCommon.getSectionReviewsActive;
		},
		processOfEliminationActive(): boolean {
			return this.storeCommon.getSectionProcessOfEliminationActive;
		},
		latestNewsActive(): boolean {
			return this.storeCommon.getSectionLatestNewsActive;
		},

		// Get page textual state
		canvasHeading(): string {
			return this.storeRefurbishment.getTextualData.canvas.quoteBox.heading;
		},
		canvasQuote(): string {
			return this.storeRefurbishment.getTextualData.canvas.quoteBox.quote;
		},
		canvasBtnText(): string {
			return this.storeCommon.getTextualData.section.canvas.quoteBox.btnText;
		},
	},
	setup() {
		const storeCommon = ParentStore();
		const storeRefurbishment = childStores.useRefurbishmentStore();
		return { storeCommon, storeRefurbishment };
	},
	async created() {
		// Get firestore refurbishment document
		const refurbishmentTextualData = await this.storeCommon.getFirestoreDocument("refurbishment");

		// Store refurbishment document data locally
		this.storeRefurbishment.setTextualData(refurbishmentTextualData);

		// Set the page sections state
		this.storeCommon.setSectionCanvasActive(true);
		this.storeCommon.setSectionBeInspiredActive(true);
		this.storeCommon.setSectionPortfolioActive(true);
		this.storeCommon.setSectionReviewsActive(false);
		this.storeCommon.setSectionProcessOfEliminationActive(false);
		this.storeCommon.setSectionLatestNewsActive(false);

		// Set page textual state
		this.storeCommon.setSectionCanvasHeading(this.canvasHeading);
		this.storeCommon.setSectionCanvasQuote(this.canvasQuote);
		this.storeCommon.setSectionCanvasBtnText(this.canvasBtnText);
	},
});
</script>
