import { ImageResponse } from "next/og";
import personalInfo from "@/data/personalInfo.json";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "90px",
          background: "#0B0F1A",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(201,162,75,0.35), transparent 55%), radial-gradient(circle at 85% 85%, rgba(43,182,163,0.25), transparent 50%)",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C9A24B",
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#F5F1E8",
            marginBottom: 20,
          }}
        >
          {personalInfo.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 600,
            background:
              "linear-gradient(135deg, #F1D28A 0%, #C9A24B 45%, #9C6B2E 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {personalInfo.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
