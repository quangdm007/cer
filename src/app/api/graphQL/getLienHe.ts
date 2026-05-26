import { gql } from "@apollo/client";

export const GET_LIEN_HE = gql`
  query MyQuery {
    pageBy(uri: "lien-he") {
      lienHe {
        contact {
          address {
            location
            title
          }
          phone {
            title
            items {
              phone
              linkPhone
            }
          }
          email {
            title
            items {
              email
              linkEmail
            }
          }
        }
      }
      seo {
        fullHead
      }
    }
  }
`;
