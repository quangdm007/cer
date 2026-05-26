import { gql } from "@apollo/client";

export const GET_ALL_NGANH_HOC = gql`
  query MyQuery {
    pageBy(uri: "trang-chu") {
      trangChu {
        courseSection {
          card {
            description
            link
            title
            image {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_SEO_ALL_NGANH_HOC = gql`
  query MyQuery {
    pageBy(uri: "nganh-hoc") {
      seo {
        fullHead
      }
    }
  }
`;
