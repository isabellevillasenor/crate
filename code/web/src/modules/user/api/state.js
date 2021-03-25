// App Imports
import { isEmpty } from '../../../setup/helpers' // ANNOTATION: imports a helper funtion that checks if an object is empty or not
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions' // ANNOTATION: imports actions

// Initial State
// ANNOTATION: sets initial state for the user
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// State
export default (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user, // ANNOTATION: gets user details and sets them to state
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

    // ANNOTATION: add new case(s) here for new features

    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }

    default:
      return state // ANNOTATION: always have to have a default state in redux
  }
}
