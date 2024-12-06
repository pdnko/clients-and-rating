<template>
	<button
		class="
			flex justify-center items-center
			text-white bg-sky-600 hover:bg-sky-800
			transition-colors rounded
			disabled:cursor-not-allowed
			disabled:hover:bg-sky-600
		"
		:class="{
			'p-2': size === 'normal',
			'p-0.5': size === 'small',
		}"
		:disabled="disabled || loading"
		@click="emit('click', $event)"
	>
		<UiLoader
			v-if="loading"
			class="text-white"
			size="normal"
		/>
		<slot v-else>
			{{ label }}
		</slot>
	</button>
</template>

<script setup lang="ts">
import type { TButtonSize } from '~/types/ui/button';

withDefaults(
	defineProps<{
		label?: string
		size?: TButtonSize
		loading?: boolean
		disabled?: boolean
	}>(), {
		size: 'normal',
		loading: false,
	},
);

const emit = defineEmits<{
	(e: 'click', value: MouseEvent): void
}>();
</script>
