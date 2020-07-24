<script>
  import LoaderIcon from './Loader-icon.svelte'

  export let small = false
</script>
<style>
  .loader {
    @apply flex;
    @apply justify-center;
    @apply items-center;
    @apply w-full;
    @apply text-white;
    @apply fill-current;
    @apply px-4;
    @apply mt-12;
  }

  .loader div{
    @apply float-left;
    @apply rounded-lg;
    @apply opacity-25;
  }

  .loader div:first-child {
    animation: firstball 1350ms infinite linear;
  }
  .loader div:nth-child(2) {
    animation: secondball 1350ms infinite linear;
  }
  .loader div:last-child {
    animation: thirdball 1350ms infinite linear;
  }

  @keyframes firstball {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    13% {
      opacity: 0.9;
      transform: scale(1.03);
    }
    26% {
      opacity: 1;
      transform: scale(0.95);
    }
    33% {
      transform: scale(1);
    }
    34% {
      opacity: 0.2;
    }
  }

  @keyframes secondball {
    32% {
      opacity: 0.2;
      transform: scale(1);
    }
    33% {
      opacity: 0;
      transform: scale(0.5);
    }
    46% {
      opacity: 0.9;
      transform: scale(1.03);
    }
    59% {
      opacity: 1;
      transform: scale(0.95);
    }
    66% {
      transform: scale(1);
    }
    67% {
      opacity: 0.2;
    }
  }

  @keyframes thirdball {
    67% {
      opacity: 0.2;
      transform: scale(1);
    }
    68% {
      opacity: 0;
      transform: scale(0.5);
    }
    81% {
      opacity: 0.9;
      transform: scale(1.03);
    }
    94% {
      opacity: 1;
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }

  .dot {
    @apply w-2;
    @apply h-2;
    @apply ml-2;
  }

  .large-dot {
    @apply w-12;
    @apply h-12;
    @apply ml-12;
  }
</style>

<div class="loader">
  <div
    class='{small ? "dot" : "large-dot"}'
  >
    <LoaderIcon />
  </div>
  <div
    class='{small ? "dot" : "large-dot"}'
  >
    <LoaderIcon />
  </div>
  <div
    class='{small ? "dot" : "large-dot"}'
  >
    <LoaderIcon />
  </div>
</div>
