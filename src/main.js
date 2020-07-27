import App from './App.svelte';
import { imperialBackground } from 'imperial-style'

imperialBackground({animate: false})

const app = new App({
	target: document.body,
});

export default app;