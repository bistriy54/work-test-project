<template>
  <div class="main-filter filter">
    <div class="filter__main">
      <div class="filter__main-block filter__input">
        <img src="../../assets/search.png" alt="" @click="goSearch" />
        <input
          v-model="inputVal"
          type="text"
          placeholder="Введите имя персонажа"
          @keyup="keyEnter"
          @input="onChange"
        />
      </div>
      <div class="filter__main-block filter__status status">
        <div class="status__title">
          <span>Статус:</span>
        </div>
        <div class="status__list">
          <div
            class="status__item"
            :class="{ 'status-active': statusFilter === 'Alive' }"
            @click="status('Alive')"
          >
            alive
          </div>
          <div
            class="status__item"
            :class="{ 'status-active': statusFilter === 'Dead' }"
            @click="status('Dead')"
          >
            dead
          </div>
          <div
            class="status__item"
            :class="{ 'status-active': statusFilter === 'unknown' }"
            @click="status('unknown')"
          >
            unknown
          </div>
        </div>
      </div>
      <div class="filter__main-block filter__button">
        <div class="button" @click="deleteFilter">Сбросить</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      inputVal: '',
      searchFunc: '',
      searchItems: [],
    }
  },
  computed: {
    ...mapState({
      nameFilter: (state) => state.characters.nameFilter, // id города, выбранного пользователем
      statusFilter: (state) => state.characters.statusFilter, // id города, выбранного пользователем
    }),
    ...mapGetters(['getAllCharacters', 'getFiltredCharacters', 'getFiltredStatus']),
  },
  mounted() {
    if (this.nameFilter !== '') {
      this.inputVal = this.nameFilter
    }
  },
  methods: {
    goSearch() {
      if (this.inputVal.length > 0) {
        this.search(this.inputVal)
      } else {
        this.deleteFilter()
      }
    },
    onChange() {
      clearTimeout(this.searchFunc)
      this.searchFunc = setTimeout(() => {
        this.goSearch()
      }, 400)
    },
    keyEnter(e) {
      if (e.keyCode === 13) {
        this.goSearch()
      }
    },
    search(str) {
      // console.log('search', this.filterName)
      let findStatus = false
      if (this.statusFilter !== '') {
        findStatus = true
      }
      this.$store.dispatch('setNameFilter', str)
      const searchedChars = this.getAllCharacters.filter((item) => {
        const regExp = new RegExp(`.*${str}.*`, 'i')
        if (findStatus) {
          if (regExp.test(item.name) && item.status === this.statusFilter) {
            return item
          }
        } else {
          if (regExp.test(item.name)) {
            return item
          }
        }
      })
      this.$store.dispatch('saveFiltredCharacters', searchedChars)
      if (this.getFiltredStatus === false) {
        this.$store.dispatch('toggleFiltred', true)
      }
    },
    status(status) {
      // console.log('statusFilter', this.filterStatus)
      let findStatus = false
      if (this.nameFilter !== '') {
        findStatus = true
      }
      this.$store.dispatch('setStatusFilter', status)
      const searchedChars = this.getAllCharacters.filter((item) => {
        if (findStatus) {
          const regExp = new RegExp(`.*${this.nameFilter}.*`, 'i')
          if (regExp.test(item.name) && item.status === this.statusFilter) {
            return item
          }
        } else {
          if (item.status === status) {
            return item
          }
        }
      })
      this.$store.dispatch('saveFiltredCharacters', searchedChars)
      if (this.getFiltredStatus === false) {
        this.$store.dispatch('toggleFiltred', true)
      }
    },
    deleteFilter(status) {
      this.inputVal = ''
      this.$store.dispatch('clearFilter')
    },
  },
}
</script>

<style lang="scss" scoped>
.filter {
  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    @media (max-width: 1023px) {
      flex-direction: column;
    }
    &-block {
      @media (max-width: 1023px) {
        margin-bottom: 10px;
      }
    }
  }
  &__input {
    position: relative;
    width: 400px;
    & img {
      position: absolute;
      width: 20px;
      height: 20px;
      left: 10px;
      top: 13px;
    }
    & input {
      padding-left: 35px;
      height: 45px;
      width: 100%;
      border: 1px solid #f4eef0;
      background-color: #fff;
      border-radius: 10px;
      transition: 0.2s;
      font-size: 1em;
    }
  }
  &__status {
    display: flex;
    align-items: center;
    justify-content: center;
    .status {
      &__title {
        margin-right: 10px;
        font-weight: bold;
      }
      &__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // width: 150px;
      }
      &__item {
        font-weight: bold;
        cursor: pointer;
        background-color: #2d7869;
        padding: 5px 10px;
        margin-right: 10px;
        border-radius: 7px;
        color: white;
        &:hover {
          background-color: #28957f;
        }
      }
      &-active {
        border: 1px solid #1c6b5b;
        background-color: #28957f;
      }
    }
  }
  &__button {
    .button {
      background-color: #439241;
      padding: 10px 20px;
      border-radius: 7px;
      color: white;
      transition: 0.5s;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: #357234;
      }
    }
  }
}
</style>