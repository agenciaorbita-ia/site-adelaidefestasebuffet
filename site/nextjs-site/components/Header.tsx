"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import logoDourado from "@/assets/img/logo-dourado.png";
import logoAzul from "@/assets/img/logo-azul.png";
import { NAV_LINKS } from "@/lib/content";
import { WHATSAPP_DEFAULT } from "@/lib/whatsapp";

export function Header() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const claro = !rolou && !menuAberto;
  const fixo = rolou || menuAberto;

  /** Fecha o menu e rola depois da animação de saída — o scroll nativo
   *  seria cancelado quando o link clicado é desmontado. */
  function navegarMobile(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setMenuAberto(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    }, 420);
  }

  return (
    <header
      className={`inset-x-0 z-40 transition-colors duration-500 ${
        fixo ? "fixed top-0" : "absolute top-full"
      } ${
        claro
          ? "bg-transparent py-4"
          : "bg-creme/90 py-2 shadow-card backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#inicio" aria-label="Adelaide Festas & Buffet — início">
          <Image
            src={claro ? logoDourado : logoAzul}
            alt="Adelaide Festas & Buffet"
            className="h-14 w-auto transition-all duration-500 sm:h-16"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm tracking-wide transition ${
                claro
                  ? "text-prata/90 hover:text-dourado"
                  : "text-azul/85 hover:text-azul"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-dourado transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brilho hidden rounded-full bg-dourado px-6 py-2.5 text-sm font-medium tracking-wide text-azul transition-all duration-300 hover:bg-dourado-claro hover:shadow-card active:scale-[0.98] lg:inline-block"
          >
            Pedir orçamento
          </a>

          <button
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full transition lg:hidden ${
              claro ? "text-prata" : "text-azul"
            }`}
          >
            <span
              className={`h-0.5 w-6 rounded bg-current transition-transform duration-300 ${
                menuAberto ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded bg-current transition-opacity duration-300 ${
                menuAberto ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded bg-current transition-transform duration-300 ${
                menuAberto ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuAberto && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-creme/95 backdrop-blur-md lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="flex flex-col gap-1 px-6 pb-8 pt-4"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: reduce ? { opacity: 0 } : { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => navegarMobile(e, link.href)}
                    className="block border-b border-azul/8 py-3 font-display text-lg text-azul transition hover:pl-2 hover:text-dourado-escuro"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: reduce ? { opacity: 0 } : { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="pt-4"
              >
                <a
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brilho block rounded-full bg-dourado px-6 py-3 text-center text-sm font-medium text-azul active:scale-[0.98]"
                >
                  Pedir orçamento no WhatsApp
                </a>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
