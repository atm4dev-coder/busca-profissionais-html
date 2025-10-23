# 🎨 Exemplos de Funcionalidades para Adicionar

Este arquivo contém exemplos práticos de como adicionar novas funcionalidades à aplicação.

---

## 1️⃣ Adicionar Sistema de Favoritos

### HTML (adicione em `index.html`)

```html
<!-- Adicione um botão de favoritos no card -->
<button class="btn-favorito" onclick="adicionarFavorito(${prof.id})" title="Adicionar aos favoritos">
  <i class="fa-regular fa-heart"></i>
</button>
```

### CSS (adicione em `style.css`)

```css
.btn-favorito {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #ddd;
  transition: all 0.3s ease;
}

.btn-favorito:hover {
  color: #ff6b6b;
  transform: scale(1.2);
}

.btn-favorito.ativo {
  color: #ff6b6b;
}

.btn-favorito i {
  transition: all 0.3s ease;
}
```

### JavaScript (adicione em `script.js`)

```javascript
// Array para armazenar favoritos
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Função para adicionar favorito
function adicionarFavorito(id) {
  const btn = event.target.closest('.btn-favorito');
  
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(fav => fav !== id);
    btn.classList.remove('ativo');
    btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
  } else {
    favoritos.push(id);
    btn.classList.add('ativo');
    btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
  }
  
  // Salvar no localStorage
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Função para mostrar favoritos
function mostrarFavoritos() {
  const lista = document.getElementById("listaProfissionais");
  const profsFavoritos = profissionais.filter(p => favoritos.includes(p.id));
  
  if (profsFavoritos.length === 0) {
    lista.innerHTML = '<div class="mensagem-vazia"><p>Nenhum favorito ainda.</p></div>';
  } else {
    exibirProfissionais(profsFavoritos, lista);
  }
}
```

---

## 2️⃣ Adicionar Tema Escuro (Dark Mode)

### HTML (adicione em `index.html`)

```html
<!-- Adicione um botão no header -->
<button class="btn-tema" id="btn-tema" onclick="alternarTema()" title="Alternar tema">
  <i class="fa-solid fa-moon"></i>
</button>
```

### CSS (adicione em `style.css`)

```css
/* Tema escuro */
body.dark-mode {
  --primary-color: #00d4ff;
  --secondary-color: #7a00ff;
  --accent-color: #00ffcc;
  --text-color: #e0e0e0;
  --light-bg: #1a1a1a;
  --white: #2d2d2d;
  background-color: #0a0a0a;
  color: #e0e0e0;
}

body.dark-mode header {
  background: linear-gradient(90deg, #001a33, #330066);
}

body.dark-mode .btn-tema i {
  color: #ffeb3b;
}

.btn-tema {
  background: none;
  border: none;
  color: var(--white);
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 15px;
}

.btn-tema:hover {
  transform: rotate(20deg);
}
```

### JavaScript (adicione em `script.js`)

```javascript
// Carregar tema salvo
const temaSalvo = localStorage.getItem('tema') || 'light';
if (temaSalvo === 'dark') {
  document.body.classList.add('dark-mode');
}

// Função para alternar tema
function alternarTema() {
  document.body.classList.toggle('dark-mode');
  
  const temaSalvo = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('tema', temaSalvo);
  
  // Atualizar ícone
  const btn = document.getElementById('btn-tema');
  if (temaSalvo === 'dark') {
    btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}
```

---

## 3️⃣ Adicionar Avaliação e Comentários

### HTML (adicione em `index.html`)

```html
<!-- Adicione um modal para avaliações -->
<div id="modal-avaliacao" class="modal">
  <div class="modal-content">
    <span class="close" onclick="fecharModal()">&times;</span>
    <h2>Avaliar Profissional</h2>
    
    <div class="rating-input">
      <p>Sua avaliação:</p>
      <div class="stars" id="stars-input">
        <i class="fa-solid fa-star" onclick="selecionarEstrela(1)"></i>
        <i class="fa-solid fa-star" onclick="selecionarEstrela(2)"></i>
        <i class="fa-solid fa-star" onclick="selecionarEstrela(3)"></i>
        <i class="fa-solid fa-star" onclick="selecionarEstrela(4)"></i>
        <i class="fa-solid fa-star" onclick="selecionarEstrela(5)"></i>
      </div>
    </div>
    
    <textarea placeholder="Deixe um comentário..." id="comentario"></textarea>
    <button onclick="enviarAvaliacao()">Enviar Avaliação</button>
  </div>
</div>
```

