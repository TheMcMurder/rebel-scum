<script>
	import ImperialHeader from './imperial-header.svelte'
	import ImperialBorder from './imperial-border.svelte';
	import Terminal from './Terminal.svelte';
</script>

<main class='flex flex-col h-full'>
	<ImperialBorder withBlock={true} />
	<ImperialHeader type='h1'>
		Imperial Criminal Database
	</ImperialHeader>
	<Terminal></Terminal>
</main>

<style global>
  @tailwind base;
  @tailwind components;
	@tailwind utilities;
	
	.tv {
  	position: fixed;
  	opacity: 0.45;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	height: 100%;
  	z-index: -1;
	}
	.tv canvas {
  	height: 100%;
  	width: 100%;
	}

	body {
		@apply h-screen;
		@apply text-white;
		@apply bg-black;
		@apply font-body;
		@apply flex;
		@apply max-w-5xl;
		@apply justify-between;
		@apply flex-col;
		@apply mx-auto;
		@apply mt-0;
		@apply pb-12;
  	/* font-family: "Saira", "Helvetica Neue", Helvetica, Arial, sans-serif; */
	}

	:root {
		--green: #556567;
  	--red: #BC1E22;
  	--blue: #394A59;
  	--black: #000000;
  	--white: #FFFFFF;
		--gray: #64696C;
		
		--green-rgb: 85,101,103;
  	--red-rgb: 188, 30, 34;
  	--blue-rgb: 57,74,89;
  	--black-rgb: 0, 0, 0;
  	--white-rgb: 255, 255, 255;
  	--grey-rgb: 100,105,108;
	}
</style>
