<template>
	<ul>
		<li
		 @click="$router.push('/fundraising_detail')"
		 class="list-container"
		>
			<div class="list">
				<div class="list-left">
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
		</li>
	</ul>
</template>

<script>
export default {
	name: "List"
};
</script>

<style lang="scss" scoped>
@import "~style";

.list-container {
	padding: 0 rem(30);
}
.list {
	display: flex;
	height: rem(140);
	align-items: center;
	justify-content: space-between;
	@include m-r1bb(#ccc);
}
.list-left {
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
