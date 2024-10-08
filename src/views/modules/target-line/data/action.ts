import { nodeList } from './data';
import { draw } from './svg';

export const drawLine = () => {
  const parentId = document.getElementById('parent');
  nodeList.value.forEach(e => {
    const [start, end] = e;
    const startEl = document.getElementById(`dot-${start}`);

    const endEl = document.getElementById(`dot-${end}`);
    const startRect = startEl?.getBoundingClientRect();
    const endRect = endEl?.getBoundingClientRect();
    if (!startRect || !endRect) return;
    const sx = startRect.width + startRect.x;
    const sy = startRect.y + startRect.height / 2;
    const ex = endRect.x;
    const ey = endRect.y + endRect.height / 2;
    draw.value?.line(sx, sy, ex, ey).stroke({ width: 1, color: 'red' });
  });
};
export const hasEl = (id: string): boolean => {
  let hasEl = false;
  nodeList.value.forEach(e => {
    if (e.includes(id)) {
      hasEl = true;
    }
  });
  return hasEl;
};
