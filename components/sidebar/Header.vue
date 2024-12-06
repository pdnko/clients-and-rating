<template>
	<div
		class="relative flex flex-col gap-3 bg-sky-600 p-3"
		:class="{ 'shadow shadow-sky-600': isSidebarShown }"
	>
		<div class="flex items-center gap-1 rounded bg-gray-200 p-1">
			<button
				v-for="(view, index) in views"
				:key="index"
				class="flex-grow text-xs font-medium capitalize rounded transition-colors py-1"
				:class="[view === listView ? 'bg-white' : 'bg-transparent hover:bg-white/50']"
				@click="switchListView(view)"
			>
				{{ view }}
			</button>
		</div>

		<SidebarSearch />

		<UiButton
			class="absolute inset-y-0 -right-6 h-fit rounded-l-none my-auto"
			size="small"
			@click="handleSwitchSidebar"
		>
			<UiIcon
				class="transition-transform"
				:class="{ 'rotate-180': isSidebarShown }"
				name="ChevronRight"
				type="mini"
				size="sm"
			/>
		</UiButton>
	</div>
</template>

<script setup lang="ts">
const { views, listView, switchListView } = useList();
const { isSidebarShown, showSidebar, hideSidebar } = useSidebar();

function handleSwitchSidebar() {
	if (isSidebarShown.value) {
		return hideSidebar();
	}
	showSidebar();
}
</script>
