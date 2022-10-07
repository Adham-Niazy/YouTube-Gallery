<main class="max-w-6xl mx-auto p-8">
	<div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-16">
		<div>
			<h1 class="text-headline lg:text-6xl md:text-5xl text-4xl font-bold mb-3">
				Your Youtube Resource Gallery
			</h1>
			<p class="text-lg text-copy tracking-wide">
				The perfect app to keep track of valuable resources while learning to code. As you come
				across a helpful video, just add the Youtube video link here.
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
			/>
			<button
				class="bg-accent rounded-lg text-accent-text py-3 px-4 hover:opacity-70 transition font-bold md:w-1/2 w-full font-fira"
			>
				Save The Video!
			</button>
		</form>
	</div>
</main>
