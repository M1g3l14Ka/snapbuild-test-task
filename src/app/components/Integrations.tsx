const integrations = [
  ["GH", "GitHub", "Репозиторий и код"],
  ["GL", "GitLab", "Репозиторий и код"],
  ["CI", "CI/CD", "Автоматизация сборки"],
  ["PC", "Private Cloud", "Закрытая инфраструктура"],
];

export default function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-24 px-3 py-24 sm:px-4 sm:py-32">
      <div className="mx-auto rounded-[32px] bg-white px-[var(--page-gutter)] py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <h2 className="section-title max-w-5xl">
            Встраивается в существующую инфраструктуру
          </h2>
          <p className="max-w-xl text-lg leading-8 text-neutral-600 lg:justify-self-end">
            GitHub, GitLab, CI/CD-процессы и развёртывание в закрытой корпоративной инфраструктуре.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {integrations.map(([shortName, name, purpose]) => (
            <article key={name} className="rounded-2xl bg-[#f5f5f6] p-4 sm:p-5">
              <span className="grid size-10 place-items-center rounded-xl bg-black text-xs font-semibold text-white">
                {shortName}
              </span>
              <h3 className="mt-7 font-semibold sm:text-lg">{name}</h3>
              <p className="mt-1 text-sm text-neutral-500">{purpose}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
