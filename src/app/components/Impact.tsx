const metrics = [
  ["100%", "точность соответствия дизайн-системе"],
  ["1", "единый источник правил бренда"],
  ["Встроен", "контроль соответствия дизайн-системе"],
];

export default function Impact() {
  return (
    <section id="impact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="page-shell">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">Эффект</p>
        <h2 className="section-title mt-4 max-w-6xl">
          Команда делает больше, бренд не теряет качество
        </h2>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <article className="brand-gradient flex min-h-[360px] flex-col justify-between rounded-[32px] p-7 sm:min-h-[440px] sm:p-10">
            <p className="max-w-md text-lg leading-8 text-neutral-700">Time-to-market для сайтов</p>
            <div>
              <strong className="text-[clamp(4.5rem,12vw,9rem)] font-semibold leading-none tracking-[-0.07em]">5 минут</strong>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map(([value, label]) => (
              <article key={value} className="flex min-h-40 flex-col justify-between rounded-[28px] bg-white p-6 sm:p-7 lg:flex-row lg:items-end">
                <strong className="text-5xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-6xl">{value}</strong>
                <p className="mt-5 max-w-xs leading-7 text-neutral-600 lg:mt-0">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
