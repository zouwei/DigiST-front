<template>
	<base-container>
		<base-header
		 slot="header"
		 :is-need-center="false"
		>
			<div
			 slot="top"
			 class="search-container"
			>
				<form action="/">
					<van-search
					 v-model="value"
					 placeholder="搜索项目"
					 background="transparent"
					 @search="onSearch"
					>
						<div
						 slot="action"
						 @click="onSearch"
						>搜索</div>
					</van-search>
				</form>
			</div>
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
		 :is="renderComponentName"
		 slot="content"
		/>
	</base-container>
</template>

<script>
import Doing from "./Doing";
import Done from "./Done";
import Undo from "./Undo"

export default {
	name: "InvestmentIndex",

	components: {
		Doing,
		Done,
		Undo
	},

	data() {
		return {
			renderComponentName: "Doing",
			value: "",
			tabs: [
				{
					title: "进行中",
					name: "Doing"
				},
				{
					title: "已到期",
					name: "Done"
				},
				{
					title: "未投资",
					name: "Undo"
				},
			]
		};
	},
	methods: {
		async onSearch() {
			try {
				const { data } = await this.$http.post(
					"/ws_digist/fundraising/getFundraisingList",
					{
						pageSize: 10,
						pageIndex: this.pageIndex,
						where: {
							project_status: this.dataType
						}
					}
				);
				const { code, result, msg } = data;
				if (+code === 0) {
					if (result.data.length === 0) {
						// this.pageIndex === 1 &&
						// 	this.$emit("show-start-fundraising");
						this.loadFinished = true;
						return;
					}
					this.dataList = this.dataList.concat(result.data);
				} else {
					this.$toast({
						message: msg,
						forbidClick: true
					});
				}
			} catch (e) {
				this.$toast({
					message: "数据获取失败，请重试！",
					forbidClick: true
				});
				console.log("/fundraising/getFundraisingList:", e);
			}
		},
		onCancel() {}
	}
};
</script>

<style lang="scss" scoped>
@import "~style";

.search-container {
	padding-top: 20px;
}
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
