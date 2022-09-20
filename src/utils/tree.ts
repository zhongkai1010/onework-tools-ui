export function generateTreeNodes(
  data: Recordable<any>[],
  idKey: string,
  parentKey: string,
  childrenKey = 'children',
  orderKey?
) {
  const getChildren = (parents: Recordable<any>[]) => {
    const result = [];
    for (let i = 0; i < parents.length; i++) {
      const node = parents[i];
      const parentId = node[idKey];
      let children = data.filter((t) => t[parentKey] === parentId);
      if (orderKey) {
        children = children.sort((a, b) => a[orderKey] - b[orderKey]);
      }
      if (children.length > 0) {
        node[childrenKey] = getChildren(children);
      }
      result.push(node);
    }
    return result;
  };

  let roots = data.filter((t) => !t[parentKey]);
  if (orderKey) {
    roots = roots.sort((a, b) => a[orderKey] - b[orderKey]);
  }
  return getChildren(roots) ?? data;
}
