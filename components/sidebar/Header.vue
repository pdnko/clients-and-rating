<template>
	<div class="flex flex-col gap-3 bg-sky-600 p-3">
		<div class="flex items-center gap-1 rounded bg-gray-200 p-1">
			<button
				v-for="(view, index) in views"
				:key="index"
				class="flex-grow text-xs font-medium capitalize rounded py-1"
				:class="[view === listView ? 'bg-white' : 'bg-transparent']"
				@click="switchListView(view)"
			>
				{{ view }}
			</button>
		</div>

		<label for="search" class="relative">
			<input
				id="search"
				type="text"
				class="w-full border border-gray-200 rounded py-1 pl-8 pr-2"
				placeholder="Enter username to search"
			>

			<UiIcon
				class="absolute inset-y-0 left-2 my-auto"
				name="MagnifyingGlass"
			/>
		</label>
	</div>
</template>

<script setup lang="ts">
const { views, listView, switchListView } = useList();
</script>
