export default {
    props: [
        'suit',
        'rank'
    ],

    render () {
        return this.$scopedSlots.default({
            suit: this.suit,
            rank: this.rank
        })
    }
}
