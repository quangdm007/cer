export const replaceSeoRM = (input?: string, type: string = "") => {
  if (!input) return "";

  return input
    .replace(
      `link rel="canonical" href="http://10.10.92.8:8080`,
      `link rel="canonical" href="https://ecer.vn${type}`
    )
    .replace(
      `meta property="og:url" content="http://10.10.92.8:8080`,
      `meta property="og:url" content="https://ecer.vn${type}`
    )
    .replace(
      `"@id":"http://10.10.92.8:8080/#organization"`,
      `"@id":"https://ecer.vn${type}/#organization"`
    )
    .replace(`http://10.10.92.8:8080/#logo`, `https://ecer.vn${type}/#logo`)
    .replace(
      `http://10.10.92.8:8080/#website`,
      `https://ecer.vn${type}/#website`
    )
    .replace(
      `http://10.10.92.8:8080/#webpage`,
      `https://ecer.vn${type}/#webpage`
    )
    .replace(`"url":"http://10.10.92.8:8080"`, `"url":"https://ecer.vn${type}"`)
    .replace(
      `"@type":"WebPage","@id":"http://10.10.92.8:8080`,
      `"@type":"WebPage","@id":"https://ecer.vn${type}`
    )
    .replace(
      `#webpage","url":"http://10.10.92.8:8080`,
      `#webpage","url":"https://ecer.vn${type}`
    )
    .replace(
      `"mainEntityOfPage":{"@id":"http://10.10.92.8:8080`,
      `"mainEntityOfPage":{"@id":"https://ecer.vn${type}`
    )
    .replace(
      `"worksFor":{"@id":"http://10.10.92.8:8080/#organization`,
      `"worksFor":{"@id":"https://ecer.vn${type}/#organization`
    )
    .replace(
      `"sameAs":["http://10.10.92.8:8080"]`,
      `"sameAs":["https://ecer.vn${type}"]`
    );
};
