<template>
	<van-list
	 v-model="listLoading"
	 :finished="loadFinished"
	 :offset="100"
	 :immediate-check="false"
	 @load="listLoad"
	>
		<router-link
		 v-for="item of dataList"
		 :key="item.id"
		 tag="div"
		 :to="`/fundraising/detail/${item.id}`"
		 class="item-container"
		>
			<div class="item">
				<div class="item-left">
					<img
					 class="logo"
					 src="/static/imgs/example-2.jpg"
					 alt="logo"
					>
					<div class="detail">
						<span class="name">{{item.project_name}}</span>
						<br>
						<span class="target">目标 {{item.vote_target}} True</span>
					</div>
				</div>
				<span
				 v-if="dataType === 'closed'"
				 class="schedule"
				>已到期</span>
				<span
				 v-else-if="dataType === 'finished'"
				 class="schedule"
				>募资完成</span>
				<span
				 v-else
				 class="schedule"
				>已募集：{{item.subscribed_frequency}} True</span>
			</div>
		</router-link>
	</van-list>
</template>

<script>
export default {
	name: "List",

	props: {
		dataType: {
			type: String,
			required: true
		}
	},

	data() {
		return {
			firstLoading: null,
			listLoading: false,
			loadFinished: false,
			pageIndex: 1,
			dataList: []
		};
	},

	methods: {
		async listLoad() {
			this.pageIndex++;
			await this.getList();
			this.listLoading = false;
		},
		async getList() {
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
						this.pageIndex === 1 &&
							this.$emit("show-start-fundraising");
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
					message: "数据获取失败，请重试",
					forbidClick: true
				});
				console.log("/fundraising/getFundraisingList", e);
			}
		}
	},

	async created() {
		this.$toast.loading({
			forbidClick: true,
			message: "",
			duration: 0
		});
		await this.getList();
		this.$toast.clear();
	}
};
</script>

<style lang="scss" scoped>
@import "~style";

.item-container {
	padding: 0 rem(30);
	background-color: #fff;
	&:not(:last-child) {
		.item {
			@include m-r1bb(#ccc);
		}
	}
}
.item {
	display: flex;
	height: rem(140);
	align-items: center;
	justify-content: space-between;
}
.item-left {
	display: flex;
}
.logo {
	width: rem(80);
	height: rem(80);
	margin-right: rem(20);
	border-radius: 50%;
}
.name {
	@include font-size(30);
}
.target {
	@include font-size(24);
	color: #999;
}
.schedule {
	float: right;
	@include font-size(24);
	color: #4e84e6;
}
</style>
