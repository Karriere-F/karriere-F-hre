// Already-qualified-path IT fiches (recognition + placement). Split across two
// batch files and merged here. See it-fiche-types.ts for the shape and SALARY_NOTE.

import type { ItFiche } from "../it-fiche-types";
import { IT_FICHES_DIPLOME_A } from "./diplome-a";
import { IT_FICHES_DIPLOME_B } from "./diplome-b";

export const IT_FICHES_DIPLOME: Record<string, ItFiche> = {
  ...IT_FICHES_DIPLOME_A,
  ...IT_FICHES_DIPLOME_B,
};
