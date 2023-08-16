/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'ben.codes',
  author: 'Benoit Tremblay',
  headerTitle: 'ben.codes',
  description: 'My thoughts on software development',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://ben.codes',
  siteRepo: 'https://github.com/bendotcodes/bendotcodes',
  siteLogo: '/static/images/logo.svg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'me@ben.codes',
  github: 'https://github.com/bendotcodes',
  twitter: 'https://twitter.com/bendotcodes',
  youtube: 'https://youtube.com/@bendotcodes',
  linkedin: 'https://www.linkedin.com/in/benoit-tremblay-b4197422/',
  threads: 'https://threads.net/@bendotcodes',
  locale: 'en-US',
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-7LG3NNV50C',
    },
  },
  newsletter: {
    provider: 'mailchimp',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

module.exports = siteMetadata
