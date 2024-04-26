import { compose, cva, cx, cxRenderProps, focusVisibleStyle } from '@lib/utils'

import {
  Label as RACLabel,
  Text as RACText,
  FieldError as RACFieldError,
  Group as RACGroup,
  Input as RACInput,
  type LabelProps,
  type TextProps,
  type FieldErrorProps,
  type GroupProps,
  type InputProps,
  composeRenderProps,
} from 'react-aria-components'

const Label = (props: LabelProps) => (
  <RACLabel
    {...props}
    className={cx(
      'w-fit cursor-default text-sm font-medium text-neutral-text',
      // peer/group disabled
      'group-data-[disabled]:text-neutral-placeholder peer-data-[disabled]:text-neutral-placeholder',
      props.className
    )}
  />
)

const Description = (props: TextProps) => (
  <RACText
    slot="description"
    className={cx(
      'text-xs text-neutral-text',
      // peer/group disabled
      'group-data-[disabled]:text-neutral-placeholder peer-data-[disabled]:text-neutral-placeholder',
      props.className
    )}
    {...props}
  />
)

const FieldError = (props: FieldErrorProps) => (
  <RACFieldError
    className={cxRenderProps(props.className, 'text-xs text-error-text')}
    {...props}
  />
)

const FieldGroup = (props: GroupProps) => {
  return <RACGroup {...props} className={cxRenderProps(props.className)} />
}

const Input = (props: InputProps) => {
  return <RACInput {...props} className={cxRenderProps(props.className)} />
}

const fieldStyle = cva({
  base: [
    'rounded-md border border-neutral-border text-xs shadow-inner bg-neutral-bg-subtle',
  ],
  variants: {
    isDisabled: {
      true: 'border-neutral-line bg-neutral-bg-subtle text-neutral-placeholder shadow-none',
    },
    isInvalid: {
      true: 'border-error-border bg-error-bg-subtle',
    },
    isFocused: {
      true: 'outline-2 -outline-offset-1 outline-accent-focus-ring',
    },
    isFocusVisible: {
      true: 'outline-2 -outline-offset-1 outline-accent-focus-ring',
    },
  },
})

const fieldGroupStyle = compose(
  fieldStyle,
  cva({
    base: ['group flex items-center'],
    variants: {
      isFocusWithin: {
        true: 'outline-2 -outline-offset-1 outline-accent-focus-ring',
      },
    },
  })
)

export { Label, Description, FieldError, FieldGroup, Input }
export { fieldGroupStyle, fieldStyle }
