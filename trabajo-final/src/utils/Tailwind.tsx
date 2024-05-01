export function cls(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
