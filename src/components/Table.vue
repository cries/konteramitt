<template>
    <table-logic :hands="tablehands">
        <div
            slot-scope="{ hands }">
            <hand :hand="hands[0]" />
            <hand :hand="hands[1]" />
            <hand :hand="hands[2]" />
            <hand :hand="hands[3]" />
        </div>
    </table-logic>
</template>

<style lang="scss">
    .table {
        width: 100vw;
        height: 100vh;
        background-color: green;
    }
</style>

<script>
import TableLogic from './generic/TableLogic.js'
import Hand from './Hand'

export default {
    name: 'Table',

    components: {
        'tableLogic': TableLogic,
        'hand': Hand
    },

    props: {
        tablehands: {
            type: Array,
            default: () => []
        }
    }
}

</script>
