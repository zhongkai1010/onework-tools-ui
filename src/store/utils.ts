import { NavRecordRaw } from "/@/layouts/types";

export const getFirstNavMenu = (menus: NavRecordRaw[]): NavRecordRaw | null => {
  if (menus.length == 0) return null;
  const root = menus[0];
  if (root.children && root.children.length > 0) {
    return getFirstNavMenu(root.children);
  } else {
    return root;
  }
};
