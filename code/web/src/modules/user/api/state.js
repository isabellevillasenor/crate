// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT, UPDATE_PROFILE } from './actions'

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: {
    "name": "",
    "role": "",
    "email": "",
    "image": "",
    "description": "",
    "address": ""
  }
}

// State
export default (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
    let detailsup = userInitialState.details.keys


      console.log('SET USER inSTATE', {
        ...state,
        details:{...action.user}})

      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user
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
