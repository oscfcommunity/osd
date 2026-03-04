import { env } from "@/lib/env.ts";
import { GraphQLClient } from "graphql-request";

const endpoint = env.STRAPI_GRAPHQL_URL || "http://localhost:1337/graphql";

if (!endpoint) {
  throw new Error("STRAPI_GRAPHQL_URL is not defined");
}

const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${env.STRAPI_API_TOKEN}`,
  },
});

export { graphqlClient };
