<template>
	<base-container>
		<base-header
		 slot="header"
		 title="募资详情"
		 :back="true"
		/>
		<template slot="content">
			<div class="step-container">
				<adaptation-img
				 class="step-img"
				 src="step-submit-active.png"
				 alt="step-submit"
				/>
				<adaptation-img
				 class="step-img"
				 :src="`step-review${renderComponentName === 'Review' ? '-active' : ''}.png`"
				 alt="step-review"
				/>
				<adaptation-img
				 class="step-img"
				 :src="`step-publish${renderComponentName === 'Publish' ? '-active' : ''}.png`"
				 alt="step-publish"
				/>
			</div>
			<p class="tips under-review">
				<adaptation-img
				 class="coffee-img"
				 src="coffee.png"
				 alt="step-submit"
				/>
				<span>您的项目正在审核中，请耐心等候…</span>
			</p>
			<component
			 :is="renderComponentName"
			 @change-step="changeStep"
			/>
		</template>
	</base-container>
</template>

<script>
import SubmitInfo from "./SubmitInfo";
import Review from "./Review";
import Publish from "./Publish";

export default {
	name: "FundraisingStart",

	components: {
		SubmitInfo,
		Review,
		Publish
	},

	data() {
		return {
			renderComponentName: "Review"
		};
	},

	methods: {
		changeStep(stepName) {
			this.renderComponentName = stepName;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "~style";

.step-container {
	padding: rem(30);
	text-align: center;
	background-color: #fff;
}
.step-img {
	width: rem(191);
	height: rem(60);
}
.tips {
	display: flex;
	justify-content: center;
	align-items: center;
	height: rem(88);
	@include font-size(24);
	&.under-review {
		height: rem(180);
		color: #2B7CD6;
	}
	&.pass-review {
		color: #019D50;
	}
	&.fail-review {
		color: #FA2400;
	}
}
.coffee-img {
	width: rem(56);
	height: rem(56);
	margin-right: rem(20);
}
</style>
