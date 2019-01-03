<template>
	<List />
	<!-- <div class="full absolute">
		<div class="start-fundraising">
			<div class="button">发起募资</div>
			<p class="tips">您还没有发起任何募资</p>
		</div>
	</div> -->
</template>

<script>
import List from './List'

export default {
	name: 'FundraisingComplete',

	components: { List }
};
</script>

<style lang="scss" scoped>
@import "~style";

.start-fundraising {
	position: absolute;
	left: 0;
	bottom: rem(180);
	width: 100%;
	padding: 0 rem(40);
	box-sizing: border-box;
}
.button {
	padding: rem(19) 0;
	margin-bottom: rem(40);
	text-align: center;
	@include font-size(36);
	color: #fff;
	background-image: linear-gradient(44deg, #222cc3 0%, #2b7cd6 100%);
	border-radius: rem(12);
}
.tips {
	text-align: center;
	@include font-size(20);
	color: #8c8c8c;
}
</style>
