<template>
	<van-list
	 :loading="listLoading"
	 :finished="loadFinished"
	 :offset="0"
	 @load="listLoad"
	>
		<router-link
		 tag="div"
		 to="/fundraising/detail"
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
						<span class="name">GKS</span>
						<br>
						<span class="target">目标 10True</span>
					</div>
				</div>
				<span class="schedule">以募集</span>
			</div>
		</router-link>
		<router-link
		 tag="div"
		 to="/fundraising/detail"
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
						<span class="name">GKS</span>
						<br>
						<span class="target">目标 10True</span>
					</div>
				</div>
				<span class="schedule">以募集</span>
			</div>
		</router-link>
	</van-list>
</template>

<script>
export default {
	name: "List",

	data() {
		return {
			listLoading: false,
			loadFinished: false
		};
	},

	methods: {
		listLoad() {
			console.log(1);
		}
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
