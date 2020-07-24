import App from './App.svelte';
import 'imperial-style/imperial.css'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;