import { combineReducers } from 'redux'

const defaultTrack = {id: 'NZWS6CITutY', title: 'Search a Song'}

function tracks(state = [], action){
  switch (action.type) {
    case "FETCH_TRACKS":
      return action.payload.tracks
    default:
      return state
  }
}

function leftDeck(state = {track: {id: defaultTrack.id, title: defaultTrack.title}}, action){
  switch (action.type) {
    case 'LOAD_LEFT_DECK':
      return {track: {id: action.payload.id, title: action.payload.title}}
    default:
      return state
  }
}

function rightDeck(state = {track: {id: defaultTrack.id, title: defaultTrack.title}}, action){
  switch (action.type) {
    case 'LOAD_RIGHT_DECK':
      return {track: {id: action.payload.id, title: action.payload.title}}
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

const rootReducer = combineReducers({tracks, leftDeck, rightDeck, pagination})

export default rootReducer
