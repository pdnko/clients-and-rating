<template>
	<component
		:is="iconComponent"
		:type="type"
		:size="iconSizes[size]"
	/>
</template>

<script setup lang="ts">
import type { TIconType, TIconSize } from '~/types/icon';

const props = withDefaults(
	defineProps<{
        name: string
        type?: TIconType
        size?: TIconSize
    }>(), {
		type: 'outlined',
		size: 'md',
	},
);

const icons = import.meta.glob('~/components/icon/*.vue');

const iconComponent = computed(() => {
	const iconPath = `/components/icon/${props.name}.vue`;

	return icons[iconPath] ?
		defineAsyncComponent(icons[iconPath] as () => Promise<typeof import('*.vue')>) :
		null;
});

const iconSizes: Record<TIconSize, string> = {
	xs: '16px',
	sm: '20px',
	md: '20px',
	lg: '20px',
	xl: '24px',
};
</script>
