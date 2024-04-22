import type { MicroCMSQueries } from "microcms-js-sdk";
import { client } from "./client";

export const getArticles = async (queries?: MicroCMSQueries) => {
  return await client.get({ endpoint: "articles", queries });
};
