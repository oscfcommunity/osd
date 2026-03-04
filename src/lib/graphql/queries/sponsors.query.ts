import { graphqlClient } from "@/lib/graphql/graphql.ts";
import { gql } from "graphql-request";

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

export const sponsorsData = await graphqlClient.request(query);
