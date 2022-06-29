import { RouteRecordNormalized } from "vue-router";

export interface OwRouteRecordRaw extends RouteRecordNormalized {
  meta: {
    title: string;
    icon: string;
  };
  children: OwRouteRecordRaw[];
}
