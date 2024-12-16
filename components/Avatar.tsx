"use client"

import { useEffect, useState } from "react"
import { VariantProps, tv } from "tailwind-variants"

const COLORS = {
  gray: "text-[var(--slate-2)] bg-[var(--slate-9)]",
  blue: "text-[var(--iris-2)] bg-[var(--iris-9)]",
  green: "text-[var(--green-2)] bg-[var(--green-9)]",
  orange: "text-[var(--orange-2)] bg-[var(--orange-9)]",
}

type Color = keyof typeof COLORS

const style = tv({
  slots: {
    base: [
      "text-neutral-text relative flex shrink-0 cursor-default items-center justify-center overflow-hidden font-bold tracking-tight",
      "before:inset-ring before:inset-ring-neutral-line before:pointer-events-none before:absolute before:inset-0",
    ],
    img: "size-full select-none object-cover",
  },
  variants: {
    radius: {
      none: "rounded-none! before:rounded-none!",
      sm: "rounded-sm! before:rounded-sm!",
      md: "rounded-md! before:rounded-md!",
      lg: "rounded-lg! before:rounded-lg!",
      full: "rounded-full! before:rounded-full!",
    },
    size: {
      1: "size-5 rounded-sm text-[9px] before:rounded-sm",
      2: "size-6 rounded-sm text-[10px] before:rounded-sm",
      3: "size-8 rounded-md text-[12px] before:rounded-md",
      4: "size-10 rounded-md text-sm before:rounded-md",
      5: "size-12 rounded-md text-base before:rounded-md",
      6: "size-16 rounded-lg text-lg before:rounded-lg",
    },
    color: COLORS,
    loading: {
      true: {
        img: "hidden",
      },
    },
  },
  defaultVariants: {
    color: "gray",
    size: 4,
  },
})

enum Status {
  Idle,
  Loading,
  Success,
  Error,
}

interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    Omit<VariantProps<typeof style>, "loading"> {
  name: string
  src?: string
  color?: Color
}

function Avatar({ src, name, size, color, radius, className }: AvatarProps) {
  let [status, setStatus] = useState<Status>(src ? Status.Loading : Status.Idle)
  let { base, img } = style({ size, color, radius })

  let initials = name
    ?.split(" ")
    .map((chunk) => chunk.charAt(0).toLocaleUpperCase())
    .slice(0, 2)
    .join("")

  useEffect(() => {
    if (src) {
      setStatus(Status.Loading)
      let img = new Image()
      img.onload = () => setStatus(Status.Success)
      img.onerror = () => setStatus(Status.Error)
      img.src = src
    }
  }, [src])

  let isLoading = status === Status.Loading
  let didLoad = status === Status.Success

  return (
    <div className={base({ size, color, className })}>
      {src && (isLoading || didLoad) && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className={img({ loading: isLoading })} />
      )}

      {!didLoad && !isLoading && <span>{initials}</span>}
    </div>
  )
}

export { Avatar }
export type { AvatarProps }
