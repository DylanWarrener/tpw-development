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
	name: "news-page-component",
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
	},
	setup() {
		const storeCommon = ParentStore();
		const storeNews = childStores.useNewsStore();
		return { storeCommon, storeNews };
	},
	async created() {
		// Get firestore news document
		const newsTextualData = await this.storeCommon.getFirestoreDocument("news");

		// Store about document data locally
		this.storeNews.setTextualData(newsTextualData);

		// Set the page sections state
		this.storeCommon.setSectionCanvasActive(true);
		this.storeCommon.setSectionBeInspiredActive(false);
		this.storeCommon.setSectionPortfolioActive(false);
		this.storeCommon.setSectionReviewsActive(false);
		this.storeCommon.setSectionProcessOfEliminationActive(false);
		this.storeCommon.setSectionLatestNewsActive(true);
	},
});
</script>
