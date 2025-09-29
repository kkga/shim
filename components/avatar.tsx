"use client";

import { useEffect, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const COLORS = {
  gray: "text-[var(--slate-2)] bg-[var(--slate-9)]",
  blue: "text-[var(--iris-2)] bg-[var(--iris-9)]",
  green: "text-[var(--green-2)] bg-[var(--green-9)]",
  orange: "text-[var(--orange-2)] bg-[var(--orange-9)]",
};

type Color = keyof typeof COLORS;

const style = tv({
  slots: {
    base: [
      "relative flex shrink-0 cursor-default items-center justify-center overflow-hidden font-bold text-neutral-text tracking-tight",
      "before:pointer-events-none before:absolute before:inset-0 before:inset-ring before:inset-ring-neutral-line",
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
});

// biome-ignore lint/style/noEnum: perfect use case
enum Status {
  Idle = 0,
  Loading = 1,
  Success = 2,
  Error = 3,
}

interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    Omit<VariantProps<typeof style>, "loading"> {
  name: string;
  src?: string;
  color?: Color;
}

function Avatar({ src, name, size, color, radius, className }: AvatarProps) {
  let [status, setStatus] = useState<Status>(
    src ? Status.Loading : Status.Idle
  );
  let { base, img: imgStyle } = style({ size, color, radius });

  let initials = name
    ?.split(" ")
    .map((chunk) => chunk.charAt(0).toLocaleUpperCase())
    .slice(0, 2)
    .join("");

  useEffect(() => {
    if (src) {
      setStatus(Status.Loading);
      let img = new Image();
      img.onload = () => setStatus(Status.Success);
      img.onerror = () => setStatus(Status.Error);
      img.src = src;
    }
  }, [src]);

  let isLoading = status === Status.Loading;
  let didLoad = status === Status.Success;

  return (
    <div className={base({ size, color, className })}>
      {src && (isLoading || didLoad) && (
        // biome-ignore lint/performance/noImgElement: not necessarily a nextjs app
        <img
          alt={name}
          className={imgStyle({ loading: isLoading })}
          height="100%"
          src={src}
          width="100%"
        />
      )}

      {!(didLoad || isLoading) && <span>{initials}</span>}
    </div>
  );
}

export { Avatar };
export type { AvatarProps };
