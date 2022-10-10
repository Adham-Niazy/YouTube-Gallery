<script>
	import './Collection.css';
	import placeholderImg from '../../assets/placeholder.png';

	export let collectionName = '';
	export let videos = [];
</script>

<div class="rounded-lg overflow-hidden cursor-pointer collection">
	<div class="relative">
		<!-- overlay -->
		<div class="absolute top-0 left-0 right-0 bottom-0 bg-white overlay" />

		<img
			class="thumbnail"
			src={videos[0] ? `https://i3.ytimg.com/vi/${videos[0]}/sddefault.jpg` : placeholderImg}
			alt={`Cover for youtube video ${videos[0]}`}
		/>
		<div class="grid grid-cols-3 gap-0.5 mt-0.5">
			{#each [1, 2, 3] as i (i)}
				<img
					class="thumbnail"
					src={videos[i] ? `https://i3.ytimg.com/vi/${videos[i]}/sddefault.jpg` : placeholderImg}
					alt={`Cover for youtube video ${videos[i]}`}
				/>
			{/each}
		</div>
	</div>

	<div class="mt-4 flex flex-col items-center">
		<h3 class="font-bold text-headline text-base collection__title">{collectionName}</h3>
		<span class="text-copy text-sm mt-2">{videos.length} Videos</span>
	</div>
</div>
