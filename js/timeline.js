// Configurações
const ANO_INICIAL = 1886;
const ANO_FINAL = 1960;
const TOTAL_ANOS = ANO_FINAL - ANO_INICIAL + 1;
const LARGURA_SELETOR = 10;

const eventos = {
  historia: [
    { idade:  "0", "ano civil": 1886, "dia-mês": "",       titulo: "início da atividade anarquista em Portugal.", zoomExtra: true,  descricao:'em Lisboa, Antero de Quental formou (com Eça de Queirós, Guerra Junqueiro e Ramalho Ortigão), "O Cenáculo", um grupo de intelectuais anarquistas em revolta contra as convenções políticas, sociais e intelectuais de seu tempo. <br>mais na <a href="https://fr.wikipedia.org/wiki/Anarchisme_au_Portugal?utm_source=chatgpt.com">wikipedia</a>.' },
    { idade:  "5", "ano civil": 1891, "dia-mês": "",       titulo: "Revolta do 31 de Janeiro contra a Monarquia na cidade do Porto", zoomExtra: true,  descricao: 'mais na <a href="https://pt.wikipedia.org/wiki/Revolta_de_31_de_janeiro_de_1891" target="_blank" rel="noopener noreferrer">wikipedia</a>.'},
    { idade: "10", "ano civil": 1896, "dia-mês": "13.FEV.",titulo: "'Lei da Bomba' contra os Anarquistas", zoomExtra: true,  descricao: 'mais na <a href="https://app.parlamento.pt/comunicar/V1/201905/57/artigos/art9.html">A.R.</a>.'},
    { idade: "22", "ano civil": 1908, "dia-mês": "28.JAN.",titulo: "Regicídio", zoomExtra: true,  descricao:  'mais na <a href="https://ensina.rtp.pt/artigo/regicidio-em-lisboa-1908/">RTP Ensina</a>.'},
    { idade: "24", "ano civil": 1910, "dia-mês": "5.OUT.", titulo: "Implantação da República", zoomExtra: true,  descricao: 'mais na <a href="https://ensina.rtp.pt/artigo/5-de-outubro-1910/">RTP Ensina</a>.' },
    { idade: "25", "ano civil": 1911, "dia-mês": "20.ABR.",titulo: "Separação da Igreja do Estado", zoomExtra: true,  descricao: 'mais na <a href="https://pt.wikipedia.org/wiki/Lei_da_Separa%C3%A7%C3%A3o_do_Estado_das_Igrejas" target="_blank" rel="noopener noreferrer">wikipedia</a>.' },
    { idade: "25", "ano civil": 1911, "dia-mês": "",       titulo: "Explosão do Movimento Anarquista", zoomExtra: true,  descricao: "" },
    { idade: "26", "ano civil": 1912, "dia-mês": "",       titulo: "Fundação da Federação Anarquista do Norte", zoomExtra: true,  descricao: "" },
    { idade: "27", "ano civil": 1913, "dia-mês": "",       titulo: "Fundação da CULTUAL", zoomExtra: true,  descricao: "" },
    { idade: "28", "ano civil": 1914, "dia-mês": "",       titulo: "Início da 1.ª Grande Guerra [1914-1918]", zoomExtra: true,  descricao: "" },
    { idade: "29", "ano civil": 1915, "dia-mês": "",       titulo: "1.ª Grande Guerra [1914-1918]", zoomExtra: true,  descricao: "" },	
    { idade: "30", "ano civil": 1916, "dia-mês": "",       titulo: "1.ª Grande Guerra [1914-1918]", zoomExtra: true,  descricao: "" },	
    { idade: "31", "ano civil": 1917, "dia-mês": "",       titulo: "1.ª Grande Guerra [1914-1918]", zoomExtra: true,  descricao: "" },	
    { idade: "31", "ano civil": 1917, "dia-mês": "19.Mai.",titulo: "A revolta da Batata", zoomExtra: true,  descricao:  'mais na <a href="https://ensina.rtp.pt/artigo/__trashed-17/" target="_blank" rel="noopener noreferrer">RTP Ensina</a>.' },
    { idade: "32", "ano civil": 1918, "dia-mês": "",       titulo: "Fim da 1.ª Grande Guerra [1914-1918]", zoomExtra: true,  descricao: ""},	
    { idade: "35", "ano civil": 1921, "dia-mês": "6.MAR.", titulo: "Fundação do Partido Comunista Português", zoomExtra: true,  descricao: 'mais em <a href="https://www.pcp.pt/como-nasceu-partido-comunista-portugues" target="_blank" rel="noopener noreferrer">PCP</a>.' },
    { idade: "35", "ano civil": 1921, "dia-mês": "",       titulo: "Fundação da Internacional Sindical Vermelha [ PROFITERN ]", zoomExtra: true,  descricao: 'mais em <a href="https://pt.wikipedia.org/wiki/Internacional_Vermelha_dos_Sindicatos" target="_blank" rel="noopener noreferrer">wikipedia</a>.'  },
    { idade: "37", "ano civil": 1923, "dia-mês": "18.MAR.",titulo: "Criação da União Anarquista Portuguesa (UAP)", zoomExtra: true,  descricao:  'com 20 grupos aderentes entre eles o de Vila do Conde <br> <a href="https://we.riseup.net/assets/160397/Edgar%20Rodrigues%20hist%C3%B3ria%20do%20movimento%20anarquista%20em%20portugal.pdf" target="_blank" rel="noopener noreferrer">Edgar Rodrigues, História do Movimento Anarquista em Portugal</a>' },
    { idade: "40", "ano civil": 1926, "dia-mês": "28.MAI.",titulo: "Golpe Militar de 28 de Maio – Ditadura", zoomExtra: true,  descricao:  'mais na <a href="https://ensina.rtp.pt/artigo/golpe-28-de-maio-1926/" target="_blank" rel="noopener noreferrer">RTP Ensina</a>.' },
    { idade: "41", "ano civil": 1927, "dia-mês": "25.JUL.",titulo: "Fundação da Federação Anarquista Ibérica – FAI", zoomExtra: true,  descricao:  'mais na <a href="https://noticiasanarquistas.noblogs.org/post/2021/04/16/espanha-lancamento-historia-da-fai-o-anarquismo-organizado-de-julian-vadillo-munoz/" target="_blank" rel="noopener noreferrer">ANA</a>.' },
    { idade: "47", "ano civil": 1933, "dia-mês": "11-ABR", titulo: "Estado Novo – CENSURA", zoomExtra: true,  descricao: 'mais na <a href="https://ensina.rtp.pt/artigo/censura-previa-a-mordaca-que-o-estado-novo-criou/" target="_blank" rel="noopener noreferrer">RTP Ensina</a>.' },
    { idade: "48", "ano civil": 1934, "dia-mês": "",       titulo: "Jornal 'Batalha' passa à clandestinidade", zoomExtra: true,  descricao: 'mais em <a href="https://colectivolibertarioevora.wordpress.com/2019/02/22/a-batalha-100-anos-de-luta-por-um-mundo-novo-sem-explorados-nem-exploradores-sem-oprimidos-nem-opressores/" target="_blank" rel="noopener noreferrer">Portal Anarquista</a>.' },
    { idade: "51", "ano civil": 1937, "dia-mês": "4.JUL.", titulo: "Atentado a Salazar prepertado por anarquistas", zoomExtra: true,  descricao:  'mais na <a href="https://ensina.rtp.pt/artigo/retratos-do-atentado-a-salazar/" target="_blank" rel="noopener noreferrer">RTP Ensina</a>.' }
  ],
  vida: [
    { idade:  "0", "ano civil": 1886, "dia-mês": "15.MAR.", titulo: "Nascimento de JOAQUIM MOREIRA DA SILVA", zoomExtra: true,  descricao: "" },
    { idade:  "7", "ano civil": 1893, "dia-mês": "",        titulo: "Começa a trabalhar como moço de Lavoura", zoomExtra: true,  descricao: "" },
    { idade: "18", "ano civil": 1904, "dia-mês": "",        titulo: "Vai trabalhar para o Porto como aprendiz de carpinteiro", zoomExtra: true,  descricao: "" },
    { idade: "18", "ano civil": 1904, "dia-mês": "",        titulo: "Frequenta escola noturna Vasco da Gama, onde aprende a ler e escrever", zoomExtra: true,  descricao: "" },
    { idade: "18", "ano civil": 1904, "dia-mês": "",        titulo: "Inscreve-se na Associação (SINDICATO)", zoomExtra: true,  descricao: "" },
    { idade: "23", "ano civil": 1909, "dia-mês": "10.JUL.", titulo: "Casa com a camponesa Maria Rosa Marques", zoomExtra: true,  descricao: "" },
    { idade: "24", "ano civil": 1910, "dia-mês": "22.MAI.", titulo: "Nasce o primeiro filho", zoomExtra: true,  descricao: "" },
    { idade: "24", "ano civil": 1910, "dia-mês": "13.OUT.", titulo: "Morte do primeiro filho", zoomExtra: true,  descricao: "" },
    { idade: "26", "ano civil": 1912, "dia-mês": "17.FEV.", titulo: "Nascimento do filho Alberto Moreira", zoomExtra: true,  descricao: "" },
    { idade: "30", "ano civil": 1916, "dia-mês": "5.MAR.",  titulo: "JMS faz comício à saída da missa censurando a distribuição do milho", 
        zoomExtra: true,  descricao: 
            `<div class="imagem-evento">
                <img src="docs/Informação do Regedor_mar1916.png" 
                alt="informação do regedor para o administrador do concelho" 
                style="max-width:100px;">
                <p class="legenda"></p>
            </div>
            <p><br><br>informação do regedor para o administrador do concelho</p>`
    },
    { idade: "31", "ano civil": 1917, "dia-mês": "5.FEV.",  titulo: "O povo de Vilar saiu à rua em protesto contra a fome e tocou os sinos a rebate. Formou-se 'uma comissão'", zoomExtra: true,  descricao: "" },
    { idade: "31", "ano civil": 1917, "dia-mês": "30.MAI.", titulo: "Assalto à 'Tulha' de Manuel Gonçalves Dias", zoomExtra: true,  descricao: "" },
    { idade: "31", "ano civil": 1917, "dia-mês": "JUL.",    titulo: "Julgamento do Assalto", zoomExtra: true,  descricao: "" },
    { idade: "31", "ano civil": 1917, "dia-mês": "AGO.",    titulo: "Juíz ordena a captura de JMS e restantes implicados", zoomExtra: true,  descricao: "" },
    { idade: "31", "ano civil": 1917, "dia-mês": "2.SET.",  titulo: "Comício em Vilar (no Alto da Pereira) para tratar da carestia do milho e o açambarcamento", zoomExtra: true,  descricao: "" },
    { idade: "31", "ano civil": 1917, "dia-mês": "17.SET.", titulo: "Início do processo de audição dos réus", zoomExtra: true,  descricao: "" },
    { idade: "31", "ano civil": 1917, "dia-mês": "27.SET.", titulo: "Emitido mandato de captura dos implicados", zoomExtra: true,  descricao: "" },
    { idade: "31", "ano civil": 1917, "dia-mês": "23.OUT.", titulo: "JMS é ouvido pelo Juiz que lhe nomeia como advogado António Maria Pereira Júnior", zoomExtra: true,  descricao: "" },
    { idade: "35", "ano civil": 1921, "dia-mês": "MAR.",    titulo: "Moreira da Silva foi preso com outros anarquistas e sindicalistas", zoomExtra: true,  descricao: "" },
    { idade: "35", "ano civil": 1921, "dia-mês": "4.SET.",  titulo: "JMS é eleito em comício, para a Comissão que reclama o barateamento do preço do milho", 
        zoomExtra: true,  descricao: `
            <div class="imagem-evento">
            <img src="docs/Ofício ao Administrador_set1921.png" 
            alt="imagem do ofício', 1967" 
            style="max-width:100px;">
            <p class="legenda"></p>
            </div>
            <p><br><br>em ofício da Comissão para o Administrador</p>`
        },
    { idade: "35", "ano civil": 1922, "dia-mês": "",        titulo: "Fotografia do poeta publicada em 'A Lira do Povo'",
        zoomExtra: true, descricao: `
            <div class="imagem-evento">
            <img src="docs/JMS_aos_36_anos-2.jpeg" 
            alt="O poeta aos 36 anos, fotografia do livro 'A Lira do Povo', 1967" 
            style="max-width:100px;">
            <p class="legenda"></p>
            </div>
            <p></p>`
    },
    { idade: "48", "ano civil": 1934, "dia-mês": "22.NOV.", titulo: "Nascimento da primeira neta", zoomExtra: true,  descricao: "	Margarida Rosa Moreira" },
    { idade: "49", "ano civil": 1935, "dia-mês": "22.SET.", titulo: "Nascimento da segunda neta ", zoomExtra: true,  descricao: "Helena Rosa Moreira" },
    { idade: "49", "ano civil": 1935, "dia-mês": "22.OUT.", titulo: "Falecimento da segunda neta", zoomExtra: true,  descricao: "Helena Rosa Moreira" },
    { idade: "50", "ano civil": 1936, "dia-mês": "MAR.",    titulo: "JMS tem uma doença grave, pensa que vai morrer.", zoomExtra: true,  descricao: "" },
    { idade: "50", "ano civil": 1936, "dia-mês": "MAI.",    titulo: "Comemora o 1º de Maio", zoomExtra: true,  descricao: "com volta ao Minho com outros anarquistas" },
    { idade: "52", "ano civil": 1938, "dia-mês": "7.JAN.",  titulo: "Nascimento da 3ª neta ", zoomExtra: true,  descricao: "Helena Rosa Moreira (nome igual ao da que morreu)" },
    { idade: "53", "ano civil": 1939, "dia-mês": "27.SET.", titulo: "Morte da 3ª neta", zoomExtra: true,  descricao: "Helena Rosa Moreira" },
    { idade: "54", "ano civil": 1940, "dia-mês": "JAN.",    titulo: "Nascimento da 4ª neta", zoomExtra: true,  descricao: "Helena Moreira da Silva" },
    { idade: "56", "ano civil": 1942, "dia-mês": "23.JAN.", titulo: "Nascimento da 5ª neta", zoomExtra: true,  descricao: "Maria Rosa Moreira" },
    { idade: "63", "ano civil": 1949, "dia-mês": "10.MAR.", titulo: "Morte da Esposa", zoomExtra: true,  descricao: "Maria Rosa de Jesus" },
    { idade: "74", "ano civil": 1960, "dia-mês": "12-DEZ.", titulo: "Falecimento de JOAQUIM MOREIRA DA SILVA", zoomExtra: true,  descricao: "" }
  ],
  obra: [
    { idade: "28", "ano civil": 1914, "dia-mês": "27.JAN.", titulo: "Grupo Anticlerical IV", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Grupo Anti-Clerical IV.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>
    </div>
    <p><br><br></p>`
    },
    { idade: "28", "ano civil": 1914, "dia-mês": "28.JAN.", titulo: "Grupo Anticlerical I ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Grupo Anti-Clerical I.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>
    </div>
    <p><br><br></p>`
    },
    { idade: "28", "ano civil": 1914, "dia-mês": "12.DEZ.", titulo: "Grupo Anticlerical III ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Grupo Anti-Clerical III.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>
    </div>
    <p><br><br></p>`
    },
    { idade: "30", "ano civil": 1916, "dia-mês": "13.FEV.", titulo: "Ao povo de Vilar ", 
        zoomExtra: true,  descricao:
        `<div class="imagem-evento">
            <img src="docs/Ao Povo de Vilar.gif" 
            alt="imagem do poema" 
            style="max-width:100px;">
            <p class="legenda"></p>
        </div>
        <p><br><br></p>`
     },
    { idade: "30", "ano civil": 1916, "dia-mês": "23.ABR.", titulo: "À memória de Cristo ", 
    zoomExtra: true,  descricao: 
    `<div class="imagem-evento">
        <img src="docs/À Memória de Cristo.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>
    </div>
    <p><br><br></p>`
    },
    { idade: "32", "ano civil": 1918, "dia-mês": "15.AGO.", titulo: "O Milho a 30 réis ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/O milho a 30 reis.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>
    </div>
    <p><br><br></p>`
    
    },
    { idade: "32", "ano civil": 1918, "dia-mês": "8.SET.",  titulo: "À memória de Joaquim da Silva Freitas ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/À memória de Joaquim da Silva Freitas.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>
    </div>
    <p><br><br></p>`
    },
    { idade: "33", "ano civil": 1919, "dia-mês": "24.JUN.", titulo: "Nas desfolhadas da aldeia ", zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Nas desfolhadas daldeia.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "33", "ano civil": 1919, "dia-mês": "31.AGO.", titulo: "Uma viagem ao céu ", 
        zoomExtra: true,  descricao:
        `<div class="imagem-evento">
            <img src="docs/Uma Viagem ao Céu.png" 
            alt="imagem do poema" 
            style="max-width:100px;">
            <p class="legenda"></p>	
        </div>
        <p><br><br></p>`
    },
    { idade: "33", "ano civil": 1919, "dia-mês": "31.AGO.", titulo: "Uma viagem ao inferno ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Uma viagem ao inferno.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "33", "ano civil": 1919, "dia-mês": "21.SET.", titulo: "Ao mais alto caloteiro ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Ao mais alto caloteiro.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "33", "ano civil": 1919, "dia-mês": "28.SET.", titulo: "A nova aurora ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/A NOVA AURORA.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "33", "ano civil": 1919, "dia-mês": "12.OUT.", titulo: "Aos carpinteiros do Porto ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Aos carpinteiros do Porto.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "33", "ano civil": 1919, "dia-mês": "20.NOV.", titulo: "Prá história dum Feitieiro ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Prá História de um Feiticeiro-lado a lado.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`	
    },
    { idade: "33", "ano civil": 1919, "dia-mês": "7.DEZ.",  titulo: "A História de um Feiticeiro ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/A História dum Feiticeiro.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`	
    },
    { idade: "34", "ano civil": 1920, "dia-mês": "1.JAN.",  titulo: "À memória de António Dias Fontes ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/à  memória de António Dias Fonres.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "34", "ano civil": 1920, "dia-mês": "18.JAN.", titulo: "Versos de gratidão ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Testemunho de Gratidão.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "34", "ano civil": 1920, "dia-mês": "15.FEV.", titulo: "A Alma dum caloteiro ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/A alma dum Caloteiro.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "34", "ano civil": 1920, "dia-mês": "7.MAR.",  titulo: "Libelos contra o verdugo ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Libelos Contra o Verdugo.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
     },
    { idade: "34", "ano civil": 1920, "dia-mês": "25.MAR.", titulo: "Um sonho poético ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Um sonho Poético.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "34", "ano civil": 1920, "dia-mês": "24.JUN.", titulo: "A excomunhão do Verdugo na corte celeste ", zoomExtra: true,  descricao: "" },
    { idade: "34", "ano civil": 1920, "dia-mês": "25.JUL.", titulo: "Nos serões da aldeia ", zoomExtra: true,  descricao: "" },
    { idade: "34", "ano civil": 1920, "dia-mês": "27.AGO.", titulo: "A história da costureira ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/A história da Costureira.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "34", "ano civil": 1920, "dia-mês": "18.DEZ.", titulo: "O assalto à Batalha ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/O ASSALTO À BATALHA.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "35", "ano civil": 1921, "dia-mês": "1.JAN.",  titulo: "As janeiras de Vilar ", zoomExtra: true,  descricao: "" },
    { idade: "35", "ano civil": 1921, "dia-mês": "15.JAN.", titulo: "O terror em Vilar ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/O TERROR EM VILAR.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "35", "ano civil": 1921, "dia-mês": "30.JAN.", titulo: "O Bruxedo em Vilar ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/O Bruxedo em Vilar.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "35", "ano civil": 1921, "dia-mês": "6.MAR.",  titulo: "Ao povo de Mosteiró ", zoomExtra: true,  descricao: "" },
    { idade: "35", "ano civil": 1921, "dia-mês": "MAR.",    titulo: "Na prisão – Recordações dos companheiros de luta ", zoomExtra: true,  descricao: "" },
    { idade: "35", "ano civil": 1921, "dia-mês": "17.ABR.", titulo: "Ao povo trabalhador – Para conheceres o Delfim da Silva ", zoomExtra: true,  descricao: "" },
    { idade: "35", "ano civil": 1921, "dia-mês": "24.JUN.", titulo: "Está desvendado o mistério do bruxedo de Vilar ", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Está desvendado o mistério.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "37", "ano civil": 1923, "dia-mês": "8.SET.",  titulo: "Sonhos e Realidades", 
    zoomExtra: true,  descricao:
    `<div class="imagem-evento">
        <img src="docs/Sonhos e Realidades.png" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`
    },
    { idade: "37", "ano civil": 1923, "dia-mês": "9.DEZ.",  titulo: "Ao povo de Mosteiró", zoomExtra: true,  descricao: "" },
    { idade: "38", "ano civil": 1924, "dia-mês": "JAN.",    titulo: "Serenatas na Aldeia", zoomExtra: true,  descricao: "" },
    { idade: "38", "ano civil": 1924, "dia-mês": "22.FEV.", titulo: "Os cinco Falsários", zoomExtra: true,  descricao: "" },
    { idade: "38", "ano civil": 1924, "dia-mês": "14.SET.", titulo: "Na Freguesia de Gemunde – O Padre em Ação", zoomExtra: true,  descricao: "" },
    { idade: "39", "ano civil": 1925, "dia-mês": "19.ABR.", titulo: "O compasso em Mosteiró", zoomExtra: true,  descricao: "" },
    { idade: "39", "ano civil": 1925, "dia-mês": "30.AGO.", titulo: "Vilar do Pinheiro", zoomExtra: true,  descricao: "" },
    { idade: "39", "ano civil": 1925, "dia-mês": "19.OUT.", titulo: "Carta aberta à Leopoldina", zoomExtra: true, descricao: "" },
    { idade: "39", "ano civil": 1925, "dia-mês": "13.DEZ.", titulo: "Os campos da Bruxaria", zoomExtra: true, descricao: "" },
    { idade: "39", "ano civil": 1925, "dia-mês": "",        titulo: "A Noite de S. João", zoomExtra: true, descricao: "" },
    { idade: "40", "ano civil": 1926, "dia-mês": "8.JAN.",  titulo: "Ao povo de Águas Santas e arredores", zoomExtra: true, descricao: "" },
    { idade: "40", "ano civil": 1926, "dia-mês": "MAR.",    titulo: "Nas Horas Vagas", zoomExtra: true, descricao: "" },
    { idade: "40", "ano civil": 1926, "dia-mês": "",        titulo: "No Vale de Josefá", zoomExtra: true, descricao: "" },
    { idade: "41", "ano civil": 1927, "dia-mês": "AGO.",    titulo: "Sacco e Vanzetti Morreram", zoomExtra: true, descricao: "" },
    { idade: "41", "ano civil": 1927, "dia-mês": "",        titulo: "Problemas Recreativos", zoomExtra: true, descricao: "" },
    { idade: "42", "ano civil": 1928, "dia-mês": "MAI.",    titulo: "Em louvor do Santo Preto", zoomExtra: true, descricao: "" },
    { idade: "44", "ano civil": 1930, "dia-mês": "26.ABR.", titulo: "Ao Povo de Vilar do Pinheiro e Arredores", 
        zoomExtra: true, descricao: ""
    },
    { idade: "46", "ano civil": 1932, "dia-mês": "2.ABR.",  titulo: "Ao Povo de Vilar do Pinheiro e Arredores", 
    zoomExtra: true, descricao:`<div class="imagem-evento">
        <img src="docs/Ao Povo de Vilar do Pinheiro.gif" 
        alt="imagem do poema" 
        style="max-width:100px;">
        <p class="legenda"></p>	
    </div>
    <p><br><br></p>`},
    { idade: "50", "ano civil": 1936, "dia-mês": "29.MAR.", titulo: "Nas oras da Agonia", zoomExtra: true, descricao: "" },
    { idade: "50", "ano civil": 1936, "dia-mês": "12.ABR.", titulo: "Recuperando Melhoras", zoomExtra: true, descricao: "" },
    { idade: "52", "ano civil": 1938, "dia-mês": "27.SET.", titulo: "Despedidas de Helena Rosa Moreira", zoomExtra: true, descricao: "" },
    { idade: "59", "ano civil": 1945, "dia-mês": "",        titulo: "A Guerra Universal", zoomExtra: true, descricao: "" },
    { idade: "60", "ano civil": 1946, "dia-mês": "MAR.",    titulo: "Versos à bandeira do 'Honra e Dever'", zoomExtra: true, descricao: "" },
    { idade: "65", "ano civil": 1951, "dia-mês": "",        titulo: "Viagem ao Paraíso", zoomExtra: true, descricao: "" },
    { idade: "68", "ano civil": 1954, "dia-mês": "",        titulo: "Seis Contos Poéticos", zoomExtra: true, descricao: "" },
    { idade: "72", "ano civil": 1958, "dia-mês": "5.JUN.",  titulo: "Fernando Moreira Graça", zoomExtra: true, descricao: "" }
  ]
};

// Elementos DOM
const linhaHistoria = document.getElementById('linha-historia');
const linhaVida = document.getElementById('linha-vida');
const linhaObra = document.getElementById('linha-obra');
const seletor = document.getElementById('seletor');
const seletorAnoInicio = document.getElementById('seletor-ano-inicio');
const seletorAnoFim = document.getElementById('seletor-ano-fim');
const listaEventos = document.getElementById('lista-eventos');
const botoesFiltro = {
  historia: document.getElementById('filtro-historia'),
  vida: document.getElementById('filtro-vida'),
  obra: document.getElementById('filtro-obra')
};

// Estado
let posicaoSeletor = 0;
let filtrosAtivos = {
    historia: true,
    vida: true,
    obra: true
};
let startX, startLeft, larguraUtil, larguraCelula;

// Inicialização
function inicializar() {
    criarLinhasTempo();
    const container = document.querySelector('.linha-tempo-container');
    larguraUtil = container.offsetWidth;
    larguraCelula = larguraUtil / TOTAL_ANOS;
    
    posicaoSeletor = (larguraUtil / 2) - ((larguraCelula * LARGURA_SELETOR) / 2);
    
    posicionarSeletor();
    criarEstruturaColunas();
    atualizarEventos();
    adicionarEventos();
}

function criarLinhasTempo() {
    criarLinha(linhaHistoria, 'historia');
    criarLinha(linhaVida, 'vida');
    criarLinha(linhaObra, 'obra');
}

function criarLinha(container, tipo) {
    container.innerHTML = '';
    
    for (let i = 0; i < TOTAL_ANOS; i++) {
        const anoAtual = ANO_INICIAL + i;
        const celula = document.createElement('div');
        celula.className = `celula ${tipo}`;
        celula.dataset.ano = anoAtual;
        
        const eventosAno = eventos[tipo].filter(e => e["ano civil"] == anoAtual);
        if (eventosAno.length > 0) {
            celula.classList.add('com-evento');
            
            let tooltipText = `${anoAtual}:\n`;
            eventosAno.forEach(evento => {
                tooltipText += `- ${evento["dia-mês"] ? evento["dia-mês"] + ' ' : ''}${evento.titulo}\n`;
            });
            
            celula.title = tooltipText;
        }
        
        container.appendChild(celula);
    }
}

function criarEstruturaColunas() {
    const containerColunas = document.createElement('div');
    containerColunas.className = 'colunas-eventos';
    
    const colunaHistoria = document.createElement('div');
    colunaHistoria.className = 'coluna-evento';
    colunaHistoria.id = 'coluna-historia';
    
    const colunaVida = document.createElement('div');
    colunaVida.className = 'coluna-evento';
    colunaVida.id = 'coluna-vida';
    
    const colunaObra = document.createElement('div');
    colunaObra.className = 'coluna-evento';
    colunaObra.id = 'coluna-obra';
    
    containerColunas.appendChild(colunaHistoria);
    containerColunas.appendChild(colunaVida);
    containerColunas.appendChild(colunaObra);
    listaEventos.appendChild(containerColunas);
}

function posicionarSeletor() {
    const container = document.querySelector('.linha-tempo-container');
    larguraUtil = container.offsetWidth;
    larguraCelula = larguraUtil / TOTAL_ANOS;
    
    const larguraSeletor = larguraCelula * LARGURA_SELETOR;
    seletor.style.width = `${larguraSeletor}px`;
    
    const posicaoMaxima = larguraUtil - larguraSeletor;
    posicaoSeletor = Math.max(0, Math.min(posicaoSeletor, posicaoMaxima));
    seletor.style.left = `${posicaoSeletor}px`;
    
    atualizarRótulosSeletor();
}

function atualizarRótulosSeletor() {
    let anoInicio = ANO_INICIAL + Math.floor(posicaoSeletor / larguraCelula);
    let anoFim = anoInicio + LARGURA_SELETOR - 1;
    
    if (posicaoSeletor <= 0) {
        anoInicio = ANO_INICIAL;
        anoFim = ANO_INICIAL + LARGURA_SELETOR - 1;
    }
    
    if (anoFim > ANO_FINAL) {
        anoFim = ANO_FINAL;
        anoInicio = ANO_FINAL - LARGURA_SELETOR + 1;
    }
    
    seletorAnoInicio.textContent = anoInicio;
    seletorAnoFim.textContent = anoFim;
    document.getElementById('seletor-idade-inicio').textContent = anoInicio - ANO_INICIAL;
    document.getElementById('seletor-idade-fim').textContent = anoFim - ANO_INICIAL;
}

function adicionarEventos() {
    // Evento de arrasto do seletor - MOUSE
    seletor.addEventListener('mousedown', iniciarArrasto);
    
    // Evento de arrasto do seletor - TOUCH
    seletor.addEventListener('touchstart', iniciarArrasto, {passive: false});
    
    // Eventos dos botões de filtro
    Object.keys(botoesFiltro).forEach(tipo => {
        botoesFiltro[tipo].addEventListener('change', () => {
            filtrosAtivos[tipo] = botoesFiltro[tipo].checked;
            atualizarEventos();
        });
    });
    
    window.addEventListener('resize', function() {
        const container = document.querySelector('.linha-tempo-container');
        larguraUtil = container.offsetWidth;
        larguraCelula = larguraUtil / TOTAL_ANOS;
        posicionarSeletor();
    });
}

function iniciarArrasto(e) {
    e.preventDefault();
    seletor.classList.add('arrastando');
    
    const clientX = e.clientX || e.touches[0].clientX;
    startX = clientX;
    startLeft = parseFloat(getComputedStyle(seletor).left);
    
    document.addEventListener('mousemove', moverSeletor);
    document.addEventListener('touchmove', moverSeletor, {passive: false});
    
    document.addEventListener('mouseup', terminarArrasto);
    document.addEventListener('touchend', terminarArrasto);
}

function moverSeletor(e) {
    e.preventDefault();
    const clientX = e.clientX || e.touches[0].clientX;
    const deltaX = clientX - startX;
    posicaoSeletor = startLeft + deltaX;
    posicionarSeletor();
    atualizarEventos();
}

function terminarArrasto() {
    document.removeEventListener('mousemove', moverSeletor);
    document.removeEventListener('touchmove', moverSeletor);
    
    document.removeEventListener('mouseup', terminarArrasto);
    document.removeEventListener('touchend', terminarArrasto);
    
    seletor.classList.remove('arrastando');
    atualizarEventos();
}

function atualizarEventos() {
    const anoInicio = parseInt(seletorAnoInicio.textContent);
    const anoFim = parseInt(seletorAnoFim.textContent);
    
    const colunaHistoria = document.getElementById('coluna-historia');
    const colunaVida = document.getElementById('coluna-vida');
    const colunaObra = document.getElementById('coluna-obra');
    
    colunaHistoria.innerHTML = '';
    colunaVida.innerHTML = '';
    colunaObra.innerHTML = '';
    
    colunaHistoria.classList.toggle('coluna-oculta', !filtrosAtivos.historia);
    colunaVida.classList.toggle('coluna-oculta', !filtrosAtivos.vida);
    colunaObra.classList.toggle('coluna-oculta', !filtrosAtivos.obra);
    
    if (filtrosAtivos.historia) {
        eventos.historia
        .filter(evento => evento["ano civil"] >= anoInicio && evento["ano civil"] <= anoFim)
        .forEach(evento => {
            colunaHistoria.appendChild(criarDivEvento(evento, 'historia'));
        });
    }
    
    if (filtrosAtivos.vida) {
        eventos.vida
        .filter(evento => evento["ano civil"] >= anoInicio && evento["ano civil"] <= anoFim)
        .forEach(evento => {
            colunaVida.appendChild(criarDivEvento(evento, 'vida'));
        });
    }
    
    if (filtrosAtivos.obra) {
        eventos.obra
        .filter(evento => evento["ano civil"] >= anoInicio && evento["ano civil"] <= anoFim)
        .forEach(evento => {
            colunaObra.appendChild(criarDivEvento(evento, 'obra'));
        });
    }
    configurarAmpliacaoPorHover();
}

function criarDivEvento(evento, tipo) {
    const divEvento = document.createElement('div');
    divEvento.className = `evento ${tipo}`;
    
    let dataFormatada = evento["ano civil"];
    if (evento["dia-mês"]) {
        dataFormatada = `${evento["dia-mês"]} ${evento["ano civil"]}`;
    }
    
    let descricaoHTML = '';
    if (evento.descricao) {
        // Verifica se a descrição contém uma div com classe 'imagem-evento'
        if (evento.descricao.includes('imagem-evento')) {
            // Se tiver imagem, cria um container flexível
            descricaoHTML = `<div class="descricao-com-imagem">${evento.descricao}</div>`;
        } else {
            // Se não tiver imagem, mantém o formato normal
            descricaoHTML = `<p class="evento-descricao">${evento.descricao}</p>`;
        }
    }
    
    divEvento.innerHTML = `
        <div class="evento-cabecalho">
        <span class="evento-idade">${evento.idade} anos</span>
        <span class="evento-data">${dataFormatada}</span>
        </div>
        <h4 class="evento-titulo">${evento.titulo}</h4>
        ${descricaoHTML}
    `;
    return divEvento;
}

function configurarAmpliacaoPorHover() {
    const container = document.getElementById("imagemAmpliadaContainer");
    const imgAmpliada = document.getElementById("imagemAmpliada");
    const DELAY = 300; // Tempo mais curto para melhor experiência

    // Remove event listeners antigos para evitar duplicação
    document.querySelectorAll('.imagem-evento img').forEach(img => {
        img.onmouseenter = null;
        img.onmouseleave = null;
    });

    document.querySelectorAll('.imagem-evento img').forEach(img => {
        let hoverTimer;

        img.onmouseenter = function() {
            hoverTimer = setTimeout(() => {
                const src = this.src;
                const alt = this.alt;
                
                // Criar nova imagem para pré-carregar
                const tempImg = new Image();
                tempImg.src = src;
                
                tempImg.onload = function() {
                    // Calcula dimensões mantendo proporção
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;
                    const maxWidth = windowWidth * 0.8;
                    const maxHeight = windowHeight * 0.8;
                    
                    let width = tempImg.naturalWidth;
                    let height = tempImg.naturalHeight;
                    
                    // Ajustar se for muito grande
                    if (width > maxWidth) {
                        const ratio = maxWidth / width;
                        width = maxWidth;
                        height = height * ratio;
                    }
                    
                    if (height > maxHeight) {
                        const ratio = maxHeight / height;
                        height = maxHeight;
                        width = width * ratio;
                    }
                    
                    // Configurar imagem ampliada
                    imgAmpliada.src = src;
                    imgAmpliada.alt = alt;
                    imgAmpliada.style.width = `${width}px`;
                    imgAmpliada.style.height = `${height}px`;
                    
                    // Centralizar na tela
                    container.style.display = 'flex';
                    container.style.justifyContent = 'center';
                    container.style.alignItems = 'center';
                    container.style.position = 'fixed';
                    container.style.top = '0';
                    container.style.left = '0';
                    container.style.width = '100%';
                    container.style.height = '100%';
                    container.style.backgroundColor = 'rgba(0,0,0,0.8)';
                    container.style.zIndex = '1000';
                    container.style.opacity = '0';
                    
                    // Animação de fade in
                    setTimeout(() => {
                        container.style.opacity = '1';
                    }, 10);
                };
            }, DELAY);
        };

        img.onmouseleave = function() {
            clearTimeout(hoverTimer);
            // Animação de fade out
            container.style.opacity = '0';
            setTimeout(() => {
                container.style.display = 'none';
            }, 300);
        };

        // Fechar ao clicar na imagem ampliada
        container.onclick = function() {
            container.style.opacity = '0';
            setTimeout(() => {
                container.style.display = 'none';
            }, 300);
        };
    });
}

function ajustarPosicaoImagem() {
    const container = document.getElementById("imagemAmpliadaContainer");
    if (container.style.display === 'block') {
        const img = document.getElementById("imagemAmpliada");
        const imgRect = img.getBoundingClientRect();
        const imgHeight = imgRect.height;
        const scrollPosition = window.scrollY;
        
        // Ajuste vertical
        if (imgRect.bottom > window.innerHeight - 20) {
            container.style.top = `${scrollPosition + window.innerHeight - imgHeight - 30}px`;
        } else if (imgRect.top < 20) {
            container.style.top = `${scrollPosition + 30}px`;
        }
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    inicializar();
    configurarAmpliacaoPorHover();
});

window.addEventListener('scroll', function() {
    const container = document.getElementById("imagemAmpliadaContainer");
    if (container.style.display === 'flex') {
        const img = document.getElementById("imagemAmpliada");
        const imgHeight = img.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Ajusta a posição se a imagem estiver perto do fundo
        if ((scrollPosition + windowHeight) > (imgHeight + 100)) {
            container.style.top = `${scrollPosition + windowHeight - imgHeight - 50}px`;
        }
    }
});
