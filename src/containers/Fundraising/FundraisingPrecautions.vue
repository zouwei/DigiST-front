<template>
	<base-container>
		<base-header
		 slot="header"
		 title="募资详情"
		 :back="true"
		/>
		<div
		 slot="content"
		 class="precautions-container"
		>
			<p class="description">
				<span class="description-title">募资说明</span><br>
				There is no better advertisement campaign that is low cost and also successful at the same time.<br>
				There is no better advertisement campaign that is low cost and also successful at the same time.<br>
				There is no better advertisement campaign that is low cost and also successful at the same time.
			</p>
			<div class="button">发起募资</div>
			<p class="protocol">点击按钮即表明我已阅读并同意<span class="protocol-link">用户使用条款</span></p>
		</div>
	</base-container>
</template>

<script>
export default {
	name: "FundraisingPrecautions"
};
</script>

<style lang="scss" scoped>
@import "~style";

.precautions-container {
	padding: rem(60) rem(60) 0;
}
.description {
	margin-bottom: rem(60);
	line-height: rem(60);
	@include font-size(24);
	color: #151515;
}
.description-title {
	@include font-size(30);
	font-weight: bold;
	color: #333;
}
.button {
	padding: rem(19) 0;
	margin-bottom: rem(40);
	border-radius: rem(12);
	text-align: center;
	@include font-size(36);
	color: #fff;
	background-image: linear-gradient(44deg, #222cc3 0%, #2b7cd6 100%);
}
.protocol {
	text-align: center;
	@include font-size(20);
	color: #8c8c8c;
}
.protocol-link {
	color: #2b7cd6;
	text-decoration: underline;
}
</style>
