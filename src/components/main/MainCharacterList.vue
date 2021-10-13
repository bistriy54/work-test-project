<template>
  <div ref="mainWrap" class="main-character-list chars-list">
    <div v-if="characterList.length" class="chars-list__wrapper">
      <MainCharacterItem v-for="item in characterList" :key="item.id" :item="item" />
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
  data: () => {
    return {
      pendingNextChars: false,
    }
  },
  computed: {
    ...mapGetters(['getAllCharacters', 'getFiltredCharacters', 'getFiltredStatus']),
    characterList() {
      if (this.getFiltredStatus === true) {
        return this.getFiltredCharacters
      }
      return this.getAllCharacters
    },
  },
  mounted() {
    window.addEventListener('scroll', this.loadNextChars) // привязываем событие прокрутки страницы
  },
  methods: {
    async loadNextChars() {
      if (
        window.pageYOffset >= this.$refs.mainWrap.clientHeight - 600 &&
        this.pendingNextChars === false &&
        this.getFiltredStatus === false
      ) {
        this.pendingNextChars = true
        const res = await this.$store.dispatch('getNextCharacters')
        this.pendingNextChars = false
      }
    },
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