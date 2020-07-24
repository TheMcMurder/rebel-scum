<script>
  export let withBlock = false
</script>

<!-- {#if withBlock}
{/if} -->
<!-- <div class='floating-block absolute right-0 top-2 h-2 bg-gray'></div> -->
<hr class='imperial-border border-t-4 border-white max-w-5xl my-4 relative {withBlock ? 'before' : ''}'/>


<style>
  .imperial-border {
    box-shadow: 0 0 .625em #fff,0 0 1.5625em #fff,-.0625em 0 .125em rgba(0,0,0,0.5)
  }

  .before::before {
    content: " ";
    @apply absolute;
    @apply w-2/5;
    @apply right-0;
    /* @apply bg-red; */
    top: -0.88rem;
    height: 0.625rem;
    background-color: #ccc;
    /* @apply bg-opacity-50 */
    opacity: 0.4;
  }

</style>