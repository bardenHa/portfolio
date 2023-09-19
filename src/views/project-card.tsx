import { CollectionEntry } from 'astro:content';
import { JSX, Match, Show, splitProps, Switch } from 'solid-js';

import { Card, Typography } from '@/lib/components';

import { hyphenate } from '../lib/utils';

interface ProjectCardProps {
  project: Readonly<CollectionEntry<'projects'>>;
}

// TODO: inspo from https://daleanthony.com/ & https://daleanthony.com/projects
export function ProjectCard(props: Readonly<ProjectCardProps>): JSX.Element {
  const [{ project }, rest] = splitProps(props, ['project']);
  const hyphenatedSlug = hyphenate(project.slug);

  return (
    <Card
      id={hyphenatedSlug}
      aria-labelledby={`${hyphenatedSlug}-title`}
      class="flex gap-4 border border-neutral-7"
      {...rest}
    >
      <Show when={project.data.logo}>
        {logo => <img src={logo()} alt={`${project.data.title} logo`} class="h-16 w-16 rounded-lg" />}
      </Show>
      <div>
        <Typography.Heading id={`${hyphenatedSlug}-title`} size="xsmall" hideAnchor>
          {project.data.title}
          <Switch fallback={null}>
            {/* TODO: replace with some kind of tag/badge component */}
            <Match when={project.data.status === 'wip'}>
              <Typography.Text size="small" variant="subdued" class="ml-2 text-warning-10">
                ({project.data.status})
              </Typography.Text>
            </Match>
          </Switch>
        </Typography.Heading>
        <Typography.Paragraph size="medium" variant="subdued" class="mt-2">
          {project.data.description}
        </Typography.Paragraph>
      </div>
    </Card>
  );
}
