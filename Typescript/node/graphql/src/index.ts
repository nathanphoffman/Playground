import { ApolloServer } from "@apollo/server";

const server = new ApolloServer({
  typeDefs: `#graphql
    type Query { hello(name: String): String }
  `,
  resolvers: { Query: { hello: (_: unknown, { name }: { name?: string }) => `Hello, ${name ?? "GraphQL"}` } },
});

// Run a query directly (no HTTP) to keep the demo tiny. Use startStandaloneServer to expose it over HTTP.
const res = await server.executeOperation({ query: 'query { hello(name: "Nate") }' });
console.log(res.body.kind === "single" ? res.body.singleResult.data : res.body);
