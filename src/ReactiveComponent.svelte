<script>
  import { testStore} from "./stores";
  import { onDestroy } from "svelte";

  let destroyed = false;

  onDestroy(() => {
    console.log("DESTROY")
    destroyed = true;
  })
</script>

{#if !destroyed && $testStore != null}
  {#if $testStore.numberValue === 2}
    <div>Case 2</div>
  {:else}
    <div>Case default</div>
  {/if}
{/if}
