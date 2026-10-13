import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFC73A",
          border: "2px solid #1D1A2F",
          borderRadius: 9,
          color: "#1D1A2F",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: -0.5,
        }}
      >
        ma
      </div>
    ),
    { ...size }
  );
}
