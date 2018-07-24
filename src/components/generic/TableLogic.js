export default {
    name: 'TableLogic',

    props: {
        hands: {
            type: Array,
            default: () => {}
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
