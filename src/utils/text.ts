export function makeStartCase(text: string) {
  return text.substr(0, 1).toUpperCase() + text.substr(1).toLowerCase();
}
