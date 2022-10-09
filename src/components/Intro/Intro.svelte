<script>
	let clicked = false;
	let searchField = '';
	let error = '';

	function validate() {
		console.log('Called');
		if (!clicked) return;
		if (!searchField.includes('youtube.com/watch?v=')) {
			error = 'Invalid YouTube Link!';
			return;
		}
		const searchParams = new URLSearchParams(searchField.split('?')[1]);
		const videoID = searchParams.get('v');
		console.log(/[a-zA-Z0-9_-]{11}/.test(searchParams.get('v')));
		console.log(searchParams.has('v'));
		if (!searchParams.has('v') || !/[a-zA-Z0-9_-]{11}/.test(searchParams.get('v'))) {
			error = 'Not a YouTube Video Link!';
			return;
		}
		error = '';
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
		<input
			class="w-full my-4 py-3 px-4 outline-none bg-gray-1-background rounded-lg placeholder:text-gray-400 hover:border-accent/30 border-transparent border-2 hover:outline-pale-shadow-accent hover:outline-4 hover:bg-white transition-all duration-500 ease-in-out font-fira"
			type="text"
			name="videoId"
			id="videoId"
			placeholder="www.youtube.com/watch?v=SR1qcN00cGY"
			on:input={onSearch}
		/>

		{#if error !== ''}
			<div class="text-red-500 mb-3">{error}</div>
		{/if}

		<button
			class="bg-accent rounded-lg text-accent-text py-3 px-4 hover:opacity-70 transition font-bold md:w-1/2 w-full font-fira"
			on:click|preventDefault={() => {
				clicked = true;
				validate();
			}}
		>
			Save The Video!
		</button>
	</form>
</section>
