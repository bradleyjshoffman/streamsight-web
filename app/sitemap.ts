import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://streamsight.co",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://streamsight.co/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://streamsight.co/notes",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://streamsight.co/notes/what-is-streamsight",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://streamsight.co/notes/why-process-flow-visualization-matters",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://streamsight.co/notes/building-streamsight",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://streamsight.co/notes/how-teams-lose-operational-context",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://streamsight.co/notes/when-static-diagrams-break-down",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://streamsight.co/notes/clearer-workflow-handoffs",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
