"use client";
import { useEffect, useState } from "react";
import { ProgressCircle } from "@/shim-ui/progress-circle";

export default () => {
  let [value, setValue] = useState(0);

  // Simulate loading
  useEffect(() => {
    if (value >= 100) {
      return;
    }
    let interval = setInterval(
      () => setValue((v) => Math.min(v + Math.random() * 25 + 1, 100)),
      1000
    );
    return () => clearInterval(interval);
  }, [value]);

  return <ProgressCircle aria-label="Loading…" size={2} value={value} />;
};
