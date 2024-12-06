<template>
	<svg
		v-if="type === 'outlined'"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		:width="size"
		:height="size">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m8.25 4.5 7.5 7.5-7.5 7.5" />
	</svg>

	<svg
		v-else-if="type === 'solid'"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		:width="size"
		:height="size">
		<path
			fill-rule="evenodd"
			d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
			clip-rule="evenodd" />
	</svg>

	<svg
		v-else-if="type === 'mini'"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		:width="size"
		:height="size">
		<path
			fill-rule="evenodd"
			d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
			clip-rule="evenodd" />
	</svg>

	<svg
		v-else-if="type === 'micro'"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="currentColor"
		:width="size"
		:height="size">
		<path
			fill-rule="evenodd"
			d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
			clip-rule="evenodd" />
	</svg>
</template>

<script setup lang="ts">
import type { TIconType } from '~/types/ui/icon';

defineProps<{
    type: TIconType
    size: string
}>();
</script>
