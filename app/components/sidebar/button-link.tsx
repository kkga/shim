"use client"

import { buttonStyle } from "@ui/button"
import { VariantProps } from "cva"
import { Link, LinkProps } from "react-aria-components"

interface ButtonLinkProps extends LinkProps, VariantProps<typeof buttonStyle> {}

function ButtonLink(props: ButtonLinkProps) {
  return <Link {...props} className={buttonStyle({ ...props })} />
}

export { ButtonLink }
