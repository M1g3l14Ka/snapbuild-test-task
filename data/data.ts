import type { NavItem, UseCaseCategory } from "../types/types";

export const headerNav: NavItem[] = [
  { id: "product", label: "Продукт", href: "#process" },
  { id: "use-cases", label: "Возможности", href: "#use-cases" },
  { id: "security", label: "Безопасность", href: "#features" },
  { id: "faq", label: "FAQ", href: "#faq" },
];

export const useCases: UseCaseCategory[] = [
  {
    id: "sites",
    label: "Сайты",
    items: [
      {
        title: "Результат за один запрос",
        description: "Отправьте документ или ссылку — платформа сама соберёт структуру страницы.",
        image: "/assets/use-cases/sites-1.webp",
      },
      {
        title: "Страница за минуту",
        description: "Ваши шрифты, сетка и компоненты применяются к результату автоматически.",
        image: "/assets/use-cases/sites-2.webp",
      },
      {
        title: "AI или визуальный редактор",
        description: "Меняйте контент через чат или редактируйте нужные блоки вручную.",
        image: "/assets/use-cases/sites-3.webp",
      },
      {
        title: "Адаптация под ЦА",
        description: "Создавайте версии сайта под новый сегмент без отдельной пересборки.",
        image: "/assets/use-cases/sites-4.webp",
      },
    ],
  },
  {
    id: "images",
    label: "Изображения",
    items: [
      {
        title: "В стиле и цвете бренда",
        description: "Изображения следуют композиционным правилам вашей дизайн-системы.",
        image: "/assets/use-cases/images-1.webp",
      },
      {
        title: "Попадание с первой генерации",
        description: "Без часов промптинга и долгого поиска подходящего изображения на стоках.",
        image: "/assets/use-cases/images-2.webp",
      },
      {
        title: "Редактирование объектов",
        description: "Меняйте композицию и удаляйте отдельные элементы прямо на изображении.",
        image: "/assets/use-cases/images-3.webp",
      },
      {
        title: "Любой стиль и формат",
        description: "Портреты, иллюстрации и обложки в нужном соотношении и качестве до 4K.",
        image: "/assets/use-cases/images-4.webp",
      },
    ],
  },
  {
    id: "video",
    label: "Видео",
    items: [
      {
        title: "Изображения как ключевые кадры",
        description: "Используйте готовую фирменную графику как основу для будущего ролика.",
        image: "/assets/use-cases/video-1.webp",
      },
      {
        title: "Контроль качества и формата",
        description: "Настраивайте длительность, соотношение сторон и качество под площадку.",
        image: "/assets/use-cases/video-2.webp",
      },
      {
        title: "Сохранение композиции",
        description: "AI удерживает визуальный стиль и целостность ролика между кадрами.",
        image: "/assets/use-cases/video-3.webp",
      },
      {
        title: "Десятки адаптаций",
        description: "Один сценарий превращается в версии для соцсетей и рекламных площадок.",
        image: "/assets/use-cases/video-4.webp",
      },
    ],
  },
  {
    id: "banners",
    label: "Баннеры",
    items: [
      {
        title: "Креативы из одной идеи",
        description: "Готовые баннеры в фирменном стиле для любой рекламной кампании.",
        image: "/assets/use-cases/banners-1.webp",
      },
      {
        title: "Все размеры автоматически",
        description: "Готовые размеры популярных площадок без ручной пересборки макета.",
        image: "/assets/use-cases/banners-2.webp",
      },
      {
        title: "Текст и графика под контролем",
        description: "Редактируйте оффер, композицию и визуальные акценты в одном месте.",
        image: "/assets/use-cases/banners-3.webp",
      },
      {
        title: "Экспорт под площадку",
        description: "Формат и вес файлов сразу соответствуют требованиям размещения.",
        image: "/assets/use-cases/banners-4.webp",
      },
    ],
  },
  {
    id: "presentations",
    label: "Презентации",
    items: [
      {
        title: "Презентация из запроса",
        description: "Платформа собирает структуру и первый черновик будущих слайдов.",
        image: "/assets/use-cases/presentations-1.jpg",
      },
      {
        title: "В вашей дизайн-системе",
        description: "Шрифты, сетки и компоненты применяются ко всем слайдам автоматически.",
        image: "/assets/use-cases/presentations-2.webp",
      },
      {
        title: "Редактирование через AI",
        description: "Меняйте отдельный слайд или всю историю презентации через чат.",
        image: "/assets/use-cases/presentations-3.webp",
      },
      {
        title: "Экспорт в нужном формате",
        description: "Готовьте материалы для встречи, рассылки или публикации.",
        image: "/assets/use-cases/presentations-4.webp",
      },
    ],
  },
];
