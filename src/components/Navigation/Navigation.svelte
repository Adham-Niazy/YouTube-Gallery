<script>
	import Search from "../Search/Search.svelte";

</script>
<nav>
	<ul class="py-6 border-b-2 border-gray-200/75 flex sm:justify-between sm:items-end sm:flex-row flex-col">
		<li class="text-xl sm:mb-0 mb-3">
			<span class="text-headline font-bold mr-1">Collections</span>
			<span class="text-copy/50">0</span>
		</li>

    <li>
      <Search extraStyling="p-3" placeholder="Search Collections.."/>
    </li>
	</ul>
</nav>
