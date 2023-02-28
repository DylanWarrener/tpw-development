import { RouteRecordName } from "vue-router";

// Returning functions
export const getBackgroundImgSrc = (
	target?: string,
	routeName?: RouteRecordName | string,
	folderName?: string,
	imgName?: string
): string => {
	let retVal = "";

	switch (target) {
		case "html": {
			retVal = require(`@/assets/static/jpg/${String(folderName).toLowerCase()}/${imgName}.jpg`);
			break;
		}
		case "css":
			retVal = `url(${require("@/assets/static/jpg/" +
				String(routeName).toLowerCase() +
				"/" +
				String(routeName).toLowerCase() +
				".jpg")})`;
			break;
	}

	return retVal;
};

// Void functions
export const scrollToElement = (ref: any): void => {
	ref.$el.scrollIntoView({
		behavior: "smooth",
	});
};
