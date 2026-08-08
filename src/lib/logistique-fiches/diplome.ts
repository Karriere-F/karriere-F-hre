// Already-qualified-path Logistique fiches (recognition + placement). Split
// across two batch files and merged here. See logistique-fiche-types.ts.

import type { LogistiqueFiche } from "../logistique-fiche-types";
import { LOG_FICHES_DIPLOME_A } from "./diplome-a";
import { LOG_FICHES_DIPLOME_B } from "./diplome-b";

export const LOG_FICHES_DIPLOME: Record<string, LogistiqueFiche> = {
  ...LOG_FICHES_DIPLOME_A,
  ...LOG_FICHES_DIPLOME_B,
};
