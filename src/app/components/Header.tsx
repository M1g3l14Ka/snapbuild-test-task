"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { headerNav } from "../../../data/data";

const builderUrl = "https://builder.snapbuild.ru/";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between rounded-2xl bg-white/95 px-4 shadow-sm backdrop-blur sm:h-18 sm:px-6">
        <a href="#hero" aria-label="На главную" className="inline-flex items-center">
          <Image
            src={`${basePath}/snapbuild-wordmark.svg`}
            width={153}
            height={22}
            alt="Снэпбилд"
            priority
            className="h-[22px] w-auto"
          />
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-7 lg:flex">
          {headerNav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm text-neutral-700 transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={builderUrl}
            className="rounded-xl bg-[#050505] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Начать сейчас
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-xl transition-colors hover:bg-neutral-100 lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={26} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            aria-label="Мобильная навигация"
            className="absolute inset-x-0 top-[calc(100%+8px)] rounded-2xl bg-white p-3 shadow-xl lg:hidden"
          >
            {headerNav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-base transition-colors hover:bg-neutral-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
