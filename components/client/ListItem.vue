<template>
	<NuxtLink
		class="
			group shrink-0 grid grid-cols-[1fr_3fr_1fr] items-center gap-4
			cursor-pointer hover:bg-sky-100 transition-colors p-4
		"
		active-class="bg-sky-300 hover:bg-sky-300"
		:to="`/clients/${client.id}`"
	>
		<p
			v-if="showRating"
			class="text-4xl text-center"
		>
			{{ client.points }}
		</p>
		<img
			v-else
			class="size-10 rounded-xl group-hover:scale-125 transition-transform"
			:src="client.avatar"
			:alt="fullName"
		>

		<span>{{ fullName }}</span>

		<UiIcon	
			class="group-hover:text-sky-600 transition-colors ml-auto"
			name="ChevronRight"
			type="mini"
		/>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { ClientWithDetails } from '~/types/client';

const props = defineProps<{
	client: ClientWithDetails
	showRating?: boolean
}>();

const fullName = computed(() => {
	const { first_name, last_name } = props.client;

	return `${first_name} ${last_name}`;
});
</script>
