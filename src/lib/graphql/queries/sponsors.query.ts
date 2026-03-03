import { gql } from "graphql-request";
import { graphqlClient } from "../graphql";

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
