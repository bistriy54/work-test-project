<template>
  <div class="main-page wrapper">
    <MainFilter />
    <MainCharacterList />
  </div>
</template>

<script>
import MainFilter from '../main/MainFilter.vue'
import MainCharacterList from '../main/MainCharacterList.vue'
export default {
  components: {
    MainFilter,
    MainCharacterList,
  },
}
</script>