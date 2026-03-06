import { graphqlClient } from "@/lib/graphql/graphql.ts";
import { gql } from "graphql-request";
import type { SponsorsQueryResponse } from "@/types/sponsors.types.ts";

const query = gql`
  query GetSponsors {
    sponsors {
      documentId
      sponsors {
        id
        title
        sponsors {
          id
          number
          name
          website
          logo {
            url
          }
        }
      }
    }
  }
`;

export const sponsorsData = await graphqlClient.request<SponsorsQueryResponse>(query);
