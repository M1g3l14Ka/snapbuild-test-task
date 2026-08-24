"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

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
  const columns = [questions.slice(0, 4), questions.slice(4)];

  return (
    <section id="faq" className="scroll-mt-24 py-24 sm:py-32">
      <div className="page-shell">
        <h2 className="section-title">Часто задаваемые вопросы</h2>
        <p className="mt-5 max-w-5xl text-lg leading-8 text-neutral-600">
          Ответы, которые помогут принять решение уверенно — без рисков для бренда и безопасности.
        </p>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-2 lg:gap-8">
          {columns.map((column, columnIndex) => (
            <Accordion key={columnIndex} defaultValue={columnIndex === 0 ? [questions[3].question] : []} className="gap-5">
              {column.map(({ question, answer }) => (
                <AccordionItem key={question} value={question} className="rounded-[26px] border-0 bg-white px-6 sm:px-7">
                  <AccordionTrigger className="min-h-20 items-center py-6 text-base font-medium hover:no-underline sm:text-lg [&_[data-slot=accordion-trigger-icon]]:size-6 [&_[data-slot=accordion-trigger-icon]]:text-black cursor-pointer">
                    <span className="min-w-0 pr-3">{question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pr-8 text-base leading-7 text-neutral-600">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
