<template>
	<div>
		<List data-type="finished" />
		<start-fundraising-flot />
	</div>
</template>

<script>
import List from "./List";
import StartFundraisingFlot from "./StartFundraisingFlot";

export default {
	name: "Published",

	components: { List, StartFundraisingFlot }
};
</script>
