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
			d="M6 18 18 6M6 6l12 12" />
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
			d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
			clip-rule="evenodd" />
	</svg>

	<svg
		v-else-if="type === 'mini'"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		:width="size"
		:height="size">
		<path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
	</svg>

	<svg
		v-else-if="type === 'micro'"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="currentColor"
		:width="size"
		:height="size">
		<path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
	</svg>
</template>

<script setup lang="ts">
import type { TIconType } from '~/types/ui/icon';

defineProps<{
    type: TIconType
    size: string
}>();
</script>
