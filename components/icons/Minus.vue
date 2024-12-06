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
			d="M5 12h14" />
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
			d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
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
			d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
			clip-rule="evenodd" />
	</svg>

	<svg
		v-else-if="type === 'micro'"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="currentColor"
		:width="size"
		:height="size">
		<path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
	</svg>
</template>

<script setup lang="ts">
import type { TIconType } from '~/types/ui/icon';

defineProps<{
    type: TIconType
    size: string
}>();
</script>
