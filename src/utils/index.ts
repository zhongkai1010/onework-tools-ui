import { convert } from 'css-color-function';
import { isObject } from 'lodash';
import rgbHex from 'rgb-hex';

/**
 * 根据Element向上查找有id的Element
 * @param el
 * @returns
 */
export function findElementParentId(el: Element) {
  if (el.id) {
    return el.id;
  } else {
    return findElementParentId(el.parentElement);
  }
}

/**
 * 获取数组元素中根元素
 * @param menus
 * @returns
 */
export function getFirstNavMenu<T extends { children?: Array<T> }>(items: Array<T>): T {
  if (items.length == 0) return null;
  const root = items[0];
  if (root.children && root.children.length > 0) {
    return getFirstNavMenu(root.children);
  } else {
    return root;
  }
}

// 色值表
const formula = {
  'shade-1': 'color(primary shade(10%))',
  'light-1': 'color(primary tint(10%))',
  'light-2': 'color(primary tint(20%))',
  'light-3': 'color(primary tint(30%))',
  'light-4': 'color(primary tint(40%))',
  'light-5': 'color(primary tint(50%))',
  'light-6': 'color(primary tint(60%))',
  'light-7': 'color(primary tint(70%))',
  'light-8': 'color(primary tint(80%))',
  'light-9': 'color(primary tint(90%))'
};

export const colorGradient = (color: string, prefix: string): Record<string, string> => {
  const result = {};
  for (const item in formula) {
    const value = formula[item].replace(/primary/, color);
    const key = `${prefix}-${item}`;
    result[key] = `#${rgbHex(convert(value))}`;
  }
  return result;
};

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}

export function generateTreeNodes(
  data: Recordable<any>[],
  idKey: any,
  parentKey: string,
  defaultValue: any,
  childrenKey = 'children'
) {
  const getChildren = (parents: Recordable<any>[]) => {
    const result = [];

    for (let i = 0; i < parents.length; i++) {
      const node = parents[i];
      const parentId = node[idKey];
      const children = data.filter((t) => t[parentKey] === parentId);
      console.log('parentId', parentId);
      console.log('node', node);
      console.log('children', children);
      if (children.length > 0) {
        node[childrenKey] = getChildren(children);
      }
      result.push(node);
    }
    return result;
  };

  const roots = data.filter((t) => t[parentKey] === defaultValue);
  return getChildren(roots) ?? data;
}
