import { gql } from "@apollo/client";

export const GET_TRANG_CHU = gql`
  query MyQuery {
    pageBy(uri: "trang-chu") {
      trangChu {
        banner {
          image {
            node {
              mediaItemUrl
            }
          }
        }
        featuresSection {
          description
          title
        }
        aboutSection {
          description
          idVideo
          number
          numberYear
          text
          textColor
          textColorInBox
          textVideo
          textYear
          title
          image {
            node {
              mediaItemUrl
            }
          }
          items {
            text
          }
        }
        courseSection {
          description
          textColorInTheBox
          title
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
        certificateSection {
          description
          idVideo
          linkButton
          textButton
          textColorInTheBox
          title
          items {
            text
          }
          images {
            node {
              mediaItemUrl
            }
          }
        }
        statsSection {
          description
          title
          box {
            label
            number
            suffix
          }
        }
        testimonialSection {
          tag
          title
          box {
            content
            name
            rating
            role
            textColor
            avatar {
              node {
                mediaItemUrl
              }
            }
          }
        }
        newsSection {
          description
          tag
          title
        }
      }
      seo {
        fullHead
      }
    }
  }
`;
