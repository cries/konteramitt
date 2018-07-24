<template>
    <collection :collection="initalDeck">
        <div slot-scope="{ collection }">
            <shuffle :collection="collection">
                <div
                    slot-scope="{ shuffledCollection }">
                    <game-logic :deck="shuffledCollection">
                        <div
                            slot-scope="{ hand1, hand2, hand3, hand4, dealHands, deck }">
                            <button v-if="deck.length > 0" @click="dealHands()">Deal Hands</button>
                            <hand :hand="hand1" />
                            <hand :hand="hand2" />
                            <hand :hand="hand3" />
                            <hand :hand="hand4" />
                        </div>
                    </game-logic>
                </div>
            </shuffle>
        </div>
    </collection>
</template>

<style lang="scss">

</style>

<script>
import Collection from './generic/Collection.js'
import Shuffle from './generic/Shuffle.js'
import GameLogic from './generic/GameLogic.js'
import Hand from './Hand.vue'

export default {
    components: {
        'collection': Collection,
        'shuffle': Shuffle,
        'game-logic': GameLogic,
        'hand': Hand
    },

    data () {
        return {
            initalDeck: [],
            suits: [
                'hearts',
                'diamonds',
                'spades',
                'clubs'
            ],
            ranks: [
                '9',
                '10',
                'J',
                'Q',
                'K',
                'A'
            ]
        }
    },

    computed: {
        deck () {
            let deck = []
            this.ranks.forEach((rank) => {
                this.suits.forEach((suit) => {
                    deck.push({
                        suit,
                        rank
                    })
                })
            })
            return deck
        }
    },

    created () {
        this.initalDeck = this.deck
    }
}
</script>
