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
          padding: 1,
          background:
            "linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 52%, #5B21B6 100%)",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 9,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#14131E",
            color: "#BFA9FF",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: -0.8,
          }}
        >
            MA
        </div>
      </div>
    ),
    { ...size }
  );
}
