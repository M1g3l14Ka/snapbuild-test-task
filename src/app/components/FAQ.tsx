const questions = [
  {
    question: "Что можно создавать в Снэпбилде?",
    answer:
      "Сайты, изображения, видео, баннеры и презентации — все основные маркетинговые форматы в фирменном стиле компании.",
  },
  {
    question: "Как работает анализ бренда?",
    answer:
      "Платформа анализирует интерфейсы и материалы бренда: цвета, типографику, сетку, отступы, компоненты и правила дизайн-системы.",
  },
  {
    question: "Можно ли экспортировать решение в существующую инфраструктуру?",
    answer:
      "Да. Результат можно интегрировать в привычный процесс разработки и связать с GitHub, GitLab или существующим CI/CD.",
  },
  {
    question: "Интерфейс полностью соответствует дизайн-системе?",
    answer:
      "Да. Цвета, шрифты, отступы, состояния и компоненты создаются по правилам подключённой дизайн-системы.",
  },
  {
    question: "В чём отличие от универсальных AI-систем?",
    answer:
      "Снэпбилд учитывает правила конкретного бренда, бизнес-логику и требования безопасности, а не просто генерирует похожий результат.",
  },
  {
    question: "Чем это отличается от no-code конструкторов?",
    answer:
      "Вместо фиксированных шаблонов платформа использует компоненты вашей дизайн-системы и сохраняет единый визуальный язык продукта.",
  },
  {
    question: "В чём отличие от популярных AI-инструментов для сайтов?",
    answer:
      "Скорость генерации дополняется контролем дизайн-системы, безопасностью данных и возможностью развёртывания локальных моделей.",
  },
  {
    question: "Возможна ли работа в закрытом корпоративном облаке?",
    answer:
      "Да. Платформу можно развернуть в изолированной инфраструктуре без доступа к внешней сети, сохранив данные внутри компании.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 px-3 py-20 sm:px-4 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">FAQ</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Частые вопросы
          </h2>
        </div>

        <div className="divide-y divide-neutral-300 border-y border-neutral-300">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium sm:py-6 sm:text-xl">
                {question}
                <span className="relative size-5 shrink-0" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-px w-full bg-black" />
                  <span className="absolute left-1/2 top-0 h-full w-px bg-black transition-transform group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-10 leading-7 text-neutral-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
