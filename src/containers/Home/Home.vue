<template>
	<div >
		<div>
			<form action="/" >
				<van-search
					v-model="value"
					placeholder="搜索项目"
					show-action
					@search="onSearch"
				>
				<div slot="action" @click="onSearch">搜索</div>
				</van-search>
			</form>

		</div>
		
		<base-container>
			<base-header  slot="header" title="">
				
				<div slot="bottom"  class="tab-container">
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
	</div>

	

</template>

<script>
import Hot from "./Hot";
import SelfChoice  from "./SelfChoice"

export default {
	name: 'Home',

	components: {
		Hot,
		SelfChoice

	},

	data(){
		return {
			value:'',
			renderComponentName: "Hot",
			tabs: [
				{
					title: "热门",
					name: "Hot"
				},
				{
					title: "自选",
					name: "SelfChoice"
				}
			]
		}
	},
	methods: {
		onSearch(){

		},	
		onCancel(){

		}
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
.start-fundraising {
	position: absolute;
	right: 0;
	bottom: rem(205);
	width: rem(100);
}
</style>
