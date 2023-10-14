import { CollectionEntry } from 'astro:content';
import { For, JSX, Show } from 'solid-js';
import { cx } from 'class-variance-authority';

import { constants } from '@/config';
import { Anchor, buttonStyles, Card, Divider, Image, Typography } from '@/lib/components';

import { ProjectCard } from './project-card';

interface HomeProps {
  projects: CollectionEntry<'projects'>[];
}

export default function Home(props: Readonly<HomeProps>): JSX.Element {
  return (
    <>
      <section class="mt-12" aria-labelledby="intro" aria-describedby="intro-description">
        <Typography.Display id="intro" size="md">
          Software Engineer building performant, accessible & intuitive products 👋🏻
        </Typography.Display>
        <Typography.Paragraph id="intro-description" size="lg" variant="subdued" class="mt-16">
          Hey, I'm Harry, a product-focused software engineer at{' '}
          <Anchor external href="https://pledge.io">
            Pledge
          </Anchor>
          . I'm instrested in open source, keeping software simple, and building products that make a difference.
        </Typography.Paragraph>
        <Typography.Paragraph size="lg" variant="subdued" class="mt-5">
          In my spare time I enjoy building my own projects, and experimenting with technologies. I'm currently working
          on <Anchor href="/#prospect">Prospect</Anchor>, a high-level finance tracker.
        </Typography.Paragraph>
        <Typography.Heading as="h2" size="xs" class="mt-16" id="contact">
          Get in touch
        </Typography.Heading>
        <div class="mt-5 flex gap-6">
          <nav class="flex gap-2" aria-label="A list of my social links" id="contact">
            <For each={constants.links.external}>
              {link => (
                <Anchor
                  aria-label={link.name}
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
          <Anchor noStyle href={`mailto:${constants.profile.links.email}`} class={buttonStyles()}>
            Email me
          </Anchor>
        </div>
      </section>
      <Divider size="lg" />
      <section class="flex w-full flex-col gap-5" aria-labelledby="about">
        <Typography.Heading size={'xl'} id="about">
          A little bit about me
        </Typography.Heading>
        <div class="flex w-full flex-col items-stretch gap-5 lg:flex-row-reverse">
          <Image
            src="/images/me.webp"
            alt="Harry Barden smiling"
            title="It's me!"
            width={800}
            height={400}
            class="overflow-hidden rounded-xl object-cover"
          />
          <Card as="section" aria-labelledby="about" class="h-c flex-initial">
            <Typography.Heading as="h3" size="xs" class="mb-2">
              Where I'm from
            </Typography.Heading>
            <Typography.Paragraph variant="subdued" size="lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas explicabo, expedita sed pariatur aliquam
              inventore voluptas facilis quam quia tempora ut, minima corrupti! Tenetur doloribus reiciendis dicta,
              quasi sunt temporibus neque explicabo quis quia cum impedit perferendis voluptas debitis maxime dolor?
            </Typography.Paragraph>
            <Typography.Heading as="h3" size="xs" class="mb-2 mt-5">
              What I used to do
            </Typography.Heading>
            <Typography.Paragraph variant="subdued" size="lg">
              I'm a software engineer with a passion for building beautiful, functional, and accessible user interfaces.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography.Paragraph>
            <Typography.Heading as="h3" size="xs" class="mb-2 mt-5">
              What I do now
            </Typography.Heading>
            <Typography.Paragraph variant="subdued" size="lg">
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
        <Divider size="lg" />
        <section aria-labelledby="featured-projects" aria-describedby="featured-projects-description">
          <Typography.Heading size={'xl'} id="featured-projects">
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
