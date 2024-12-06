<template>
	<div
		class="border-4 border-current border-l-transparent rounded-full animate-spin"
		:class="sizes[size]"
	/>
</template>

<script setup lang="ts">
import type { TLoaderSize } from '~/types/ui/loader';

withDefaults(
	defineProps<{
		size?: TLoaderSize
	}>(), {
		size: 'large',
	},
);

const sizes: Record<TLoaderSize, string> = {
	small: 'size-4',
	normal: 'size-6',
	large: 'size-8',
};
</script>
