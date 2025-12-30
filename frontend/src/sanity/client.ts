import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: 'hxfdrfb5',
  dataset: "production",
  apiVersion: "2025-12-30",
  useCdn: true
});
