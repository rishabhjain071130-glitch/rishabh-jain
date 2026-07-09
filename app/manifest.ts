import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rishabh Jain Portfolio OS",
    short_name: "Rishabh OS",
    description:
      "Building secure, intelligent, and scalable software through real-world engineering projects while continuously learning Cyber Security, Artificial Intelligence, and Full Stack Development.",
    start_url: "/",
    display: "standalone",
    background_color: "#090B12",
    theme_color: "#090B12",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
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
