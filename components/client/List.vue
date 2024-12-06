<template>
	<div class="flex-grow overflow-y-auto">
		<ClientListItem
			v-for="(client, index) in clients"
			:key="client.id"
			:class="{ 'border-b border-gray-300': index + 1 < clients.length }"
			:client="client"
			:show-rating="listView === View.Rating"
		/>
	</div>
</template>

<script setup lang="ts">
import { View } from '~/types/list';

const { listView } = useList();
const { clients, fetchClients } = useClients();

fetchClients();
</script>
