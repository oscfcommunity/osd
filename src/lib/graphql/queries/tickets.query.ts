import { graphqlClient } from "@/lib/graphql/graphql.ts";
import { gql } from "graphql-request";

const query = gql`
  query GetTickets {
    tickets {
      tickets(pagination: { limit: 1000 }) {
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
        extra
        featureTitle
        alert {
          id
          text
          classes
        }
        features {
          id
          featureText
        }
      }
    }
  }
`;

export const ticketsData = await graphqlClient.request(query);
