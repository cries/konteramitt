<template>
    <div class="home">
        <game></game>
    </div>
</template>

<style lang="scss">
    .home {
        height: 100%;
    }
</style>

<script>
import Game from '../components/Game.vue'
export default {
    name: 'home',
    components: {
        'game': Game
    }
}
</script>
