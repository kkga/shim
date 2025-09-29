"use client";
import { useState } from "react";
import { Switch } from "@/components/switch";

export default () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <Switch isSelected={isOn} onChange={setIsOn}>
        On
      </Switch>
      <p>
        Switch is <strong>{isOn ? "on" : "off"}</strong>
      </p>
    </>
  );
};
