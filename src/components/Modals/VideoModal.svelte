<script>
	import { currentVideoID, isWatchVideoOpen } from '../../stores/popupStores';

	export let videoID = null;

	function handleClickingOnModal(e) {
		const container = document.getElementById('container-videoplayer');
		if (container === e.target) close();
	}

	function close() {
		currentVideoID.set(null);
		isWatchVideoOpen.set(false);
	}
</script>

<div
	class="fixed top-0 left-0 bottom-0 right-0 bg-gray-600/70 flex items-center justify-center"
	id="container-videoplayer"
	on:click={handleClickingOnModal}
>
	<div>
		<iframe
			width="560"
			height="315"
			src={`https://www.youtube-nocookie.com/embed/${videoID}`}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
</div>
