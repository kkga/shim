"use client";
import { PushPin } from "@phosphor-icons/react";
import { useState } from "react";
import { ToggleButton } from "@/shim-ui/toggle-button";

export default () => {
  const [isSelected, setSelected] = useState(false);

  return (
    <ToggleButton
      aria-label="pin"
      isIconOnly
      isSelected={isSelected}
      onChange={setSelected}
    >
      <PushPin size={16} weight={isSelected ? "fill" : "regular"} />
    </ToggleButton>
  );
};
