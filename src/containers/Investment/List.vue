<template>
	<ul class="list">
		<li
		 @click="$router.push('/investment/Detail')"
		 class="item-container"
		>
			<div class="item">
				<div class="item-left">
					<img
					 class="star"
					 src="/static/imgs/whiteStar.png"
					 alt="logo"
					>
					<img
					 class="logo"
					 src="/static/imgs/example-2.jpg"
					 alt="logo"
					>
					<div class="count">
						<span class="name">BI</span>
						<br>
						<span class="target">1BI = ¥10</span>
					</div>
					<div class="count">
						<span class="name">1021 BI</span>
						<br>
						<span class="target">已募集</span>
					</div>
				</div>

				<span class="schedule">Reg S</span>
			</div>
		</li>

		<li
		 @click="$router.push('/investment/Detail')"
		 class="item-container"
		>
			<div class="item">
				<div class="item-left">
					<img
					 class="star"
					 src="/static/imgs/whiteStar.png"
					 alt="logo"
					>
					<img
					 class="logo"
					 src="/static/imgs/example-2.jpg"
					 alt="logo"
					>
					<div class="count">
						<span class="name">DIDI</span>
						<br>
						<span class="target">1DIDI = ¥2</span>
					</div>
					<div class="count">
						<span class="name">2002 DIDI</span>
						<br>
						<span class="target">已募集</span>
					</div>
				</div>

				<span class="schedule">Reg S</span>
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

.list {
	background-color: #fff;
}
.item-container {
	padding: 0 rem(30);
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
.star {
	width: rem(30);
	height: rem(30);
	margin: rem(30) rem(20);
}
.logo {
	width: rem(80);
	height: rem(80);
	margin-right: rem(20);
	border-radius: 50%;
}
.count {
	width: rem(160);
	margin-right: rem(50)
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
	@include font-size(30);
	color: #4e84e6;
}

</style>
