// import VueHighlightJS from './highlight-code.vue';
//
// export default {
//     component: VueHighlightJS,
//     install(Vue) {
//         Vue.component('highlight-code', VueHighlightJS);
//     }
// };

import  Prism from 'prismjs'

const VuePrism = {

    install (Vue, options) {

        Vue.mixin({
            mounted () {
                Prism.highlightAll();
            }
        })
    }
}

export default VuePrism;