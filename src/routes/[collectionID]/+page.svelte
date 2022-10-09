<script>
	import { Navigation } from '../../components';

	export let data;
	const collectionID = data.collectionID;
</script>

<div>
	<Navigation title={collectionID.charAt(0).toUpperCase() + collectionID.slice(1)} counter={0} />
</div>
