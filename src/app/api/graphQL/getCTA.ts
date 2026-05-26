import { gql } from "@apollo/client";

export const GET_CTA = gql`
  query MyQuery {
    pageBy(uri: "cta") {
      cta {
        content {
          link
          text
        }
      }
    }
  }
`;
