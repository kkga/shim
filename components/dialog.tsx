"use client";

import { cxRenderProps } from "@lib/style";
import { useContext } from "react";
import {
  OverlayTriggerStateContext,
  Dialog as RacDialog,
  type DialogProps as RacDialogProps,
  DialogTrigger as RacDialogTrigger,
  Heading as RacHeading,
  Modal as RacModal,
  ModalOverlay as RacModalOverlay,
  type ModalOverlayProps as RacModalOverlayProps,
  Text as RacText,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const style = tv({
  slots: {
    overlay:
      "fixed top-0 left-0 isolate z-20 flex h-[var(--visual-viewport-height)] w-full animate-fade flex-col items-center justify-center bg-overlay p-4 backdrop-grayscale",
    modal:
      "z-50 w-full max-w-md animate-slide overflow-auto rounded-2xl bg-panel p-4 text-neutral-text text-xs shadow-[var(--shadow-xl)] outline-none",
    headingText:
      "font-medium text-base text-neutral-text-contrast leading-tight",
    descriptionText: "text-[13px] text-neutral-text",
    dialog: "flex h-full flex-col overflow-auto outline-0",
  },
});

interface DialogProps extends Omit<RacModalOverlayProps, "children"> {
  title?: string;
  description?: string;
  children: RacDialogProps["children"];
}

function Dialog({ title, description, ...props }: DialogProps) {
  let state = useContext(OverlayTriggerStateContext);
  let { children } = props;
  let { overlay, modal, dialog, headingText, descriptionText } = style();

  if (typeof children === "function") {
    if (state) {
      children = children({ close: state.close });
    } else {
      children = children({
        close: () => {
          /* No-op function */
        },
      });
    }
  }

  return (
    <RacModalOverlay isDismissable {...props} className={overlay()}>
      <RacModal
        isDismissable
        {...props}
        className={cxRenderProps(props.className, modal())}
      >
        <RacDialog aria-label={title} className={dialog()}>
          {title || description ? (
            <div className="mb-4 flex flex-col gap-1.5">
              {title && (
                <RacHeading className={headingText()} slot="title">
                  {title}
                </RacHeading>
              )}
              {description && (
                <RacText className={descriptionText()}>{description}</RacText>
              )}
            </div>
          ) : null}
          {children}
        </RacDialog>
      </RacModal>
    </RacModalOverlay>
  );
}

const DialogTrigger = RacDialogTrigger;

export { Dialog, DialogTrigger };
