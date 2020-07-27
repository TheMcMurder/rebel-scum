<script>
  import { Router, Link, Route } from "svelte-routing";
  import WarCriminals from './war-criminals.svelte';
  import WarCriminal from './war-criminal.svelte'
</script>

<div class='terminal border-blue border-4 rounded flex-1 m-8 overflow-y-auto'>
  <Router>
    <div class='mx-8'>
      <nav class='w-full flex justify-between py-2'>
        <Link to='/'>War Criminals</Link>
        <Link to='/planets'>Planets</Link>
      </nav>
    </div>
    <Route path="/"><WarCriminals /></Route>
    <Route path="/war-criminal/:id" let:params>
      <WarCriminal id="{params.id}" />
    </Route>
  </Router>
</div>

<style>
  .terminal {
    box-shadow: 0 0 .625em var(--blue),0 0 1.5625em rgba(var(--white-rgb, 0.5)),-.0625em 0 .125em rgba(var(--black-rgb),0.5);
  }

</style>