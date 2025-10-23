# 📱 Guia Completo: Busca Profissionais no Termux

Este guia mostra como clonar, testar, modificar e expandir a aplicação **Busca Profissionais** usando **Termux** no seu celular Android.

---

## 🚀 Passo 1: Preparar o Termux

### 1.1 Instalar Dependências Essenciais

```bash
# Atualizar repositórios
pkg update && pkg upgrade -y

# Instalar Git
pkg install git -y

# Instalar Node.js (opcional, para servidor HTTP)
pkg install nodejs -y

# Instalar Python (para servidor HTTP simples)
pkg install python -y

# Instalar editor de texto
pkg install nano vim -y
```

### 1.2 Configurar Git

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"
```

---

## 📥 Passo 2: Clonar os Repositórios

### Opção A: Clonar a Versão HTML/CSS/JS (Recomendado para Celular)

```bash
# Criar diretório de projetos
mkdir -p ~/projetos
cd ~/projetos

# Clonar repositório
git clone https://github.com/atm4dev-coder/busca-profissionais-html.git
cd busca-profissionais-html

# Listar arquivos
ls -la
```

### Opção B: Clonar a Versão React

```bash
cd ~/projetos
git clone https://github.com/atm4dev-coder/busca-profissionais.git
cd busca-profissionais
```

---

## 🌐 Passo 3: Testar a Aplicação no Celular

### Método 1: Servidor HTTP com Python (Mais Simples)

```bash
# Navegue até a pasta do projeto
cd ~/projetos/busca-profissionais-html

# Inicie o servidor
python -m http.server 8000

# Saída esperada:
# Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

**Agora acesse no navegador do celular:**
```
http://localhost:8000
```

### Método 2: Servidor HTTP com Node.js

```bash
# Instalar http-server globalmente
npm install -g http-server

# Navegue até a pasta
cd ~/projetos/busca-profissionais-html

# Inicie o servidor
http-server -p 8000

# Acesse no navegador
# http://localhost:8000
```

### Método 3: Usar um Servidor Online (Sem Instalação)

Se preferir não instalar nada, você pode:

1. Fazer upload dos arquivos para **GitHub Pages**
2. Usar serviços como **Netlify** ou **Vercel**
3. Usar **Firebase Hosting**

---

## ✏️ Passo 4: Editar o Código no Termux

### 4.1 Editar com Nano (Mais Fácil)

```bash
cd ~/projetos/busca-profissionais-html

# Editar HTML
nano index.html

# Editar CSS
nano style.css

# Editar JavaScript
nano script.js
```

**Controles do Nano:**
- `Ctrl + X` - Sair
- `Ctrl + O` - Salvar
- `Ctrl + W` - Buscar

### 4.2 Editar com Vim (Mais Poderoso)

```bash
# Abrir arquivo
vim index.html

# Modo de edição: pressione 'i'
# Sair do modo edição: pressione 'Esc'
# Salvar e sair: :wq
# Sair sem salvar: :q!
```

### 4.3 Exemplo: Adicionar um Novo Profissional

```bash
nano script.js
```

Procure pela seção `const profissionais = [` e adicione:

```javascript
{
  id: 11,
  nome: "Seu Nome",
  servico: "Seu Serviço",
  cidade: "Sua Cidade",
  telefone: "(XX) 9XXXX-XXXX",
  email: "seu.email@example.com",
  rating: 5,
  reviews: 10,
  experiencia: "X anos",
  descricao: "Descrição do seu serviço"
}
```

---

## 🎨 Passo 5: Adicionar Novas Funcionalidades

### 5.1 Adicionar Nova Categoria

**Editar `index.html`:**

```html
<!-- Procure por <section id="categorias"> -->
<!-- Adicione um novo card -->
<div class="category-card" onclick="buscarPorCategoria('Sua Categoria')">
  <i class="fa-solid fa-icon-name"></i>
  <p>Sua Categoria</p>
</div>
```

**Editar `script.js`:**

```javascript
// Adicione a categoria ao array de filtros
// Procure por: <select id="filtroServico">
// Adicione: <option value="Sua Categoria">Sua Categoria</option>
```

### 5.2 Adicionar Nova Seção

**Editar `index.html`:**

```html
<!-- Adicione antes de </body> -->
<section id="nova-secao" class="nova-secao">
  <div class="container">
    <h2>Título da Seção</h2>
    <p>Conteúdo aqui</p>
  </div>
</section>
```

**Editar `style.css`:**

```css
.nova-secao {
  padding: 60px 20px;
  background-color: var(--white);
}

.nova-secao h2 {
  color: var(--primary-color);
  margin-bottom: 20px;
}
```

### 5.3 Adicionar Funcionalidade JavaScript

**Editar `script.js`:**

