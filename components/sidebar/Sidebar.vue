<template>
	<div
		class="fixed z-30 top-0 w-72 h-screen flex flex-col bg-white shadow-lg shadow-gray-600 transition-transform"
		:class="{ '-translate-x-full': !isSidebarShown }"
	>
		<SidebarHeader />
	
		<!-- @LOCALSTORAGE wrap <ClientList> in <ClientOnly> here if you want to work with localStorage -->
		<ClientList />

		<UiButton
			class="my-4 mx-4"
			label="Update list"
			@click="() => fetchClients()"
		/>
	</div>
</template>

<script setup lang="ts">
const { fetchClients } = useClients();

const { isSidebarShown } = useSidebar();
</script>
