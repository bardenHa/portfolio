import { JSX } from 'solid-js';

export type RelevantTags = Exclude<
  keyof JSX.IntrinsicElements,
  | 'script'
  | 'object'
  | 'style'
  | 'head'
  | 'animate'
  | 'animateMotion'
  | 'animateTransform'
  | 'feDistantLight'
  | 'feFuncA'
  | 'feFuncB'
  | 'feFuncG'
  | 'feFuncR'
  | 'feMergeNode'
  | 'fePointLight'
  | 'feSpotLight'
  | 'metadata'
  | 'view'
  | 'symbol'
>;

export interface PolymorphicComponent<T> extends JSX.HTMLAttributes<T> {
  as?: RelevantTags;
}
