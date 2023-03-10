import { defineStore } from "pinia";

// About interface
import IAboutBaseData, { IAboutTextualData } from "@/interfaces/interface-about";

export const useAboutStore = defineStore("aboutStore", {
	state: (): IAboutBaseData => ({
		textualData: {
			canvas: {
				quoteBox: {
					heading: "",
					quote: "",
				},
			},
		},
	}),
	getters: {
		getTextualData: (state): IAboutTextualData => state.textualData,
	},
	actions: {
		setTextualData(data: any) {
			this.textualData = data;
		},
	},
});
