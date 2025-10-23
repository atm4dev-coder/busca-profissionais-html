// ============================================
// DADOS DE PROFISSIONAIS
// ============================================
const profissionais = [
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
  },
  {
    id: 2,
    nome: "Maria Silva",
    servico: "Pintora",
    cidade: "Olinda",
    telefone: "(81) 99876-5432",
    email: "maria.silva@email.com",
    rating: 4.9,
    reviews: 89,
    experiencia: "12 anos",
    descricao: "Pintora especializada em acabamentos e restauração"
  },
  {
    id: 3,
    nome: "João Pereira",
    servico: "Encanador",
    cidade: "Jaboatão",
    telefone: "(81) 98765-4321",
    email: "joao.pereira@email.com",
    rating: 4.7,
    reviews: 156,
    experiencia: "18 anos",
    descricao: "Encanador especialista em manutenção e instalação"
  },
  {
    id: 4,
    nome: "Ana Costa",
    servico: "Diarista",
    cidade: "Paulista",
    telefone: "(81) 99876-5432",
    email: "ana.costa@email.com",
    rating: 4.6,
    reviews: 102,
    experiencia: "10 anos",
    descricao: "Diarista confiável e responsável com limpeza profunda"
  },
  {
    id: 5,
    nome: "Roberto Lima",
    servico: "Pedreiro",
    cidade: "Camaragibe",
    telefone: "(81) 98765-4321",
    email: "roberto.lima@email.com",
    rating: 4.5,
    reviews: 78,
    experiencia: "20 anos",
    descricao: "Pedreiro experiente em construção e reforma"
  },
  {
    id: 6,
    nome: "Fernanda Costa",
    servico: "Carpinteiro",
    cidade: "Recife",
    telefone: "(81) 99876-5432",
    email: "fernanda.costa@email.com",
    rating: 4.7,
    reviews: 95,
    experiencia: "14 anos",
    descricao: "Carpinteira especializada em móveis e estruturas"
  },
  {
    id: 7,
    nome: "Lucas Martins",
    servico: "Jardineiro",
    cidade: "Olinda",
    telefone: "(81) 98765-4321",
    email: "lucas.martins@email.com",
    rating: 4.8,
    reviews: 67,
    experiencia: "11 anos",
    descricao: "Jardineiro com expertise em paisagismo e manutenção"
  },
  {
    id: 8,
    nome: "Gustavo Silva",
    servico: "Mecânico",
    cidade: "Jaboatão",
    telefone: "(81) 99876-5432",
    email: "gustavo.silva@email.com",
    rating: 4.9,
    reviews: 143,
    experiencia: "16 anos",
    descricao: "Mecânico especializado em manutenção e reparo de veículos"
  },
  {
    id: 9,
    nome: "Patricia Oliveira",
    servico: "Eletricista",
    cidade: "Paulista",
    telefone: "(81) 98765-4321",
    email: "patricia.oliveira@email.com",
    rating: 4.6,
    reviews: 88,
    experiencia: "13 anos",
    descricao: "Eletricista especializada em manutenção preventiva"
  },
  {
    id: 10,
    nome: "Rafael Santos",
    servico: "Pintor",
    cidade: "Camaragibe",
    telefone: "(81) 99876-5432",
    email: "rafael.santos@email.com",
    rating: 4.7,
    reviews: 112,
    experiencia: "9 anos",
    descricao: "Pintor com experiência em projetos residenciais e comerciais"
  }
];

// ============================================
// MENU RESPONSIVO
// ============================================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  
  // Animar o ícone
  menuToggle.style.transform = navLinks.classList.contains("active") 
    ? "rotate(90deg)" 
    : "rotate(0deg)";
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.style.transform = "rotate(0deg)";
  });
});

// ============================================
// FUNÇÃO DE BUSCA
// ============================================
function buscarProfissionais() {
  const termo = document.getElementById("buscaInput").value.toLowerCase().trim();
  
  if (termo === "") {
    exibirMensagem("Por favor, digite um serviço para buscar.");
    return;
  }

  const lista = document.getElementById("listaProfissionais");
  lista.innerHTML = '<div class="loading">Buscando profissionais</div>';

  // Simular delay de busca
  setTimeout(() => {
    const resultados = profissionais.filter(p =>
      p.servico.toLowerCase().includes(termo) ||
      p.nome.toLowerCase().includes(termo) ||
      p.descricao.toLowerCase().includes(termo)
    );

    exibirProfissionais(resultados, lista);
    
    // Scroll para resultados
    document.getElementById("profissionais").scrollIntoView({ behavior: "smooth" });
  }, 500);
}

// ============================================
// FUNÇÃO DE BUSCA POR CATEGORIA
// ============================================
function buscarPorCategoria(categoria) {
  document.getElementById("buscaInput").value = categoria;
  buscarProfissionais();
}

