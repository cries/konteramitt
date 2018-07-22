export default {
    props: [
        'collection'
    ],

    computed: {
        shuffledCollection () {
            // found on https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
            return this.collection
                .map(a => [Math.random(), a])
                .sort((a, b) => a[0] - b[0])
                .map(a => a[1])
        }
    },

    render () {
        return this.$scopedSlots.default({
            shuffledCollection: this.shuffledCollection
        })
    }
}
