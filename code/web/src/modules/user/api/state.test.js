import * as state from './state.js' // this isn't working because state is an anonymous function...

describe('user state', () => {
  it('should return state if no action is given', () => {
    const actual = dispatch(undefined, {})

    expect(actual).toEqual({
      error: null,
      isLoading: false,
      isAuthenticated: false,
      details: null
    })
  })

  it('should return an updated state when a user logs in', () => {
    // we expect this test to fail unless the seeder data is updated
    // with the new info required for this feature

    const user = {
      name: 'The User',
      email: 'user@crate.com',
      role: '',
      address: '1234 address dr, denver, co',
      description: 'fashion lover',
      image: 'puppy.png',
      products: []
    }

    const action = {
      type: 'SET_USER',
      error: null,
      isLoading: false,
      isAuthenticated: true,
      details: user
    }

    const actual = dispatch(user, action)

    expect(actual).toEqual([user])
  })

  it('should return an updated state when a user updates their email', () => {
    const user = {
      name: 'The User',
      email: 'updated@crate.com',
      role: '',
      address: '1234 address dr, denver, co',
      description: 'fashion lover',
      image: 'puppy.png',
      products: []
    }

    const action = {
      type: 'UPDATE_PROFILE',
      error: null,
      isLoading: false,
      isAuthenticated: true,
      details: user
    }

    const actual = dispatch(user, action)

    expect(actual).toEqual([user])
  })
})
