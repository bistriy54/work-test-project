<template>
  <div class="main-page wrapper">
    <div v-if="charId">
      <CharacterItem :id="charId" />
    </div>
    <div v-else>
      <div>
        <span>Упс... нет id персонажа!</span>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterItem from '../character/CharacterItem.vue'
export default {
  components: {
    CharacterItem,
  },
  //   mounted() {
  //     console.log(this.$route.params.id)
  //   },
  computed: {
    charId() {
      return this.$route.params.id
    },
  },
}
</script>