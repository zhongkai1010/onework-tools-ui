export const LAYOUT = () => import("../layouts/index.vue");

export const LOGIN_PAGE = {
  name: "login",
  path: "/login",
  component: () => import("../views/login/index.vue")
};

export const NOT_PAGE = {
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  component: () => import("../views/404.vue")
};

export const HOME_PAGE = {
  name: "root",
  path: "/",
  redirect: "/user/index"
};
