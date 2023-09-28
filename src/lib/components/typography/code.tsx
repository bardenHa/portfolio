import { JSX } from 'solid-js';

// TODO: use mono font
export function Code(props: Readonly<JSX.HTMLAttributes<HTMLElement>>): JSX.Element {
  return (
    <code
      {...props}
      class="my-7 grid overflow-x-scroll rounded-lg border border-neutral-7 bg-neutral-1 p-5 pr-6 text-xs font-medium leading-normal"
    >
      {props.children}
    </code>
  );
}
