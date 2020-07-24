<script>
  import { getWarCriminals } from './database/database'
import { identity } from 'svelte/internal'
  let promise = getWarCriminals()

</script>

<div class='terminal border-blue border-4 rounded flex-1 m-8'>
  {#await promise}
    <span>Loading...</span>
  {:then criminals}
    <ul>
    {#each criminals as {id, name}}
      <li class='w-100'>{name}</li>
    {/each}
    </ul>
  {/await}
</div>

<style>
  .terminal {
    box-shadow: 0 0 .625em var(--blue),0 0 1.5625em rgba(var(--white-rgb, 0.5)),-.0625em 0 .125em rgba(var(--black-rgb),0.5);
  }

</style>