export const DEFAULT_COURSE_SCHEDULE_PAGE = [
  {
    data: {
      pageBy: {
        lichKhaiGiang: {
          title: "Khai giảng dự kiến khóa mới nhất",
          textColor: "(Tuyển sinh từ bằng THPT hoặc tương đương trở lên)",
          countdownTimer: [
            {
              location: "Hà Nội",
              date: "2026-04-16T07:00:00+00:00"
            },
            {
              location: "TP.Hồ Chí Minh",
              date: "2026-05-14T08:00:00+00:00"
            }
          ],
          textButton: "NỘP HỒ SƠ NGAY",
          titleImage: "Hình ảnh sự kiện nổi bật",
          images: [
            {
              image: {
                node: {
                  mediaItemUrl:
                    "http://10.10.92.8:8080/wp-content/uploads/2026/03/student-1.png"
                }
              }
            },
            {
              image: {
                node: {
                  mediaItemUrl:
                    "http://10.10.92.8:8080/wp-content/uploads/2026/03/image-post-1.png"
                }
              }
            },
            {
              image: {
                node: {
                  mediaItemUrl:
                    "http://10.10.92.8:8080/wp-content/uploads/2026/03/slide-01-1.png"
                }
              }
            },
            {
              image: {
                node: {
                  mediaItemUrl:
                    "http://10.10.92.8:8080/wp-content/uploads/2026/03/slide-02-1.png"
                }
              }
            }
          ]
        },
        seo: {
          fullHead:
            '<title>LỊCH KHAI GIẢNG - CER</title>\n<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>\n<link rel="canonical" href="http://10.10.92.8:8080/lich-khai-giang/" />\n<meta property="og:locale" content="vi_VN" />\n<meta property="og:type" content="article" />\n<meta property="og:title" content="LỊCH KHAI GIẢNG - CER" />\n<meta property="og:url" content="http://10.10.92.8:8080/lich-khai-giang/" />\n<meta property="og:site_name" content="CER" />\n<meta property="og:updated_time" content="2026-03-16T09:31:43+07:00" />\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:title" content="LỊCH KHAI GIẢNG - CER" />\n<meta name="twitter:label1" content="Thời gian để đọc" />\n<meta name="twitter:data1" content="Chưa đến một phút" />\n'
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
