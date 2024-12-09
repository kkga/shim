"use client"

import { useEffect, useState } from "react"
import { VariantProps, tv } from "tailwind-variants"

const colors = {
  gray: "text-[var(--slate-2)] bg-[var(--slate-9)]",
  blue: "text-[var(--iris-2)] bg-[var(--iris-9)]",
  green: "text-[var(--green-2)] bg-[var(--green-9)]",
  orange: "text-[var(--orange-2)] bg-[var(--orange-9)]",
}

type Color = keyof typeof colors

const style = tv({
  slots: {
    base: [
      "shrink-0 relative tracking-tight rounded-full overflow-hidden font-medium flex items-center justify-center text-neutral-text cursor-default",
      "before:absolute before:inset-0 before:rounded-full before:inset-ring before:inset-ring-neutral-line before:pointer-events-none",
    ],
    img: "size-full select-none object-cover",
  },
  variants: {
    size: {
      1: "size-5 text-[10px]",
      2: "size-6 text-[11px]",
      3: "size-8 text-[12px]",
      4: "size-10 text-sm",
      5: "size-12 text-base",
      6: "size-16 text-lg",
    },
    color: colors,
    loading: {
      true: {
        img: "hidden",
      },
    },
  },
  defaultVariants: {
    color: "blue",
    size: 2,
  },
})

interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    Omit<VariantProps<typeof style>, "loading"> {
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
  const [status, setStatus] = useState<Status>(
    src ? Status.Loading : Status.Idle,
  )
  const { base, img } = style({ size, color })

  const initials = name
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

  const isLoading = status === Status.Loading
  const hasLoadedImage = status === Status.Success

  return (
    <div className={base({ size, color, className })}>
      {src && (isLoading || hasLoadedImage) && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className={img({ loading: isLoading })} />
      )}

      {!hasLoadedImage && !isLoading && <span>{initials}</span>}
    </div>
  )
}

export { Avatar }
export type { AvatarProps }
