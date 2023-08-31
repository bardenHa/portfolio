import { JSX, Show } from 'solid-js';

export function Code(props: Readonly<JSX.HTMLAttributes<HTMLElement>>): JSX.Element {
  return (
    <Show
      when={props.class?.includes('language-')}
      fallback={
        <code {...props} class="bg-element rounded px-1 py-1">
          {props.children}
        </code>
      }
    >
      <div class="group relative">
        <button class="copy-code bg-elevate absolute right-2 top-2 z-10 hidden rounded-sm px-2 py-1 text-xs font-medium group-hover:block">
          Copy
        </button>

        <code
          {...props}
          class="border-elevate bg-neutral my-7 grid overflow-x-scroll rounded border p-5 pr-6 text-sm font-medium leading-normal"
        >
          {props.children}
        </code>
      </div>
    </Show>
  );
}
