const integrations = [
  ["GH", "GitHub", "Код и версии"],
  ["GL", "GitLab", "Репозитории"],
  ["FI", "Figma", "Дизайн-система"],
  ["NO", "Notion", "Контент"],
  ["SL", "Slack", "Уведомления"],
  ["GD", "Google Drive", "Материалы"],
  ["YC", "Yandex Cloud", "Инфраструктура"],
  ["PC", "Private Cloud", "Закрытый контур"],
];

export default function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-24 px-3 py-20 sm:px-4 sm:py-28">
      <div className="mx-auto max-w-[1440px] rounded-[32px] bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Встраивается в привычный процесс
          </h2>
          <p className="max-w-xl text-lg leading-8 text-neutral-600 lg:justify-self-end">
            Снэпбилд соединяет дизайн, контент и разработку, не заставляя команду менять рабочие инструменты.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
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
