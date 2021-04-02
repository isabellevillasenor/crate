// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'
import UserType from '../user/types'
import ProductType from '../product/types'

// Crate type
const UserProductType = new GraphQLObjectType({
  name: 'userProduct',
  description: 'User Product Type',

  fields: () => ({
    id: { type: GraphQLInt },
    userId: { type: GraphQLInt },
    productId: { type: GraphQLInt },
    deliveryDate: { type: GraphQLString },
    kept: { type: GraphQLBoolean }
  })
})

export { UserProductType }
