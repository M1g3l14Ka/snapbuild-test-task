const roadmap = [
  ["Сайты за 5 минут", "Генерация корпоративных сайтов по дизайн-системе.", "Декабрь, 2025"],
  ["Консистентные AI-иллюстрации", "Единый визуальный стиль через фирменные пресеты.", "Январь, 2026"],
  ["Дизайн-система из сайта", "Сканирование страниц и сборка готовых правил бренда.", "Февраль, 2026"],
  ["Режим изображений", "Создание и редактирование брендовой графики.", "Март, 2026"],
  ["Генерация видео", "Ролики из изображений с управлением ключевыми кадрами.", "Апрель, 2026"],
  ["Ресайзы изображений", "Все популярные форматы из одной фокус-точки.", "Май, 2026"],
  ["Расширенный редактор", "Слои, размеры контейнеров и версии промптов.", "Июнь, 2026"],
  ["Баннеры и презентации", "Новые режимы генерации маркетинговых материалов.", "Июль, 2026"],
  ["AI-маркетолог", "Обновление материалов и сборка кампаний целиком.", "Август, 2026"],
  ["Компонентный подход", "Сборка секций из элементов дизайн-библиотеки.", "Сентябрь, 2026"],
  ["Предиктивные рекомендации", "Предложения по улучшению активных кампаний.", "Октябрь, 2026"],
  ["Инфраструктура", "Развёртывание платформы внутри вашей сети.", "Ноябрь, 2026"],
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-24 px-3 py-20 sm:px-4 sm:py-28">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Каждый день — новый релиз
        </h2>
        <p className="mt-5 text-lg text-neutral-600">Приоритизируем бэклог под реальные цели клиентов.</p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roadmap.map(([title, description, date], index) => (
            <article key={title} className="flex min-h-64 flex-col rounded-3xl bg-white p-6 sm:p-7">
              <span className="text-sm text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em]">{title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{description}</p>
              <p className="mt-auto pt-8 text-sm font-medium">{date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
