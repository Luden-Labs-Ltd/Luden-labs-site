export const SPECIAL_FEATURE_ICONS = {
  gamepad: "gamepad",
  paint: "paint",
  navigation: "navigation",
  phone: "phone",
  lightbulb: "lightbulb",
  headphones: "headphones",
} as const;

export type SpecialFeatureIconKey =
  (typeof SPECIAL_FEATURE_ICONS)[keyof typeof SPECIAL_FEATURE_ICONS];

export const SPECIAL_FEATURE_ICON_KEYS = Object.values(SPECIAL_FEATURE_ICONS);
export const SPECIAL_FEATURE_ICON_DESCRIPTIONS: Record<
  SpecialFeatureIconKey,
  string
> = {
  gamepad: "Игровая механика, выбор, интерактивность (человек с пазлом)",
  paint: "Мозаика, пазл, карта из фрагментов",
  navigation: "Навигация, карта, два человека с мыслями/облачками",
  phone: "Мобильное устройство, GPS, QR-код, доступ к контенту",
  lightbulb: "Идея, прогресс, мотивация, счетчик (лампочка с пазлом)",
  headphones: "Аудио, звук, прослушивание",
};
