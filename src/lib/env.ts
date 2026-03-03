export const env = {
  STRAPI_BASE_URL: import.meta.env.STRAPI_BASE_URL || "https://cms.opensourceweekend.org",
  STRAPI_GRAPHQL_URL: import.meta.env.STRAPI_GRAPHQL_URL || "https://cms.opensourceweekend.org/graphql",
  STRAPI_API_TOKEN: import.meta.env.STRAPI_API_TOKEN || "",
};
