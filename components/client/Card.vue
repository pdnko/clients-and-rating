<template>
	<div class="flex flex-col items-center gap-4 bg-white rounded-lg py-6 px-10 sm:px-4">
		<div class="flex flex-col sm:flex-row items-center gap-4">
			<img
				class="size-36 rounded-lg"
				:src="client.avatar"
				:alt="client.email"
			>

			<div class="flex flex-col">
				<p class="text-2xl leading-none font-medium">
					{{ client.last_name }} {{ client.first_name }}
				</p>
				<p class="text-lg leading-none">
					{{ client.email }}
				</p>

				<div class="flex items-center bg-gray-200 rounded p-1 mt-2">
					<UiButton
						size="small"
						:disabled="loading"
						@click="clientDetails.points--"
					>
						<UiIcon
							name="Minus"
							type="mini"
							size="sm"
						/>
					</UiButton>
					<span class="flex-1 text-center">{{ clientDetails.points }}</span>
					<UiButton
						size="small"
						:disabled="loading"
						@click="clientDetails.points++"
					>
						<UiIcon
							name="Plus"
							type="mini"
							size="sm"
						/>
					</UiButton>
				</div>

				<textarea
					v-model="clientDetails.comment"
					class="border border-gray-300 rounded-md p-1 mt-2"
					placeholder="Comment"
					rows="5"
					:disabled="loading"
				/>
			</div>
		</div>

		<UiButton
			class="w-2/3"
			label="Save"
			:loading="loading"
			@click="handleClickSave"
		/>
	</div>
</template>

<script setup lang="ts">
import type { Client, ClientDetails } from '~/types/client';

const props = defineProps<{
	client: Client
}>();

const { getItem, addItem, updateItem } = useClientsCookie();
const { loading, startLoading } = useFakeLoading();

const itemFromCookie = getItem(props.client.id);
const clientDetails = ref<ClientDetails>(itemFromCookie
	? { ...itemFromCookie }
	: { id: props.client.id, points: 0, comment: '' },
);

async function handleClickSave() {
	await startLoading();

	if (itemFromCookie) {
		updateItem(props.client.id, { ...clientDetails.value });
	} else {
		addItem({ ...clientDetails.value as ClientDetails, id: props.client.id });
	}
}
</script>
