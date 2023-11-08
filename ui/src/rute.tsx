/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import LayarMemuat from "./komponen/LayarMemuat";
import type { RouteObject } from "react-router";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
(
  <Suspense fallback={<LayarMemuat />}>
    <Component {...props} />
  </Suspense>
);

// * LANDING
const Landing = Loadable(lazy(() => import("./halaman/Landing")));
const CV = Loadable(lazy(() => import("./halaman/CV")));

const rute: RouteObject[] = [
  {
    path: "/",
    element: <CV />,
  },
  {
    path: "/landing",
    element: <Landing />
  }
];

export default rute;
