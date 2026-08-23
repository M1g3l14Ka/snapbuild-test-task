const metrics = [
  ["80%", "меньше времени на типовые материалы"],
  ["1", "единый источник правил бренда"],
  ["24/7", "доступ к производству контента"],
];

export default function Impact() {
  return (
    <section id="impact" className="scroll-mt-24 px-3 py-20 sm:px-4 sm:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">Эффект</p>
        <h2 className="mt-4 max-w-5xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Команда делает больше, бренд не теряет качество
        </h2>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <article className="flex min-h-[360px] flex-col justify-between rounded-[32px] bg-[#050505] p-7 text-white sm:min-h-[440px] sm:p-10">
            <p className="max-w-md text-lg leading-8 text-neutral-400">Среднее ускорение выпуска первого готового материала</p>
            <div>
              <strong className="text-[clamp(5rem,15vw,11rem)] font-semibold leading-none tracking-[-0.07em]">10×</strong>
              <p className="mt-4 text-lg">от запроса до публикации</p>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map(([value, label]) => (
              <article key={value} className="flex min-h-40 flex-col justify-between rounded-[28px] bg-white p-6 sm:p-7 lg:flex-row lg:items-end">
                <strong className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">{value}</strong>
                <p className="mt-5 max-w-xs leading-7 text-neutral-600 lg:mt-0">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
