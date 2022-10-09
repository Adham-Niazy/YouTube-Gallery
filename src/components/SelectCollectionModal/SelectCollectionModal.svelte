<script>
	import Navigation from '../Navigation/Navigation.svelte';
	import Search from '../Search/Search.svelte';

	let createMode = false;
	let collectionName = '';
  let selected = '';

	function toggleCreateMode() {
		createMode = !createMode;
	}

	function onChange(e) {
		collectionName = e.target.value;
	}

  function switchSelectedCollection(collection) {
    selected = collection;
  }

  function addToCollection() {
    if ( createMode ) alert(collectionName);
    else alert(selected);
  }
</script>

<div class="fixed top-0 left-0 bottom-0 right-0 bg-gray-600/70 flex items-center justify-center">
	<div class="w-1/2 mx-auto bg-white px-10 pt-4 pb-8 rounded-xl">
		<Navigation title="Add this video to a collection" />

		<div class="mt-5">
			{#if createMode}
				<div class="mt-7 flex items-end">
					<div class="w-full mr-3 flex flex-col items-end">
						<Search extraStyling="py-3 px-4" on:input={onChange} placeholder="Collection Name.."/>
					</div>
					<button
						class="rounded-lg py-3 px-4 hover:border-accent hover:text-accent transition font-fira border-2 text-copy self-stretch"
						on:click={toggleCreateMode}>Cancel</button
					>
				</div>
			{:else}
				<div class="max-h-52 overflow-y-auto pr-3 scrollable mb-4">
					{#each [1, 2, 3, 4] as collection (collection)}
						<div
							class={`transition ease-in duration-200 border-2 p-4 mb-2 rounded-lg cursor-pointer hover:text-white hover:bg-accent hover:border-accent ${collection === selected && 'bg-accent text-white'} text-headline font-bold`}
              on:click={() => switchSelectedCollection(collection)}
						>
							<h3>Amazing Videos</h3>
						</div>
					{/each}
				</div>

				<button
					class="rounded-lg py-3 px-4 hover:border-accent hover:text-accent transition w-full font-fira border-2 text-copy"
					on:click={toggleCreateMode}
					>Create New Collection +
				</button>
			{/if}

      <button 
        class="btn-primary mt-7 disabled:opacity-50" 
        disabled={(selected === '' && !createMode) || (collectionName.length < 3 && createMode)}
        on:click={addToCollection}>
        Done
      </button>
		</div>
	</div>
</div>
