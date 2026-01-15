export const TARGET_AUDIENCE_ICONS = {
  hands: "hands",
  puzzle: "puzzle",
  group: "group",
  check: "check",
  path: "path",
  map: "map",
  qrcode: "qrcode",
  certificate: "certificate",
  donation: "donation",
  family: "family",
} as const;

export type TargetAudienceIconKey =
  (typeof TARGET_AUDIENCE_ICONS)[keyof typeof TARGET_AUDIENCE_ICONS];

export const TARGET_AUDIENCE_ICON_KEYS = Object.values(TARGET_AUDIENCE_ICONS);
export const TARGET_AUDIENCE_ICON_DESCRIPTIONS: Record<
  TargetAudienceIconKey,
  string
> = {
  hands: "Руки, помощь, поддержка",
  puzzle: "Пазл, решение задач",
  group: "Группа, сообщество",
  check: "Проверка, подтверждение",
  path: "Путь, маршрут",
  map: "Карта, навигация",
  qrcode: "QR-код, доступ",
  certificate: "Сертификат, достижение",
  donation: "Пожертвование, помощь",
  family: "Семья, забота, поддержка",
};
