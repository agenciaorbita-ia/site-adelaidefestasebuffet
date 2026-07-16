import type { StaticImageData } from "next/image";

import servicoSalgados from "@/assets/img/servico-salgados.jpg";
import servicoJantar from "@/assets/img/servico-jantar.jpg";
import servicoFrios from "@/assets/img/servico-frios.jpg";
import servicoDoces from "@/assets/img/servico-doces.jpg";
import celebracaoCasamento from "@/assets/img/celebracao-casamento.jpg";
import celebracaoDebutante from "@/assets/img/celebracao-debutante.jpg";
import celebracaoConfraternizacao from "@/assets/img/celebracao-confraternizacao.jpg";
import galeria01 from "@/assets/img/galeria-01.jpg";
import galeria02 from "@/assets/img/galeria-02.jpg";
import galeria03 from "@/assets/img/galeria-03.jpg";
import galeria04 from "@/assets/img/galeria-04.jpg";
import galeria05 from "@/assets/img/galeria-05.jpg";
import galeria06 from "@/assets/img/galeria-06.jpg";
import galeria07 from "@/assets/img/galeria-07.jpg";
import galeria08 from "@/assets/img/galeria-08.jpg";
import galeria09 from "@/assets/img/galeria-09.jpg";
import galeria10 from "@/assets/img/galeria-10.jpg";
import galeria11 from "@/assets/img/galeria-11.jpg";
import galeria12 from "@/assets/img/galeria-12.jpg";
import galeria13 from "@/assets/img/galeria-13.jpg";
import galeria14 from "@/assets/img/galeria-14.jpg";
import galeria15 from "@/assets/img/galeria-15.jpg";
import galeria16 from "@/assets/img/galeria-16.jpg";
import galeria17 from "@/assets/img/galeria-17.jpg";
import galeria18 from "@/assets/img/galeria-18.jpg";

export const IMAGENS: Record<string, StaticImageData> = {
  "servico-salgados": servicoSalgados,
  "servico-jantar": servicoJantar,
  "servico-frios": servicoFrios,
  "servico-doces": servicoDoces,
  "celebracao-casamento": celebracaoCasamento,
  "celebracao-debutante": celebracaoDebutante,
  // Reaproveita a foto 10 da galeria (flores + réchauds) como capa de Bodas
  "celebracao-bodas": galeria10,
  "celebracao-confraternizacao": celebracaoConfraternizacao,
  "galeria-01": galeria01,
  "galeria-02": galeria02,
  "galeria-03": galeria03,
  "galeria-04": galeria04,
  "galeria-05": galeria05,
  "galeria-06": galeria06,
  "galeria-07": galeria07,
  "galeria-08": galeria08,
  "galeria-09": galeria09,
  "galeria-10": galeria10,
  "galeria-11": galeria11,
  "galeria-12": galeria12,
  "galeria-13": galeria13,
  "galeria-14": galeria14,
  "galeria-15": galeria15,
  "galeria-16": galeria16,
  "galeria-17": galeria17,
  "galeria-18": galeria18,
};
