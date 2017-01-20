import { combineReducers } from 'redux'

const defaultDeck1 = {youtubeId: 'A-tE4Is0I5M', title: 'MF DOOM - My Favorite Ladies', thumbnail: 'https://i.ytimg.com/vi/A-tE4Is0I5M/default.jpg'}
const defaultDeck2 = {youtubeId: 'UuHHzRuSVYQ', title: 'Gramatik - Dungeon Sound', thumbnail: 'https://i.ytimg.com/vi/UuHHzRuSVYQ/default.jpg'}

function searchTerm(state = "", action){
  switch (action.type) {
  case "FETCH_TRACKS":
    return action.payload.searchTerm
  default:
    return state
  }
}

function tracks(state = [
  defaultDeck1,
  defaultDeck2,
  {
    youtubeId: "p0iR-2QoJDc",
    title: "A Tribe Called Quest - Check The Rhime (Official Video)",
    thumbnail: "https://i.ytimg.com/vi/p0iR-2QoJDc/default.jpg"
  },
  {
    youtubeId: "cM4kqL13jGM",
    title: "Digable Planets - Rebirth Of Slick (Cool Like Dat)",
    thumbnail: "https://i.ytimg.com/vi/cM4kqL13jGM/default.jpg"
  },
  {
    youtubeId: "P8-9mY-JACM",
    title: "De La Soul - Me Myself And I",
    thumbnail: "https://i.ytimg.com/vi/P8-9mY-JACM/default.jpg"
  },
  {
    youtubeId: "4cj8zZmFbds",
    title: "Jungle Brothers - 'Because I Got It Like That'",
    thumbnail: "https://i.ytimg.com/vi/4cj8zZmFbds/default.jpg"
  }
], action){
  switch (action.type) {
    case "FETCH_TRACKS":
      return action.payload.tracks
    default:
      return state
  }
}

function queue(state = {tracks: [], autoplay: false}, action){
  switch (action.type) {
    case "ADD_TO_QUEUE":
      return {...state, tracks: [...state.tracks, action.payload.track]}
    case "REMOVE_FROM_QUEUE":
      return {...state, tracks: action.payload}
    case "TOGGLE_AUTOPLAY":
      return {...state, autoplay: action.payload}
    default:
      return state
  }
}

function crossFader(state = {slider: 50, fading: false}, action){
  switch (action.type) {
    case 'CROSS_FADE_DECK_1':
    case 'CROSS_FADE_DECK_2':
    case 'RESET_CROSS_FADE':
      return {...state, slider: action.payload.slider}
    case 'ENABLE_FADING':
      return {...state, fading: action.payload}
    default:
      return state
  }
}

function deck1(state = {
  position: '1',
  track: {
    youtubeId: defaultDeck1.youtubeId,
    title: defaultDeck1.title
  },
  crossFader: {
    active: false,
    ratio: 50
  },
  status: {
    volume: 100,
    position: 0,
    duration: 0,
    playing: false,
    loading: false
  }}, action){
  switch (action.type) {
    case 'LOAD_DECK_1':
      return {...state, status: {...state.status, position: 0, playing: false, loading: true}, track: {youtubeId: action.payload.youtubeId, title: action.payload.title}}
    case 'DECK_1_LOADED':
      return {...state, status: {...state.status, loading: false}}
    case 'SET_DURATION_DECK_1':
      return {...state, status: {...state.status, position: 0, playing: false, duration: action.payload.duration}}
    case 'SET_POSITION_DECK_1':
      return {...state, status: {...state.status, position: action.payload.position}}
    case 'TOGGLE_PLAYING_DECK_1':
      return {...state, status: {...state.status, playing: action.payload.playing}}
    case 'ADJUST_VOLUME_DECK_1':
      return {...state, status: {...state.status, volume: action.payload.slider}}
    case 'CROSS_FADE_DECK_1':
      return {...state, crossFader: {active: true, ratio: action.payload.ratio}}
    case 'CROSS_FADE_DECK_2':
    case 'RESET_CROSS_FADE':
      return {...state, crossFader: {active: false, ratio: 50}}
    default:
      return state
  }
}

function deck2(state = {
  position: '2',
  track: {
    youtubeId: defaultDeck2.youtubeId,
    title: defaultDeck2.title
  },
  crossFader: {
    active: false,
    ratio: 50
  },
  status: {
    volume: 100,
    position: 0,
    duration: 0,
    playing: false,
    loading: false
  }}, action){
  switch (action.type) {
    case 'LOAD_DECK_2':
      return {...state, status: {...state.status, position: 0, playing: false, loading: true}, track: {youtubeId: action.payload.youtubeId, title: action.payload.title}}
    case 'DECK_2_LOADED':
      return {...state, status: {...state.status, loading: false}}
    case 'SET_DURATION_DECK_2':
      return {...state, status: {...state.status, position: 0, playing: false, duration: action.payload.duration}}
    case 'SET_POSITION_DECK_2':
      return {...state, status: {...state.status, position: action.payload.position}}
    case 'TOGGLE_PLAYING_DECK_2':
      return {...state, status: {...state.status, playing: action.payload.playing}}
    case 'ADJUST_VOLUME_DECK_2':
      return {...state, status: {...state.status, volume: action.payload.slider}}
    case 'CROSS_FADE_DECK_2':
      return {...state, crossFader: {active: true, ratio: action.payload.ratio}}
    case 'CROSS_FADE_DECK_1':
    case 'RESET_CROSS_FADE':
      return {...state, crossFader: {active: false, ratio: 50}}
    default:
      return state
  }
}

function pagination(state = {}, action){
  switch (action.type) {
  case "FETCH_TRACKS":
    return action.payload.tokens
  default:
    return state
  }
}

const rootReducer = combineReducers({searchTerm, tracks, queue, crossFader, deck1, deck2, pagination})

export default rootReducer
