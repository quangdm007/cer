export type TMenus = {
  path: string;
  title: string;
  childs?: {
    path: string;
    title: string;
  }[];
}[];

export const menus: TMenus = [
  {
    path: "/",
    title: "Trang chủ"
  },
  {
    path: "/gioi-thieu",
    title: "Giới thiệu"
  },
  {
    path: "/nganh-hoc",
    title: "Ngành học",
    childs: [
      {
        path: "/nganh-hoc/nganh-cong-nghe-ky-thuat-dien-dien-tu",
        title: "Công nghệ kỹ thuật điện, điện tử"
      },
      {
        path: "/nganh-hoc/nganh-ky-thuat-may-lanh-va-dieu-hoa-khong-khi",
        title: "Kỹ thuật máy lạnh và điều hòa không khí"
      },
      {
        path: "/nganh-hoc/nganh-cham-soc-sac-dep",
        title: "Chăm sóc sắc đẹp"
      },
      {
        path: "/nganh-hoc/nganh-ngon-ngu-trung",
        title: "Ngôn ngữ Trung"
      }
    ]
  },
  {
    path: "/tin-tuc",
    title: "Tin tức",
    childs: [
      {
        path: "/tin-tuc/ban-tin",
        title: "Bản tin"
      },
      {
        path: "/tin-tuc/thong-bao",
        title: "Thông báo"
      },
      {
        path: "/tin-tuc/su-kien",
        title: "Sự kiện"
      }
    ]
  },
  {
    path: "/lich-khai-giang",
    title: "Lịch khai giảng"
  },
  {
    path: "/lien-he",
    title: "Liên hệ"
  }
];
