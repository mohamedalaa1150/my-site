import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohamed Alaa | Portfolio",
    short_name: "Mohamed Alaa",
    description: "E-learning & Instructional Design Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#09090F",
    theme_color: "#09090F",
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
