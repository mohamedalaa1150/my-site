import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 6,
          background:
            "linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 52%, #5B21B6 100%)",
          borderRadius: 42,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 37,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#14131E",
            color: "#BFA9FF",
            fontSize: 62,
            fontWeight: 800,
            letterSpacing: -4,
          }}
        >
            MA
        </div>
      </div>
    ),
    { ...size }
  );
}
