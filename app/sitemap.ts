import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stephenchien.vercel.app";

  const routes = [
    "",
    "/about",
    "/about/now",
    "/about/before",
    "/about/interests",
    "/things",
    "/things/cajal-health",
    "/things/assesskit",
    "/things/gautama",
    "/things/morrison",
    "/research",
    "/research/labs",
    "/research/labs/ecl",
    "/research/labs/ecl/action-asymmetry",
    "/research/labs/ecl/sword-and-shield",
    "/research/labs/ces",
    "/research/labs/gao",
    "/research/publications",
    "/research/teachers",
    "/elsewhere",
    "/elsewhere/places",
    "/elsewhere/readings",
    "/elsewhere/art",
    "/elsewhere/contact",
    "/writings",
    "/writings/poems",
    "/writings/poems/a-slice",
    "/writings/poems/bay-bensonhurst",
    "/writings/poems/egrets-and-egress",
    "/writings/short-stories",
    "/writings/the-hike",
    "/writings/russia",
    "/writings/brief-story",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
