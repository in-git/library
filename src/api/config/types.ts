/* 请求钩子函数方法 */

import type { ItemType } from 'ant-design-vue';

export type IOption = {
  label: string;
  value: string | number;
};

export type CreateTime = {
  beginTime: string;
  endTime: string;
};

/* 查询条件 */
export type IQuery<T = Record<string, any>> = {
  pageNum: number;
  pageSize: number;
  /* 创建时间 */
  createTime?: string | CreateTime;
  isAsc?: 'asc' | 'desc';
  /* 筛选状态 */
  status?: string | number;
  params?: {
    beginTime?: string;
    endTime?: string;
  };
  orderByColumn?: string;
  total?: number;
} & T;

/* 带分页数据列表的返回 */
export interface TableResponse<T> {
  total: number;
  rows: T[];
  code: number;
  msg: string;
}

/* 不分页的数据列表返回 */
export interface Response<T = undefined> {
  msg: string;
  code: number;
  data: T;
}

export interface TableConfig<T = {}, Q = IQuery> {
  rowKey: string;
  data: T[];
  loading: boolean;
  /* 模块名，用于存储表头，必须唯一 */
  moduleName: string;
  /* 浏览模式 */
  viewMode?: 'card' | 'table';
  keys: (string | number)[];
  query: IQuery<Partial<Q>>;
  contextmenu: ItemType[];
  reset: () => any;
}
