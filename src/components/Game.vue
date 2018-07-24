<template>
    <collection :collection="initaldeck">
        <div slot-scope="{ collection }">
            <shuffle :collection="collection">
                <div
                    slot-scope="{ shuffledCollection }">
                    <game-logic :deck="shuffledCollection">
                        <div
                            slot-scope="{ dealHands, deck, hands }">
                            <div>
                                Deck
                                <hand :hand="deck" />
                            </div>
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
import Collection from './generic/Collection'
import Shuffle from './generic/Shuffle'
import GameLogic from './generic/GameLogic'
import Table from './Table'
import Hand from './Hand'

export default {
    components: {
        'collection': Collection,
        'shuffle': Shuffle,
        'game-logic': GameLogic,
        'game-table': Table,
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
        initaldeck () {
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
    }
}
</script>
