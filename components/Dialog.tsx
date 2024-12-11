"use client"

import { cxRenderProps } from "@lib/style"
import { useContext } from "react"
import {
  OverlayTriggerStateContext,
  Dialog as RACDialog,
  DialogProps as RACDialogProps,
  DialogTrigger as RACDialogTrigger,
  Heading as RACHeading,
  Modal as RACModal,
  ModalOverlay as RACModalOverlay,
  ModalOverlayProps as RACModalOverlayProps,
  Text as RACText,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const style = tv({
  slots: {
    overlay: [
      "fixed top-0 left-0 w-full h-[var(--visual-viewport-height)] isolate z-20 bg-overlay flex items-center justify-center p-4 backdrop-grayscale",
      "data-[entering]:animate-[fade-in_150ms_ease-out]",
      "data-[exiting]:animate-[fade-out_100ms_ease-in]",
    ],
    modal: [
      "z-50 w-md rounded-2xl bg-panel p-4 text-neutral-text text-xs shadow-[var(--shadow-xl)] outline-none overflow-auto",
      "data-[entering]:animate-[fade-in_150ms_ease-out,slide-from-top_150ms]",
      "data-[exiting]:animate-[fade-out_100ms_ease-in,slide-to-top_100ms]",
    ],
    headingText:
      "text-neutral-text-contrast text-base font-medium leading-tight",
    descriptionText: "text-neutral-text text-[13px]",
  },
})

interface DialogProps extends Omit<RACModalOverlayProps, "children"> {
  title?: string
  description?: string
  children: RACDialogProps["children"]
}

function Dialog({ title, description, ...props }: DialogProps) {
  const state = useContext(OverlayTriggerStateContext)
  let { children } = props
  let { overlay, modal, headingText, descriptionText } = style()

  if (typeof children === "function") {
    children = children({
      close: state.close,
    })
  }

  return (
    <RACModalOverlay isDismissable {...props} className={overlay()}>
      <RACModal
        isDismissable
        {...props}
        className={cxRenderProps(props.className, modal())}
      >
        <RACDialog className="flex flex-col gap-4 outline-0">
          {title || description ?
            <div className="flex flex-col gap-1.5">
              {title && (
                <RACHeading slot="title" className={headingText()}>
                  {title}
                </RACHeading>
              )}
              {description && (
                <RACText className={descriptionText()}>{description}</RACText>
              )}
            </div>
          : null}
          {children}
        </RACDialog>
      </RACModal>
    </RACModalOverlay>
  )
}

const DialogTrigger = RACDialogTrigger

export { Dialog, DialogTrigger }
