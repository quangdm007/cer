import { gql } from "@apollo/client";

export const GET_GIOI_THIEU = gql`
  query MyQuery {
    pageBy(uri: "gioi-thieu") {
      id
      gioiThieu {
        introduce {
          title
          content
        }
      }
      seo {
        fullHead
      }
    }
  }
`;
