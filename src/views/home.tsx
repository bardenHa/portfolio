import { CollectionEntry } from 'astro:content';
import { For, JSX, Show } from 'solid-js';
import { cx } from 'class-variance-authority';

import { constants } from '@/config';
import { Anchor, buttonStyles, Card, Divider, Typography } from '@/lib/components';
import { Github, Instagram, Twitter } from '@/lib/icons';

import { ProjectCard } from './project-card';

interface SocialLink {
  title: string;
  href: string;
  icon: JSX.Element;
}

// TODO: try to move most of this to an astro page. Also add social links to config file
const SOCIAL_LINKS: SocialLink[] = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/bardenha',
    icon: <Twitter />,
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/harry-barden',
    icon: <Instagram />,
  },
  {
    title: 'Github',
    href: 'https://github.com/bardenha',
    icon: <Github />,
  },
];

interface HomeProps {
  projects: CollectionEntry<'projects'>[];
}

export default function Home(props: Readonly<HomeProps>): JSX.Element {
  return (
    <>
      <section class="mt-12" aria-labelledby="intro" aria-describedby="intro-description">
        <Typography.Display id="intro" size="medium">
          Software Engineer creating thoughtful, accessible & intuitive interfaces 🤟🏼
        </Typography.Display>
        <Typography.Paragraph id="intro-description" size="large" variant="subdued" class="mt-16">
          I’m Harry Barden, a UK based Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas explicabo,
          expedita sed pariatur aliquam <Anchor href="#test">inventore</Anchor> voluptas. Dolor facilis quam quia sit
          amet consectetur adipisicing elit. Praesentium.
          <br />I specialise in interface design for web-based applications with a focus on simplicity & usability.
        </Typography.Paragraph>
        <div class="mt-16 flex gap-6">
          <nav class="flex gap-2" aria-label="A list of my social links" id="contact">
            <For each={SOCIAL_LINKS}>
              {link => (
                <Anchor
                  aria-label={link.title}
                  href={link.href}
                  class={cx(buttonStyles({ variant: 'tertiary' }))}
                  noStyle
                  external
                >
                  {link.icon}
                </Anchor>
              )}
            </For>
          </nav>
          {/* TODO: add prop for anchor to use these styles (variant button?) & vice versa */}
          <Anchor noStyle href={`mailto:${constants.profile.links.email}`} class={buttonStyles()}>
            Email me
          </Anchor>
        </div>
      </section>
      <Divider size="large" />
      <section class="flex w-full flex-col gap-5" aria-labelledby="about">
        <Typography.Heading size={'xlarge'} id="about">
          A little bit about me
        </Typography.Heading>
        <div class="flex w-full flex-col items-stretch gap-5 lg:flex-row-reverse">
          <img
            src="/me.jpeg"
            alt="Harry Barden smiling"
            title="It's me!"
            class="overflow-hidden rounded-xl object-cover"
          />
          <Card as="section" aria-labelledby="about" class="h-c flex-initial">
            <Typography.Heading as="h3" size="xsmall" class="mb-2">
              Where I'm from
            </Typography.Heading>
            <Typography.Paragraph variant="subdued" size="large">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas explicabo, expedita sed pariatur aliquam
              inventore voluptas facilis quam quia tempora ut, minima corrupti! Tenetur doloribus reiciendis dicta,
              quasi sunt temporibus neque explicabo quis quia cum impedit perferendis voluptas debitis maxime dolor?
            </Typography.Paragraph>
            <Typography.Heading as="h3" size="xsmall" class="mb-2 mt-5">
              What I used to do
            </Typography.Heading>
            <Typography.Paragraph variant="subdued" size="large">
              I'm a software engineer with a passion for building beautiful, functional, and accessible user interfaces.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography.Paragraph>
            <Typography.Heading as="h3" size="xsmall" class="mb-2 mt-5">
              What I do now
            </Typography.Heading>
            <Typography.Paragraph variant="subdued" size="large">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, aspernatur{' '}
              <Anchor href="https://example.com" external>
                Pledge
              </Anchor>
              . Ipsum facilis quam quia tempor temporibus.
            </Typography.Paragraph>
          </Card>
        </div>
      </section>
      <Show when={props.projects.length > 0}>
        <Divider size="large" />
        <section aria-labelledby="featured-projects" aria-describedby="featured-projects-description">
          <Typography.Heading size={'xlarge'} id="featured-projects">
            Featured projects
          </Typography.Heading>
          <Typography.Paragraph variant="subdued" id="featured-projects-description" class="mt-1">
            A collection of some side projects that have shipped recently.
          </Typography.Paragraph>
          <ul
            class="mt-8 grid w-full grid-cols-1 gap-5"
            aria-labelledby="featured-projects"
            aria-describedby="featured-projects-description"
          >
            {/* In future we'll want to filter by a featured property */}
            <For each={props.projects.slice(0, 4)}>
              {project => (
                <li>
                  <ProjectCard project={project} />
                </li>
              )}
            </For>
          </ul>
        </section>
      </Show>
    </>
  );
}

// TODO: a11y, see https://benmyers.dev/blog/aria-labels-and-descriptions/ html for example
// TODO: see if we can enforce usage of aria-label for particular elements, maybe eslint rule?
