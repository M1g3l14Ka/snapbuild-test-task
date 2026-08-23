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
    <section id="plans" className="scroll-mt-24 px-3 py-20 sm:px-4 sm:py-28">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Формат подключения под ваш масштаб
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
          Начните с понятной задачи или сразу разверните решение для всей компании.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`flex min-h-[420px] flex-col rounded-[28px] p-6 sm:p-8 ${
                plan.featured ? "bg-[#050505] text-white" : "bg-white"
              }`}
            >
              <h3 className="text-3xl font-semibold tracking-[-0.03em]">{plan.title}</h3>
              <p className={`mt-4 leading-7 ${plan.featured ? "text-neutral-400" : "text-neutral-600"}`}>
                {plan.description}
              </p>
              <ul className={`mt-8 space-y-3 border-t pt-6 ${plan.featured ? "border-neutral-700" : "border-neutral-200"}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className={`size-1.5 rounded-full ${plan.featured ? "bg-white" : "bg-black"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <p className="mb-5 text-sm font-medium">Стоимость — по запросу</p>
                <a
                  href={demoUrl}
                  className={`inline-flex rounded-xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                    plan.featured ? "bg-white text-black" : "bg-black text-white"
                  }`}
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
