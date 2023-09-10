## Packages

- `@apollo/server`: Provides a full-fledged, spec-compliant GraphQL server.
- `graphql`: Provides the core logic for parsing and validating GraphQL queries.
- `graphql-tag`: Provides the gql template literal that we'll use in a moment.

```bash
npm install @apollo/server graphql graphql-tag
```

- `@graphql-tools/mock`: Enables Apollo Server to return simulated data for GraphQL operations based on your server's schema. [mocking](https://the-guild.dev/graphql/tools/docs/mocking) and [more](https://www.apollographql.com/docs/apollo-server/testing/mocking/)
- `@graphql-tools/schema`: Allows you to create a GraphQL.js GraphQLSchema instance from GraphQL schema language using the function makeExecutableSchema. [schema](https://the-guild.dev/graphql/tools/docs/generate-schema)

```bash
npm install @graphql-tools/mock @graphql-tools/schema
```

- `@apollo/datasource-rest`: Used for fetching data from a REST API and exposing it via GraphQL within Apollo Server. [fetching](https://www.apollographql.com/docs/apollo-server/data/fetching-rest/)

```bash
npm install @apollo/datasource-rest
```

## Extensions

- `GraphQL: Syntax Highlighting`: Adds syntax highlighting support for .graphql & embedded support for javascript, typescript, vue, markdown, python, php, reason, ocaml and rescript. [here](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax)
