import { ref } from 'vue';
import { type Config } from '../types/Config';
import { nanoid } from 'nanoid';

export const boxConfig = ref<Config>({
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  id: nanoid(),
});

export const list = ref<Config[]>([
  {
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    id: 'a',
  },
  {
    x: 200,
    y: 0,
    w: 100,
    h: 100,
    id: 'b',
  },
  {
    x: 200,
    y: 0,
    w: 100,
    h: 100,
    id: 'c',
  },
  {
    x: 200,
    y: 0,
    w: 100,
    h: 100,
    id: 'd',
  },
]);

export const targetList = ref<Config[]>([
  {
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    id: '1',
  },
  {
    x: 200,
    y: 0,
    w: 100,
    h: 100,
    id: '2',
  },
  {
    x: 200,
    y: 0,
    w: 100,
    h: 100,
    id: '3',
  },
]);

export const nodeList = ref<[string, string][]>([
  ['d', '3'],
  ['a', '1'],
  ['c', '1'],
]);
