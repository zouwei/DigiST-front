<template>
	<div class="base-container">
		<slot name="header" />
		<div class="content-container">
			<div class="full absolute scroll">
				<div class="scroll-box">
					<slot name="content" />
				</div>
			</div>
		</div>
		<slot />
	</div>
</template>

<script>
export default {
	name: "BaseContainer"
};
</script>

<style lang="scss">
.base-container {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
}
.content-container {
	position: relative;
	flex-grow: 1;
}
.scroll-box {
	min-height: 100%;
	background-color: #f4f4f4;
}
</style>
