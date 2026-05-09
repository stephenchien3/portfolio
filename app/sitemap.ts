import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stephenchien.vercel.app";

  const routes = [
    "",
    "/about",
    "/about/now",
    "/things",
    "/things/assesskit",
    "/things/gautama",
    "/research",
    "/research/labs",
    "/research/labs/ecl",
    "/research/labs/ecl/action-asymmetry",
    "/research/labs/ecl/sword-and-shield",
    "/research/labs/ces",
    "/research/labs/gao",
    "/research/publications",
    "/writings",
    "/writings/brief-story",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
