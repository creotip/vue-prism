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