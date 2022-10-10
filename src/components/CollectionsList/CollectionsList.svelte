<script>
	import Collection from '../Collection/Collection.svelte';

	export let collectionsObject = {};
</script>

<section class="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-8">
	{#each Object.entries(collectionsObject) as [collectionName, videos] (collectionName)}
		<a href={`/${collectionName}`}>
			<Collection {videos} {collectionName} />
		</a>
	{/each}
</section>
{#if Object.entries(collectionsObject).length === 0}
	<h3 class="text-center text-4xl w-full font-fira">You have no collections yet!</h3>
  <p class="text-center text-xl w-full font-fira mt-3 text-copy">Start creating new one by saving a Video!</p>
{/if}
