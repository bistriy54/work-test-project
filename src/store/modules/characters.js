import axios from 'axios'
import apiConfig from '../apiconfig'
const state = {
  characters: [],
  info: {},
  pending: false,
}

const getters = {
  getAllCharacters: (state) => {
    return state.characters
  },
}

const mutations = {
  saveCharacters: (state, data) => {
    state.characters = data
  },
  saveCharsApiInfo: (state, data) => {
    state.info = data
  },
  togglePending: (state, bool) => {
    state.pending = bool
  },
}

const actions = {
  saveCharacters: (context, data) => {
    context.commit('saveCharacters')
  },
  getApiCharacters: async (context, data) => {
    context.commit('togglePending', true)
    const getChars = await axios.get(`${apiConfig.url}/character`).then((res) => res.data)
    if (getChars && getChars.results) {
      context.commit('saveCharacters', getChars.results)
    }
    if (getChars && getChars.info) {
      context.commit('saveCharsApiInfo', getChars.info)
    }
    context.commit('togglePending', false)
    console.log(getChars)
    return getChars
  },
  getOneCharacter: async (context, data) => {
    const getOneChar = await axios.get(`${apiConfig.url}/character/${data}`).then((res) => res.data)
    console.log(getOneChar)
    return getOneChar
  },
  getManyCharacters: async (context, data) => {
    const getManyChars = await axios
      .get(`${apiConfig.url}/character/${data}`)
      .then((res) => res.data)
    console.log('getManyChars', getManyChars)
    return getManyChars
  },
  getEpisodeInfo: async (context, data) => {
    const getEpisode = await axios.get(`${apiConfig.url}/episode/${data}`).then((res) => res.data)
    console.log(getEpisode)
    return getEpisode
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
