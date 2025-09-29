"use client";
import { useState } from "react";
import { Button } from "@/components/button";
import { Dialog } from "@/components/dialog";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button className="self-start" onPress={() => setIsOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        className="max-w-sm"
        isOpen={isOpen}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
        title="Dialog opened"
      >
        <p>Click outside to close the dialog.</p>
      </Dialog>
    </>
  );
};
