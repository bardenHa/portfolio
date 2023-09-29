// TODO: Update all of this, mostly placeholder for now
const profile = {
  name: 'Harry Barden',
  title: 'Harry Barden - Software Engineer',
  description:
    'Software engineer and linux enthusiast interested in user/dev experience, design systems, statically typed languages and functional programming',
  image: '/images/cover.png',
  username: 'bardenha',
  links: {
    email: 'bardenha+portfolio@gmail.com',
    github: 'https://github.com/bardenha',
    twitter: 'https://twitter.com/bardenha',
    linkedin: 'https://linkedin.com/in/harry-barden',
  },
};

export const constants = {
  profile,
  site: import.meta.env.SITE,
  links: {
    internal: [
      { name: 'Home', link: '/' },
      { name: 'Blog', link: '/blog' },
      { name: 'Projects', link: '/projects' },
      { name: 'Uses', link: '/uses' },
    ],
    external: [
      { name: 'Email', link: profile.links.email },
      { name: 'GitHub', link: profile.links.github },
      { name: 'Twitter', link: profile.links.twitter },
      { name: 'LinkedIn', link: profile.links.linkedin },
    ],
  },
  blog: {
    // TODO: update
    fallbackImage: '/images/cover.png',
  },
} as const;
