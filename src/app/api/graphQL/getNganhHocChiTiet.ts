import { gql } from "@apollo/client";

export const GET_NGANH_HOC_CHI_TIET = gql`
  query MyQuery($uri: String!) {
    pageBy(uri: $uri) {
      title
      nganh {
        nameBranch
        content
      }
    }
  }
`;
export const GET_SEO_NGANH_CHAM_SOC_SAC_DEP = gql`
  query MyQuery {
    pageBy(uri: "nganh-hoc/nganh-cham-soc-sac-dep") {
      seo {
        fullHead
      }
    }
  }
`;
export const GET_SEO_NGANH_CONG_NGHE_KY_THUAT_DIEN_DIEN_TU = gql`
  query MyQuery {
    pageBy(uri: "nganh-hoc/nganh-cong-nghe-ky-thuat-dien-dien-tu") {
      seo {
        fullHead
      }
    }
  }
`;
export const GET_SEO_NGANH_KY_THUAT_MAY_LANH_VA_DIEU_HOA_KHONG_KHI = gql`
  query MyQuery {
    pageBy(uri: "nganh-hoc/nganh-ky-thuat-may-lanh-va-dieu-hoa-khong-khi") {
      seo {
        fullHead
      }
    }
  }
`;
export const GET_SEO_NGANH_NGON_NGU_TRUNG = gql`
  query MyQuery {
    pageBy(uri: "nganh-hoc/nganh-ngon-ngu-trung") {
      seo {
        fullHead
      }
    }
  }
`;

export const GET_SEO_NGANH_HOC = gql`
  query MyQuery {
    pageBy(uri: "nganh-hoc") {
      seo {
        fullHead
      }
    }
  }
`;
