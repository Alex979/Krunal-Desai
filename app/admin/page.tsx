"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Admin() {
  const CMSPage = useMemo(
    () =>
      dynamic(() => import("./CMSPage"), {
        ssr: false,
      }),
    []
  );

  return useMemo(() => <CMSPage key="admin" />, [CMSPage]);
}
