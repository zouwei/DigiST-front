<template>
	<div class="full fundraising-detail">
		<div class="header">
			<adaptation-img
			 class="back"
			 src="back.png"
			 alt="back"
			/>
			<span class="title">详情</span>
			<adaptation-img
			 class="collection"
			 src="collection-detail.png"
			 alt="collection-detail"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FundraisingDetail'
}
</script>

<style lang="scss" scoped>
@import "~style";

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
.collection {
	width: rem(36);
}
</style>
