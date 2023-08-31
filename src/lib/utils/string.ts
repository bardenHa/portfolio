export function hyphenate(str: string): string {
  return str.replace(/\s+/g, '-').toLowerCase();
}
