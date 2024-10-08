import * as Vue from 'vue';
import { loadModule } from 'vue3-sfc-loader';
type RowOptionsParams<T = any> = {
  labelKey: string;
  valueKey: string;
  iconKey?: string;
  rows: T[];
};
export type RowData = {
  label: string;
  value: string;
  key: string;
  title: string;
};
/* 把数据库的值转成下拉列表,菜单等 */
export const rowsToOptions = (config: RowOptionsParams): RowData[] => {
  return config.rows.map(e => {
    return {
      label: e![config.labelKey],
      value: e![config.valueKey],
      title: e![config.labelKey],
      key: e![config.labelKey],
    };
  });
};
export const isDev = () => {
  return import.meta.env.MODE === 'development';
};
/**
 * @description: 加载一个远程vue文件
 * @param {string} url 远程路径
 */
export const loadVueSfc = async (url: string): Promise<Vue.Component> => {
  //@ts-ignore
  const options: Options = {
    moduleCache: {
      vue: Vue,
    },
    async getFile(url: string) {
      const res = await fetch(url);
      if (!res.ok) throw Object.assign(new Error(res.statusText + ' ' + url), { res });
      return await res.text();
    },
    addStyle(textContent: string) {
      const style = Object.assign(document.createElement('style'), {
        textContent,
      });
      const ref = document.head.getElementsByTagName('style')[0] || null;
      document.head.insertBefore(style, ref);
    },
  };

  const component = (await loadModule(url, options)) as Vue.Component;
  return h(component);
};
