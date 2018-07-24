export default {
    name: 'GameLogic',

    data () {
        return {
            hand1: [],
            hand2: [],
            hand3: [],
            hand4: []
        }
    },

    props: {
        deck: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        hands () {
            return [
                this.hand1,
                this.hand2,
                this.hand3,
                this.hand4
            ]
        }
    },

    methods: {
        dealHands () {
            for (let card = 0; card < 3; card++) {
                this.hand1.push(this.deck.shift())
            }
            for (let card = 0; card < 3; card++) {
                this.hand2.push(this.deck.shift())
            }
            for (let card = 0; card < 3; card++) {
                this.hand3.push(this.deck.shift())
            }
            for (let card = 0; card < 3; card++) {
                this.hand4.push(this.deck.shift())
            }
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
