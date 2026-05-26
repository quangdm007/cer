import { gql } from "@apollo/client";

export const GET_LICH_KHAI_GIANG = gql`
  query MyQuery {
    pageBy(uri: "lich-khai-giang") {
      lichKhaiGiang {
        title
        textColor
        countdownTimer {
          location
          date
        }
        textButton
        titleImage
        images {
          image {
            node {
              mediaItemUrl
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
