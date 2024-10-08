import { message } from 'ant-design-vue';

export const copyText = (text: string) => {
  const copyContent = document.createElement('input');
  copyContent.value = text;
  document.body.appendChild(copyContent);
  copyContent.select();
  document.execCommand('copy');
  document.body.removeChild(copyContent);
  message.success('成功复制');
};

export const openLink = (href: string) => {
  const link = document.createElement('a') as HTMLAnchorElement;
  link.href = href;
  link.target = '_blank';
  document.body.append(link);
  link.click();
  setTimeout(() => link.parentNode?.removeChild(link));
};

export const range = (loc: number, min: number, max: number) => {
  if (loc > max) {
    return max;
  }
  if (loc < min) {
    return min;
  }
  return loc;
};

/**
 * @description: 检测两个矩形是否相交
 */

export function intersect(rectA: DOMRect, rectB: DOMRect) {
  return !(
    rectB.y + rectB.height < rectA.y ||
    rectB.x > rectA.x + rectA.width ||
    rectB.y > rectA.y + rectA.height ||
    rectB.x + rectB.width < rectA.x
  );
}
/**
 * @description:
 * 在下拉列表中，根据值获取label
 * 多处复用
 * @param {any} items 下拉列表相关选项
 * @param {string} value
 */
type Items = {
  label?: string;
  value: string;
  title?: string;
};
export const getLabel = (items: Items[], value: string) => {
  return items?.find(e => {
    if (e.value === value) {
      return e;
    }
  })?.label;
};

export const compareDateStrings = (dateString1: string, dateString2: string): number => {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);

  if (date1.getTime() < date2.getTime()) {
    return -1;
  } else if (date1.getTime() > date2.getTime()) {
    return 1;
  } else {
    return 0;
  }
};
