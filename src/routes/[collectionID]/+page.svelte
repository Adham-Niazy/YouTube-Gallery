<script>
	import { Navigation } from '../../components';

	export let data;
	const collectionID = data.collectionID;
</script>

<div>
	<Navigation title={collectionID.charAt(0).toUpperCase() + collectionID.slice(1)} counter={0} />

	<section class="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-8">
		{#each [1, 2, 3] as collection (collection)}
			<div class="rounded-lg overflow-hidden cursor-pointer">
				<img
					class="thumbnail"
					src="https://i3.ytimg.com/vi/x7AdsTAgOjY/sddefault.jpg"
					alt="Cover for youtube video x7AdsTAgOjY"
				/>
			</div>
		{/each}
	</section>
</div>
