import { combineReducers } from 'redux'

const defaultVideo = {id: 'NZWS6CITutY', title: 'Search a Song'}

function videos(state = [], action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      return action.payload.videos
    default:
      return state
  }
}

function leftVideo(state = {id: defaultVideo.id, title: defaultVideo.title}, action){
  switch (action.type) {
    case 'LOAD_LEFT_VIDEO':
      return {id: action.payload.id, title: action.payload.title}
    default:
      return state
  }
}

function rightVideo(state = {id: defaultVideo.id, title: defaultVideo.title}, action){
  switch (action.type) {
    case 'LOAD_RIGHT_VIDEO':
      return {id: action.payload.id, title: action.payload.title}
    default:
      return state
  }
}

function pagination(state = {}, action){
  switch (action.type) {
  case "FETCH_VIDEOS":
    return action.payload.tokens
  default:
    return state
  }
}

const rootReducer = combineReducers({videos, leftVideo, rightVideo, pagination})

export default rootReducer
