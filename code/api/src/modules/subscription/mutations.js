// Imports
import { GraphQLInt, GraphQLString } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { create, remove, update } from './resolvers'

// Subscription create
export const subscriptionCreate = {
  type: SubscriptionType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Subscription remove
export const subscriptionRemove = {
  type: SubscriptionType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

// Update
export const subscriptionUpdate = {
  type: SubscriptionType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    delivery_date: {
      name: 'delivery_date',
      type: GraphQLString
    }
  },
  resolve: update
}
