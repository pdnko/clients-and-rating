<template>
	<label for="search" class="relative">
		<input
			id="search"
			class="w-full border border-gray-200 rounded py-1 pl-8"
			:class="[search ? 'pr-9': 'pr-2']"
			:value="search"
			type="text"
			placeholder="Enter username to search"
			@input="handleInput"
		>

		<UiIcon
			class="absolute inset-y-0 left-2 my-auto"
			name="MagnifyingGlass"
		/>
		<UiButton
			v-if="search"
			class="absolute inset-y-0 right-2 h-fit my-auto"
			size="small"
			@click="clearSearch"
		>
			<UiIcon
				name="XMark"
			/>
		</UiButton>
	</label>
</template>

<script setup lang="ts">
const { search, updateSearch, clearSearch } = useSearch();

function handleInput(event: Event) {
	const target = event.target as HTMLInputElement;
	updateSearch(target.value);
}
</script>
