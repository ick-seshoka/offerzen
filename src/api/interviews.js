import { candidateInterviewsUrl } from "@helpers";

export const candidateInterviewsConfig = {
  url: candidateInterviewsUrl,
  method: "get",
  headers: { Accept: "application/json" },
};
