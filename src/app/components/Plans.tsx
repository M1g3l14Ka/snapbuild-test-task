const demoUrl = "https://t.me/ochen_darya";

const plans = [
  {
    title: "Пилот",
    description: "Проверить платформу на одном формате и рабочем сценарии.",
    features: ["Одна команда", "Один формат материалов", "Базовая настройка бренда"],
  },
  {
    title: "Команда",
    description: "Запустить регулярное производство материалов для нескольких отделов.",
    features: ["Несколько команд", "Все форматы контента", "Интеграции и роли"],
    featured: true,
  },
  {
    title: "Корпорация",
    description: "Развернуть платформу в своей инфраструктуре и под внутренние процессы.",
    features: ["Закрытый контур", "Собственные AI-модели", "Индивидуальный SLA"],
  },
];

export default function Plans() {
  return (
    <section id="plans" className="scroll-mt-24 py-24 sm:py-32">
      <div className="page-shell">
        <h2 className="section-title max-w-6xl">
          Формат подключения под ваш масштаб
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
          Начните с понятной задачи или сразу разверните решение для всей компании.
        </p>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`flex min-h-[420px] flex-col rounded-[28px] p-6 sm:p-8 ${
                plan.featured ? "brand-gradient" : "bg-white"
              }`}
            >
              <h3 className="text-3xl font-semibold tracking-[-0.03em]">{plan.title}</h3>
              <p className="mt-4 leading-7 text-neutral-600">
                {plan.description}
              </p>
              <ul className="mt-8 space-y-3 border-t border-neutral-300 pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className="size-1.5 rounded-full bg-black" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <p className="mb-5 text-sm font-medium">Стоимость — по запросу</p>
                <a
                  href={demoUrl}
                  className="primary-button inline-flex rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
                >
                  Обсудить подключение
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
