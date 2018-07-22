export default {
    props: [
        'collection'
    ],

    render () {
        return this.$scopedSlots.default({
            collection: this.collection
        })
    }
}
