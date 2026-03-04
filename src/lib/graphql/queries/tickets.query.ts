import { graphqlClient } from "@/lib/graphql/graphql.ts";
import { gql } from "graphql-request";

const query = gql`
  query GetTickets {
    tickets {
      documentId
      tickets {
        id
        name
        description
        price
        originalPrice
        discountedPrice
        couponCode
        startsOn
        popular
        available
        fillingFast
        konfhubUrl
        linkText
        alert {
          id
          text
          classes
        }
      }
    }
  }
`;

export const ticketsData = await graphqlClient.request(query);
