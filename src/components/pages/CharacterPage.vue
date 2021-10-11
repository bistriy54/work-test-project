<template>
  <div class="main-page wrapper">
    <div v-if="charId && !pending">
      <CharacterItem :item="charItem" />
    </div>
    <div v-if="charId === undefined">
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
  data() {
    return {
      charItem: {},
      pending: true,
    }
  },
  computed: {
    charId() {
      return this.$route.params.id
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.getCharInfo()
    }
  },
  methods: {
    async getCharInfo() {
      const getCharRes = await this.$store.dispatch('getOneCharacter', this.$route.params.id)
      this.charItem = getCharRes
      this.pending = false
    },
  },
}
</script>