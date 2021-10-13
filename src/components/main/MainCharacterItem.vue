<template>
  <div class="main-character-item main-char-item">
    <div class="main-char-item__top">
      <div class="main-char-item__img">
        <img :src="item.image" alt="" />
      </div>
      <div class="main-char-item__title">
        <router-link
          :to="{
            name: 'character',
            params: { id: item.id },
          }"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
    <div class="main-char-item__bottom">
      <div class="main-char-item__specie">
        <span class="main-char-item__option">Вид:</span>
        <span> {{ item.species }}</span>
      </div>
      <div class="main-char-item__episodes">
        <span class="main-char-item__option">Эпизоды: </span>
        <div class="episodes-list">
          <div v-for="episode in episodsLength" :key="episode" class="episodes-item">
            <router-link
              :to="{
                name: 'episode',
                params: { id: episode.split('https://rickandmortyapi.com/api/episode/')[1] },
              }"
            >
              <span> {{ episode.split('https://rickandmortyapi.com/api/episode/')[1] }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    episodsLength() {
      return this.item.episode.slice(0, 5)
    },
  },
}
</script>

<style lang="scss" scoped>
.main-char-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  border: 1px solid transparent;
  border-radius: 7px;
  margin: 10px;
  overflow: hidden;
  background-color: #5aab9cd6;
  &__img {
    max-width: 300px;
    height: auto;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  &__title {
    font-weight: bold;
    & a {
      color: #2c3e50;
    }
  }
  &__bottom {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
  }
  &__specie {
    padding: 10px;
    width: 100%;
    text-align: left;
  }
  &__option {
    font-weight: bold;
  }
  &__episodes {
    padding: 10px;
    width: 100%;
    text-align: left;
    display: flex;
    .episodes {
      &-list {
        display: flex;
      }
      &-item {
        margin-right: 7px;
      }
    }
  }
}
</style>