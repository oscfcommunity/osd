import { graphqlClient } from "@/lib/graphql/graphql.ts";
import { gql } from "graphql-request";

const query = gql`
  query GetTeams {
    teams {
      documentId
      teams {
        id
        title
        description
        teams {
          id
          number
          name
          linkedin
          image {
            url
          }
          roles {
            id
            role
          }
        }
      }
    }
  }
`;

export const teamsData = await graphqlClient.request(query);
