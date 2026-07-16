import type { StaticImageData } from "next/image";

import servicoSalgados from "@/assets/img/servico-salgados.jpg";
import servicoJantar from "@/assets/img/servico-jantar.jpg";
import servicoFrios from "@/assets/img/servico-frios.jpg";
import servicoDoces from "@/assets/img/servico-doces.jpg";
import celebracaoCasamento from "@/assets/img/celebracao-casamento.jpg";
import celebracaoDebutante from "@/assets/img/celebracao-debutante.jpg";
import celebracaoInfantil from "@/assets/img/celebracao-infantil.jpg";
import celebracaoConfraternizacao from "@/assets/img/celebracao-confraternizacao.jpg";
import galeria01 from "@/assets/img/galeria-01.jpg";
import galeria02 from "@/assets/img/galeria-02.jpg";
import galeria03 from "@/assets/img/galeria-03.jpg";
import galeria04 from "@/assets/img/galeria-04.jpg";
import galeria05 from "@/assets/img/galeria-05.jpg";
import galeria06 from "@/assets/img/galeria-06.jpg";
import galeria07 from "@/assets/img/galeria-07.jpg";
import galeria08 from "@/assets/img/galeria-08.jpg";

export const IMAGENS: Record<string, StaticImageData> = {
  "servico-salgados": servicoSalgados,
  "servico-jantar": servicoJantar,
  "servico-frios": servicoFrios,
  "servico-doces": servicoDoces,
  "celebracao-casamento": celebracaoCasamento,
  "celebracao-debutante": celebracaoDebutante,
  "celebracao-infantil": celebracaoInfantil,
  "celebracao-confraternizacao": celebracaoConfraternizacao,
  "galeria-01": galeria01,
  "galeria-02": galeria02,
  "galeria-03": galeria03,
  "galeria-04": galeria04,
  "galeria-05": galeria05,
  "galeria-06": galeria06,
  "galeria-07": galeria07,
  "galeria-08": galeria08,
};
