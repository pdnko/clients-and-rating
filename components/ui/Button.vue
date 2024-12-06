<template>
	<button
		class="text-white bg-sky-600 hover:bg-sky-800 transition-colors rounded p-2"
		@click="emit('click', $event)"
	>
		{{ label }}
	</button>
</template>

<script setup lang="ts">
defineProps<{
	label: string
}>();

const emit = defineEmits<{
	(e: 'click', value: MouseEvent): void
}>();
</script>
