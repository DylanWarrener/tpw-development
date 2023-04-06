<template>
	<div ref="dropdown" class="dropdown" @click="toggleDropdown">
		<button class="dropdown_btn">
			{{ btnTextDropdownName }}
		</button>
		<span class="dropdown_icon material-icons" :style="spinIcon">
			{{ icon }}
		</span>
		<div ref="dropdownMenu" class="dropdown_menu">
			<ul class="dropdown_menu-ul">
				<li
					class="dropdown_menu-li"
					:key="index"
					:value="item.name"
					v-for="(item, index) in dropdownOptions"
					@click="changeCarouselDataset(index, item.name)"
				>
					{{ item.name }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import ParentStore from "@/store";

export default defineComponent({
	name: "container-select-component",
	props: ["dropdownOptions", "dropdownIndex"],
	computed: {
		icon(): string {
			return this.storeCommon.getTextualData.icons.expand;
		},
		spinIcon(): string {
			return `transform: rotate(${this.iconRotation}deg);`;
		},
		btnTextDropdownName(): string {
			return this.btnTextDropdown;
		},
	},
	methods: {
		toggleDropdown(): void {
			const dropdownMenu: any = this.$refs["dropdownMenu"];
			const dropdownMenuClassList: any = dropdownMenu.classList;

			dropdownMenuClassList.toggle("active");
			Object.values(dropdownMenuClassList).includes("active") ? (this.iconRotation = 180) : (this.iconRotation = 0);
		},
		changeCarouselDataset(index: number, name: string): void {
			this.btnTextDropdown = name;
			this.$emit("dropdownItemClicked", index, this.dropdownOptions[index]);
		},
		handleClick(event: any): void {
			const dropdown: any = this.$refs["dropdown"];
			const dropdownMenu: any = this.$refs["dropdownMenu"];
			const dropdownMenuClassList: any = dropdownMenu?.classList;

			//console.log("The dropdownMenu classList: ", Object.values(dropdownMenuClassList));

			// Ignore a click, if it is on the dropdown
			if (event.target === dropdown) {
				return;
			} else {
				// Check to see if active class exists in dropdownMenu classList
				if (Object.values(dropdownMenuClassList).includes("active")) {
					dropdownMenuClassList.remove("active");
					this.iconRotation = 0;
				}
			}
		},
	},
	data: (): { iconRotation: number; btnTextDropdown: string } => ({
		iconRotation: 0,
		btnTextDropdown: "",
	}),
	setup() {
		const storeCommon = ParentStore();
		return { storeCommon };
	},
	created() {
		document.addEventListener("click", this.handleClick);
		this.btnTextDropdown = this.dropdownOptions[this.dropdownIndex].name;
	},
});
</script>

<style scoped lang="scss">
@use "@/styles/all/colors";
@use "@/styles/defaults";
@use "@/styles/all/transitions";
@use "@/styles/all/backgrounds";
@use "@/styles/all/spacing";
@use "@/styles/all/borders";

.dropdown {
	//border: 2px solid green;
	position: relative;
	display: flex;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	.dropdown_btn {
		border: none;
		padding: 5px 5px 5px 0;
		pointer-events: none;
	}

	.dropdown_icon {
		//border: 2px solid orange;
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		transition: transform 0.2s ease-in-out;
	}

	.dropdown_menu {
		//border: 2px solid red;
		position: absolute;
		left: 0;
		top: calc(100% + 0.25rem);
		background-color: colors.$theme_secondary_hex;
		border: 2px solid white;
		padding: 10px;
		opacity: 0;
		transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
		transform: translateY(-10px);
		pointer-events: none;

		&.active {
			opacity: 1;
			transform: translateY(0);
			pointer-events: auto;
		}

		.dropdown_menu-ul {
			//border: 2px solid white;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			gap: 10px;
			.dropdown_menu-li {
				//border: 2px solid green;
				cursor: pointer;
				transition: all 0.3s ease-in-out;
				position: relative;

				&:hover {
					color: colors.$tint_accent_20_hex;

					&::after {
						width: 100%;
					}
				}

				&::after {
					content: "";
					display: block;
					position: absolute;
					width: 0%;
					left: 50%;
					transform: translateX(-50%);
					background: backgrounds.$background-color-dark-nav-links-bottom;
					height: spacing.$height_pixel_nav_bottom;
					transition: all 0.3s ease-in-out;
				}
			}
		}
	}
}
</style>
