import { gql } from "@apollo/client";

export const GET_CAM_ON = gql`
  query MyQuery {
    pageBy(uri: "cam-on") {
      seo {
        fullHead
      }
    }
  }
`;
