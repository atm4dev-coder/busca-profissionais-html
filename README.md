# Busca Profissionais - Plataforma de Busca de Serviços

Uma aplicação web moderna para conectar pessoas com profissionais qualificados de diversas áreas. Desenvolvida com **HTML5**, **CSS3** e **JavaScript Vanilla**.

## 🎯 Funcionalidades

### ✨ Principais Recursos

- **🔍 Busca Inteligente**: Busque profissionais por nome, serviço ou especialidade
- **📂 Categorias Populares**: Acesso rápido às categorias mais procuradas
- **🎯 Filtros Avançados**: Filtre por tipo de serviço e cidade
- **⭐ Sistema de Avaliações**: Visualize ratings e reviews de profissionais
- **📱 Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **💬 Integração WhatsApp**: Envie mensagens diretas via WhatsApp
- **🔐 Autenticação**: Sistema de login e cadastro

### 📋 Profissionais Disponíveis

A plataforma inclui profissionais nas seguintes categorias:

- **Eletricista** - Instalações e manutenção elétrica
- **Encanador** - Serviços de encanamento
- **Pedreiro** - Construção e reforma
- **Pintor** - Pintura residencial e comercial
- **Diarista** - Limpeza e organização
- **Carpinteiro** - Móveis e estruturas
- **Jardineiro** - Paisagismo e manutenção
- **Mecânico** - Reparo e manutenção de veículos

## 🚀 Como Usar

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/atm4dev-coder/busca-profissionais-html.git
cd busca-profissionais-html
```

2. Abra o arquivo `index.html` em seu navegador:
```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

Ou use um servidor local (recomendado):
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com Live Server (VS Code extension)
# Clique com botão direito em index.html > Open with Live Server
```

### Navegação

1. **Página Inicial**: Apresenta a barra de busca principal
2. **Buscar Profissionais**: Digite o serviço desejado e clique em "Buscar"
3. **Categorias**: Clique em uma categoria para buscar profissionais daquela área
4. **Filtros**: Use os filtros avançados para refinar sua busca
5. **Contato**: Clique em "Mensagem" para enviar WhatsApp ou "Contratar" para solicitar serviço

## 📁 Estrutura do Projeto

```
busca-profissionais-html/
├── index.html          # Arquivo principal HTML
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Este arquivo
└── .gitignore          # Arquivos ignorados pelo Git
```

## 🎨 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com gradientes, animações e flexbox
- **JavaScript (ES6+)**: Lógica interativa e dinâmica
- **Font Awesome 6.5**: Ícones profissionais
- **Google Fonts (Poppins)**: Tipografia moderna

## 🔧 Funcionalidades JavaScript

### Busca
```javascript
buscarProfissionais()      // Busca por termo
buscarPorCategoria()       // Busca por categoria
aplicarFiltros()           // Aplica filtros avançados
limparFiltros()            // Limpa todos os filtros
```

### Interações
```javascript
enviarMensagem()           // Envia mensagem via WhatsApp
contratarProfissional()    // Inicia processo de contratação
```

### Menu
```javascript
// Menu responsivo automático com toggle
menuToggle.addEventListener("click", ...)
```

## 📊 Dados de Exemplo

A aplicação inclui 10 profissionais fictícios com informações completas:

```javascript
{
  id: 1,
  nome: "Carlos Souza",
  servico: "Eletricista",
  cidade: "Recife",
  telefone: "(81) 98765-4321",
  email: "carlos.souza@email.com",
  rating: 4.8,
  reviews: 127,
  experiencia: "15 anos",
  descricao: "Eletricista experiente em instalações residenciais e comerciais"
}
```

## 🎯 Casos de Uso

1. **Buscar um Profissional**: Digite o serviço na barra de busca
2. **Filtrar por Localização**: Use o filtro de cidade
3. **Contatar Profissional**: Clique em "Mensagem" para WhatsApp
4. **Criar Conta**: Preencha o formulário de cadastro
5. **Fazer Login**: Acesse sua conta

## 📱 Responsividade

A aplicação é totalmente responsiva:

- **Desktop** (1200px+): Layout completo com todos os recursos
- **Tablet** (768px - 1199px): Layout adaptado com menu responsivo
- **Mobile** (até 767px): Menu hamburger, layout em coluna única

## 🔐 Segurança

- Validação de formulários no cliente
- Links de WhatsApp seguros
- Sem armazenamento de dados sensíveis no cliente

## 🚀 Próximas Melhorias

- [ ] Integração com banco de dados
- [ ] Sistema de autenticação real
- [ ] Pagamento online
- [ ] Avaliações e comentários reais
- [ ] Perfil de profissional completo
- [ ] Agendamento de serviços
- [ ] Notificações em tempo real
- [ ] App mobile nativa

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido por **atm4dev-coder**

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório GitHub.

## 🔗 Links Úteis

- [GitHub Repository](https://github.com/atm4dev-coder/busca-profissionais-html)
- [Font Awesome Icons](https://fontawesome.com)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Versão**: 1.0.0  
**Última atualização**: 2025-01-23  
**Status**: ✅ Ativo e em desenvolvimento

