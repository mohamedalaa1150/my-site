import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohamed Alaa | Portfolio",
    short_name: "Mohamed Alaa",
    description: "Instructional design portfolio: learning games, interactive courses and storyboards",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF5EA",
    theme_color: "#FBF5EA",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
