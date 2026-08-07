// Already-qualified-path Industrie fiches (recognition + placement). Split across
// two batch files and merged here. See industrie-fiche-types.ts for the shape.

import type { IndustrieFiche } from "../industrie-fiche-types";
import { IND_FICHES_DIPLOME_A } from "./diplome-a";
import { IND_FICHES_DIPLOME_B } from "./diplome-b";

export const IND_FICHES_DIPLOME: Record<string, IndustrieFiche> = {
  ...IND_FICHES_DIPLOME_A,
  ...IND_FICHES_DIPLOME_B,
};
