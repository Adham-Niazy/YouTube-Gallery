<script>
	export let type = 'text';
	export let placeholder = 'Search';
	export let extraStyling = '';
	export let value = '';
</script>

<input
	class={`w-full outline-none bg-gray-1-background rounded-lg placeholder:text-gray-400 hover:border-accent/30 border-transparent border-2 hover:outline-pale-shadow-accent hover:outline-4 hover:bg-white transition-all duration-500 ease-in-out font-fira focus:border-accent/30 focus:outline-pale-shadow-accent focus:outline-4 focus:bg-white ${extraStyling}`}
	{type}
	{placeholder}
	{value}
	on:input
/>
