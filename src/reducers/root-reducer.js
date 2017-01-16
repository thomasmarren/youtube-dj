import { combineReducers } from 'redux'

const defaultDeck1 = {id: 'A-tE4Is0I5M', title: 'MF DOOM - My Favorite Ladies'}
const defaultDeck2 = {id: 'UuHHzRuSVYQ', title: 'Gramatik - Dungeon Sound'}

function tracks(state = [], action){
  switch (action.type) {
    case "FETCH_TRACKS":
      return action.payload.tracks
    default:
      return state
  }
}

function crossFader(state = {slider: 50}, action){
  switch (action.type) {
    case 'CROSS_FADE_DECK_1':
    case 'CROSS_FADE_DECK_2':
    case 'RESET_CROSS_FADE':
      return {slider: action.payload.slider}
    default:
      return state
  }
}

function deck1(state = {
  position: '1',
  track: {
    id: defaultDeck1.id,
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
    playing: false
  }}, action){
  switch (action.type) {
    case 'LOAD_DECK_1':
      return {...state, track: {id: action.payload.id, title: action.payload.title}}
    case 'SET_DURATION_DECK_1':
      return {...state, status: {...state.status, duration: action.payload.duration}}
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
    id: defaultDeck2.id,
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
    playing: false
  }}, action){
  switch (action.type) {
    case 'LOAD_DECK_2':
      return {...state, track: {id: action.payload.id, title: action.payload.title}}
    case 'SET_DURATION_DECK_2':
      return {...state, status: {...state.status, duration: action.payload.duration}}
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

const rootReducer = combineReducers({tracks, crossFader, deck1, deck2, pagination})

export default rootReducer
