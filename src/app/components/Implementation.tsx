const steps = [
  ["01", "Аудит", "Изучаем материалы, интерфейсы и правила бренда."],
  ["02", "Настройка", "Собираем токены, компоненты и сценарии генерации."],
  ["03", "Пилот", "Запускаем один рабочий процесс на реальных задачах."],
  ["04", "Масштабирование", "Подключаем команды, форматы и инфраструктуру."],
];

export default function Implementation() {
  return (
    <section id="implementation" className="scroll-mt-24 px-3 py-20 sm:px-4 sm:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            От дизайн-системы до первого запуска
          </h2>
          <p className="max-w-xl text-lg leading-8 text-neutral-600 lg:justify-self-end">
            Начинаем с ограниченного сценария, проверяем результат и только потом расширяем использование.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {steps.map(([number, title, description]) => (
            <li key={number} className="border-t border-neutral-400 pt-5">
              <span className="text-sm text-neutral-500">{number}</span>
              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">{title}</h3>
              <p className="mt-3 max-w-xs leading-7 text-neutral-600">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
