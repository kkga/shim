import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ShapesIcon } from "@phosphor-icons/react/dist/ssr";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Shim";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
  const font = await readFile(
    join(process.cwd(), "app/_fonts/MonaSans-SemiBold.ttf")
  );

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 112,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <ShapesIcon color="#000000" size={72} weight="fill" />
      {/** biome-ignore lint/performance/noImgElement: ok */}
      <img
        aria-label="icon"
        height={160}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTEuNTksMTgxLjQ3QTgsOCwwLDAsMSwxMDQsMTkySDI0YTgsOCwwLDAsMS03LjU5LTEwLjUzbDQwLTEyMGE4LDgsMCwwLDEsMTUuMTgsMFpNMjA4LDc2YTUyLDUyLDAsMSwwLTUyLDUyQTUyLjA2LDUyLjA2LDAsMCwwLDIwOCw3NlptMTYsNjhIMTM2YTgsOCwwLDAsMC04LDh2NTZhOCw4LDAsMCwwLDgsOGg4OGE4LDgsMCwwLDAsOC04VjE1MkE4LDgsMCwwLDAsMjI0LDE0NFoiLz48L3N2Zz4="
        width={160}
      />
      Shim
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Mona Sans",
          data: font,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
