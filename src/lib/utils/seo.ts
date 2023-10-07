export interface FormatTitleProps {
  title: string;
  name: string;
  reverse?: boolean;
}

export function formatTitle({ title, name, reverse }: Readonly<FormatTitleProps>): string {
  const SEPARATOR = ' | ' as const;

  if (reverse) {
    return `${name}${SEPARATOR}${title}`;
  }

  return `${title}${SEPARATOR}${name}`;
}
