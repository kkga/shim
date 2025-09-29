"use client";
import { useState } from "react";
import { Button } from "@/components/button";

export default () => {
  let [isPending, setPending] = useState(false);
  let handlePress = () => {
    setPending(true);
    setTimeout(() => setPending(false), 5000);
  };

  return (
    <Button isPending={isPending} onPress={handlePress}>
      Bookmark
    </Button>
  );
};
