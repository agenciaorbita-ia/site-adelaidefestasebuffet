import Image from "next/image";
import logoDourado from "@/assets/img/logo-dourado.png";
import {
  FACEBOOK_HANDLE,
  FACEBOOK_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_LINKS,
} from "@/lib/content";
import { WHATSAPP_DEFAULT, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { OrnamentDivider } from "./ui/OrnamentDivider";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-azul-profundo pb-20 pt-12 text-prata/70 sm:pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Image
              src={logoDourado}
              alt="Adelaide Festas & Buffet"
              className="h-20 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-prata/60">
              Buffet completo para celebrar os momentos que importam — com
              amor, honestidade e o mesmo carinho de sempre.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Adelaide Festas & Buffet"
                className="text-prata/60 transition hover:text-dourado"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Adelaide Festas & Buffet"
                className="text-prata/60 transition hover:text-dourado"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15.5 8h-1.7c-.9 0-1.3.5-1.3 1.4V11h3l-.4 2.6h-2.6V21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <nav aria-label="Links do site">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-dourado">
              Navegue
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(!link.href.startsWith("#") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="inline-block py-1 transition hover:pl-1 hover:text-dourado"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-dourado">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-dourado"
                >
                  WhatsApp · {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-dourado"
                >
                  Instagram · {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-dourado"
                >
                  Facebook · {FACEBOOK_HANDLE}
                </a>
              </li>
              <li className="text-prata/55">
                Rua Diadema, 426 · Parque Caravelas
              </li>
              <li className="text-prata/55">
                Atendemos Ipatinga e toda a região do Vale do Aço
              </li>
            </ul>
          </div>
        </div>

        <OrnamentDivider className="mt-10" />

        <p className="mt-6 text-center text-xs text-prata/45">
          © {ano} Adelaide Festas & Buffet. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
