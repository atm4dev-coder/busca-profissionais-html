# ⚡ Cheatsheet Rápido - Termux

Referência rápida dos comandos mais usados para trabalhar com a aplicação no Termux.

---

## 🚀 Iniciar Rápido

```bash
# 1. Atualizar Termux
pkg update && pkg upgrade -y

# 2. Instalar essenciais
pkg install git python nodejs -y

# 3. Clonar projeto
cd ~/projetos
git clone https://github.com/atm4dev-coder/busca-profissionais-html.git

# 4. Entrar na pasta
cd busca-profissionais-html

# 5. Iniciar servidor
python -m http.server 8000

# 6. Abrir no navegador
# http://localhost:8000
```

---

## 📁 Comandos de Arquivo

| Comando | O que faz |
|---------|----------|
| `ls` | Listar arquivos |
| `ls -la` | Listar com detalhes |
| `pwd` | Mostrar pasta atual |
| `cd pasta` | Entrar em pasta |
| `cd ..` | Voltar uma pasta |
| `cd ~` | Ir para home |
| `mkdir pasta` | Criar pasta |
| `touch arquivo.txt` | Criar arquivo vazio |
| `cp arquivo.txt cópia.txt` | Copiar arquivo |
| `mv arquivo.txt nova-pasta/` | Mover arquivo |
| `rm arquivo.txt` | Deletar arquivo |
| `rm -r pasta/` | Deletar pasta |
| `cat arquivo.txt` | Ver conteúdo |
| `wc -l arquivo.txt` | Contar linhas |

---

## ✏️ Editar Arquivos

### Com Nano (Mais Fácil)

```bash
nano arquivo.txt
# Ctrl + X = Sair
# Ctrl + O = Salvar
# Ctrl + W = Buscar
```

### Com Vim (Mais Poderoso)

```bash
vim arquivo.txt
# i = Entrar em edição
# Esc = Sair de edição
# :wq = Salvar e sair
# :q! = Sair sem salvar
```

---

## 🌐 Servidor HTTP

### Python

```bash
# Porta 8000
python -m http.server 8000

# Porta customizada
python -m http.server 9000
```

### Node.js

```bash
# Instalar
npm install -g http-server

# Usar
http-server -p 8000
```

---

## 🔧 Git Básico

```bash
# Configurar
git config --global user.name "Seu Nome"
git config --global user.email "email@example.com"

# Clonar
git clone https://github.com/usuario/repo.git

# Status
git status

# Adicionar
git add .
git add arquivo.txt

# Commit
git commit -m "Mensagem"

# Push
git push origin master

# Pull
git pull origin master

# Ver histórico
git log --oneline

# Criar branch
git checkout -b nova-branch

# Mudar branch
git checkout master
```

---

## 📝 Editar Código Rápido

### Adicionar Profissional

```bash
nano script.js
# Procure por: const profissionais = [
# Adicione um novo objeto antes do ]
```

### Adicionar Categoria

```bash
nano index.html
# Procure por: <section id="categorias">
# Adicione um novo <div class="category-card">
```

### Mudar Cores

```bash
nano style.css
# Procure por: :root {
# Mude as variáveis de cor
```

---

## 🔍 Buscar e Substituir

```bash
# Buscar texto em arquivo
grep "texto" arquivo.js

# Buscar em todos os arquivos
grep -r "texto" .

# Contar ocorrências
grep -c "texto" arquivo.js

# Substituir com sed
sed -i 's/antigo/novo/g' arquivo.txt
```

---

## 📊 Informações Úteis

```bash
# Ver espaço em disco
df -h

# Ver tamanho de pasta
du -sh pasta/

# Ver tamanho de arquivo
ls -lh arquivo.txt

# Contar arquivos
ls -1 | wc -l

# Ver versões
node --version
python --version
git --version
```

---

## 🔐 Permissões

```bash
# Tornar executável
chmod +x script.sh

# Remover permissão
chmod -x script.sh

# Ver permissões
ls -l

# Mudar proprietário
chown usuario arquivo.txt
```

---

## 🎯 Fluxo de Trabalho Completo

```bash
# 1. Entrar na pasta
cd ~/projetos/busca-profissionais-html

# 2. Editar arquivo
nano script.js

# 3. Testar no navegador
# Abra http://localhost:8000

# 4. Verificar status
git status

# 5. Adicionar mudanças
git add .

# 6. Fazer commit
git commit -m "Descrição da mudança"

# 7. Enviar para GitHub
git push origin master
```

---

## 🆘 Solução Rápida de Problemas

| Problema | Solução |
|----------|---------|
| Comando não encontrado | `pkg install nome-do-pacote -y` |
| Porta já em uso | `python -m http.server 9000` |
| Git não funciona | `pkg install git -y` |
| Arquivo não salva | `Ctrl+X` → `Y` → `Enter` |
| Sem espaço em disco | `du -sh * \| sort -h` |
| Arquivo corrompido | `git checkout arquivo.txt` |

---

## 💡 Dicas Rápidas

1. **Abra múltiplas abas**: `Ctrl + N`
2. **Navegue entre abas**: `Ctrl + ← / →`
3. **Histórico de comandos**: Seta para cima
4. **Autocompletar**: `Tab`
5. **Cancelar comando**: `Ctrl + C`
6. **Limpar tela**: `clear`
7. **Voltar ao último comando**: `!!`
8. **Buscar no histórico**: `Ctrl + R`

---

## 🔗 Links Úteis

```bash
# Abrir URL no navegador
termux-open https://github.com/atm4dev-coder/busca-profissionais-html

# Compartilhar arquivo
termux-share arquivo.txt

# Ver câmera
termux-camera-photo foto.jpg
```

---

## 📱 Atalhos Úteis do Termux

| Tecla | Função |
|-------|--------|
| `Ctrl + A` | Ir para início da linha |
| `Ctrl + E` | Ir para fim da linha |
| `Ctrl + K` | Deletar até fim da linha |
| `Ctrl + U` | Deletar até início da linha |
| `Ctrl + L` | Limpar tela |
| `Ctrl + D` | Sair |
| `Ctrl + Z` | Pausar processo |

---

## 🎓 Exemplos Práticos

### Backup Rápido

```bash
tar -czf backup.tar.gz *.html *.css *.js
```

### Restaurar Backup

```bash
tar -xzf backup.tar.gz
```

### Sincronizar com GitHub

```bash
git pull origin master
# Fazer mudanças
git add .
git commit -m "Mensagem"
git push origin master
```

### Criar Novo Arquivo

```bash
cat > novo-arquivo.txt << EOF
Conteúdo do arquivo
Pode ter múltiplas linhas
EOF
```

---

## 🚀 Próximas Ações

1. ✅ Clone o repositório
2. ✅ Inicie o servidor
3. ✅ Teste no navegador
4. ✅ Edite o código
5. ✅ Faça commit
6. ✅ Envie para GitHub

---

**Dica Final**: Salve este arquivo no seu telefone para referência rápida! 📱

```bash
# Copiar para Downloads
cp CHEATSHEET_TERMUX.md ~/storage/downloads/
```

Boa sorte! 🚀

