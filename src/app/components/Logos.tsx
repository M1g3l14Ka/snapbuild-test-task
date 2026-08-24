import Image from "next/image";

const logos = [
  { src: "/assets/logos/brand-1.svg", alt: "Клиент Снэпбилд", width: 101, height: 22 },
  { src: "/assets/logos/brand-2.svg", alt: "Клиент Снэпбилд", width: 43, height: 32 },
  { src: "/assets/logos/avito.svg", alt: "Авито", width: 102, height: 26 },
  { src: "/assets/logos/cian.svg", alt: "Циан", width: 59.4, height: 21.51 },
  { src: "/assets/logos/lenta.svg", alt: "Лента", width: 63.9, height: 14.51 },
];

export default function Logos() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section className="pb-24 sm:pb-36">
      <div className="page-shell py-8 sm:py-12">
        <p className="text-center text-sm text-neutral-500">
          С платформой работают команды, для которых бренд — закон
        </p>
        <div className="mt-10 grid grid-cols-2 items-center gap-10 sm:grid-cols-5 sm:gap-14">
          {logos.map((logo) => (
            <div key={logo.src} className="flex h-10 items-center justify-center opacity-65 grayscale">
              <Image
                src={`${basePath}${logo.src}`}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
