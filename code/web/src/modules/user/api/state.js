// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT, UPDATE_PROFILE } from './actions'

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: {
    "name": "The User",
    "role": "USER",
    "email": "user@test.com",
    "image": 'https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=768:*', 
    "description": 'so rad', 
    "address": '666 hell'
  }
}

// State
export default (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      console.log('inSTATE', { 
        ...state, 
        details:{...action.user}})
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: {...action.user, hi: 'hi'},
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }

    case UPDATE_PROFILE:
      console.log('inSTATEup', { 
        ...state, 
        details:{...action.user}})
      return {
        ...state,
        details: action.user
      }

    default:
      return state
  }
}
