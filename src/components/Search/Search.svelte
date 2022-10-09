<script>
  export let type = 'text';
  export let placeholder = 'Search';
  export let extraStyling = '';
</script>

<input
	class={`w-full outline-none bg-gray-1-background rounded-lg placeholder:text-gray-400 hover:border-accent/30 border-transparent border-2 hover:outline-pale-shadow-accent hover:outline-4 hover:bg-white transition-all duration-500 ease-in-out font-fira ${extraStyling}`}
	type={type}
	placeholder={placeholder}
	on:input
/>
