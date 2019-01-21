<template>
	<div>
		<List data-type="closed" />
		<start-fundraising-flot />
	</div>
</template>

<script>
import List from "./List";
import StartFundraisingFlot from "./StartFundraisingFlot";

export default {
	name: "Maturity",

	components: { List, StartFundraisingFlot }
};
</script>
