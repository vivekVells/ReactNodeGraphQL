const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
    type Query {
        info: String!
    }
`

const resolvers = {
    // this will return "API of the Hackernews node"
    Query: {
        info: () => `API of the Hackernews node`
    }

    // this will error out as "Error: Cannot return null for non-nullable field Query.info." since 
    //  info string is expected to be non-nullable
    // Query: {
    //     info: () => null
    // }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => { console.log("server started @http://localhost:4000... "); })