import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

const RemoteButton = lazy(() => import("remote/Button"));

createRoot(document.getElementById("root")!).render(
  <>
    <h1>Hello, Module Federation (host)</h1>
    <Suspense fallback="loading remote..."><RemoteButton /></Suspense>
  </>,
);
