import Image from "next/image";

const navigation = [
  ["Продукт", "#process"],
  ["Возможности", "#use-cases"],
  ["Преимущества", "#compare"],
  ["Безопасность", "#features"],
  ["Роадмап", "#roadmap"],
  ["Частые вопросы", "#faq"],
];

const documentation = [
  ["Политика конфиденциальности", "https://snapbuild.ru/privacy"],
  ["FAQ", "#faq"],
];

const contacts = [
  ["Запросить демо", "https://t.me/ochen_darya"],
  ["Telegram", "https://t.me/snapbuild"],
];

type FooterColumnProps = {
  title: string;
  links: string[][];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-link text-sm text-neutral-600 transition-colors hover:text-black">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <footer className="page-shell pb-10 pt-24 sm:pb-14 sm:pt-32">
      <div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-20">
          <div>
            <a href="#hero" aria-label="На главную" className="inline-flex items-center">
              <Image
                src={`${basePath}/snapbuild-wordmark.svg`}
                width={153}
                height={22}
                alt="Снэпбилд"
                className="h-5 w-auto"
              />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-neutral-600">
              Платформа, где всё создаётся в рамках вашего бренда и дизайн-системы
            </p>
          </div>

          <FooterColumn title="Навигация" links={navigation} />
          <FooterColumn title="Документация" links={documentation} />
          <FooterColumn title="Контакты" links={contacts} />
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© Сгенерировано в Снэпбилде. Все права защищены.</p>
          <a href="mailto:hey@snapbuild.ru" className="text-link transition-colors hover:text-black">
            hey@snapbuild.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
