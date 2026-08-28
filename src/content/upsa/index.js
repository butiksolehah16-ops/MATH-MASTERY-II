import { upsaPaper1 } from "./upsaPaper1.js";
import { upsaPaper2 } from "./upsaPaper2.js";
import { upsaPaper3 } from "./upsaPaper3.js";
import { form2UpsaPaper1 } from "./form2Upsa1.js";
import { form2UpsaPaper2 } from "./form2Upsa2.js";
import { form2UpsaPaper3 } from "./form2Upsa3.js";
import { form3UpsaPaper1 } from "./form3Upsa1.js";
import { form3UpsaPaper2 } from "./form3Upsa2.js";
import { form3UpsaPaper3 } from "./form3Upsa3.js";

export const UPSA_PAPERS = [
  upsaPaper1,
  upsaPaper2,
  upsaPaper3,
  form2UpsaPaper1,
  form2UpsaPaper2,
  form2UpsaPaper3,
  form3UpsaPaper1,
  form3UpsaPaper2,
  form3UpsaPaper3,
];

export function getUpsaPaper(paperId) {
  return UPSA_PAPERS.find((p) => p.id === paperId) ?? upsaPaper1;
}
