<template>
  <div class="main-page wrapper">
    <div v-if="episodeId && !pending">
      <EpisodeItem :item="episodeItem" />
    </div>
    <div v-if="episodeId === undefined">
      <div>
        <span>Упс... нет id эпизода!</span>
      </div>
    </div>
  </div>
</template>

<script>
import EpisodeItem from '../episode/EpisodeItem.vue'
export default {
  components: {
    EpisodeItem,
  },
  data() {
    return {
      episodeItem: {},
      pending: true,
    }
  },
  computed: {
    episodeId() {
      return this.$route.params.id
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.getCharInfo()
    }
  },
  methods: {
    async getCharInfo() {
      const getEpisodeRes = await this.$store.dispatch('getEpisodeInfo', this.$route.params.id)
      this.episodeItem = getEpisodeRes
      this.pending = false
    },
  },
}
</script>