import { graphqlClient } from "@/lib/graphql/graphql.ts";
import { gql } from "graphql-request";
import type { TeamsQueryResponse } from "@/types/teams.types.ts";

const query = gql`
  query GetTeams {
    teams {
      documentId
      teams(pagination: { limit: 1000 }) {
        id
        title
        description
        teams(pagination: { limit: 1000 }) {
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

export const teamsData = await graphqlClient.request<TeamsQueryResponse>(query);
