// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createSchema, createYoga } from 'graphql-yoga'
import schemaTypeDefs from 'graphql/schema.graphql';
import resolvers from 'graphql/resolvers';
 
export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false
  }
}

const schema = createSchema({
  typeDefs: schemaTypeDefs,
  resolvers
})
 
export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql'
})
