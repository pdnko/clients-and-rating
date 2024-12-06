<template>
	<div class="flex-1 flex justify-center items-center p-4">
		<UiLoader v-if="status === 'pending'" />

		<ClientCard
			v-else-if="client"
			:client="client"
		/>
		
		<p v-else-if="error">{{ error.message }}</p>
	</div>
</template>

<script setup lang="ts">
import clientApi from '~/services/clientApi';

const route = useRoute();

const clientId = computed(() => Number(route.params.id));

const {
	data: client,
	error,
	status,
	clear,
} = await useLazyAsyncData('client', () => clientApi.getClient(clientId.value).then((res) => res.data));

onBeforeRouteUpdate(() => {
	clear();
});
</script>
