import { ImageResponse } from "next/og";
import { profile } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Mohamed Alaa — Instructional Designer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#FBF5EA",
          color: "#1D1A2F",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: -60, top: -60, width: 260, height: 260, borderRadius: 999, background: "#FFC73A", border: "4px solid #1D1A2F" }} />
        <div style={{ position: "absolute", right: 120, bottom: -70, width: 220, height: 220, borderRadius: 48, background: "#16A897", border: "4px solid #1D1A2F", transform: "rotate(12deg)" }} />
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
          {profile.name} · {profile.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 800, lineHeight: 1, letterSpacing: -3, maxWidth: 900 }}>
          <span>I design learning people actually</span>
          <span style={{ color: "#FF6A4D" }}>want to finish.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#57536B" }}>Learning games · Interactive courses · Storyboards</div>
      </div>
    ),
    { ...size }
  );
}
