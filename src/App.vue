<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1></h1>
        <h2>Essential Links</h2>

        <pre>
            <code class="language-js">
                export default {
                    name: 'app',
                    data () {
                        return {
                             msg: 'Welcome to Your Vue.js App'
                        }
                    }
                }
            </code>
        </pre>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    /*

Darcula color scheme from the JetBrains family of IDEs

*/

    .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: #2b2b2b;
    }

    .hljs {
        color: #bababa;
    }

    .hljs-strong,
    .hljs-emphasis {
        color: #a8a8a2;
    }

    .hljs-bullet,
    .hljs-quote,
    .hljs-link,
    .hljs-number,
    .hljs-regexp,
    .hljs-literal {
        color: #6896ba;
    }

    .hljs-code,
    .hljs-selector-class {
        color: #a6e22e;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-section,
    .hljs-attribute,
    .hljs-name,
    .hljs-variable {
        color: #cb7832;
    }

    .hljs-params {
        color: #b9b9b9;
    }

    .hljs-string {
        color: #6a8759;
    }

    .hljs-subst,
    .hljs-type,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-symbol,
    .hljs-selector-id,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-template-tag,
    .hljs-template-variable,
    .hljs-addition {
        color: #e0c46c;
    }

    .hljs-comment,
    .hljs-deletion,
    .hljs-meta {
        color: #7f7f7f;
    }

</style>
