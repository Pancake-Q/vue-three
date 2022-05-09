<template>
	<div>
		<div>{{ count }}</div>
		<button @click="countHandler"></button>
	</div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, watchEffect, ref } from 'vue';
const module = defineComponent({
	name: 'watchEffect',
	components: {},
	setup() {
		const count = ref(0);
		const countHandler = () => {
			count.value = count.value + 1;
		}
		watchEffect(() => {
			return count
		})
		return { count, countHandler }
	}
})
export default module;
</script>
<style scoped lang='less'>
</style>