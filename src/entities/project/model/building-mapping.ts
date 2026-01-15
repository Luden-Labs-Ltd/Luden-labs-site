// Маппинг между building ID (из карты) и slug проектов
export const BUILDING_TO_PROJECT_MAP: Record<number, string> = {
  1: "enola",
  2: "spork", // Spark -> Spork
  3: "real-fishing", // Virtual Fishing -> Real Fishing
  4: "pulson",
  5: "tresor",
  6: "sos-band",
  7: "luden-cards",
  8: "historical-journey", // Joney App -> Historical Journey
  9: "retorno",
  10: "stygen",
} as const;

// Обратный маппинг для получения building ID по slug
export const PROJECT_TO_BUILDING_MAP: Record<string, number> = Object.entries(
  BUILDING_TO_PROJECT_MAP,
).reduce(
  (acc, [buildingId, slug]) => {
    acc[slug] = Number(buildingId);
    return acc;
  },
  {} as Record<string, number>,
);

// Функция получения slug по building ID
export function getProjectSlugByBuildingId(buildingId: number): string | null {
  return BUILDING_TO_PROJECT_MAP[buildingId] || null;
}

// Функция получения building ID по slug
export function getBuildingIdByProjectSlug(slug: string): number | null {
  return PROJECT_TO_BUILDING_MAP[slug] || null;
}