### CSS (adicione em `style.css`)

```css
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: var(--white);
  margin: 15% auto;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: var(--shadow-hover);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: var(--primary-color);
}

.rating-input {
  margin: 20px 0;
}

.stars {
  display: flex;
  gap: 10px;
  font-size: 30px;
}

.stars i {
  color: #ddd;
  cursor: pointer;
  transition: all 0.2s ease;
}

.stars i:hover,
.stars i.ativo {
  color: #ffc107;
  transform: scale(1.2);
}

textarea {
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  resize: vertical;
  min-height: 100px;
}
```

### JavaScript (adicione em `script.js`)

```javascript
let avaliacaoAtual = 0;

function abrirAvaliacao(id) {
  document.getElementById('modal-avaliacao').style.display = 'block';
}

function fecharModal() {
  document.getElementById('modal-avaliacao').style.display = 'none';
}

function selecionarEstrela(valor) {
  avaliacaoAtual = valor;
  const stars = document.querySelectorAll('.stars i');
  stars.forEach((star, index) => {
    if (index < valor) {
      star.classList.add('ativo');
    } else {
      star.classList.remove('ativo');
    }
  });
}

function enviarAvaliacao() {
  const comentario = document.getElementById('comentario').value;
  
  if (avaliacaoAtual === 0) {
    alert('Por favor, selecione uma avaliação');
    return;
  }
  
  alert(`Avaliação de ${avaliacaoAtual} estrelas enviada!\nComentário: ${comentario}`);
  fecharModal();
  
  // Aqui você pode enviar para um servidor
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
  const modal = document.getElementById('modal-avaliacao');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
```

---

## 4️⃣ Adicionar Busca Avançada com Filtro de Preço

### HTML (adicione em `index.html`)

```html
<!-- Adicione ao filtros-busca -->
<div class="filtro-grupo">
  <label for="filtroPreco">Faixa de Preço:</label>
  <select id="filtroPreco" onchange="aplicarFiltros()">
    <option value="">Qualquer preço</option>
    <option value="0-100">Até R$ 100</option>
    <option value="100-500">R$ 100 - R$ 500</option>
    <option value="500-1000">R$ 500 - R$ 1.000</option>
    <option value="1000">Acima de R$ 1.000</option>
  </select>
</div>
```

### JavaScript (adicione em `script.js`)

```javascript
// Adicione preço aos profissionais
const profissionais = [
  {
    // ... dados anteriores
    preco: 150  // Adicione este campo
  }
];

// Modifique a função aplicarFiltros
function aplicarFiltros() {
  const servico = document.getElementById("filtroServico").value;
  const cidade = document.getElementById("filtroCidade").value;
  const preco = document.getElementById("filtroPreco").value;
  const lista = document.getElementById("listaProfissionais");

  let resultados = profissionais;

  if (servico) {
    resultados = resultados.filter(p => p.servico === servico);
  }

  if (cidade) {
    resultados = resultados.filter(p => p.cidade === cidade);
  }

  if (preco) {
    const [min, max] = preco.split('-').map(Number);
    resultados = resultados.filter(p => {
      if (max === undefined) return p.preco >= min;
      return p.preco >= min && p.preco <= max;
    });
  }

  if (resultados.length === 0) {
    lista.innerHTML = '<div class="mensagem-vazia"><p>Nenhum profissional encontrado.</p></div>';
  } else {
    exibirProfissionais(resultados, lista);
  }
}
```

---

## 5️⃣ Adicionar Notificações Toast

### CSS (adicione em `style.css`)

```css
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4caf50;
  color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: var(--shadow-hover);
  z-index: 2000;
  animation: slideIn 0.3s ease;
}

.toast.error {
  background-color: #f44336;
}

.toast.warning {
  background-color: #ff9800;
}

.toast.info {
  background-color: #2196f3;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(400px);
    opacity: 0;
  }
}
```

### JavaScript (adicione em `script.js`)

