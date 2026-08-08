// Already-qualified-path Ingénierie fiches (degree recognition + placement).
// Split across two batch files and merged here. See ingenierie-fiche-types.ts.

import type { IngenierieFiche } from "../ingenierie-fiche-types";
import { ING_FICHES_DIPLOME_A } from "./diplome-a";
import { ING_FICHES_DIPLOME_B } from "./diplome-b";

export const ING_FICHES_DIPLOME: Record<string, IngenierieFiche> = {
  ...ING_FICHES_DIPLOME_A,
  ...ING_FICHES_DIPLOME_B,
};
