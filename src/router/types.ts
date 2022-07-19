import type { RouteMeta, RouteRecordRaw } from "vue-router";
import { defineComponent } from "vue";

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

export interface OwRouteRecordRaw extends Omit<RouteRecordRaw, "meta" | "children"> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: OwRouteRecordRaw[];
  props?: Record<string, any>;
  fullPath?: string;
}
