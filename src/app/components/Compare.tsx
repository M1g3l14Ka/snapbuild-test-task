const columns = ["Особенности", "Снэпбилд", "Claude + Figma MCP", "No-code", "Cursor", "Традиционный подход"];

const rows = [
  ["Time-to-market", "5 минут", "30–60 минут", "2–3 дня", "1–2 дня", "3–5 недель"],
  ["Дизайн-система", "100% точность", "Частично", "Шаблоны", "Вручную", "Через ревью"],
  ["Визуальный редактор", "+ AI", "—", "+", "—", "+"],
  ["Требуемые навыки", "Нет", "Промпты + код", "Дизайн", "Разработка", "Полная команда"],
];

export default function Compare() {
  return (
    <section id="compare" className="scroll-mt-24 py-24 sm:py-32">
      <div className="page-shell">
        <h2 className="section-title max-w-6xl">
          Почему команды выбирают Снэпбилд
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
          Вы получаете готовые маркетинговые материалы, а не ещё один сложный редактор.
        </p>

        <div className="scrollbar-hidden mt-16 overflow-x-auto rounded-[28px]">
          <div className="relative min-w-[900px] overflow-hidden rounded-[28px] bg-white">
            <div className="gradient-outline pointer-events-none absolute inset-y-0 left-1/6 z-20 w-1/6 rounded-2xl" />
            <table className="w-full table-fixed border-separate border-spacing-0 text-left">
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={column}
                      className={`p-6 text-sm font-medium sm:py-10 sm:text-base ${
                        index === 1
                          ? "bg-gradient-to-r from-[#ff6b61] via-[#ff5ebf] to-[#8c7dff] bg-clip-text text-transparent"
                          : "text-neutral-500"
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${row[0]}-${cellIndex}`}
                        className={`border-t border-neutral-200 p-6 sm:py-10 ${
                          cellIndex === 0 ? "font-medium" : "text-neutral-600"
                        } ${cellIndex === 1 ? "bg-white font-medium text-black" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
