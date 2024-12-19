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
    overlay:
      "animate-fade bg-overlay fixed left-0 top-0 isolate z-20 flex h-[var(--visual-viewport-height)] w-full flex-col items-center justify-center p-4 backdrop-grayscale",
    modal:
      "animate-slide bg-panel text-neutral-text z-50 w-full max-w-md overflow-auto rounded-2xl p-4 text-xs shadow-[var(--shadow-xl)] outline-none",
    headingText:
      "text-neutral-text-contrast text-base font-medium leading-tight",
    descriptionText: "text-neutral-text text-[13px]",
    dialog: "flex h-full flex-col overflow-auto outline-0",
  },
})

interface DialogProps extends Omit<RACModalOverlayProps, "children"> {
  title?: string
  description?: string
  children: RACDialogProps["children"]
}

function Dialog({ title, description, ...props }: DialogProps) {
  let state = useContext(OverlayTriggerStateContext)
  let { children } = props
  let { overlay, modal, dialog, headingText, descriptionText } = style()

  if (typeof children === "function") {
    if (state) {
      children = children({ close: state.close })
    } else {
      children = children({ close: () => {} })
    }
  }

  return (
    <RACModalOverlay isDismissable {...props} className={overlay()}>
      <RACModal
        isDismissable
        {...props}
        className={cxRenderProps(props.className, modal())}
      >
        <RACDialog aria-label={title} className={dialog()}>
          {title || description ?
            <div className="mb-4 flex flex-col gap-1.5">
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
