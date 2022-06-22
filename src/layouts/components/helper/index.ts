import { RouteRecordRaw } from "vue-router";
import { modulePages } from "../../../router/index";

const menus: MenuItem[] = [];

modulePages.forEach((item: RouteRecordRaw) => {
    console.log(item);
    if (item.children) {
        if (item.children.length == 1) {
            const rootItem: RouteRecordRaw = item.children[0];
            const menu: MenuItem = {
                key: rootItem.name as string,
                title: rootItem.meta?.title as string,
            };
            menus.push(menu);
        }
        if (item.children.length > 1) {
            const menu: MenuItem = {
                key: item.name as string,
                title: item.meta?.title as string,
                menus: [] as MenuItem[],
            };
            item.children.forEach((subItem: RouteRecordRaw) => {
                menu.menus?.push({
                    key: subItem.name as string,
                    title: subItem.meta?.title as string,
                });
            });

            menus.push(menu);
        }
    }
});

export {
    menus
}