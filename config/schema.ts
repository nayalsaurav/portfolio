import profile from './profile';

const SITE_URL = profile.contact.website.replace(/\/$/, '');

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: profile.name,
    url: SITE_URL,
    jobTitle: profile.title,
    description: profile.bio,
    sameAs: [
      profile.contact.github,
      profile.contact.linkedin,
      profile.contact.twitter,
      profile.contact.leetcode,
    ],
    knowsAbout: profile.skills.flatMap((s) => s.skills),
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${profile.name} Portfolio`,
    description: profile.bio,
    publisher: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
    },
    inLanguage: 'en-IN',
  };
}

export function getPortfolioPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#portfolio`,
    url: SITE_URL,
    name: `${profile.name} – Software Developer Portfolio`,
    about: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
    },
  };
}

export function getProjectsSchema() {
  return profile.projects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    '@id': project.github,
    name: project.name,
    description: project.description,
    codeRepository: project.github,
    programmingLanguage: project.techStack,
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
    },
    url: project.live || project.github,
    dateCreated: project.year,
  }));
}
