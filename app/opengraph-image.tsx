import { ShapesIcon } from "@phosphor-icons/react/dist/ssr";
import { ImageResponse } from "next/og";

export const alt = "Shim";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ShapesIcon color="#FFFFFF" size={72} weight="fill" />
      {/** biome-ignore lint/performance/noImgElement: ok */}
      <img
        aria-label="icon"
        height={120}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTEuNTksMTgxLjQ3QTgsOCwwLDAsMSwxMDQsMTkySDI0YTgsOCwwLDAsMS03LjU5LTEwLjUzbDQwLTEyMGE4LDgsMCwwLDEsMTUuMTgsMFpNMjA4LDc2YTUyLDUyLDAsMSwwLTUyLDUyQTUyLjA2LDUyLjA2LDAsMCwwLDIwOCw3NlptMTYsNjhIMTM2YTgsOCwwLDAsMC04LDh2NTZhOCw4LDAsMCwwLDgsOGg4OGE4LDgsMCwwLDAsOC04VjE1MkE4LDgsMCwwLDAsMjI0LDE0NFoiLz48L3N2Zz4="
        width={120}
      />
    </div>,
    {
      ...size,
    }
  );
}
