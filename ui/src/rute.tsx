import { Suspense, lazy } from "react";
import LayarMemuat from "./komponen/LayarMemuat";
import type { RouteObject } from "react-router";

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
];

export default rute;
