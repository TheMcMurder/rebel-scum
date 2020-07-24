<script>
  export let type = 'h1'
</script>
{#if type === 'h1'}
  <h1 class='text-white text-2xl font-normal uppercase'>
    <slot></slot>
  </h1>
{:else if type === 'h2'}
  <h2 class='text-white text-xl font-bold uppercase'>
    <slot></slot>
  </h2>
{/if}

<style>
  h1 {
    @apply font-mono;
    text-shadow: 0 0 .625em var(--white),0 0 1.5625em var(--white),-.0625em 0 .125em rgba(var(--black-rgb),0.5);
  }
  h2 {
    @apply font-mono;
    text-shadow: 0 0 .625em var(--red),0 0 1.5625em var(--red),-.0625em 0 .125em rgba(var(--black-rgb),0.5)
  }
</style>