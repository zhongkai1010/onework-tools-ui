import { RouteLocationNormalized } from "vue-router";

export interface OwRouteRecordRaw extends RouteLocationNormalized {
  meta: {
    title: string;
    icon: string;
  };
  children?: OwRouteRecordRaw[];
}
