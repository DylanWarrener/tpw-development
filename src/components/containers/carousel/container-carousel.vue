<template>
	<section id="carousel" class="carousel">
		<div class="carousel_top">
			<container-select-component
				:dropdown-options="dropdownOptions"
				:dropdown-index="dropdownIndex"
				@dropdown-item-clicked="dropdownItemClicked"
			/>
		</div>
		<div id="carousel_slides" class="carousel_slides">
			<button class="slides before" @click="changeSlide" data-carousel-button="prev">
				<span class="icon material-icons">
					{{ iconBefore }}
				</span>
			</button>
			<ul id="slides_ul" class="slides_ul">
				<li class="slides_li" :key="index" :data-carousel-active="item.default" v-for="(item, index) in dropdownSelectedItem">
					<img class="slides_img" :src="dropdownSrc(item.src)" />
				</li>
			</ul>
			<button class="slides after" data-carousel-button="next" @click="changeSlide">
				<span class="icon material-icons">
					{{ iconAfter }}
				</span>
			</button>
			<div id="slides_btn" class="slides_navigate">
				<button
					class="btn"
					:key="index"
					:data-btn-active="item.default"
					v-for="(item, index) in dropdownSelectedItem"
					@click="changeSlide"
				></button>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Utils
import { getBackgroundImgSrc } from "@/utils/utils";

// Stores
import ParentStore from "@/store";

// Interfaces
import { INavigationPageTextualData } from "@/interfaces/common/interface-navigation";

// Components
import ContainerSelect from "@/components/containers/select/container-select.vue";

export default defineComponent({
	name: "carousel-container-component",
	components: {
		"container-select-component": ContainerSelect,
	},
	computed: {
		iconBefore(): string {
			return this.storeCommon.getTextualData.icons.prev;
		},
		iconAfter(): string {
			return this.storeCommon.getTextualData.icons.next;
		},
		pageNames(): INavigationPageTextualData {
			return this.storeCommon.getTextualData.navigation.text;
		},
		dropdownOptions(): any {
			return this.storeCommon.getTextualData.section.beInspired.carousel.dropdownOptions;
		},
		dropdownSelectedItem(): any {
			return this.dropdownSelected.images;
		},
		dropdownIndex(): number {
			return this.dropdownSelectedIndex;
		},
	},
	methods: {
		changeSlide(element: MouseEvent): void {
			const elementTarget = element.target as EventTarget as HTMLButtonElement;
			const targetsParentElement = elementTarget.parentElement as HTMLDivElement;
			const slidesUl = document.getElementById("slides_ul") as HTMLUListElement;
			const slidesUlChildren = slidesUl.children as HTMLCollection;

			const slidesDiv = document.getElementById("slides_btn") as HTMLDivElement;
			const slidesDivChildren = slidesDiv.children as HTMLCollection;

			const activeLiChild = slidesUl.querySelector(`[data-carousel-active=${true}]`) as HTMLLIElement;
			const activeLiChildIndex = [...slidesUlChildren].indexOf(activeLiChild);

			const activeBtnChild = slidesDivChildren[activeLiChildIndex] as HTMLButtonElement;
			const activeBtnChildIndex = [...slidesDivChildren].indexOf(activeBtnChild);

			switch (targetsParentElement.id) {
				case "carousel_slides": {
					const offset: any = elementTarget.dataset.carouselButton === "next" ? 1 : -1;
					let newIndex = [...slidesUlChildren].indexOf(activeLiChild) + offset;
					const selectedLiChild = slidesUlChildren[newIndex] as HTMLLIElement;
					const selectedBtnChild = slidesDivChildren[newIndex] as HTMLButtonElement;

					if (newIndex < 0) newIndex = slidesUlChildren.length - 1;
					if (newIndex >= slidesUlChildren.length) newIndex = 0;

					console.log("The active slide UL index is: ", activeLiChildIndex);
					console.log("The active slide DIV index is: ", activeBtnChildIndex);

					console.log("The new index is: ", newIndex);

					// Set the slides li dataset
					selectedLiChild.dataset.carouselActive = "true";
					activeLiChild.dataset.carouselActive = "false";

					// Set the slides btn dataset
					selectedBtnChild.dataset.btnActive = "true";
					activeBtnChild.dataset.btnActive = "false";
					break;
				}
				case "slides_btn": {
					const activeBtnChild = targetsParentElement.children[activeLiChildIndex] as HTMLButtonElement;

					let newIndex = [...targetsParentElement.children].indexOf(elementTarget);

					// Only run if the active slide is not the same as the target element
					if (activeLiChild !== slidesUlChildren[newIndex]) {
						const selectedLiChild = slidesUlChildren[newIndex] as HTMLLIElement;

						// Set the slides li dataset
						selectedLiChild.dataset.carouselActive = "true";
						activeLiChild.dataset.carouselActive = "false";

						// Set the slides btn dataset
						elementTarget.dataset.btnActive = "true";
						activeBtnChild.dataset.btnActive = "false";
					}
					break;
				}
			}
		},
		dropdownItemClicked(index: number, dropdownItem: any): void {
			this.dropdownSelected = dropdownItem;
			this.dropdownSelectedIndex = index;
		},
		dropdownSrc(imgName: string): string {
			const folderName = this.dropdownOptions[this.dropdownSelectedIndex].name;
			return getBackgroundImgSrc("html", "", folderName, imgName);
		},
	},
	data(): { dropdownSelected: any; dropdownSelectedIndex: number } {
		return {
			dropdownSelected: {},
			dropdownSelectedIndex: 0,
		};
	},
	setup() {
		const storeCommon = ParentStore();
		return { storeCommon };
	},
	created() {
		// Set dropdownSelected state equal to the first element in the dropdownOptions array
		this.dropdownSelected = this.dropdownOptions[this.dropdownSelectedIndex];
	},
});
</script>

