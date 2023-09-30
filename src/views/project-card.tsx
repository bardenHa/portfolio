import { CollectionEntry } from 'astro:content';
import { JSX, Match, Show, splitProps, Switch } from 'solid-js';

import { abbreviations } from '@/config';
import { Anchor, Badge, Card, Typography } from '@/lib/components';

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
          <div class="flex items-center gap-[1.5ch]">
            <Typography.Heading as="h3" id={`${hyphenatedSlug}-title`} size="small" hideAnchor>
              {project.data.title}
            </Typography.Heading>
            <Switch fallback={null}>
              <Match when={project.data.status === 'wip'}>
                <Badge intent={'warning'} size={'sm'}>
                  <abbr title={abbreviations.WIP}>{project.data.status.toUpperCase()}</abbr>
                </Badge>
              </Match>
            </Switch>
          </div>
          <Typography.Paragraph size="medium" variant="subdued" class="mt-2">
            {project.data.description}
          </Typography.Paragraph>
        </div>
      </Card>
    </Anchor>
  );
}
