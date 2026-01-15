/**
 * Доступные иконки для секции Special Features
 * 
 * Каждая иконка имеет описание для понимания, когда её использовать
 */

export const SPECIAL_FEATURE_ICONS = {
  /**
   * GamepadIcon - Игровая механика, выбор, интерактивность
   * Используется для: выбор периода/эпохи, игровые элементы, выбор пути
   */
  gamepad: "gamepad",
  
  /**
   * PaintIcon - Мозаика, пазл, карта из фрагментов
   * Используется для: карта ключевых мест, мозаичное представление, сборка из частей
   */
  paint: "paint",
  
  /**
   * NavigationIcon - Навигация, карта, маршрут, два человека с мыслями/облачками
   * Используется для: карта мест, навигация, обмен достижениями, сообщество
   */
  navigation: "navigation",
  
  /**
   * PhoneIcon - Мобильное устройство, GPS, QR-код, доступ к контенту
   * Используется для: отметки на месте, GPS/QR-код, мобильный доступ
   */
  phone: "phone",
  
  /**
   * LightbulbIcon - Идея, прогресс, мотивация, счетчик
   * Используется для: счетчик пройденного пути, идеи, прогресс, мотивация
   */
  lightbulb: "lightbulb",
  
  /**
   * HeadphonesIcon - Аудио, звук, прослушивание
   * Используется для: аудио контент, звуковые функции
   */
  headphones: "headphones",
} as const;

/**
 * Тип для ключей иконок special features
 */
export type SpecialFeatureIconKey = typeof SPECIAL_FEATURE_ICONS[keyof typeof SPECIAL_FEATURE_ICONS];

/**
 * Массив всех доступных ключей иконок (для валидации)
 */
export const SPECIAL_FEATURE_ICON_KEYS = Object.values(SPECIAL_FEATURE_ICONS);

/**
 * Описания иконок для документации
 */
export const SPECIAL_FEATURE_ICON_DESCRIPTIONS: Record<SpecialFeatureIconKey, string> = {
  gamepad: "Игровая механика, выбор, интерактивность (человек с пазлом)",
  paint: "Мозаика, пазл, карта из фрагментов",
  navigation: "Навигация, карта, два человека с мыслями/облачками",
  phone: "Мобильное устройство, GPS, QR-код, доступ к контенту",
  lightbulb: "Идея, прогресс, мотивация, счетчик (лампочка с пазлом)",
  headphones: "Аудио, звук, прослушивание",
};
