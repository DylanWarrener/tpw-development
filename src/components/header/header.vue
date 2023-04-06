<template>
	<header id="header">
		<cookies-component v-if="isCookiesActive" />
		<updates-component v-if="isUpdatesActive" />
		<nav-component />
		<button-component class="btn" :style="btnStyle" @click="toggleNavTransform">
			<template #icon>
				<span class="btn_icon material-icons" :style="spinIcon">
					{{ Icon }}
				</span>
			</template>
		</button-component>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Cookies from "@/components/header/cookies.vue";
import Updates from "@/components/header/updates.vue";
import HeaderNavMenu from "@/components/header/navigation/header-nav-menu.vue";
import Button from "@/components/containers/buttons/button.vue";

// Stores
import parentStore, { childStores } from "@/store";

export default defineComponent({
	name: "header-component",
	components: {
		"cookies-component": Cookies,
		"updates-component": Updates,
		"nav-component": HeaderNavMenu,
		"button-component": Button,
	},
	computed: {
		Icon(): string {
			return this.storeHeader.getTextualData.icons.dropdown;
		},
		navStatus(): string {
			return this.storeHeader.getNavStatus;
		},
		isCookiesActive(): boolean {
			return this.storeHeader.getIsCookiesActive;
		},
		isUpdatesActive(): boolean {
			return this.storeHeader.getIsUpdatesActive;
		},
		isNavHidden(): boolean {
			return this.isNavHidden;
		},
		navDropdownBtnOpacity(): string {
			return this.navStatus === "closed" ? "opacity: 1" : "opacity: 0";
		},
		spinIcon(): string {
			return this.isNavHidden ? "transform: rotateX(0deg)" : "transform: rotateX(180deg)";
		},
		btnStyle(): string {
			return this.btnTransform + ";" + this.navDropdownBtnOpacity;
		},
	},
	methods: {
		// Check current screen width to set necessary states
		checkCurrentScreenWidth(): void {
			if (window.innerWidth <= 1264) {
				this.storeHeader.setSmallScreenSize(true);
				this.storeHeader.setNavOrientation("vertical");
			} else {
				this.storeHeader.setSmallScreenSize(false);
				this.storeHeader.setNavOrientation("horizontal");
				this.storeHeader.setNavStatus("closed");
				this.storeHeader.setIsBurgerMenuActive(false);
			}
		},
		toggleNavTransform(): void {
			this.storeHeader.setIsNavHidden(!this.isNavHidden);
			if (this.isNavHidden) this.btnTransform = "top: 0";
			else this.btnTransform = "top: 12vh";
		},
		checkScrollPosition(): void {
			if (window.scrollY >= window.innerHeight - 150 && this.navStatus === "closed") this.btnTransform = "top: 0";

			if (window.scrollY < window.innerHeight - 150 && this.navStatus === "open") this.btnTransform = "top: 12vh";
		},
	},
	data(): { btnTransform: string } {
		return {
			btnTransform: "",
		};
	},
	setup() {
		const storeCommon = parentStore();
		const storeHeader = childStores.useHeaderStore();
		return { storeCommon, storeHeader };
	},
	async created() {
		// Get firestore header document
		const headerTextualData = await this.storeCommon.getFirestoreDocument("header");

		// Store textual data
		this.storeHeader.setTextualData(headerTextualData);

		// Setup an event listener for the screen width
		window.addEventListener("resize", this.checkCurrentScreenWidth);
		window.addEventListener("scroll", this.checkScrollPosition);
		this.checkScrollPosition();

		// Set the header state for cookies and updates
		this.storeHeader.setIsCookiesActive(false);
		this.storeHeader.setIsUpdatesActive(false);
	},
	mounted() {
		this.checkCurrentScreenWidth();
	},
});
</script>

<style scoped lang="scss">
@use "@/styles/all/colors";
@use "@/styles/all/spacing";
@use "@/styles/all/borders";
@use "@/styles/all/position";
@use "@/styles/all/transitions";
@use "@/styles/all/transform";

#header {
	display: flex;
	flex-direction: column;
	position: fixed;
	width: spacing.$width_percentage_fill_parent;
	z-index: 1;

	.btn {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		width: spacing.$width_pixel_nav_dropdown_btn;
		height: spacing.$height_pixel_nav_dropdown_btn;
		background-color: colors.$tint-accent-20-rgb;
		border-radius: borders.$radius_nav_dropdown_btn;
		z-index: -1;
		top: spacing.$height_viewport_nav;
		right: position.$right_nav_dropdown_btn;
		position: absolute;
		border: none;
		transition: transitions.$global;

		.btn_icon {
			transition: transitions.$transform_btn_nav_dropdown;
			transform: transform.$rotate_btn_nav_dropdown;
		}
	}
}
</style>
