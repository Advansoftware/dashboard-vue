export default [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "login" */ "./HomeView"),
  },
];
