export const DEFAULT_CONTACT_PAGE = [
  {
    data: {
      pageBy: {
        lienHe: {
          contact: {
            address: {
              location: "Awamileaug Drive, Kensington London, UK",
              title: "Address"
            },
            phone: {
              title: "Phone",
              items: [
                {
                  phone: "+1 (800) 123 456 789",
                  linkPhone: "tel:0357702364"
                },
                {
                  phone: "+2 (800) 123 456 789",
                  linkPhone: "tel:0357702365"
                }
              ]
            },
            email: {
              title: "E-mail",
              items: [
                {
                  email: "info@gmail.com",
                  linkEmail: "mailto:hoangluannguyen2806@gmail.com"
                },
                {
                  email: "info@gmail.com",
                  linkEmail: "mailto:hoangluannguyen28062004@gmail.com"
                }
              ]
            }
          }
        },
        seo: {
          fullHead:
            '<title>LIÊN HỆ - CER</title>\n<meta name="description" content="&nbsp;"/>\n<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>\n<link rel="canonical" href="http://10.10.92.8:8080/lien-he/" />\n<meta property="og:locale" content="vi_VN" />\n<meta property="og:type" content="article" />\n<meta property="og:title" content="LIÊN HỆ - CER" />\n<meta property="og:description" content="&nbsp;" />\n<meta property="og:url" content="http://10.10.92.8:8080/lien-he/" />\n<meta property="og:site_name" content="CER" />\n<meta property="og:updated_time" content="2026-03-16T11:18:30+07:00" />\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:title" content="LIÊN HỆ - CER" />\n<meta name="twitter:description" content="&nbsp;" />\n<meta name="twitter:label1" content="Thời gian để đọc" />\n<meta name="twitter:data1" content="Chưa đến một phút" />\n'
        }
      }
    },
    extensions: {
      debug: [
        {
          type: "DEBUG_LOGS_INACTIVE",
          message:
            "GraphQL Debug logging is not active. To see debug logs, GRAPHQL_DEBUG must be enabled."
        }
      ]
    }
  }
];
