<template>
    <collection :collection="initalDeck">
        <div slot-scope="{ collection }">
            <shuffle :collection="collection">
                <div
                    slot-scope="{ shuffledCollection }">
                    <game-logic :deck="shuffledCollection">
                        <div
                            slot-scope="{ dealHands, deck, hands }">
                            <button v-if="deck.length > 0" @click="dealHands()">Deal Hands</button>
                            <game-table :tablehands="hands"/>
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
import Table from './Table.vue'

export default {
    components: {
        'collection': Collection,
        'shuffle': Shuffle,
        'game-logic': GameLogic,
        'game-table': Table
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
