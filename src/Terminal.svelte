<script>
  import { getWarCriminals } from './database/database'
  import Loader from './common/Loader.svelte'
  let promise = getWarCriminals()

</script>

<div class='terminal border-blue border-4 rounded flex-1 m-8 overflow-y-auto'>
  {#await promise}
    <div class='w-full h-full flex justify-center'>
      <Loader />
    </div>
  {:then criminals}
    <ul class='w-full flex flex-col'>
    {#each criminals as {id, name}}
      <li class='war-criminal flex-1 m-2 text-white text-4xl'>
        {name}
      </li>
    {/each}
    </ul>
  {/await}
</div>

<style>
  .terminal {
    box-shadow: 0 0 .625em var(--blue),0 0 1.5625em rgba(var(--white-rgb, 0.5)),-.0625em 0 .125em rgba(var(--black-rgb),0.5);
  }

  .war-criminal {
    text-shadow: 0 0 .625em var(--red),0 0 1.5625em var(--white),-.0625em 0 .125em rgba(var(--black-rgb),0.5);
  }

</style>