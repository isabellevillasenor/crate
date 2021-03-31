import * as state from './state.js'

describe('todosReducer', () => {
  it('should return state if no action is given', () => {
    const actual = dispatch(undefined, {})

    expect(actual).toEqual({
      error: null,
      isLoading: false,
      isAuthenticated: false,
      details: null
    })
  })
  //
  // it('should return an updated state with a new todo', () => {
  //   const action = {
  //     type: 'ADD_TODO',
  //     text: 'Eat a burrito',
  //     id: 15
  //   }
  //
  //   const actual = todosReducer([], action)
  //
  //   expect(actual).toEqual([{
  //     text: 'Eat a burrito',
  //     id: 15,
  //     completed: false
  //   }])
  // })
  //
  // it('should return an updated state with a completed todo', () => {
  //   const action = {
  //     type: 'TOGGLE_TODO',
  //     id: 11
  //   }
  //
  //   const state = [{
  //     text: 'eat a sandwich',
  //     id: 11,
  //     completed: false
  //   }]
  //
  //   const actual = todosReducer(state, action)
  //
  //   expect(actual).toEqual([{
  //     text: 'eat a sandwich',
  //     id: 11,
  //     completed: true
  //   }])
  // })
})
