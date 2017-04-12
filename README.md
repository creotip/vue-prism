# vue-prism

> Prism.js syntax highlighter for Vue.js

## Usage

Main file:
```javascript
import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import App from './App';

/*
 * Use Vue Highlight.js
 */
Vue.use(VueHighlightJS);

/*
 * Import Highlight.js theme
 * Find more: https://highlightjs.org/static/demo/
 */
import 'highlight.js/styles/default.css';

new Vue({
	el: '#app',
	render: h => h(App)
});
```

Vue File:
```vue
<template>
	<div id="app">
		<!-- Code Block -->
		<highlight-code lang="javascript">let str = 'Hello, World!';
console.log(str);</highlight-code>

		<!-- Inline Code Block -->
		<highlight-code lang="javascript" :inline="true">alert('Hello, World!');</highlight-code>
	</div>
</template>

<script>
</script>

<style>
</style>
```

