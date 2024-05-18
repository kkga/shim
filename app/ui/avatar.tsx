"use client"

import { cva, cx } from "@lib/style"
import { VariantProps } from "cva"
import { useEffect, useState } from "react"

const colors = {
  gray: "text-[var(--slate-2)] bg-[var(--slate-9)]",
  blue: "text-[var(--iris-2)] bg-[var(--iris-9)]",
  green: "text-[var(--green-2)] bg-[var(--green-9)]",
  orange: "text-[var(--orange-2)] bg-[var(--orange-9)]",
}

type Color = keyof typeof colors

const style = cva({
  base: [
    "relative rounded-full overflow-hidden font-medium flex items-center justify-center text-neutral-text cursor-default",
    "before:absolute before:inset-0 before:rounded-full before:inset-ring before:inset-ring-neutral-line before:pointer-events-none",
  ],
  variants: {
    size: {
      1: "size-6 text-[11px]",
      2: "size-7 text-xs",
      3: "size-8 text-[13px]",
    },
    color: colors,
  },
  defaultVariants: {
    color: "gray",
    size: 1,
  },
})

interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof style> {
  name: string
  src?: string
  color?: Color
}

enum Status {
  Idle,
  Loading,
  Success,
  Error,
}

function Avatar({ src, name, size, color, className }: AvatarProps) {
  let [status, setStatus] = useState<Status>(src ? Status.Loading : Status.Idle)

  let initials = name
    ?.split(" ")
    .map((chunk) => chunk.charAt(0).toLocaleUpperCase())
    .slice(0, 2)
    .join("")

  useEffect(() => {
    if (src) {
      setStatus(Status.Loading)
      const img = new Image()

      img.onload = () => {
        setStatus(Status.Success)
      }

      img.onerror = () => {
        setStatus(Status.Error)
      }

      img.src = src
    }
  }, [src])

  let isLoading = status === Status.Loading
  let hasLoadedImage = status === Status.Success

  return (
    <div className={style({ size, color, className })}>
      {src && (isLoading || hasLoadedImage) && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          className={cx(
            "size-full object-cover select-none",
            isLoading ? "hidden" : "block",
          )}
        />
      )}

      {!hasLoadedImage && !isLoading && <span>{initials}</span>}
    </div>
  )
}

export { Avatar, type AvatarProps }
