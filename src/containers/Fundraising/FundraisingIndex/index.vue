<template>
	<base-container>
		<base-header
		 slot="header"
		 title="募资"
		>
			<div
			 slot="bottom"
			 class="tab-container"
			>
				<div
				 v-for="tab of tabs"
				 :key="tab.name"
				 class="tab"
				 :class="{active: tab.name === renderComponentName}"
				 @click="renderComponentName = tab.name"
				>{{tab.title}}</div>
			</div>
		</base-header>
		<component
		 slot="content"
		 :is="renderComponentName"
		/>
	</base-container>
</template>

<script>
import Complete from "./Complete";
import Maturity from "./Maturity";
import Published from "./Published";

export default {
	name: "FundraisingIndex",

	components: {
		Complete,
		Maturity,
		Published
	},

	data() {
		return {
			renderComponentName: "Complete",
			tabs: [
				{
					title: "已完成",
					name: "Complete"
				},
				{
					title: "已发布",
					name: "Published"
				},
				{
					title: "已过期",
					name: "Maturity"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
@import "~style";

.tab-container {
	display: flex;
	margin-top: rem(16);
}
.tab {
	position: relative;
	flex: 1;
	padding-bottom: rem(24);
	opacity: 0.5;
	text-align: center;
	color: #fff;
	@include font-size(30);
	&.active {
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
