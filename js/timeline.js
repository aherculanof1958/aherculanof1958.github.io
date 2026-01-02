/* ==============================
   VARIÁVEIS SEGURAS
============================== */
:root {
  --cor-historia: #e74c3c;
  --cor-vida: #3498db;
  --cor-obra: #2ecc71;

  --cinza-claro: #ecf0f1;
  --cinza-medio: #bdc3c7;
}

/* ==============================
   BASE
============================== */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f9f9f9;
  color: #333;
  margin: 0 auto;
  max-width: 1800px;
}

/* ==============================
   LINHA DO TEMPO (ESTRUTURA)
============================== */
.linha-tempo-container {
  position: relative;
  width: 100%;
  min-width: 1200px;
  padding: 15px 70px 20px 70px;
  box-sizing: border-box;
}

/* wrapper das três linhas */
.linhas {
  position: relative;
  width: 100%;
}

/* ==============================
   LINHAS (GRID, NÃO FLEX)
============================== */
.linha {
  display: grid;
  grid-template-columns: repeat(75, 1fr);
  height: 12px;
  background-color: var(--cinza-claro);
  margin-bottom: 6px;
  position: relative;
}

/* ==============================
   CÉLULAS
============================== */
.celula {
  min-width: 0;
  border-right: 1px solid #fff;
  box-sizing: border-box;
}

.celula.com-evento.historia {
  background: rgba(231, 76, 60, 0.45);
}
.celula.com-evento.vida {
  background: rgba(52, 152, 219, 0.45);
}
.celula.com-evento.obra {
  background: rgba(46, 204, 113, 0.45);
}

/* ==============================
   SELETOR (NUNCA ZERO)
============================== */
#seletor {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;               /* CRÍTICO */
  background: rgba(0,0,0,0.15);
  cursor: grab;
  z-index: 20;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

#seletor::before,
#seletor::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #2c3e50;
}

#seletor::before { left: 0; }
#seletor::after  { right: 0; }

#seletor.arrastando {
  cursor: grabbing;
}

/* ==============================
   RÓTULOS DO SELETOR
============================== */
.rotulo-seletor {
  position: absolute;
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 6px rgba(0,0,0,0.8);
  pointer-events: none;
}

.rotulo-seletor.inicio {
  left: 0;
  top: -28px;
}
.rotulo-seletor.fim {
  right: 0;
  top: -28px;
}

/* ==============================
   ESCALA DE ANOS
============================== */
.escala-anos {
  position: relative;
  width: 100%;
  height: 20px;
  margin-top: 6px;
  font-size: 0.65rem;
  color: #7f8c8d;
}

.escala-anos span {
  position: absolute;
  transform: translateX(-50%);
}

.escala-anos span:nth-child(1) { left: 0%; }
.escala-anos span:nth-child(2) { left: 12.5%; }
.escala-anos span:nth-child(3) { left: 25%; }
.escala-anos span:nth-child(4) { left: 37.5%; }
.escala-anos span:nth-child(5) { left: 50%; }
.escala-anos span:nth-child(6) { left: 62.5%; }
.escala-anos span:nth-child(7) { left: 75%; }
.escala-anos span:nth-child(8) { left: 87.5%; }
.escala-anos span:nth-child(9) { left: 100%; }

/* ==============================
   EVENTOS (LISTAGEM)
============================== */
#lista-eventos {
  margin-top: 20px;
}

.colunas-eventos {
  display: flex;
  gap: 20px;
}

.coluna-evento {
  flex: 1 1 33%;
}

.evento {
  background: #f9f9f9;
  padding: 14px;
  border-radius: 14px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.evento.historia {
  border-left: 4px solid var(--cor-historia);
}
.evento.vida {
  border-left: 4px solid var(--cor-vida);
}
.evento.obra {
  border-left: 4px solid var(--cor-obra);
}

.evento-cabecalho {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #555;
}

.evento-titulo {
  margin: 4px 0;
  font-size: 1.05rem;
}

/* ==============================
   IMAGENS
============================== */
.imagem-evento img {
  max-width: 100px;
  height: auto;
  border-radius: 4px;
  border: 1px solid #ddd;
}

/* ==============================
   RESPONSIVO
============================== */
@media (max-width: 900px) {
  .linha-tempo-container {
    min-width: 100%;
    padding: 10px 20px;
  }

  .colunas-eventos {
    flex-direction: column;
  }
}
