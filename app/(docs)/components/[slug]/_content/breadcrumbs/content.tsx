"use client";
import { useState } from "react";
import type { Key } from "react-aria-components";
import { Breadcrumb, Breadcrumbs } from "@/shim-ui/breadcrumbs";

export default () => {
  let [breadcrumbs, setBreadcrumbs] = useState([
    { id: 1, label: "Shim", href: "#" },
    { id: 2, label: "Docs", href: "#" },
    { id: 3, label: "Breadcrumbs", href: "#" },
  ]);

  let navigate = (id: Key) => {
    let i = breadcrumbs.findIndex((item) => item.id === id);
    setBreadcrumbs(breadcrumbs.slice(0, i + 1));
  };

  return (
    <Breadcrumbs items={breadcrumbs} onAction={navigate}>
      {(item) => <Breadcrumb href={item.href}>{item.label}</Breadcrumb>}
    </Breadcrumbs>
  );
};
