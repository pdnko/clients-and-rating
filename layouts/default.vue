<template>
	<div class="relative w-full min-h-screen flex overflow-x-hidden">
		<Sidebar />
		
		<main
			class="flex-1 flex bg-gray-200 transition-padding"
			:class="[isSidebarShown ? 'md:pl-72' : 'pl-0']"
		>
			<slot />
		</main>
	</div>
</template>

<script setup lang="ts">
const { isSidebarShown } = useSidebar();
</script>
