import { combineReducers } from 'redux'

const defaultTrack = {id: 'NZWS6CITutY', title: ''}

function tracks(state = [], action){
  switch (action.type) {
    case "FETCH_TRACKS":
      return action.payload.tracks
    default:
      return state
  }
}

function deck1(state = {
  position: '1',
  track: {
    id: defaultTrack.id,
    title: defaultTrack.title
  },
  status: {
    volume: 50,
    position: 0,
    playing: false
  }}, action){
  switch (action.type) {
    case 'LOAD_DECK_1':
      return {...state, track: {id: action.payload.id, title: action.payload.title}}
    case 'SET_POSITION_DECK_1':
      return {...state, status: {...state.status, position: action.payload.position}}
    case 'TOGGLE_PLAYING_DECK_1':
      return {...state, status: {...state.status, playing: action.payload.playing}}
    case 'ADJUST_VOLUME_DECK_1':
      return {...state, status: {...state.status, volume: action.payload.slider}}
    case 'CROSSFADE':

    default:
      return state
  }
}

function deck2(state = {
  position: '2',
  track: {
    id: defaultTrack.id,
    title: defaultTrack.title
  },
  status: {
    volume: 50,
    position: 0,
    playing: false
  }}, action){
  switch (action.type) {
    case 'LOAD_DECK_2':
      return {...state, track: {id: action.payload.id, title: action.payload.title}}
    case 'SET_POSITION_DECK_2':
      return {...state, status: {...state.status, position: action.payload.position}}
    case 'SET_POSITION_DECK_2':
      return {...state, status: {...state.status, position: action.payload.position}}
    case 'TOGGLE_PLAYING_DECK_2':
      return {...state, status: {...state.status, playing: action.payload.playing}}
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

const rootReducer = combineReducers({tracks, deck1, deck2, pagination})

export default rootReducer
