<template>
	<div>
		<span class="example-text">文字直接设px</span>
		<div class="example-box"></div>
		<p>需要适配的图片要这样用，src写的时候只需要写名字.后缀就行了，具体看我之前写的</p>
		<adaptation-img
		 class="collection"
		 src="example.jpg"
		 alt="collection-detail"
		/>
		<p>首页与投资路由已建好，子路由自己添加就可以了</p>
		<p>用vant组件前，先到vant.js上去引用一下你需要的组件</p>
		<van-button type="primary">主要按钮</van-button>
	</div>
</template>

<script>
export default {
	name: 'Example'
};
</script>

<style scoped lang="scss">
// 每一个页面样式都要先引一下这个
@import "~style";

.example-img {
	width: rem(175);
}
.example-text {
	// 设置文字大小按照这种方法写
	@include font-size(32);
}
.collection {
	width: rem(200);
}
// 背景图的适配要这样写
[ratio="2"] .xxx {
	background-image: url('/static/imgs/back-2.png')
}
[ratio="3"] .xxx {
	background-image: url('/static/imgs/back-3.png')
}
.example-box {
	// 设置尺寸的地方，比如设计稿上的宽度为75px，直接这么写就可以了
	width: rem(75);
	height: rem(75);
	// 对于1px边框的样式，要这么写
	// 可以传两个参数，第一个是边框颜色，第二个是border-radius的值
	@include m-r1b(#000);
}
</style>