```javascript
function mostrarToast(mensagem, tipo = 'info', duracao = 3000) {
  const toast = document.createElement('div');
  toast.className = `toast ${tipo}`;
  toast.textContent = mensagem;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duracao);
}

// Exemplos de uso:
// mostrarToast('Profissional adicionado aos favoritos!', 'success');
// mostrarToast('Erro ao buscar profissionais', 'error');
// mostrarToast('Carregando...', 'info');
```

---

## 6️⃣ Adicionar Histórico de Buscas

### JavaScript (adicione em `script.js`)

```javascript
// Array para armazenar histórico
let historicoBuscas = JSON.parse(localStorage.getItem('historico')) || [];

// Função para adicionar ao histórico
function adicionarAoHistorico(termo) {
  if (termo.trim() === '') return;
  
  // Remover duplicatas
  historicoBuscas = historicoBuscas.filter(h => h !== termo);
  
  // Adicionar no início
  historicoBuscas.unshift(termo);
  
  // Manter apenas os últimos 10
  if (historicoBuscas.length > 10) {
    historicoBuscas.pop();
  }
  
  // Salvar
  localStorage.setItem('historico', JSON.stringify(historicoBuscas));
}

// Função para mostrar histórico
function mostrarHistorico() {
  console.log('Histórico de buscas:', historicoBuscas);
  
  // Você pode criar uma lista visual do histórico
  const lista = historicoBuscas.map(termo => 
    `<button onclick="buscarPorTermo('${termo}')">${termo}</button>`
  ).join('');
  
  return lista;
}

// Modificar buscarProfissionais para adicionar ao histórico
function buscarProfissionais() {
  const termo = document.getElementById("buscaInput").value.toLowerCase().trim();
  
  if (termo === "") {
    exibirMensagem("Por favor, digite um serviço para buscar.");
    return;
  }

  adicionarAoHistorico(termo);  // Adicionar esta linha
  
  // ... resto do código
}
```

---

## 7️⃣ Adicionar Mapa com Localização

### HTML (adicione em `index.html`)

```html
<!-- Adicione Leaflet CDN no <head> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>

<!-- Adicione um botão para ver mapa -->
<button class="btn-mapa" onclick="abrirMapa()">
  <i class="fa-solid fa-map"></i> Ver no Mapa
</button>

<!-- Adicione um modal para o mapa -->
<div id="modal-mapa" class="modal">
  <div class="modal-content">
    <span class="close" onclick="fecharMapa()">&times;</span>
    <div id="mapa" style="height: 400px;"></div>
  </div>
</div>
```

### JavaScript (adicione em `script.js`)

```javascript
let mapaInstancia = null;

function abrirMapa() {
  document.getElementById('modal-mapa').style.display = 'block';
  
  if (!mapaInstancia) {
    mapaInstancia = L.map('mapa').setView([-8.05, -34.88], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(mapaInstancia);
  }
  
  mapaInstancia.invalidateSize();
}

function fecharMapa() {
  document.getElementById('modal-mapa').style.display = 'none';
}
```

---

## 8️⃣ Adicionar Exportar Dados

### JavaScript (adicione em `script.js`)

```javascript
// Exportar como JSON
function exportarJSON() {
  const dados = {
    profissionais: profissionais,
    favoritos: favoritos,
    historico: historicoBuscas,
    dataExportacao: new Date().toISOString()
  };
  
  const json = JSON.stringify(dados, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'dados-profissionais.json';
  a.click();
}

// Exportar como CSV
function exportarCSV() {
  let csv = 'Nome,Serviço,Cidade,Telefone,Email,Rating\n';
  
  profissionais.forEach(p => {
    csv += `"${p.nome}","${p.servico}","${p.cidade}","${p.telefone}","${p.email}",${p.rating}\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'profissionais.csv';
  a.click();
}
```

---

## 📌 Como Usar Estes Exemplos

1. **Copie o código** da funcionalidade que deseja
2. **Cole nos arquivos** correspondentes (HTML, CSS ou JS)
3. **Teste no navegador** para verificar se funciona
4. **Ajuste conforme necessário** para seu projeto
5. **Faça commit** das alterações no Git

---

## 🎯 Próximas Ideias

- [ ] Integração com API real
- [ ] Sistema de pagamento
- [ ] Chat em tempo real
- [ ] Notificações push
- [ ] Sincronização com servidor
- [ ] Backup automático
- [ ] Análise de dados
- [ ] Relatórios

---

Divirta-se adicionando novas funcionalidades! 🚀

