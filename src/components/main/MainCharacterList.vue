<template>
  <div class="main-character-list chars-list">
    <div v-if="getAllCharacters.length" class="chars-list__wrapper">
      <MainCharacterItem v-for="item in getAllCharacters" :key="item.id" :item="item" />
    </div>
    <div v-else>
      <span>Элементы не найдены</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import MainCharacterItem from './MainCharacterItem.vue'
export default {
  components: {
    MainCharacterItem,
  },
  computed: {
    ...mapGetters(['getAllCharacters']),
  },
}
</script>
<style lang="scss" scoped>
.chars-list {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
  }
}
</style>