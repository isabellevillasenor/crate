// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'
import cookie from 'js-cookie'
import { number } from 'prop-types'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'AUTH/LOGIN_RESPONSE'
export const SET_USER = 'AUTH/SET_USER'
export const LOGOUT = 'AUTH/LOGOUT'
export const UPDATE_PROFILE = 'AUTH/UPDATE_PROFILE'

// Actions

// Set a user after login or using localStorage token
export function setUser(token, user) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }

  return { type: SET_USER, user }
}

// Login a user using credentials
export function login(userCredentials, isLoading = true) {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      isLoading
    })
    return axios.post(routeApi, query({
      operation: 'userLogin',
      variables: userCredentials,
      fields: ['user {name, email, role, id, address, description, image}', 'token']
    }))
      .then(response => {
        let error = ''

        if (response.data.errors && response.data.errors.length > 0) {
          error = response.data.errors[0].message
        } else if (response.data.data.userLogin.token !== '') {
          const token = response.data.data.userLogin.token
          const user = response.data.data.userLogin.user

          dispatch(setUser(token, user))

          loginSetUserLocalStorageAndCookie(token, user)
        }

        dispatch({
          type: LOGIN_RESPONSE,
          error
        })
      })
      .catch(error => {
        dispatch({
          type: LOGIN_RESPONSE,
          error: 'Please try again'
        })
      })
  }
}

// Set user token and info in localStorage and cookie
export function loginSetUserLocalStorageAndCookie(token, user) {
  // Update token
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('user', JSON.stringify(user))

  // Set cookie for SSR
  cookie.set('auth', { token, user }, { path: '/' })
}

// Register a user
export function register(userDetails) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'userSignup',
      variables: userDetails,
      fields: ['id', 'name', 'email']
    }))
  }
}

// Log out user and remove token from localStorage
export function logout() {
  return dispatch => {
    logoutUnsetUserLocalStorageAndCookie()

    dispatch({
      type: LOGOUT
    })
  }
}

// Unset user token and info in localStorage and cookie
export function logoutUnsetUserLocalStorageAndCookie() {
  // Remove token
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')

  // Remove cookie
  cookie.remove('auth')
}

// Get user gender
export function getGenders() {
  return dispatch => {
    return axios.post(routeApi, query({
      operation: 'userGenders',
      fields: ['id', 'name']
    }))
  }
}


//Mutate profile data (email, address, description)
export function updateUserProfile(updatedUser) {
  console.log('updatedUser', updatedUser)
  //inside of updatedUser, there's now an id that can be interpolated & sent to the server
  return dispatch => {
    return axios.post(routeApi,
      mutation({
        operation: 'userUpdate',
        variables: updatedUser,
        fields: ['id', 'name', 'role', 'email', 'image', 'description', 'address']
      })
    ).then(response => {
    console.log('IN ACTION RESPONSE', response)

    const userStuff = response.user
    return dispatch => {
      dispatch({
        type: UPDATE_PROFILE,
        user: {
          userStuff
        }
      })
    }
  })
}}

export function getUserProfile(id) {
  console.log('route', routeApi)
  return dispatch => {
    return axios.post(routeApi,
      query({
        operation: 'user',
        variable: {id: id},
        fields: [
            'name',
            'role',
            'email',
            'address',
            'description',
            'image',
            'products'
        ]
      })).then(response => {
    console.log('IN ACTION RESPONSE', response)

    const userStuff = response.user
    return dispatch => {
      dispatch({
        type: UPDATE_PROFILE,
        user: {
          userStuff
        }
      })
    }
  })
}}

//This is for the 'my-products' page
//get delivery history (all products)
//specifies that for each product in that list of 'productids', we want a subset of the product information
// image, name, description, delivered date, kept
// export function getUserProduct(userID) {
//   let queryObject = query({
//     operation: 'getUserProduct',
//     variables: userID,
//     fields: ['image', 'name', 'description', 'deliveredDate', 'kept']
//   })
//   return dispatch => {
//     return axios.post(routeApi, queryObject).then(response => {
//       return dispatch({
//         type: GET_PRODUCTS,
//         user,
//       })
//     })
//   }
// }

//Mutate profile delivery dates
//this needs to be mapped over all the users' subscriptions and called for every subscription
// export function updateUserProductsDeliveryDate(listOfUserProducts, updatedDate) {
//   listOfUserProducts.forEach(product => {
//     return dispatch => {
//       return axios.post(routeApi, mutation({
//         operation: 'subscriptionUpdate',
//         variables: updatedDate,
//         fields: [product.deliveryDate]
//       })).then(response => {
//         if (!response.status === 200) {
//           throw new Error('Whoops, something went wrong')
//         }
//         const product = response.data.product
//         return dispatch({
//           type: UPDATE_PRODUCTS,
//           user,
//         })
//       })
//     }
//   })
// }
