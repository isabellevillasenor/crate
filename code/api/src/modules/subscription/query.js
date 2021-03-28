// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { getAll, getByUser, get } from './resolvers'

// Subscriptions All
export const subscriptions = {
  // no args needed to retrieve all subscriptions
  type: new GraphQLList(SubscriptionType),
  resolve: getAll
}

// Subscriptions by user
export const subscriptionsByUser = {
  // need a user, no args?
  type: new GraphQLList(SubscriptionType),
  resolve: getByUser
}

// Subscription By id
export const subscription = {
  // need arg of id to retrieve subscription by id
  type: SubscriptionType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}
