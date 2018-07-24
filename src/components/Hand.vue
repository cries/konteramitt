<template>
    <div class="deck">
        <card
            v-for="card in this.hand"
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
import Card from './generic/Card.js'

export default {
    name: 'Hand',

    components: {
        'card': Card
    },

    props: {
        hand: {
            type: Array,
            default: () => []
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
