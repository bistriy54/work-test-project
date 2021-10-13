<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
  mounted() {
    if (window.localStorage['my-app']) {
      let vuexObj = JSON.parse(window.localStorage['my-app'])
      if (
        vuexObj.characters &&
        vuexObj.characters.characters &&
        vuexObj.characters.characters.length
      ) {
        this.$store.dispatch('saveCharacters', vuexObj.characters.characters)
      } else {
        this.getCharacters()
      }
    } else {
      this.getCharacters()
    }
  },
  methods: {
    getCharacters() {
      this.$store.dispatch('getApiCharacters')
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background-image: url('./assets/rmfon1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  /* overflow: hidden; */
}
a {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: start;
  justify-content: flex-start;
  min-height: 100vh;
  /* overflow: hidden; */
}
/* .main-wrapper {
  height: 100vh;
} */
.container {
  max-width: 1280px;
  margin-right: auto;
  width: 100%;
  margin-left: auto;
  margin-bottom: auto;
  width: 100%;
}
</style>
