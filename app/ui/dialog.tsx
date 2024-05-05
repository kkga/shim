'use client'

import { cva, cxRenderProps } from '@lib/utils'
import { useContext } from 'react'
import {
  Heading,
  OverlayTriggerStateContext,
  Dialog as RACDialog,
  DialogProps as RACDialogProps,
  DialogTrigger as RACDialogTrigger,
  Modal as RACModal,
  ModalOverlay as RACModalOverlay,
  ModalOverlayProps as RACModalOverlayProps,
  Text,
} from 'react-aria-components'

const overlayStyles = cva({
  base: [
    'fixed top-0 left-0 w-full h-[var(--visual-viewport-height)] isolate z-20 bg-black/40 flex items-center justify-center p-4 backdrop-saturate-0',
    'data-[entering]:animate-[fade-in_150ms_ease-out]',
    'data-[exiting]:animate-[fade-out_100ms_ease-in]',
  ],
})

const modalStyle = cva({
  base: [
    'z-50 w-md rounded-2xl bg-[var(--color-bg-panel)] p-6 text-neutral-text text-sm ring shadow-xl ring-neutral-solid/15 outline-none overflow-auto',
    'data-[entering]:animate-[fade-in_150ms,slide-from-top_150ms]',
  ],
})

interface DialogProps extends Omit<RACModalOverlayProps, 'children'> {
  title?: string
  description?: string
  children: RACDialogProps['children']
}

function Dialog({ title, description, ...props }: DialogProps) {
  let children = props.children
  const state = useContext(OverlayTriggerStateContext)

  if (typeof children === 'function') {
    children = children({
      close: state.close,
    })
  }

  return (
    <RACModalOverlay isDismissable {...props} className={overlayStyles()}>
      <RACModal
        isDismissable
        {...props}
        className={cxRenderProps(props.className, modalStyle())}
      >
        <RACDialog className="flex flex-col gap-6 outline-0">
          {title || description ?
            <div className="flex flex-col gap-1.5">
              {title && (
                <Heading
                  slot="title"
                  className="text-base font-semibold leading-tight text-neutral-text-contrast"
                >
                  {title}
                </Heading>
              )}
              {description && (
                <Text className="text-sm text-neutral-text">{description}</Text>
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
