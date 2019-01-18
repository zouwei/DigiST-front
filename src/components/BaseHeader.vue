<template>
	<header class="base-header-container">
		<slot name="top" />
		<div
		 v-if="isNeedCenter"
		 class="base-header-center"
		>
			<adaptation-img
			 v-if="back"
			 class="header-back"
			 src="back.png"
			 alt="back"
			 @click.native="$router.go(-1)"
			/>
			<em v-else />
			<span class="header-title">{{title}}</span>
			<div>
				<slot name="right" />
			</div>
		</div>
		<slot name="bottom" />
	</header>
</template>

<script>
export default {
	name: "BaseHeader",

	props: {
		back: {
			type: Boolean,
			default: false
		},
		title: null,
		isNeedCenter: {
			type: Boolean,
			default: true
		}
	}
};
</script>

<style lang="scss">
@import "~style";

.base-header-container {
	background-image: linear-gradient(-22deg, #222cc3 0%, #2b7cd6 100%);
}
.base-header-center {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: rem(58) rem(26) rem(26);
}
.header-back {
	width: rem(20);
}
.header-title {
	@include font-size(36);
	color: #fff;
}
</style>
