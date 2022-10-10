<script>
	import { goto } from '$app/navigation';

	import { Navigation } from '../../components';
	import { collections, collectionsLength } from '../../stores/collectionsStore';

	export let data;
	const collectionID = data.collectionID;

	function handleClickVideo(e, video) {
		if (e.target === document.getElementById(`closeBtn${video}`)) {
			const newVideos = $collections[collectionID].filter((id) => id !== video);
			if (newVideos.length === 0) {
				const filteredCollections = { ...$collections };
				delete filteredCollections[collectionID];
				collections.set(filteredCollections);
				collectionsLength.set($collectionsLength - 1);
				goto('/');
				return;
			}
			collections.set({ ...$collections, [collectionID]: newVideos });
		} else {
			alert('OUT');
		}
	}
</script>

<div>
	<Navigation
		title={collectionID.charAt(0).toUpperCase() + collectionID.slice(1)}
		counter={($collections[collectionID] || []).length}
	/>

	<section class="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-8">
		{#each $collections[collectionID] || [] as video (video)}
			<div
				class="rounded-lg overflow-hidden cursor-pointer relative"
				on:click={() => handleClickVideo(event, video)}
			>
				<div
					class="absolute w-5 h-5 flex justify-center items-center bg-red-500 text-white top-1 right-1 rounded-full"
					id={`closeBtn${video}`}
				>
					&times;
				</div>
				<img
					class="thumbnail"
					src={`https://i3.ytimg.com/vi/${video}/sddefault.jpg`}
					alt={`Cover for youtube video ${video}`}
				/>
			</div>
		{/each}
	</section>
</div>
