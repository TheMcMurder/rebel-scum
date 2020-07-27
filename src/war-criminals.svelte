<script>
  import { Link } from "svelte-routing";
  import { getWarCriminals } from './database/database'
  import Loader from './common/Loader.svelte'
  let promise = getWarCriminals()

</script>
{#await promise}
  <div class='w-full h-full flex justify-center'>
    <Loader />
  </div>
{:then criminals}
  <ul class='w-full flex flex-col'>
  {#each criminals as {id, name}}
    <li class='war-criminal flex-1 m-2 text-white text-4xl'>
      <Link to='/war-criminal/{id}'>
        {name}
      </Link>
    </li>
  {/each}
  </ul>
{/await}

<style>
  .war-criminal {
    text-shadow: 0 0 .625em var(--red),0 0 1.5625em var(--white),-.0625em 0 .125em rgba(var(--black-rgb),0.5);
  }

</style>