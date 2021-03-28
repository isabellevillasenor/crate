// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Crate type
// think another 'model', define what data type is located in the crate tabel, and create a CrateType specifically
const CrateType = new GraphQLObjectType({
  name: 'crate',
  description: 'Crate Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default CrateType
