import { message, type ItemType } from 'ant-design-vue';
import { compareDateStrings } from '../common/utils';
import { base64ToText } from '../file/format';

/**
 * @description: 统一请求反馈,响应后端返回的消息
 * @param {function} request API请求
 * @param {array} arg 参数列表
 */
export const response = async (request: (...arg: any) => any, ...arg: any) => {
  try {
    const { data } = await request(...arg);
    if (!data) {
      return;
    }
    if (data.code === 200) {
      message.success(data.msg);
    } else {
      message.warning(data.msg);
    }
  } catch (error) {
    // error
  }
};

/**
 * @description: 格式化表头，多处复用
 * @param {ColumnProps} data 表头
 * @param {*} operationSlot 是否有操作选项
 */
export const formatColumns = (data: any[], operationSlot: boolean = true) => {
  let operation: any = {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    fixed: 'right',
    show: true,
  };

  if (data.findIndex(e => e.dataIndex === operation.key) <= -1 && operationSlot) {
    data.push(operation);
  }

  return data.filter(e => {
    if (typeof e.show === 'undefined') {
      e.show = true;
    } else if (e.dataIndex === 'createTime' || e.dataIndex === 'updateTime') {
      /* 处理自带的两个时间字段排序 */
      e.sorter = {
        compare: (a: any, b: any) => compareDateStrings(a.createTime, b.createTime),
      };
    }
    if (!e.show) return;

    e.align = 'center';
    e.ellipsis = true;
    e.key = `${e.dataIndex}`;
    return e;
  });
};
