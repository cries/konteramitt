<template>
    <div>
        <collection :collection="deck">
            <div slot-scope="{ collection }">
                <shuffle :collection="collection">
                    <div
                        class="deck"
                        slot-scope="{ shuffledCollection }">
                        <card
                            v-for="card in shuffledCollection"
                            :key="card.suit + '-' + card.rank"
                            :suit="card.suit"
                            :rank="card.rank">
                            <div
                                class="card"
                                :class="cardClasses(card)"
                                slot-scope="{ suit, rank }">
                                <div>
                                    {{ rank }}
                                </div>
                                <div>
                                    {{ getSuitSymbol(card.suit) }}
                                </div>
                            </div>
                        </card>
                    </div>
                </shuffle>
            </div>
        </collection>
    </div>
</template>

<style lang="scss">
    .deck {
        display: flex;
        flex-flow: wrap row;

        .card {
            margin: 5px;
        }
    }

    .card {
        height: 156px;
        width: 100px;
        border-radius: 5px;
        padding: 5px;
        border: 1px solid black;
        font-size: 3em;

        &.red {
            color: red;
        }

        &.black {
            color: black;
        }
    }
</style>

<script>
import Collection from './generic/Collection.js'
import Shuffle from './generic/Shuffle.js'
import Card from './generic/Card.js'

export default {
    components: {
        'collection': Collection,
        'card': Card,
        'shuffle': Shuffle
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
    },

    methods: {
        cardClasses (card) {
            return {
                'red': card.suit === 'hearts' ||
                    card.suit === 'diamonds',
                'black': card.suit === 'spades' ||
                    card.suit === 'clubs'
            }
        },

        getSuitSymbol (suit) {
            switch (suit) {
                case 'hearts':
                    return '♥'
                case 'diamonds':
                    return '♦'
                case 'spades':
                    return '♠'
                case 'clubs':
                    return '♣'
            }
        }
    }
}
</script>
