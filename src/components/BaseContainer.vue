<template>
	<div class="base-container">
		<slot name="header" />
		<div class="content-container">
			<div class="full absolute">
				<slot name="content" />
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
	background-color: #f4f4f4;
}
.content-container {
	position: relative;
	flex-grow: 1;
}
</style>
