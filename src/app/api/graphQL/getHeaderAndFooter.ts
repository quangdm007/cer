import { gql } from "@apollo/client";

export const GET_HEADER_AND_FOOTER = gql`
  query MyQuery {
    pageBy(uri: "trang-chu") {
      trangChu {
        header {
          logo {
            node {
              mediaItemUrl
            }
          }
          titlephone
          phone
          titleemail
          email
        }
        footer {
          logo {
            node {
              mediaItemUrl
            }
          }
          address
          copyright
          description
          email
          linkFacebook
          linkInstagram
          linkWechat
          linkX
          linkYoutube
          phone
          textFollow
          title1
          title2
          title3
        }
      }
    }
  }
`;
