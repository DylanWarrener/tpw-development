<template>
	<section class="section_content">
		<slot name="heading">
			<div class="content_heading-container">
				<i class="before_line"></i>
				<h2 class="content_heading">{{ heading }}</h2>
				<i class="after_line"></i>
			</div>
		</slot>
		<slot name="subheading">
			<i class="content_subheading">{{ subheading }}</i>
		</slot>
		<slot name="content"></slot>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "container-section-component",
	props: {
		heading: { type: String, required: false },
		subheading: { type: String, required: false },
	},
});
</script>

<style lang="scss">
@use "@/styles/all/spacing";

.section_content {
	//border: 2px solid yellow;
	display: flex;
	flex-direction: column;
	padding: 10px;

	.content_heading-container {
		//border: 2px solid blue;
		display: flex;
		justify-content: center;
		align-items: center;

		.before_line {
			border: 1px solid white;
			flex: 1 0 auto;
		}

		.content_heading {
			//border: 2px solid yellow;
			flex: 0 0 auto;
			text-align: center;
			padding: 5px 10px;
			transition: all 0.3s ease-in-out;

			&:hover {
				flex: 1 0 auto;
			}
		}

		.after_line {
			border: 1px solid white;
			flex: 1 0 auto;
		}
	}

	.content_subheading {
		//border: 2px solid red;
		display: block;
		text-align: center;
		padding: 10px;
	}

	.content {
		//border: 2px solid blue;
		padding: 10px;
	}
}
</style>
