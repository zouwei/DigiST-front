<template>
	<div class="full fundraising-container">
		<div class="header">
			<p class="title">募资</p>
			<div class="flex">
				<router-link
				 v-for="tab of tabs"
				 :key="tab.path"
				 :to="tab.path"
				 exact
				 tag="div"
				 class="tab"
				>{{tab.title}}</router-link>
			</div>
		</div>
		<div class="router-container">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	name: "Fundraising",

	data() {
		return {
			tabs: [
				{
					title: "已完成",
					path: "/fundraising"
				},
				{
					title: "已发布",
					path: "/fundraising/publish"
				},
				{
					title: "已过期",
					path: "/fundraising/maturity"
				}
			]
		};
	}
};
</script>

<style lang="scss" scope>
@import "~style";

.fundraising-container {
	display: flex;
	flex-direction: column;
	background-color: #f4f4f4;
}
.router-container {
	position: relative;
	flex-grow: 1;
}
.header {
	padding-top: rem(58);
	background-image: linear-gradient(-22deg, #222cc3 0%, #2b7cd6 100%);
}
.title {
	margin-bottom: rem(42);
	text-align: center;
	@include font-size(36);
	color: #fff;
}
.tab {
	position: relative;
	flex: 1;
	padding-bottom: rem(24);
	opacity: 0.5;
	text-align: center;
	color: #fff;
	@include font-size(30);
	&.router-link-active {
		opacity: 1;
		&:after {
			content: "";
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translate3d(-50%, 0, 0);
			width: rem(50);
			height: rem(6);
			background-color: #fff;
		}
	}
}
</style>
