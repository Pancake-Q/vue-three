<template>
	<div>
		<div>{{ count }}</div>
		<button @click="countHandler"></button>
	</div>
</template>
<script lang='ts'>
import { defineComponent, watch, ref } from 'vue';
const module = defineComponent({
	name: 'watch',
	components: {},
	setup() {
		const count = ref(0);
		const countHandler = () => {
			count.value = count.value + 1;
		}
		watch(() => {
			console.log(count);
			return count
		}, (value, prevalue) => {
			console.log(value, prevalue);
		}, {
			immediate: true,
		})
		return { count, countHandler }
	}
})
export default module;
</script>
<style scoped lang='less'>
</style>