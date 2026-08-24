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
    <section id="roadmap" className="scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="page-shell">
        <h2 className="section-title">
          Каждый день — новый релиз
        </h2>
        <p className="mt-5 text-lg text-neutral-600">Приоритизируем бэклог под реальные цели клиентов.</p>
      </div>

      <div className="scrollbar-hidden mt-20 overflow-x-auto px-[var(--page-gutter)] pb-8 snap-x snap-mandatory">
        <div className="relative grid min-w-[3300px] grid-cols-12 lg:min-w-[4800px]">
          <div className="absolute left-[calc(100%/24)] right-[calc(100%/24)] top-3 h-px bg-neutral-300" />
          <div className="absolute left-[calc(100%/24)] top-3 h-px w-[66.6667%] bg-gradient-to-r from-[#ff715f] via-[#ff5ebb] to-[#9188ff]" />

          {roadmap.map(([title, description, date], index) => {
            const isActive = index <= 8;

            return (
              <article key={title} className="snap-start px-4 first:pl-0 last:pr-0 lg:px-7">
                <div className="relative z-10 flex h-6 items-center justify-center">
                  <span
                    className={`size-3 rounded-full border-[3px] ${
                      isActive
                        ? "border-[#ff6c91] bg-[#ff6c91] shadow-[0_0_0_9px_rgba(255,108,145,0.16)]"
                        : "border-neutral-500 bg-neutral-500 shadow-[0_0_0_9px_rgba(115,115,115,0.12)]"
                    }`}
                  />
                </div>
                <div className="pt-16">
                  <h3 className={`text-xl font-medium tracking-[-0.02em] ${isActive ? "text-black" : "text-neutral-500"}`}>
                    {title}
                  </h3>
                  <p className={`mt-4 max-w-sm leading-7 ${isActive ? "text-neutral-600" : "text-neutral-400"}`}>
                    {description}
                  </p>
                  <p className={`mt-6 text-sm font-medium ${isActive ? "text-black" : "text-neutral-500"}`}>{date}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
