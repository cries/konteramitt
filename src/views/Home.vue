<template>
  <div class="home">
      <game></game>
  </div>
</template>

<script>
import Game from '../components/Game.vue'
export default {
    name: 'home',
    components: {
        'game': Game
    }
}
</script>
