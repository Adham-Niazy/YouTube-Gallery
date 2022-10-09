<script>
	import Search from '../Search/Search.svelte';

	export let withSearch = false;
	export let title = '';
	export let counter = 0;
</script>

<nav>
	<ul
		class="py-6 border-b-2 border-gray-200/75 flex sm:justify-between sm:items-end sm:flex-row flex-col"
	>
		<li class="text-xl sm:mb-0 mb-3">
			<span class="text-headline font-bold mr-1">{title}</span>
			<span class="text-copy/50">{counter}</span>
		</li>

		{#if withSearch}
			<li>
				<Search extraStyling="p-3" placeholder="Search Collections.." />
			</li>
		{/if}
	</ul>
</nav>