// ============================================
// FUNÇÃO DE FILTROS
// ============================================
function aplicarFiltros() {
  const servico = document.getElementById("filtroServico").value;
  const cidade = document.getElementById("filtroCidade").value;
  const lista = document.getElementById("listaProfissionais");

  let resultados = profissionais;

  if (servico) {
    resultados = resultados.filter(p => p.servico === servico);
  }

  if (cidade) {
    resultados = resultados.filter(p => p.cidade === cidade);
  }

  if (resultados.length === 0) {
    lista.innerHTML = '<div class="mensagem-vazia"><i class="fa-solid fa-search"></i><p>Nenhum profissional encontrado com esses filtros.</p></div>';
  } else {
    exibirProfissionais(resultados, lista);
  }
}

// ============================================
// FUNÇÃO LIMPAR FILTROS
// ============================================
function limparFiltros() {
  document.getElementById("filtroServico").value = "";
  document.getElementById("filtroCidade").value = "";
  document.getElementById("buscaInput").value = "";
  document.getElementById("listaProfissionais").innerHTML = "";
  exibirMensagem("Filtros limpos. Digite um serviço para buscar.");
}

// ============================================
// FUNÇÃO EXIBIR PROFISSIONAIS
// ============================================
function exibirProfissionais(resultados, lista) {
  lista.innerHTML = "";

  if (resultados.length === 0) {
    lista.innerHTML = `
      <div class="mensagem-vazia">
        <i class="fa-solid fa-search"></i>
        <p>Nenhum profissional encontrado.</p>
      </div>
    `;
    return;
  }

  resultados.forEach((prof, index) => {
    const stars = gerarEstrelas(prof.rating);
    const card = document.createElement("div");
    card.classList.add("prof-card");
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <h4>${prof.nome}</h4>
      <p><strong>Serviço:</strong> ${prof.servico}</p>
      <p><strong>Cidade:</strong> ${prof.cidade}</p>
      
      <div class="rating">
        ${stars} <span>(${prof.reviews} avaliações)</span>
      </div>
      
      <p><strong>Experiência:</strong> ${prof.experiencia}</p>
      <p style="color: #666; font-size: 14px; margin-bottom: 15px;">${prof.descricao}</p>
      
      <div class="info-item">
        <i class="fa-solid fa-phone"></i>
        <span>${prof.telefone}</span>
      </div>
      <div class="info-item">
        <i class="fa-solid fa-envelope"></i>
        <span>${prof.email}</span>
      </div>
      
      <div class="botoes">
        <button class="btn-mensagem" onclick="enviarMensagem('${prof.nome}', '${prof.telefone}')">
          <i class="fa-solid fa-comment"></i> Mensagem
        </button>
        <button class="btn-contratar" onclick="contratarProfissional('${prof.nome}', '${prof.servico}')">
          <i class="fa-solid fa-handshake"></i> Contratar
        </button>
      </div>
    `;
    lista.appendChild(card);
  });
}

// ============================================
// FUNÇÃO GERAR ESTRELAS
// ============================================
function gerarEstrelas(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars += '<i class="fa-solid fa-star" style="color: #ffc107;"></i>';
    } else if (i === fullStars && hasHalfStar) {
      stars += '<i class="fa-solid fa-star-half-stroke" style="color: #ffc107;"></i>';
    } else {
      stars += '<i class="fa-regular fa-star" style="color: #ddd;"></i>';
    }
  }
  return stars;
}

// ============================================
// FUNÇÃO ENVIAR MENSAGEM
// ============================================
function enviarMensagem(nome, telefone) {
  const mensagem = `Olá ${nome}, gostaria de saber mais sobre seus serviços!`;
  const url = `https://wa.me/55${telefone.replace(/\D/g, '')}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// ============================================
// FUNÇÃO CONTRATAR
// ============================================
function contratarProfissional(nome, servico) {
  alert(`Você selecionou contratar ${nome} para o serviço de ${servico}.\n\nEm breve você será redirecionado para finalizar o contrato.`);
  // Aqui você pode adicionar lógica para redirecionar para uma página de contrato
}

// ============================================
// FUNÇÃO EXIBIR MENSAGEM
// ============================================
function exibirMensagem(texto) {
  const lista = document.getElementById("listaProfissionais");
  lista.innerHTML = `
    <div class="mensagem-vazia">
      <i class="fa-solid fa-info-circle"></i>
      <p>${texto}</p>
    </div>
  `;
}

// ============================================
// FUNÇÃO HANDLE LOGIN
// ============================================
function handleLogin(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  const senha = event.target.querySelector('input[type="password"]').value;
  
  alert(`Login realizado com sucesso!\nEmail: ${email}`);
  event.target.reset();
  // Aqui você pode adicionar lógica de autenticação real
}

// ============================================
// FUNÇÃO HANDLE CADASTRO
// ============================================
function handleCadastro(event) {
  event.preventDefault();
  const nome = event.target.querySelector('input[type="text"]').value;
  const email = event.target.querySelectorAll('input[type="email"]')[0].value;
  const telefone = event.target.querySelector('input[type="tel"]').value;
  
  alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`);
  event.target.reset();
  // Aqui você pode adicionar lógica de cadastro real
}

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  // Exibir mensagem inicial
  exibirMensagem("Digite um serviço na barra de busca para encontrar profissionais.");
  
  // Permitir busca com Enter
  document.getElementById("buscaInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      buscarProfissionais();
    }
  });
});

// ============================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

