// Already-qualified-path Hôtellerie fiches (recognition + placement). Split
// across two batch files and merged here. See hotellerie-fiche-types.ts.

import type { HotellerieFiche } from "../hotellerie-fiche-types";
import { HOT_FICHES_DIPLOME_A } from "./diplome-a";
import { HOT_FICHES_DIPLOME_B } from "./diplome-b";

export const HOT_FICHES_DIPLOME: Record<string, HotellerieFiche> = {
  ...HOT_FICHES_DIPLOME_A,
  ...HOT_FICHES_DIPLOME_B,
};
