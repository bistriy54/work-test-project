import axios from 'axios'
import apiConfig from '../apiconfig'
const state = {
  characters: [],
  filtredCharacters: [],
  filtred: false,
  nameFilter: '',
  statusFilter: '',
  info: {},
  pending: false,
}

const getters = {
  getAllCharacters: (state) => {
    return state.characters
  },
  getFiltredCharacters: (state) => {
    return state.filtredCharacters
  },
  getFiltredStatus: (state) => {
    return state.filtred
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
  addCharacters: (state, data) => {
    state.characters = state.characters.concat(data)
  },
  saveFiltredCharacters: (state, data) => {
    state.filtredCharacters = data
  },
  setNameFilter: (state, data) => {
    state.nameFilter = data
  },
  setStatusFilter: (state, data) => {
    state.statusFilter = data
  },
  toggleFiltred: (state, bool) => {
    state.filtred = bool
  },
  clearFilter: (state) => {
    state.filtred = false
    state.nameFilter = ''
    state.statusFilter = ''
  },
}

const actions = {
  saveCharacters: (context, data) => {
    context.commit('saveCharacters', data)
  },
  saveFiltredCharacters: (context, data) => {
    context.commit('saveFiltredCharacters', data)
  },
  setNameFilter: (context, data) => {
    context.commit('setNameFilter', data)
  },
  setStatusFilter: (context, data) => {
    context.commit('setStatusFilter', data)
  },
  toggleFiltred: (context, bool) => {
    context.commit('toggleFiltred', bool)
  },
  clearFilter: (context) => {
    context.commit('clearFilter')
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
  getNextCharacters: async (context, data) => {
    const getChars = await axios.get(`${context.state.info.next}`).then((res) => res.data)
    if (getChars && getChars.results) {
      context.commit('addCharacters', getChars.results)
    }
    if (getChars && getChars.info) {
      context.commit('saveCharsApiInfo', getChars.info)
    }
    console.log('getNextCharacters', getChars)
    return getChars
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
