<script>
	import Collection from "../Collection/Collection.svelte";

  export let collectionsObject = {};

</script>
<section class="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-8">
	{#each Object.entries(collectionsObject) as [collectionName, videos] (collectionName)}
		<a href={`/${collectionName}`}>
			<Collection {videos} {collectionName} />
		</a>
	{/each}
</section>
