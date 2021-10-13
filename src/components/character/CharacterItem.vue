<template>
  <div class="detail-char-item">
    <div class="detail-char-item__img">
      <img :src="item.image" alt="" />
    </div>
    <div class="detail-char-item__info">
      <div class="detail-char-item__name">
        <span class="detail-char-item__option">Имя:</span>
        <span>{{ item.name }}</span>
      </div>
      <div class="detail-char-item__species">
        <span class="detail-char-item__option">Разновидность:</span>
        <span> {{ item.species }}</span>
      </div>
      <div class="detail-char-item__location">
        <span class="detail-char-item__option">Локация:</span>
        <span> {{ item.location.name }}</span>
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
}
</script>

<style lang="scss" scoped>
.detail-char-item {
  display: flex;
  border: 1px solid transparent;
  border-radius: 7px;
  overflow: hidden;
  background-color: #5aab9cd6;
  margin-top: 20px;
  margin-bottom: 20px;
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
}
</style>