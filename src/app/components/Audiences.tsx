const audiences = [
  {
    number: "01",
    title: "Маркетинг",
    description: "Запускает кампании и адаптирует материалы без очереди к дизайнерам и разработчикам.",
    result: "Быстрее от идеи до запуска",
  },
  {
    number: "02",
    title: "Дизайн",
    description: "Фиксирует правила один раз и освобождается от потока однотипных макетов и ресайзов.",
    result: "Меньше ручной рутины",
  },
  {
    number: "03",
    title: "Продажи",
    description: "Собирает презентации и посадочные страницы под клиента в едином стиле компании.",
    result: "Материалы к каждой встрече",
  },
  {
    number: "04",
    title: "Продукт",
    description: "Проверяет гипотезы на готовых страницах, не создавая отдельный процесс разработки.",
    result: "Больше проверенных гипотез",
  },
];

export default function Audiences() {
  return (
    <section id="audiences" className="scroll-mt-24 py-24 sm:py-32">
      <div className="page-shell">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="section-title max-w-5xl">
            Одна система для всей команды
          </h2>
          <p className="max-w-xl text-lg leading-8 text-neutral-600 lg:justify-self-end">
            Каждый отдел работает самостоятельно, а бренд остаётся цельным во всех точках контакта.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <article key={audience.title} className="flex min-h-72 flex-col rounded-[28px] bg-white p-6 sm:p-7">
              <span className="text-sm text-neutral-400">{audience.number}</span>
              <h3 className="mt-10 text-3xl font-semibold tracking-[-0.03em]">{audience.title}</h3>
              <p className="mt-4 leading-7 text-neutral-600">{audience.description}</p>
              <p className="mt-auto pt-8 text-sm font-medium">{audience.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
