<template>
	<div class="async-loading-container">
		<div class="async-loading">
			<van-loading />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Loading'
}
</script>

<style lang="scss" scoped>
.async-loading-container {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
.async-loading {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0);
    padding: 10px;
    border-radius: 5px;
	background-color: rgba(0, 0, 0, .6);
}
</style>
