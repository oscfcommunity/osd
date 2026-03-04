import { graphqlClient } from "@/lib/graphql/graphql.ts";
import { gql } from "graphql-request";

const query = gql`
  query GetSpeakers {
    speakers(status: PUBLISHED) {
      documentId
      currentSpeakers {
        id
        title
        segment

        speakers {
          id
          name
          position
          company
          event
          presentationTitle
          link
          presentationLink

          image {
            url
          }

          tags {
            id
            tagName
          }
        }
      }

      pastSpeaker {
        id
        title
        segment

        speakers {
          id
          name
          position
          company
          event
          presentationTitle
          link
          presentationLink

          image {
            url
          }

          tags {
            id
            tagName
          }
        }
      }
    }
  }
`;

export const speakersData = await graphqlClient.request(query);
