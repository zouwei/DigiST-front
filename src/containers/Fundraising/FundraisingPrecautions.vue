<template>
	<div class="full fundraising-precautions">
		<div class="header">
			<adaptation-img
			 class="back"
			 src="back.png"
			 alt="back"
			/>
			<span class="title">募资详情</span>
			<div></div>
		</div>
		<div class="precautions-container">
			<p class="text">
				募资说明<br>
				There is no better advertisement campaign that is low cost and also successful at the same time.<br>
				There is no better advertisement campaign that is low cost and also successful at the same time.<br>
				There is no better advertisement campaign that is low cost and also successful at the same time.
			</p>
			<div class="button">发起募资</div>
            <p class="protocol">点击按钮即表明我已阅读并同意<span>用户使用条款</span></p>
		</div>
	</div>
</template>

<script>
export default {
	name: "FundraisingPrecautions"
};
</script>

<style lang="scss" scoped>
@import "~style";

.fundraising-precautions {
	display: flex;
	flex-direction: column;
}
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: rem(66) rem(33) rem(26) rem(26);
	background-image: linear-gradient(-22deg, #222cc3 0%, #2b7cd6 100%);
}
.back {
	width: rem(20);
}
.title {
	@include font-size(36);
	color: #fff;
}
.precautions-container {
	position: relative;
	flex-grow: 1;
	padding: rem(40) rem(60) 0;
	background-color: #f4f4f4;
}
.text {
	margin-bottom: rem(60);
	color: #333;
	@include font-size(30);
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
    span {
        color: #2b7cd6;
        text-decoration: underline;
    }
}
</style>
