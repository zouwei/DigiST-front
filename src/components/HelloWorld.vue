<template>
	<div>
		<span class="example-text">文字直接设px</span>
		<div class="example-box"></div>
		<!-- 图片的链接直接写绝对路径 -->
		<img
		 class="example-img"
		 src="/static/imgs/example.jpg"
		 alt="example"
		>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		};
	}
};
</script>

<style scoped lang="scss">
// 每一个页面样式都要先引一下这个
@import "~style";

.example-img {
	width: getRem(175);
}
.example-text {
	// 设置文字大小直接用px，不要按照上面的方法写
  // font-size: 16px;
  @include font-size(32);
}
.example-box {
	// 设置尺寸的地方，比如设计稿上的宽度为75px，直接这么写就可以了
	width: getRem(75);
	height: getRem(75);
	// 对于1px边框的样式，要这么写
	// 可以传两个参数，第一个是边框颜色，第二个是border-radius的值
	@include m-r1b(#000);
}
</style>
