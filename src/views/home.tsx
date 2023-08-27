import { FiGithub, FiInstagram, FiTwitter } from 'solid-icons/fi';
import { ComponentProps, For, JSX } from 'solid-js';
import { cx } from 'class-variance-authority';

import { Anchor, buttonStyles, Card, Divider, Typography } from '@/lib/components';
import { Button } from '@/lib/components/ButtonNew';

interface SocialLink {
  title: string;
  href: string;
  icon: JSX.Element;
}
const SOCIAL_LINKS: SocialLink[] = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/harrybarden',
    icon: <FiTwitter />,
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/harrybarden',
    icon: <FiInstagram />,
  },
  {
    title: 'Github',
    href: 'https://github.com/bardenha',
    icon: <FiGithub />,
  },
];

const TEST_INTENT = 'success';

export default function Home(): JSX.Element {
  return (
    <>
      <section class="mt-12" aria-labelledby="intro" aria-describedby="intro-description">
        <Typography.Display id="intro" size="medium">
          Software Engineer creating thoughtful, accessible & intuitive interfaces 🤟🏼
        </Typography.Display>
        <Typography.Paragraph id="intro-description" size="large" variant="subdued" class="mt-16">
          I’m Harry Barden, a UK based Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas explicabo,
          expedita sed pariatur aliquam inventore voluptas. Dolor facilis quam quia sit amet consectetur adipisicing
          elit. Praesentium.
          <br />I specialise in interface design for web-based applications with a focus on simplicity & usability.
        </Typography.Paragraph>
        <div class="flex mt-16">
          <nav class="flex gap-2" aria-label="A list of my social links">
            <For each={SOCIAL_LINKS}>
              {link => (
                <Anchor
                  // Use Anchor with class={buttonVariants()}
                  // colorScheme={'neutral'}
                  class={cx(buttonStyles({ size: 'small', variant: 'ghost' }), 'text-xl')}
                  // icon={link.icon}
                  aria-label={link.title}
                  href={link.href}
                />
              )}
            </For>
          </nav>
          <Button
            class="ml-6"
            // colorScheme={'neutral'}
            // variant={'subtle'}
          >
            Email me
          </Button>
        </div>
        {/* // TODO: remove */}
        <For each={['sm', 'md', 'lg']}>
          {size => (
            <div class="flex mt-12 gap-4">
              <Button intent={TEST_INTENT} size={size} variant="solid">
                Button
              </Button>
              <Button intent={TEST_INTENT} size={size} variant="subtle">
                Button
              </Button>
              <Button intent={TEST_INTENT} size={size} variant="outline">
                Button
              </Button>
              <Button intent={TEST_INTENT} size={size} variant="ghost">
                Button
              </Button>
            </div>
          )}
        </For>
      </section>
      <Divider size="large" />
      <section class="gap-5 w-full flex flex-col" aria-labelledby="about">
        <Typography.Heading size={'large'} id="about">
          A little bit about me
        </Typography.Heading>
        {/* TODO: update tag and styles, probably no need for a grid here */}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          <Card as="section" aria-labelledby="about">
            <Typography.Heading as={'h4'} size="xsmall" variant="subdued" class="mb-2 uppercase">
              Where I'm from
            </Typography.Heading>
            <Typography.Paragraph variant="subdued" size="large">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas explicabo, expedita sed pariatur aliquam
              inventore voluptas facilis quam quia tempora ut, minima corrupti! Tenetur doloribus reiciendis dicta,
              quasi sunt temporibus neque explicabo quis quia cum impedit perferendis voluptas debitis maxime dolor?
            </Typography.Paragraph>
            <Typography.Heading as={'h4'} size="xsmall" variant="subdued" class="mt-5 mb-2 uppercase">
              What I used to do
            </Typography.Heading>
            <Typography.Paragraph variant="subdued" size="large">
              I'm a software engineer with a passion for building beautiful, functional, and accessible user interfaces.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography.Paragraph>
            <Typography.Heading as={'h4'} size="xsmall" variant="subdued" class="mt-5 mb-2 uppercase">
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
          <img
            src="/me.jpeg" // TODO: choose new higher res image
            alt="Harry Barden portrait"
            class="h-full bg-cover rounded-xl overflow-hidden"
          />
        </div>
      </section>
      <Divider size="large" />
      <section aria-labelledby="featured-projects" aria-describedby="featured-projects-description">
        <Typography.Heading size={'large'} id="featured-projects">
          Featured projects
        </Typography.Heading>
        <Typography.Paragraph variant="subdued" id="featured-projects-description">
          A collection of some side projects that have shipped recently.
        </Typography.Paragraph>
        <ul
          class="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mt-8"
          aria-labelledby="featured-projects"
          aria-describedby="featured-projects-description"
        >
          <Card as="li">Some card</Card>
          <Card as="li">Some card</Card>
          <Card as="li">Some card</Card>
          <Card as="li">Some card</Card>
          <Card as="li">Some card</Card>
        </ul>
      </section>
    </>
  );
}

// TODO: a11y, see https://benmyers.dev/blog/aria-labels-and-descriptions/ html for example
// TODO: see if we can enforce usage of aria-label for particular elements, maybe eslint rule?
