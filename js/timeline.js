// Configurações
const ANO_INICIAL = 1886;
const ANO_FINAL = 1960;
const TOTAL_ANOS = ANO_FINAL - ANO_INICIAL + 1;
const LARGURA_SELETOR = 10;

const eventos = {
  historia: [
    { idade:  "0", "ano civil": 1886, "dia-mês": "", titulo: "início da atividade anarquista em Portugal.", zoomExtra: true,
      descricao:'em Lisboa, Antero de Quental formou (com Eça de Queirós, Guerra Junqueiro e Ramalho Ortigão), "O Cenáculo", um grupo de intelectuais anarquistas em revolta contra as convenções políticas, sociais e intelectuais de seu tempo. <br>mais na <a href="https://fr.wikipedia.org/wiki/Anarchisme_au_Portugal">wikipedia</a>.' },
    { idade:  "5", "ano civil": 1891, "dia-mês": "", titulo: "Revolta do 31 de Janeiro contra a Monarquia na cidade do Porto", zoomExtra: true,
      descricao: 'mais na <a href="https://pt.wikipedia.org/wiki/Revolta_de_31_de_janeiro_de_1891" target="_blank" rel="noopener noreferrer">wikipedia</a>.'},
    { idade: "10", "ano civil": 1896, "dia-mês": "13.FEV.", titulo: "'Lei da Bomba' contra os Anarquistas", zoomExtra: true,
      descricao: 'mais na <a href="https://app.parlamento.pt/comunicar/V1/201905/57/artigos/art9.html">A.R.</a>.'},
    { idade: "22", "ano civil": 1908, "dia-mês": "28.JAN.", titulo: "Regicídio", zoomExtra: true,
      descricao:  'mais na <a href="https://ensina.rtp.pt/artigo/regicidio-em-lisboa-1908/">RTP Ensina</a>.'},
    { idade: "24", "ano civil": 1910, "dia-mês": "5.OUT.", titulo: "Implantação da República", zoomExtra: true,
      descricao: 'mais na <a href="https://ensina.rtp.pt/artigo/5-de-outubro-1910/">RTP Ensina</a>.' },
    { idade: "25", "ano civil": 1911, "dia-mês": "20.ABR.", titulo: "Separação da Igreja do Estado", zoomExtra: true,
      descricao: 'mais na <a href="https://pt.wikipedia.org/wiki/Lei_da_Separa%C3%A7%C3%A3o_do_Estado_das_Igrejas" target="_blank" rel="noopener noreferrer">wikipedia</a>.' }
  ],

  vida: [
    { idade: "30", "ano civil": 1916, "dia-mês": "5.MAR.", titulo: "JMS faz comício à saída da missa censurando a distribuição do milho",
      zoomExtra: true, descricao: `
        <div class="imagem-evento">
          <img src="docs/informacao-do-regedor-mar1916.png"
               alt="informação do regedor para o administrador do concelho"
               style="max-width:100px;">
        </div>` },

    { idade: "35", "ano civil": 1921, "dia-mês": "4.SET.", titulo: "JMS é eleito em comício, para a Comissão que reclama o barateamento do preço do milho",
      zoomExtra: true, descricao: `
        <div class="imagem-evento">
          <img src="docs/oficio-ao-administrador-set1921.png"
               alt="ofício ao administrador"
               style="max-width:100px;">
        </div>` },

    { idade: "35", "ano civil": 1922, "dia-mês": "", titulo: "Fotografia do poeta publicada em 'A Lira do Povo'",
      zoomExtra: true, descricao: `
        <div class="imagem-evento">
          <img src="docs/jms-aos-36-anos-2.jpeg"
               alt="JMS aos 36 anos"
               style="max-width:100px;">
        </div>` }
  ],

  obra: [
    { idade: "28", "ano civil": 1914, "dia-mês": "27.JAN.", titulo: "Grupo Anticlerical IV", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/grupo-anti-clerical-iv.png" style="max-width:100px;"></div>` },

    { idade: "28", "ano civil": 1914, "dia-mês": "28.JAN.", titulo: "Grupo Anticlerical I", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/grupo-anti-clerical-i.png" style="max-width:100px;"></div>` },

    { idade: "28", "ano civil": 1914, "dia-mês": "12.DEZ.", titulo: "Grupo Anticlerical III", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/grupo-anti-clerical-iii.png" style="max-width:100px;"></div>` },

    { idade: "30", "ano civil": 1916, "dia-mês": "23.ABR.", titulo: "À memória de Cristo", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/a-memoria-de-cristo.png" style="max-width:100px;"></div>` },

    { idade: "32", "ano civil": 1918, "dia-mês": "15.AGO.", titulo: "O Milho a 30 réis", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/o-milho-a-30-reis.png" style="max-width:100px;"></div>` },

    { idade: "33", "ano civil": 1919, "dia-mês": "31.AGO.", titulo: "Uma viagem ao céu", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/uma-viagem-ao-ceu.png" style="max-width:100px;"></div>` },

    { idade: "33", "ano civil": 1919, "dia-mês": "31.AGO.", titulo: "Uma viagem ao inferno", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/uma-viagem-ao-inferno.png" style="max-width:100px;"></div>` },

    { idade: "33", "ano civil": 1919, "dia-mês": "28.SET.", titulo: "A nova aurora", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/a-nova-aurora.png" style="max-width:100px;"></div>` },

    { idade: "33", "ano civil": 1919, "dia-mês": "12.OUT.", titulo: "Aos carpinteiros do Porto", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/aos-carpinteiros-do-porto.png" style="max-width:100px;"></div>` },

    { idade: "34", "ano civil": 1920, "dia-mês": "15.FEV.", titulo: "A alma dum caloteiro", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/a-alma-dum-caloteiro.png" style="max-width:100px;"></div>` },

    { idade: "34", "ano civil": 1920, "dia-mês": "7.MAR.", titulo: "Libelos contra o verdugo", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/libelos-contra-o-verdugo.png" style="max-width:100px;"></div>` },

    { idade: "35", "ano civil": 1921, "dia-mês": "15.JAN.", titulo: "O terror em Vilar", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/o-terror-em-vilar.png" style="max-width:100px;"></div>` },

    { idade: "35", "ano civil": 1921, "dia-mês": "30.JAN.", titulo: "O Bruxedo em Vilar", zoomExtra: true,
      descricao:`<div class="imagem-evento"><img src="docs/o-bruxedo-em-vilar.png" style="max-width:100px;"></div>` }
  ]
};
