import { defineStore } from "pinia";
import { getDoc, doc } from "firebase/firestore";

// Firebase collection
import FirestoreDB from "@/database/index";

// All stores
import { useHeaderStore } from "@/stores/stores-header";
import { useHomeStore } from "@/stores/stores-home";
import { useKitchenStore } from "@/stores/stores-kitchen";
import { useBathroomStore } from "@/stores/stores-bathroom";
import { useNewbuildStore } from "@/stores/stores-newbuild";
import { useExtensionStore } from "@/stores/stores-extension";
import { useRefurbishmentStore } from "@/stores/stores-refurbishment";
import { useContactStore } from "@/stores/stores-contact";
import { useAboutStore } from "@/stores/stores-about";
import { useNewsStore } from "@/stores/stores-news";
import { useFooterStore } from "@/stores/stores-footer";
import { useErrorStore } from "@/stores/stores-error";

// Common interface
import IBaseData, { ICommonTextualData } from "@/interfaces/common/interface-common";

// Main store
const parentStore = defineStore("commonStore", {
	state: (): IBaseData => {
		return {
			// Textual data
			textualData: {
				icons: {
					navigate: "navigate_next",
					expand: "expand_more",
					next: "arrow_forward_ios",
					prev: "arrow_back_ios",
				},
				logo: {
					text: {
						alt: {
							tpwLogo: "TPW Logo",
						},
					},
				},
				navigation: {
					icons: {
						menu: "menu",
						person: "person",
						shoppingBasket: "shopping_basket",
					},
					links: {
						home: "/",
						kitchen: "/kitchens",
						bathroom: "/bathrooms",
						extension: "/extensions",
						refurbishment: "/refurbishments",
						newbuild: "/newbuilds",
						contact: "/contact",
						about: "/about",
					},
					text: {
						home: "home",
						kitchen: "kitchens",
						bathroom: "bathrooms",
						extension: "extensions",
						refurbishment: "refurbishments",
						newbuild: "newbuilds",
						contact: "contact",
						about: "about",
					},
				},
				section: {
					canvas: {
						quoteBox: {
							btnText: "Be Inspired?",
						},
					},
					beInspired: {
						carousel: {
							dropdownOptions: [
								{
									name: "Kitchens",
									images: [
										{ default: true, src: "ascot-light-gret-dust" },
										{ default: false, src: "cambridge-fir-green" },
										{ default: false, src: "cartmel-mussel" },
										{ default: false, src: "grantham-chalkstone-fir-green" },
										{ default: false, src: "linear-white-halifax-oak" },
										{ default: false, src: "lucente-gloss-cream" },
										{ default: false, src: "newmarket-indigo-blue" },
										{ default: false, src: "oxford-white" },
										{ default: false, src: "stratto-dust-grey" },
										{ default: false, src: "vivo-pto-onyx-grey" },
									],
								},
								{
									name: "Bathrooms",
									images: [
										{ default: true, src: "ascot-light-gret-dust" },
										{ default: false, src: "cambridge-fir-green" },
										{ default: false, src: "cartmel-mussel" },
										{ default: false, src: "grantham-chalkstone-fir-green" },
										{ default: false, src: "linear-white-halifax-oak" },
										{ default: false, src: "lucente-gloss-cream" },
										{ default: false, src: "newmarket-indigo-blue" },
										{ default: false, src: "oxford-white" },
										{ default: false, src: "stratto-dust-grey" },
										{ default: false, src: "vivo-pto-onyx-grey" },
									],
								},
								{
									name: "Extensions",
									images: [
										{ default: true, src: "ascot-light-gret-dust" },
										{ default: false, src: "cambridge-fir-green" },
										{ default: false, src: "cartmel-mussel" },
										{ default: false, src: "grantham-chalkstone-fir-green" },
										{ default: false, src: "linear-white-halifax-oak" },
										{ default: false, src: "lucente-gloss-cream" },
										{ default: false, src: "newmarket-indigo-blue" },
										{ default: false, src: "oxford-white" },
										{ default: false, src: "stratto-dust-grey" },
										{ default: false, src: "vivo-pto-onyx-grey" },
									],
								},
								{
									name: "Refurbishments",
									images: [
										{ default: true, src: "ascot-light-gret-dust" },
										{ default: false, src: "cambridge-fir-green" },
										{ default: false, src: "cartmel-mussel" },
										{ default: false, src: "grantham-chalkstone-fir-green" },
										{ default: false, src: "linear-white-halifax-oak" },
										{ default: false, src: "lucente-gloss-cream" },
										{ default: false, src: "newmarket-indigo-blue" },
										{ default: false, src: "oxford-white" },
										{ default: false, src: "stratto-dust-grey" },
										{ default: false, src: "vivo-pto-onyx-grey" },
									],
								},
								{
									name: "Newbuilds",
									images: [
										{ default: true, src: "ascot-light-gret-dust" },
										{ default: false, src: "cambridge-fir-green" },
										{ default: false, src: "cartmel-mussel" },
										{ default: false, src: "grantham-chalkstone-fir-green" },
										{ default: false, src: "linear-white-halifax-oak" },
										{ default: false, src: "lucente-gloss-cream" },
										{ default: false, src: "newmarket-indigo-blue" },
										{ default: false, src: "oxford-white" },
										{ default: false, src: "stratto-dust-grey" },
										{ default: false, src: "vivo-pto-onyx-grey" },
									],
								},
							],
							text: {
								heading: "Be Inspired",
								subheading: "Browse through our most popular options.",
								dropdownBtn: "Change canvas images",
							},
							altText: {},
						},
					},
					portfolio: {
						heading: "Portfolio",
						subheading: "",
					},
					reviews: {
						heading: "Reivews",
						subheading: "",
					},
					processOfElimination: {
						heading: "Process of Elimination",
						subheading: "",
					},
					latestNews: {
						heading: "Latest news",
						subheading: "",
					},
				},
			},

			// Canvas
			sectionCanvasActive: true,
			sectionCanvasHeading: "",
			sectionCanvasQuote: "",
			sectionCanvasBtnText: "",

			// Be inspired
			sectionBeInspiredActive: true,

			// Portfolio
			sectionPortfolioActive: true,

			// Reviews
			sectionReviewsActive: true,

			// Process of elimination
			sectionProcessOfEliminationActive: true,

			// Latest news
			sectionLatestNewsActive: true,

			// General
			isDarkThemeActive: true,
		};
	},
	getters: {
		// Textual data
		getTextualData: (state): ICommonTextualData => state.textualData,

		// Canvas
		getSectionCanvasActive: (state): boolean => state.sectionCanvasActive,
		getSectionCanvasHeading: (state): string => state.sectionCanvasHeading,
		getSectionCanvasQuote: (state): string => state.sectionCanvasQuote,
		getSectionCanvasBtnText: (state): string => state.sectionCanvasBtnText,

		// Be inspired
		getSectionBeInspiredActive: (state): boolean => state.sectionBeInspiredActive,

		// Portfolio
		getSectionPortfolioActive: (state): boolean => state.sectionPortfolioActive,

		// Reviews
		getSectionReviewsActive: (state): boolean => state.sectionReviewsActive,

		// Process of elimination
		getSectionProcessOfEliminationActive: (state): boolean => state.sectionProcessOfEliminationActive,

		// Latest news
		getSectionLatestNewsActive: (state): boolean => state.sectionLatestNewsActive,

		// General
		getSiteTheme: (state): boolean => state.isDarkThemeActive,
		getTextTheme: (state): string => (state.isDarkThemeActive ? "light-text" : "dark-text"),
	},
	actions: {
		async getFirestoreDocument(documentName: string) {
			const documentRef = doc(FirestoreDB, "textualData", documentName);
			const documentData = await getDoc(documentRef).then((snapshot) => {
				if (snapshot.exists()) return snapshot.data();
				else return `Error while loading ${documentName} document`;
			});
			return documentData;
		},
		setTextualData(data: any): void {
			this.textualData = data;
		},

		// Canvas
		setSectionCanvasActive(data: boolean): void {
			this.sectionCanvasActive = data;
		},
		setSectionCanvasHeading(data: string): void {
			this.sectionCanvasHeading = data;
		},
		setSectionCanvasQuote(data: string): void {
			this.sectionCanvasQuote = data;
		},
		setSectionCanvasBtnText(data: string): void {
			this.sectionCanvasBtnText = data;
		},

		// Be inspired
		setSectionBeInspiredActive(data: boolean): void {
			this.sectionBeInspiredActive = data;
		},

		// Portfolio
		setSectionPortfolioActive(data: boolean): void {
			this.sectionPortfolioActive = data;
		},

		// Reviews
		setSectionReviewsActive(data: boolean): void {
			this.sectionReviewsActive = data;
		},

		// Process of elimination
		setSectionProcessOfEliminationActive(data: boolean): void {
			this.sectionProcessOfEliminationActive = data;
		},

		// Latest news
		setSectionLatestNewsActive(data: boolean): void {
			this.sectionLatestNewsActive = data;
		},

		// General
		setSiteTheme(data: boolean): void {
			this.isDarkThemeActive = data;
		},
	},
});

// Other stores
export const childStores = {
	useHeaderStore,
	useHomeStore,
	useKitchenStore,
	useBathroomStore,
	useNewbuildStore,
	useExtensionStore,
	useRefurbishmentStore,
	useContactStore,
	useAboutStore,
	useNewsStore,
	useFooterStore,
	useErrorStore,
};

export default parentStore;
