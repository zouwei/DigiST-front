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
				<template>
					<adaptation-img
					 class="step-img"
					 src="step-review-active.png"
					 alt="step-review"
					/>
				</template>
				<template>
					<adaptation-img
					 class="step-img"
					 src="step-publish-active.png"
					 alt="step-publish"
					/>
				</template>
			</div>
			<p class="tips color-error">*请填写并确认所有信息</p>
			<component :is="renderComponentName" />
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
			renderComponentName: "Publish"
		};
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
	line-height: rem(88);
	text-align: center;
	@include font-size(24);
}
</style>
