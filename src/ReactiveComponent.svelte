<script>
  import { testStore} from "./stores";
  import { onDestroy } from "svelte";

  let destroyed = false;

  onDestroy(() => {
    // included to show that this is not enough to "fix" the bug in unit test plugin.
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
