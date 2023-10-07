import { Github, LinkedIn, Twitter } from '@/lib/icons';

const profile = {
  name: 'Harry Barden',
  title: 'Harry Barden - Software Engineer',
  description: 'Software engineer and creator of things. I write (sometimes) about software, productivity, and life.',
  image: '/images/cover.png',
  twitter: {
    handle: '@bardenha',
  },
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
    internal: {
      main: [
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Projects',
          href: '/#featured-projects',
        },
        {
          title: 'Blog',
          href: '/blog',
        },
        {
          title: 'Uses',
          href: '/uses',
        },
      ],
      footer: [{ title: 'Accessibility statement', href: '/accessibility-statement' }],
    },
    external: [
      { name: 'Twitter', href: profile.links.twitter, icon: <Twitter /> },
      { name: 'LinkedIn', href: profile.links.linkedin, icon: <LinkedIn /> },
      { name: 'GitHub', href: profile.links.github, icon: <Github /> },
    ],
  },
} as const;

export const ABBREVIATIONS = {
  WIP: 'Work in progress',
  TBD: 'To be determined',
  TBC: 'To be confirmed',
};
