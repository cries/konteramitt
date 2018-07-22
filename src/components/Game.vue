<template>
    <div>
        <collection
            class="deck"
            :collection="deck">
            <div slot-scope="{ collection }">
                <template v-for="card in deck">
                    <card
                        class="card"
                        :key="card.suit + '-' + card.rank"
                        :suit="card.suit"
                        :rank="card.rank">
                        <div slot-scope="{ suit, rank }">
                            <div>
                                <span>{{ rank }} of {{ suit }}</span>
                            </div>
                        </div>
                    </card>
                </template>
            </div>
        </collection>
    </div>
</template>

<style lang="scss">
    .deck {
        display: flex;
        flex-flow: wrap row;
    }

    .card {
        height: 156px;
        width: 100px;
        border: 1px solid black;
        border-radius: 10px;
    }
</style>

<script>
import Collection from './generic/Collection.js'
import Card from './generic/Card.js'

export default {
    components: {
        'collection': Collection,
        'card': Card
    },

    data () {
        return {
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
    }
}
</script>
