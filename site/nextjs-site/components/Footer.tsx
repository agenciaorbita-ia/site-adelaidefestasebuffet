import Image from "next/image";
import logoDourado from "@/assets/img/logo-dourado.png";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV_LINKS } from "@/lib/content";
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
              <li className="text-prata/55">Belo Horizonte e região · MG</li>
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
