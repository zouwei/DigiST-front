<template>
	<adaptation-img
	 class="start-fundraising-flot"
	 src="start-fundraising-flot.png"
	 alt="开始募资"
	 @click.native="$router.push('/fundraising/precautions')"
	/>
</template>

<script>
export default {
	name: "StartFundraisingFlot"
};
</script>

<style lang="scss" scoped>
@import "~style";

.start-fundraising-flot {
	position: fixed;
	right: 0;
	bottom: rem(205);
	width: rem(100);
}
</style>
