<script>
  import { Link } from 'svelte-routing'
  import { getWarCriminal } from './database/database.js'
  import Loader from './common/Loader.svelte'
  import Jedi from './common/icons/jedi.svelte'
  import Rebel from './common/icons/rebel.svelte'
  export let id
  let promise = getWarCriminal(id)

  function formatHeight(heightInCm) {
    const h = parseInt(heightInCm)
    if (isNaN(h)) {
      return heightInCm
    } else {
      return `${heightInCm/100} M`
    }

  }

  function formatWeight(weightInKg) {
    const weight = parseInt(weightInKg)
    if (isNaN(weight)) {
      return weightInKg
    } else {
      return `${weight} KG`
    }

  }
</script>

<div class='mx-2 flex w-100 flex-col flex-1'>
  {#await promise}
    <span>Attempting to load criminal by id: {id}</span>
    <Loader />
  {:then criminal}
    <div class='flex flex-col flex-1'>
      <Link title='Return to Criminal list' to='/'>
        <div class='h-8 w-8 text-yellow fill-current'>
          <svg x="0px" y="0px" viewBox="0 0 98 122.5">
            <polygon points="28.8,52.7 65.3,89.2 72.7,81.8 40,49 72.7,16.2 65.3,8.8 28.8,45.3 25.3,49 "/>
            <!-- <text x="0" y="113" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Noah</text><text x="0" y="118" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text> -->
          </svg>
        </div>
      </Link>
      <div class='relative'>
        <div class='absolute w-full h-full text-gray fill-current z-0 opacity-50'>
          {#if criminal.affiliation === 'Jedi'}
            <Jedi />
          {:else if criminal.affiliation === 'Rebellion'}
            <Rebel />
          {/if}
        </div>
        <div class='war-criminal z-10 absolute'>
          <div>
            id: {criminal.id}
          </div>
          <div>
            Name: {criminal.name}
          </div>
          <div>
            Birth Year: {criminal.birth_year}
          </div>
          <div>
            Height: {formatHeight(criminal.height)}
          </div>
          <div>
            Mass: {formatWeight(criminal.mass)}
          </div>
          <div>
            Affiliation: {criminal.affiliation}
          </div>
        </div>
      </div>
    </div>
  {/await}
</div>

<style>
  .war-criminal {
    @apply text-xl;
    text-shadow: 0 0 .625em var(--red),0 0 1.5625em var(--white),-.0625em 0 .125em rgba(var(--black-rgb),0.5);
  }
  .war-criminal > div {
    @apply my-1;
  }
</style>