export function getUniqueIndex() {
  // @ts-ignore
  window['position'] = window['position'] || 0;
  // @ts-ignore
  return window['position']++;
}

export function getUniqueId() {
  const index: number = 97;

  // @ts-ignore
  window['currentPosition'] = window['currentPosition'] || 0;
  // @ts-ignore
  window['currentPosition']++;
  // @ts-ignore
  const currentPosition = window['currentPosition'];
  return String.fromCharCode(index + currentPosition - 1).toUpperCase();
}

export function getColors(): string[] {
  return ['rgb(20 184 166)', 'rgb(244 63 94)', 'rgb(245 158 11)', 'rgb(168 85 247)'];
}

export function generateRGB(): string {
  return getColors()[Math.floor(Math.random() * 4)];
}
