import type { ImageElementProps } from './interface';

export const COMMON_PROPS: (keyof Omit<ImageElementProps, 'src'>)[] = [
  'crossOrigin',
  'decoding',
  'draggable',
  'loading',
  'referrerPolicy',
  'fetchpriority',
  'sizes',
  'srcSet',
  'useMap',
  'alt',
];
