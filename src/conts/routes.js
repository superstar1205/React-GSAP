import { Home, Faq, Agreements } from "../pages";

export const routesPath = {
  main: "/",
  faq: "/faq",
  privacy: "/privacy-policy",
  terms: "/terms",
};

export const routes = [
  {
    path: routesPath.main,
    component: <Home />,
  },
  {
    path: routesPath.faq,
    component: <Faq />,
  },
  {
    path: routesPath.privacy,
    component: <Agreements />,
  },
  {
    path: routesPath.terms,
    component: <Agreements />,
  },
];
