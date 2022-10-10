<script>
	import { isSelectCollectionOpen, currentVideoID } from '../../stores/popupStores';

	import Search from '../Search/Search.svelte';

	let clicked = false;
	let searchField = '';
	let error = '';

	function validate() {
		if (!clicked) return;
		if (!searchField.includes('youtube.com/watch?v=')) {
			error = 'Invalid YouTube Link!';
			return;
		}
		const searchParams = new URLSearchParams(searchField.split('?')[1]);
		const videoID = searchParams.get('v');
		if (!searchParams.has('v') || !/[a-zA-Z0-9_-]{11}/.test(searchParams.get('v'))) {
			error = 'Not a YouTube Video Link!';
			return;
		}
		reset(videoID);
	}

	function reset(videoID) {
		currentVideoID.set(videoID);
		isSelectCollectionOpen.set(true);
		searchField = '';
		error = '';
		clicked = false;
	}

	function onSearch(e) {
		searchField = e.target.value;
		validate();
	}
</script>

<section class="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16">
	<div>
		<h1 class="text-headline lg:text-6xl md:text-5xl text-4xl font-bold mb-3">
			Your YouTube Resource Gallery
		</h1>
		<p class="text-lg text-copy tracking-wide">
			The perfect app to keep track of valuable resources while learning to code. As you come across
			a helpful video, just add the YouTube video link here.
		</p>
	</div>
	<form>
		<label class="text-lg text-copy block font-fira" for="videoId">Video link</label>
		<Search
			on:input={onSearch}
			type="text"
			placeholder="www.youtube.com/watch?v=SR1qcN00cGY"
			extraStyling="py-3 px-4 my-4"
			value={searchField}
		/>

		{#if error !== ''}
			<div class="text-red-500 mb-3">{error}</div>
		{/if}

		<button
			class="btn-primary"
			on:click|preventDefault={() => {
				clicked = true;
				validate();
			}}
		>
			Save The Video!
		</button>
	</form>
</section>
