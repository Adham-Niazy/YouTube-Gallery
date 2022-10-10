<script>
	import { Navigation } from '../../components';
	import { collections, collectionsLength } from '../../stores/collectionsStore';

	export let data;
	const collectionID = data.collectionID;
</script>

<div>
	<Navigation
		title={collectionID.charAt(0).toUpperCase() + collectionID.slice(1)}
		counter={$collectionsLength}
	/>

	<section class="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-8">
		{#each $collections[collectionID] || [] as video (video)}
			<div class="rounded-lg overflow-hidden cursor-pointer">
				<img
					class="thumbnail"
					src={`https://i3.ytimg.com/vi/${video}/sddefault.jpg`}
					alt={`Cover for youtube video ${video}`}
				/>
			</div>
		{/each}
	</section>
</div>
