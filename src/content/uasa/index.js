import { uasaPaper1 } from "./uasaPaper1.js";
import { uasaPaper2 } from "./uasaPaper2.js";
import { uasaPaper3 } from "./uasaPaper3.js";
import { form2UasaPaper1 } from "./form2Uasa1.js";
import { form2UasaPaper2 } from "./form2Uasa2.js";
import { form2UasaPaper3 } from "./form2Uasa3.js";
import { form3UasaPaper1 } from "./form3Uasa1.js";
import { form3UasaPaper2 } from "./form3Uasa2.js";
import { form3UasaPaper3 } from "./form3Uasa3.js";

export const UASA_PAPERS = [
  uasaPaper1,
  uasaPaper2,
  uasaPaper3,
  form2UasaPaper1,
  form2UasaPaper2,
  form2UasaPaper3,
  form3UasaPaper1,
  form3UasaPaper2,
  form3UasaPaper3,
];

export function getUasaPaper(paperId) {
  return UASA_PAPERS.find((p) => p.id === paperId) ?? uasaPaper1;
}
