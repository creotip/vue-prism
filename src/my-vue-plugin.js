import  Prism from 'prismjs'

const Highlight = {

    install (Vue, options) {

        Vue.mixin({
            mounted () {
                Prism.highlightAll();
            }
        })
    }
}

export default Highlight;