```javascript
// Adicione uma nova função
function minhaNovaFuncao() {
  console.log("Minha nova funcionalidade!");
  // Seu código aqui
}

// Use em um elemento HTML
// <button onclick="minhaNovaFuncao()">Clique</button>
```

---

## 📊 Passo 6: Gerenciar com Git

### 6.1 Verificar Status

```bash
cd ~/projetos/busca-profissionais-html

# Ver status dos arquivos
git status

# Ver histórico de commits
git log --oneline
```

### 6.2 Fazer Commit de Alterações

```bash
# Adicionar todos os arquivos modificados
git add .

# Criar um commit
git commit -m "Descrição das alterações"

# Enviar para GitHub
git push origin master
```

### 6.3 Criar Nova Branch

```bash
# Criar nova branch
git checkout -b minha-feature

# Fazer alterações...

# Enviar branch
git push origin minha-feature
```

---

## 🔧 Passo 7: Dicas Úteis do Termux

### 7.1 Atalhos Úteis

```bash
# Listar arquivos com detalhes
ls -la

# Mostrar conteúdo de um arquivo
cat index.html

# Buscar texto em arquivos
grep "texto" script.js

# Contar linhas de código
wc -l *.js

# Copiar arquivo
cp index.html index.html.backup

# Mover arquivo
mv arquivo.txt nova-pasta/

# Deletar arquivo
rm arquivo.txt

# Deletar pasta
rm -r pasta/
```

### 7.2 Navegar Rápido

```bash
# Ir para home
cd ~

# Ir para pasta anterior
cd -

# Voltar uma pasta
cd ..

# Mostrar caminho atual
pwd

# Criar pasta
mkdir nova-pasta

# Entrar na pasta
cd nova-pasta
```

### 7.3 Permissões

```bash
# Tornar arquivo executável
chmod +x script.sh

# Ver permissões
ls -l

# Mudar permissões
chmod 755 arquivo
```

---

## 🚨 Passo 8: Solução de Problemas

### Problema: "Comando não encontrado"

```bash
# Instale o pacote
pkg install nome-do-pacote -y

# Exemplo:
pkg install git -y
```

### Problema: Porta 8000 já está em uso

```bash
# Use outra porta
python -m http.server 9000

# Acesse: http://localhost:9000
```

### Problema: Não consegue fazer push no Git

```bash
# Configure suas credenciais
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"

# Ou use token de acesso
git remote set-url origin https://seu-token@github.com/usuario/repo.git
```

### Problema: Arquivo não salva no Nano

```bash
# Certifique-se de pressionar:
# Ctrl + X (sair)
# Y (sim, salvar)
# Enter (confirmar nome)
```

---

## 📝 Passo 9: Estrutura de Arquivos

```
~/projetos/busca-profissionais-html/
├── index.html          # Estrutura HTML
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Documentação
├── GUIA_TERMUX.md      # Este arquivo
└── .gitignore          # Arquivos ignorados
```

---

## 🎯 Passo 10: Próximos Passos

### Ideias de Melhorias

1. **Adicionar mais profissionais** ao array
2. **Criar novas categorias** de serviços
3. **Implementar localStorage** para salvar favoritos
4. **Adicionar tema escuro** (dark mode)
5. **Criar página de perfil** do profissional
6. **Integrar com API** real de profissionais
7. **Adicionar sistema de avaliações** real
8. **Criar app mobile** com React Native

### Comandos Úteis para Desenvolvimento

```bash
# Abrir múltiplas abas no Termux
# Use: Ctrl + N (nova aba)
# Use: Ctrl + Esquerda/Direita (navegar entre abas)

# Ver tamanho dos arquivos
du -sh *

# Comprimir arquivos
tar -czf backup.tar.gz *.html *.css *.js

# Extrair arquivos
tar -xzf backup.tar.gz

# Sincronizar com GitHub
git pull origin master
git push origin master
```

---

## 💡 Dicas Finais

1. **Sempre faça backup** antes de grandes alterações
2. **Use commits descritivos** para rastrear mudanças
3. **Teste no navegador** após cada alteração
4. **Mantenha o código organizado** com comentários
5. **Use Git branches** para novas funcionalidades
6. **Documente suas mudanças** no README

---

## 📞 Suporte

Se tiver dúvidas:

1. Verifique o `README.md` do projeto
2. Consulte a documentação do Termux: `termux-setup-storage`
3. Abra uma issue no GitHub
4. Procure por tutoriais de Termux online

---

## 🔗 Links Úteis

- **GitHub**: https://github.com/atm4dev-coder/busca-profissionais-html
- **Termux**: https://termux.dev
- **Git**: https://git-scm.com
- **MDN Web Docs**: https://developer.mozilla.org
- **Font Awesome**: https://fontawesome.com

---

**Versão**: 1.0.0  
**Última atualização**: 2025-01-23  
**Compatível com**: Termux no Android

Boa sorte com seu projeto! 🚀