<style scoped lang="scss">
@use "@/styles/all/colors";

.carousel {
	//border: 2px solid green;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.carousel_top {
		//border: 2px solid red;
		display: flex;
		margin-bottom: 10px;
		z-index: 1;
	}

	.carousel_slides {
		//border: 2px solid yellow;
		display: flex;
		width: 100%;
		height: 80vh;
		overflow: hidden;
		position: relative;
		z-index: 0;

		.before {
			left: 0;
			background: linear-gradient(90deg, rgba(142, 137, 141, 1) 0%, rgba(255, 255, 255, 0) 100%);
			transform: rotate(180deg);

			&:hover {
				background: linear-gradient(90deg, rgba(85, 82, 85, 1) 0%, rgba(255, 255, 255, 0) 100%);
			}
		}

		.slides {
			//border: 2px solid red;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 10px;
			position: absolute;
			width: 10%;
			height: 100%;
			top: 50%;
			transform: translateY(-50%);
			z-index: 1;
			cursor: pointer;
			border: none;

			&:hover {
				.icon {
					color: colors.$tint-accent-20-hex;
				}
			}

			.icon {
				//border: 2px solid red;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				color: colors.$shade-accent-20-hex;
				font-size: 32px;
				pointer-events: none;
			}
		}

		.slides_ul {
			//border: 2px solid purple;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			position: relative;

			.slides_li {
				//border: 2px solid green;
				position: absolute;
				width: 100%;
				height: 100%;
				opacity: 0;
				transition: all 0.3s ease-in-out;

				.slides_img {
					display: block;
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
				}
			}

			.slides_li[data-carousel-active="true"] {
				opacity: 1;
			}
		}

		.slides_navigate {
			//border: 2px solid red;
			display: flex;
			gap: 10px;
			position: absolute;
			top: 95%;
			left: 50%;
			transform: translateX(-50%);
			z-index: 1;

			.btn {
				border: none;
				background-color: colors.$theme_secondary_hex;
				width: 30px;
				height: 10px;
				transition: all 0.3s ease-in-out;

				&:hover {
					height: 20px;
				}
			}

			.btn[data-btn-active="true"] {
				height: 20px;
				background-color: colors.$shade-accent-20-hex;
			}
		}

		.after {
			right: 0;
			background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(142, 137, 141, 1) 100%);

			&:hover {
				background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(85, 82, 85, 1) 100%);
			}
		}
	}
}
</style>
