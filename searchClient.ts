import instantMeiliSearch from "@meilisearch/instant-meilisearch";

export const searchClient = instantMeiliSearch(
  "https://search.stiforr.tech",
  process.env.NEXT_PUBLIC_API_KEY
);
