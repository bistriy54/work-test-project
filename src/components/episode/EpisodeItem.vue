<template>
  <div class="detail-episode-item">
    <div class="detail-episode-item__title">
      <h1>Эпизод "{{ item.name }}"</h1>
    </div>
    <div class="detail-episode-item__info">
      <div class="detail-episode-item__date">
        <span class="detail-episode-item__option">Дата премьеры:</span>
        <span>{{ item.air_date }}</span>
      </div>
      <div class="detail-episode-item__chars">
        <span class="detail-episode-item__option">Персонажи:</span>
        <div v-if="episodeChars.length" class="episode-chars__list">
          <router-link
            v-for="char in episodeChars"
            :key="char.id"
            :to="{
              name: 'character',
              params: { id: char.id },
            }"
            class="episode-chars__item"
          >
            <div class="episode-chars__img">
              <img :src="char.image" alt="" />
            </div>
            <div class="episode-chars__name">
              <span>{{ char.name }}</span>
            </div>
          </router-link>
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
  data: () => {
    return {
      episodeChars: [],
    }
  },
  computed: {
    charactersId() {
      const str = 'https://rickandmortyapi.com/api/character/'
      return this.item.characters.map((item) => item.split(str)[1])
    },
  },
  mounted() {
    if (this.charactersId) {
      this.getCharsInfo()
    }
  },
  methods: {
    async getCharsInfo() {
      const getManyCharsRes = await this.$store.dispatch(
        'getManyCharacters',
        this.charactersId.join()
      )
      this.episodeChars = getManyCharsRes
    },
  },
}
</script>

<style lang="scss" scoped>
.detail-episode-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: 7px;
  overflow: hidden;
  background-color: #5aab9cd6;
  max-width: 720px;
  margin-top: 20px;
  margin-bottom: 20px;
  &__date {
    width: 100%;
    text-align: right;
  }
  &__info {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
    & div {
      margin-bottom: 5px;
    }
  }
  &__option {
    font-weight: bold;
  }
  // &__chars {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-wrap: wrap;
  // }
  & .episode-chars {
    &__list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 20px;
    }
    &__item {
      color: #2c3e50;
      height: 240px;
    }
    &__name {
      width: 150px;
    }
    &__img {
      & img {
        width: 150px;
        height: auto;
      }
    }
  }
}
</style>