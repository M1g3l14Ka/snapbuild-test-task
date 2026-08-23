const columns = ["Особенности", "Снэпбилд", "Claude + Figma MCP", "No-code", "Cursor", "Традиционный подход"];

const rows = [
  ["Time-to-market", "5 минут", "30–60 минут", "2–3 дня", "1–2 дня", "3–5 недель"],
  ["Дизайн-система", "100% точность", "Частично", "Шаблоны", "Вручную", "Через ревью"],
  ["Визуальный редактор", "+ AI", "—", "+", "—", "+"],
  ["Требуемые навыки", "Нет", "Промпты + код", "Дизайн", "Разработка", "Полная команда"],
];

export default function Compare() {
  return (
    <section id="compare" className="scroll-mt-24 px-3 py-20 sm:px-4 sm:py-28">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Почему команды выбирают Снэпбилд
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
          Вы получаете готовые маркетинговые материалы, а не ещё один сложный редактор.
        </p>

        <div className="scrollbar-hidden mt-12 overflow-x-auto rounded-[28px] bg-white p-2">
          <table className="w-full min-w-[900px] border-separate border-spacing-0 text-left">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={column}
                    className={`p-5 text-sm font-medium ${index === 1 ? "rounded-t-2xl bg-[#050505] text-white" : "text-neutral-500"}`}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={row[0]}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${row[0]}-${cellIndex}`}
                      className={`border-t border-neutral-200 p-5 ${
                        cellIndex === 0 ? "font-medium" : "text-neutral-600"
                      } ${cellIndex === 1 ? "bg-[#050505] font-medium text-white" : ""} ${
                        cellIndex === 1 && rowIndex === rows.length - 1 ? "rounded-b-2xl" : ""
                      }`}
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
    </section>
  );
}
