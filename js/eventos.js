const eventos = {
  historia: [
    /*{ idade:  "0", "ano civil": 1886, "dia-mês": "",     titulo: "ano do início da atividade anarquista em Portugal.", zoomExtra: true,  descricao:'<a href="https://pt.wikipedia.org/wiki/Revolta_de_31_de_janeiro_de_1891" target="_blank" rel="noopener noreferrer">wikipedia</a>' },*/ 
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
						<img src="docs/oficios/oficio-do-regedor-mar1916.png" 
						alt="ofício do regedor para o administrador do concelho" 
						style="max-width:100px;">
						<p class="legenda"></p>
					</div>
					<p><br><br></p>`
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
    { idade: "35", "ano civil": 1921, "dia-mês": "4.SET.",  titulo: "JMS é eleito em comício, para Comissão Popular que reclama o barateamento do preço do milho", 
		zoomExtra: true,  descricao: `
			<div class="imagem-evento">
			<img src="docs/oficios/oficio-ao-administrador-set1921.png" 
			alt="imagem do ofício', 1967" 
			style="max-width:100px;">
			<p class="legenda"></p>
			</div>
			<p><br><br>em ofício da Comissão para o Administrador</p>`
		},
	{ idade: "35", "ano civil": 1922, "dia-mês": "",        titulo: "Fotografia do poeta publicada em 'A Lira do Povo'",
		zoomExtra: true, descricao: `
			<div class="imagem-evento">
			<img src="docs/fotos/jms-aos-36-anos-2.jpeg" 
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
						<img src="docs/poemas/grupo-anti-clerical-iv.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>
					</div>
					<p><br><br></p>`
	},
    { idade: "28", "ano civil": 1914, "dia-mês": "28.JAN.", titulo: "Grupo Anticlerical I ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/grupo-anti-clerical-i.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>
						
					</div>
					<p><br><br></p>`
	},
    { idade: "28", "ano civil": 1914, "dia-mês": "12.DEZ.", titulo: "Grupo Anticlerical III ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/grupo-anti-clerical-iii.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>
						
					</div>
					<p><br><br></p>`
	},
    { idade: "30", "ano civil": 1916, "dia-mês": "13.FEV.", titulo: "Ao povo de Vilar ", 
		zoomExtra: true,  descricao:
		`<div class="imagem-evento">
						<img src="docs/poemas/ao-povo-de-vilar.gif" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>
						
					</div>
					<p><br><br></p>`

		 },
    { idade: "30", "ano civil": 1916, "dia-mês": "23.ABR.", titulo: "À memória de Cristo ", 
	zoomExtra: true,  descricao: 
	`<div class="imagem-evento">
						<img src="docs/poemas/a-memoria-de-cristo.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>
						
					</div>
					<p><br><br></p>`
	},
    { idade: "32", "ano civil": 1918, "dia-mês": "15.AGO.", titulo: "O Milho a 30 réis ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/o-milho-a-30-reis.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>
						
					</div>
					<p><br><br></p>`
	
	},
    { idade: "32", "ano civil": 1918, "dia-mês": "8.SET.",  titulo: "À memória de Joaquim da Silva Freitas ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/a-memoria-de-joaquim-da-silva-freitas.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>
						
					</div>
					<p><br><br></p>`

	},
    { idade: "33", "ano civil": 1919, "dia-mês": "24.JUN.", titulo: "Nas desfolhadas da aldeia ", zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/nas-desfolhadas-daldeia.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`

	},
    { idade: "33", "ano civil": 1919, "dia-mês": "31.AGO.", titulo: "Uma viagem ao céu ", 
		zoomExtra: true,  descricao:
		`<div class="imagem-evento">
						<img src="docs/poemas/uma-viagem-ao-ceu.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`
	},
    { idade: "33", "ano civil": 1919, "dia-mês": "31.AGO.", titulo: "Uma viagem ao inferno ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/uma-viagem-ao-inferno.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`
	},
    { idade: "33", "ano civil": 1919, "dia-mês": "21.SET.", titulo: "Ao mais alto caloteiro ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/ao-mais-alto-caloteiro.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`
	},
    { idade: "33", "ano civil": 1919, "dia-mês": "28.SET.", titulo: "A nova aurora ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/a-nova-aurora.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`
	},
    { idade: "33", "ano civil": 1919, "dia-mês": "12.OUT.", titulo: "Aos carpinteiros do Porto ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/aos-carpinteiros-do-porto.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`
	},
    { idade: "33", "ano civil": 1919, "dia-mês": "20.NOV.", titulo: "Prá história dum Feitieiro ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/pra-historia-de-um-feiticeiro-lado-a-lado.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`	
	},
    { idade: "33", "ano civil": 1919, "dia-mês": "7.DEZ.",  titulo: "A História de um Feiticeiro ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/a-historia-dum-feiticeiro.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`	

	},
    { idade: "34", "ano civil": 1920, "dia-mês": "1.JAN.",  titulo: "À memória de António Dias Fontes ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/a-memoria-de-antonio-dias-fontes.png"
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`
	},
    { idade: "34", "ano civil": 1920, "dia-mês": "18.JAN.", titulo: "Versos de gratidão ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/Testemunho de Gratidão.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`
	},
    { idade: "34", "ano civil": 1920, "dia-mês": "15.FEV.", titulo: "A Alma dum caloteiro ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/a-alma-dum-caloteiro.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`

	},
    { idade: "34", "ano civil": 1920, "dia-mês": "7.MAR.",  titulo: "Libelos contra o verdugo ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/libelos-contra-o-verdugo.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`
	 },
    { idade: "34", "ano civil": 1920, "dia-mês": "25.MAR.", titulo: "Um sonho poético ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/um-sonho-poetico.png" 
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
						<img src="docs/poemas/a-historia-da-costureira.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`


	},
    { idade: "34", "ano civil": 1920, "dia-mês": "18.DEZ.", titulo: "O assalto à Batalha ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/o-assalto-a-batalha.png" 
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
						<img src="docs/poemas/o-terror-em-vilar.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`
	},
    { idade: "35", "ano civil": 1921, "dia-mês": "30.JAN.", titulo: "O Bruxedo em Vilar ", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/o-bruxedo-em-vilar.png" 
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
						<img src="docs/poemas/esta-desvendado-o-misterio.png" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`
					},
    { idade: "37", "ano civil": 1923, "dia-mês": "8.SET.",  titulo: "Sonhos e Realidades", 
	zoomExtra: true,  descricao:
	`<div class="imagem-evento">
						<img src="docs/poemas/sonhos-e-realidades.png" 
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
						<img src="docs/poemas/ao-povo-de-vilar-do-pinheiro.jpg" 
						alt="imagem do poema" 
						style="max-width:100px;">
						<p class="legenda"></p>	
					</div>
					<p><br><br></p>`	},
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
