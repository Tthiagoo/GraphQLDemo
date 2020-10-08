const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')

const prisma = new PrismaClient()
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')

// 1

<<<<<<< HEAD

=======
const resolvers = {
  Query,
  Mutation,
  User,
  Link
}
>>>>>>> 775b31f41cb6e7cf5f34d715bafcc1d4f28d2ee9
// 1
const resolvers = {
  Query,
  Mutation,
  User,
  Link
}

// 3

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))

