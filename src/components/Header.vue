<template>
  <header>
    <div class="header">Ну хедер и хедер</div>
  </header>
</template>

<script>
export default {
  components: {
    // DisplayCartCounter,
    // MenuBtn,
  },
  computed: {
    // userName() {
    //   let name = this.$store.state.auth.userInfo.fullName;
    //   if (name !== undefined) {
    //     name = name.split(" ");
    //     return name[0];
    //   }
    //   return "Пользователь";
    // },
    // isAuth() {
    //   if (this.$store.state.auth.isAuth) {
    //     return true;
    //   }
    //   return false;
    // },
  },
}
</script>

<style lang="scss">
header {
  width: 100%;
  height: 70px;
  background-color: gray;
}
</style>
