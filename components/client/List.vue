<template>
	<div class="flex-grow flex flex-col overflow-y-auto">
		<UiLoader
			v-if="status === 'pending'"
			class="text-sky-600 m-auto"
		/>
		<template v-else>
			<ClientListItem
				v-for="(client, index) in clients"
				:key="client.id"
				:class="{ 'border-b border-gray-300': index + 1 < clients.length }"
				:client="client"
				:show-rating="listView === View.Rating"
			/>
		</template>
	</div>
</template>

<script setup lang="ts">
import type { ClientWithDetails } from '~/types/client';

import { View } from '~/types/list';

const { listView } = useList();
const { search } = useSearch();
const { itemsCookie } = useClientsCookie();
const { clients: data, status, fetchClients } = useClients();

fetchClients();

const clients = computed(() => {
	const searchedText = search.value.toLowerCase();

	return data.value
		.map(el => {
			const storageItem = itemsCookie.value.find(item => item.id === el.id);

			return {
				...el,
				points: storageItem?.points ?? 0,
				comment: storageItem?.comment ?? '',
			};
		})
		.sort((a, b) => {
			if (listView.value === View.Clients) {
				return a.last_name.localeCompare(b.last_name);
			} else {
				return b.points - a.points;
			}
		})
		.filter((el) => {
			const firstName = el.first_name.toLowerCase();
			const lastName = el.last_name.toLowerCase();

			return firstName.includes(searchedText) || lastName.includes(searchedText);
		}) as ClientWithDetails[];
});
</script>
