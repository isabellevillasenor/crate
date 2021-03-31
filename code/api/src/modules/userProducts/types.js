// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'
import UserType from '../user/types'
import ProductType from '../product/types'

// Crate type
const UserProductsType = new GraphQLObjectType({
  name: 'userProducts',
  description: 'User Products Type',

  fields: () => ({
    id: { type: GraphQLInt },
    userId: { type: UserType },
    productId: { type: ProductType },
    delivered_date: { type: GraphQLString },
    kept: { type: GraphQLBoolean }
  })
})

export default UserProductsType
