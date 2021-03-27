// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import CrateType from '../crate/types'
import ProductType from '../product/types'

// Crate type
const crateProductsType = new GraphQLObjectType({
  name: 'crateProducts',
  description: 'Crate Products Type',

  fields: () => ({
    id: { type: GraphQLInt },
    crateId: { type: CrateType },
    productId: { type: ProductType }
  })
})

export default crateProductsType