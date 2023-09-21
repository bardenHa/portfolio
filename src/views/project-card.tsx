import { CollectionEntry } from 'astro:content';
import { JSX, Match, Show, splitProps, Switch } from 'solid-js';

import { Anchor, Card, Typography } from '@/lib/components';

import { hyphenate } from '../lib/utils';

interface ProjectCardProps {
  project: Readonly<CollectionEntry<'projects'>>;
}

// TODO: inspo from https://daleanthony.com/ & https://daleanthony.com/projects
export function ProjectCard(props: Readonly<ProjectCardProps>): JSX.Element {
  const [{ project }, rest] = splitProps(props, ['project']);
  const hyphenatedSlug = hyphenate(project.slug);

  return (
    <Anchor noStyle href={project.data.url} external class="group">
      <Card
        id={hyphenatedSlug}
        aria-labelledby={`${hyphenatedSlug}-title`}
        // TODO: align outline style with the one in gobal.scss. Use apply directive?
        class={
          'flex gap-4 group-hover:bg-neutral-5 group-focus:bg-neutral-5 group-focus:outline group-focus:outline-2 group-focus:outline-offset-2'
        }
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
                <Typography.Text variant="subdued" class="ml-2 text-warning-10">
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
    </Anchor>
  );
}
