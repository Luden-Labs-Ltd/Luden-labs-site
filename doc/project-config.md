## Создание нового проекта

### 1) JSON с данными

`src/entities/project/configs/data/my-project.json`

```json
{
  "id": "my-project",
  "slug": "my-project",
  "theme": {
    "colorScheme": "scheme2",
    "header": {
      "gradient": {
        "from": "from-orange-400",
        "to": "to-red-500"
      }
    },
    "footer": {
      "backgroundColor": "#FFC9C9"
    }
  },
  "sections": [
    { "type": "header", "enabled": true, "data": { "title": "МОЙ ПРОЕКТ" } },
    {
      "type": "content",
      "enabled": true,
      "data": {
        "imageKey": "mainImage",
        "imageAlt": "Описание",
        "paragraphs": [{ "text": "Первый параграф..." }]
      }
    },
    { "type": "footer", "enabled": true, "data": {} }
  ]
}
```

### 2) Файл ассетов

`src/entities/project/configs/assets/my-project.ts`

```ts
import mainImage from "@/shared/assets/images/projects/my-project/main.webp";

export const myProjectAssets = {
  mainImage,
} as const;
```

### 3) Регистрация проекта

`src/entities/project/configs/index.ts`

```ts
import myProjectData from "./data/my-project.json";
import { myProjectAssets } from "./assets/my-project";

const myProjectConfig: ProjectConfig = {
  ...(myProjectData as ProjectConfigData),
  assets: myProjectAssets,
};

export const PROJECT_CONFIGS = {
  "my-project": myProjectConfig,
};
```

## Цветовые темы (4 схемы)

- `scheme1` → `#FEDC7A`
- `scheme2` → `#FFC9C9`
- `scheme3` → `#A8F5FF`
- `scheme4` → `#D7D5FF`

Используйте `theme.colorScheme`, остальные цвета подтянутся автоматически.

## Доступные секции

`header`, `content`, `description`, `howToPlay`, `specialFeatures`,
`targetAudience`, `faq`, `about`, `footer`.
