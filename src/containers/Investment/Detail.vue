<template>
	<base-container>
		<base-header
		 slot="header"
		 title="详情"
		 :back="true"
		>
			<adaptation-img
			 slot="right"
			 class="collection"
			 src="collection-detail.png"
			 alt="collection-detail"
			/>
		</base-header>
		<!-- 滚动外层盒子 -->
		<div
		 slot="content"
		 class="full scroll"
		>
			<!-- 介绍 -->
			<div class="introduction">
				<div class="logo">
					<img
					 src="/static/imgs/example-2.jpg"
					 alt="logo"
					>
					<span class="company-name">GKS</span>
				</div>
				<p class="text">从 2015 年 4 月起，Ant Design 在蚂蚁金服中后台产品线迅速推广，对接多条业务线，覆盖系统 800 个以上。定啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
			</div>
			<!-- 详情 -->
			<ul class="detail-list">
				<li class="detail-item">
					<span class="label">项目估值</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">项目代币</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">筹集规模</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">筹集模式</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">最低认购</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">投资年限</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">股权收益权</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">提前退出窗口</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">智能合约类型</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">拍照类型</span>
					<span class="value">100亿元</span>
				</li>
			</ul>
			<!-- 目标 -->
			<ul class="detail-list">
				<li class="detail-item">
					<span class="label">投资数量</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">消耗</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">到期时间</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">等值</span>
					<span class="value">100亿元</span>
				</li>
			</ul>
			
		</div>
	</base-container>
</template>

<script>


export default {
	name: "InvestmentDetail",

	data() {
		return {
			
		};
	},


};
</script>

<style lang="scss" scoped>
@import "~style";

.collection {
	display: block;
	width: rem(36);
}
.detail-container {
	overflow-y: auto;
}
.out-scroll {
	min-height: 100%;
	background-color: #f4f4f4;
}
.introduction {
	padding: rem(30);
	margin-bottom: rem(20);
	background-color: #fff;
}
.logo {
	margin-bottom: rem(30);
	img {
		width: rem(80);
		height: rem(80);
		margin-right: rem(20);
		vertical-align: middle;
	}
}
.company-name {
	@include font-size(30);
}
.text {
	@include font-size(24);
	color: #999;
}
.detail-list {
	margin-bottom: rem(20);
	background-color: #fff;
}
.detail-item {
	display: flex;
	justify-content: space-between;
	padding: rem(22) rem(30);
}
.label {
	@include font-size(32);
	color: #333;
}
.value {
	@include font-size(32);
	color: #999;
}
.number-of-people {
	height: rem(634);
	background-color: #fff;
}
.funds {
	height: rem(828);
	// background-color: #000;
}
</style>
