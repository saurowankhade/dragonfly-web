// Helpers to build page-specific JSON-LD. The sitewide Organization, WebSite
// and SoftwareApplication entities are defined once in app/layout.js and
// referenced here by @id, so each page only adds what is specific to it.

export const SITE_URL = "https://www.usedragonfly.xyz";

export function graph(nodes) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

// A WebPage node tied to the sitewide website and software application.
export function webPage({ path, name, description, image }) {
  const url = `${SITE_URL}${path}`;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#app` },
    inLanguage: "en",
    ...(image ? { primaryImageOfPage: `${SITE_URL}${image}` } : {}),
  };
}

// A BreadcrumbList from a trail of { name, path } steps.
export function breadcrumb(trail) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}

// A FAQPage node from [question, answer] pairs.
export function faqPage(pairs) {
  return {
    "@type": "FAQPage",
    mainEntity: pairs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}


export function blogPosting({ path, title, description, date, updated, image, tags }) {
  const url = `${SITE_URL}${path}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    datePublished: date,
    dateModified: updated,
    author: {
      "@type": "Person",
      name: "Saurabh Wankhade",
      url: "https://sauro.dev",
    },
    publisher: { "@id": `${SITE_URL}/#org` },
    about: { "@id": `${SITE_URL}/#app` },
    image: `${SITE_URL}${image}`,
    keywords: tags.join(", "),
    inLanguage: "en",
  };
}
