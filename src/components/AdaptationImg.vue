<template>
	<img
	 :src="imgSrc"
	 :class="className"
	>
</template>

<script>
export default {
	name: "AdaptationImg",

	props: ['src', 'className'],

	computed: {
		imgSrc() {
			const ratio = window.devicePixelRatio
			const suffix = this.src.split('.')[1]
			const src = this.src.split('.')[0]
			return `/static/imgs/${src}-${ratio === 3 ? 3 : 2}.${suffix}`
		}
	}
}
</script>
