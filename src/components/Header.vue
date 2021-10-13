<template>
  <header>
    <div class="header container">
      <div class="header__logo">
        <router-link :to="{ name: 'main' }">
          <img src="../assets/logo.png" alt="" />
        </router-link>
      </div>
      Ну хедер и хедер
    </div>
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
  height: 80px;
  background-color: #5aab9c71;
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
