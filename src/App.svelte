<script>
	import ImperialHeader from './imperial-header.svelte'
	import ImperialBorder from './imperial-border.svelte';
</script>

<!-- <main class='mx-auto mt-0 mb-12 flex max-w-5xl'> -->
<main>
	<ImperialBorder withBlock={true} />
	<ImperialHeader type='h1'>
		Imperial Criminal Database
	</ImperialHeader>
	<p>
		Hello there
	</p>
</main>

<style global>
  @tailwind base;
  @tailwind components;
	@tailwind utilities;
	
	body {
		@apply text-white;
		@apply bg-black;
		@apply font-body;
		@apply flex;
		@apply max-w-5xl;
		@apply justify-between;
		@apply flex-col;
		@apply mx-auto;
		@apply mt-0;
		@apply mb-12;
  	/* font-family: "Saira", "Helvetica Neue", Helvetica, Arial, sans-serif; */
	}
</style>
