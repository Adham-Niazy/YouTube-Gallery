<script>
	import { Collection, Navigation, Intro } from '../components';
</script>

<div>
	<Intro />

	<Navigation />

	<section class="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-8">
		{#each [1, 2, 3, 4] as collection (collection)}
			<Collection />
		{/each}
	</section>
</div>
