import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Servicos } from "@/components/Servicos";
import { Beneficios } from "@/components/Beneficios";
import { EspecialDaCasa } from "@/components/EspecialDaCasa";
import { Celebracoes } from "@/components/Celebracoes";
import { Historia } from "@/components/Historia";
import { Galeria } from "@/components/Galeria";
import { DepoimentosMarquee } from "@/components/DepoimentosMarquee";
import { Orcamento } from "@/components/Orcamento";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <div className="relative z-30">
        <Header />
      </div>
      <main>
        <Hero />
        <Servicos />
        <EspecialDaCasa />
        <Beneficios />
        <Celebracoes />
        <Historia />
        <Galeria />
        <DepoimentosMarquee />
        <Orcamento />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
