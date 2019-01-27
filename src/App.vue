<template>
	<div
	 id="app"
	 class="full"
	>
		<router-view />
	</div>
</template>

<script>
export default {
	name: "App",

	methods: {
		urlArgs() {
			const args = {};
			const query = location.search.substring(1);
			const pairs = query.split("&");
			for (let i = 0; i < pairs.length; i++) {
				const pos = pairs[i].indexOf("=");
				if (pos == -1) continue;
				const name = pairs[i].substring(0, pos);
				let value = pairs[i].substring(pos + 1);
				value = decodeURIComponent(value);
				args[name] = value;
			}
			return args;
		}
	},

	created() {
		this.$root.globalData.userId = this.urlArgs().userId || "";
		this.$root.globalData.walletId = this.urlArgs().walletId || "";
	}
};
</script>
