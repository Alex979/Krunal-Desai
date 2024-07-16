"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AosTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 100 });
  }, []);

  return <>{children}</>;
}
