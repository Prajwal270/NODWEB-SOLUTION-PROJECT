import React, { Suspense } from "react";
import Loader from "./Loader";

function LazyWrapper({ children }) {
  return (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  );
}

export default LazyWrapper;
