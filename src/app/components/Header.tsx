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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-5">
      <div className="relative mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between rounded-[20px] bg-white/85 px-4 shadow-[0_8px_30px_rgba(5,5,5,0.08)] backdrop-blur-xl sm:h-[74px] sm:px-6">
        <a href="#hero" aria-label="На главную" className="inline-flex shrink-0 items-center">
          <Image
            src={`${basePath}/snapbuild-wordmark.svg`}
            width={153}
            height={22}
            alt="Снэпбилд"
            priority
            className="h-5 w-auto sm:h-[22px]"
          />
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-7 lg:flex">
          {headerNav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-link text-sm text-neutral-700 transition-colors duration-300 hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          <a
            href={builderUrl}
            className="primary-button shrink-0 rounded-xl bg-[#050505] px-3 py-2.5 text-xs font-medium text-white hover:bg-black/90 sm:px-5 sm:py-3 sm:text-sm"
          >
            Начать сейчас
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="grid size-10 shrink-0 place-items-center rounded-xl transition-colors duration-300 hover:bg-neutral-100 sm:size-11 lg:hidden"
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
