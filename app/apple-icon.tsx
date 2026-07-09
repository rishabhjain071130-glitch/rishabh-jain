import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 110,
          background: "#090B12",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4F7CFF",
          fontWeight: "bold",
          fontFamily: "monospace",
          border: "4px solid rgba(79, 124, 255, 0.3)",
          borderRadius: "36px",
        }}
      >
        R
      </div>
    ),
    {
      ...size,
    }
  );
}
