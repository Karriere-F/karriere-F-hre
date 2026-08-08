// Already-qualified-path Construction fiches (recognition + placement). Split
// across two batch files and merged here. See construction-fiche-types.ts.

import type { ConstructionFiche } from "../construction-fiche-types";
import { CONSTR_FICHES_DIPLOME_A } from "./diplome-a";
import { CONSTR_FICHES_DIPLOME_B } from "./diplome-b";

export const CONSTR_FICHES_DIPLOME: Record<string, ConstructionFiche> = {
  ...CONSTR_FICHES_DIPLOME_A,
  ...CONSTR_FICHES_DIPLOME_B,
};
