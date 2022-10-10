<script>
	import { CollectionsList, Navigation, Intro, SelectCollectionModal } from '../components';
	import { isSelectCollectionOpen, currentVideoID } from '../stores/popupStores';
	import { collections, collectionsLength } from '../stores/collectionsStore';
</script>

<div>
	<Intro />

	<Navigation withSearch={true} title="Collections" counter={$collectionsLength} />

	<CollectionsList collectionsObject={$collections} />
</div>
{#if $isSelectCollectionOpen}
	<SelectCollectionModal videoID={$currentVideoID} />
{/if}
