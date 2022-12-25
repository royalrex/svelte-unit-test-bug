<script>
import ReactiveComponent from "./ReactiveComponent.svelte";
import { testStore } from "./stores";

const onChangeCase = () => {
	if ($testStore === null) {
		testStore.set({
			numberValue: 1
		});
	} else if ($testStore.numberValue === 1) {
		testStore.set({
			numberValue: 2
		});
	} else if ($testStore.numberValue === 2) {
		testStore.set(null);
	}
};
</script>

<main>
<p>Component:</p>
<div>
	<ReactiveComponent />
</div>
<div>
	<button on:click={onChangeCase}>Click me</button>
</div>
</main>
