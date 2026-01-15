// Импорты изображений для проекта Luden Cards
import howToPlay1 from "@/shared/assets/images/pages/projects/how-to-play/how-to-play-1.png?format=webp";
import howToPlay2 from "@/shared/assets/images/pages/projects/how-to-play/how-to-play-2.png?format=webp";
import howToPlay3 from "@/shared/assets/images/pages/projects/how-to-play/how-to-play-3.png?format=webp";
import headerBg from "@/shared/assets/images/pages/projects/gradients/yellow-orange-gradient.png?format=webp";

export const ludenCardsAssets = {
  // Главное изображение
  mainImage:
    "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop",

  // Изображения для секции "Как играть"
  howToPlay1,
  howToPlay2,
  howToPlay3,

  // Фоновое изображение заголовка
  headerBg,
} as const;
