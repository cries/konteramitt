export default {
    name: 'Card',

    props: {
        suit: {
            type: String,
            default: ''
        },

        rank: {
            type: String,
            default: ''
        }
    },

    render () {
        let vnodes = this.$scopedSlots.default
            ? this.$scopedSlots.default(this)
            : this.$slots.default
        return Array.isArray(vnodes)
            ? vnodes[0]
            : vnodes
    }
}
