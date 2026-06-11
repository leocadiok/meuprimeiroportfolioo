<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Karla Almeida | Front-end, PMO & Data</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body class="dark-mode">
    <canvas id="background-canvas"></canvas>

    <header>
        <nav>
            <div class="logo">Karla<span>Almeida</span></div>

            <!-- MENU LINKS -->
            <ul class="nav-links">
                <li><a href="index.html" class="active">Início</a></li>
                <li><a href="canais.html">Canais</a></li>
                <li><a href="contato.html">Contato</a></li>
            </ul>

            <div class="nav-actions">
                <button id="theme-toggle" class="theme-toggle-button" aria-label="Alternar tema">
                    <i class="fas fa-sun"></i>
                </button>

                <!-- BOTÃO SANDUÍCHE MOBILE -->
                <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    </header>

    <main class="container">
        <!-- HERO -->
        <section class="hero">
            <div class="hero-content">
                <p class="hero-label">Front-end • PMO • Ciência de Dados</p>
                <h1>
                    resolvendo desafios ,<br> criando soluções e <br>aprendendo na pratica!
                </h1>
                <p class="hero-subtitle">
                    Prazer, Karla! 👋
                        Uma aprendiz de tecnologia com um forte "ascendente em humanas". Gosto muito de dados, mas prefiro as pessoas.
                        Uso a tecnologia e a inovação como ferramentas para tentar tornar a educação mais horizontal e acessível. Para mim, sucesso profissional e impacto social andam juntos.
                        No momento, focada em construir minha base com HTML, CSS, Python e JavaScript. Como estou no começo da jornada, este portfólio vai evoluir junto comigo! 🚀
                </p>

                <div class="hero-actions">
                    <a href="contato.html" class="btn primary">Vamos construir algo juntos?</a>
                    <a href="canais.html" class="btn ghost">Ver meus canais de estudo</a>
                </div>

                <div class="hero-meta">
                    <div>
                        <span class="meta-label">Stack atual</span>
                        <span class="meta-value">HTML • CSS • JavaScript • Python</span>
                    </div>
                    <div>
                        <span class="meta-label">Área de impacto</span>
                        <span class="meta-value">Front-end • PMO • Data</span>
                    </div>
                </div>

                <div class="social-links hero-social">
                    <a href="https://github.com/leocadiok" target="_blank" aria-label="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/karla-almeida-cientistadedados" target="_blank" aria-label="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:leocadiokk@gmail.com" aria-label="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>

            <div class="hero-image epic-orbit">
                <div class="hero-avatar">
                    <img src="img/profile.png" alt="Karla Almeida">
                    <div class="orbit orbit-outer"></div>
                    <div class="orbit orbit-inner"></div>
                </div>
                <div class="hero-badges">
                    <div class="badge">
                        <span class="badge-title">Front-end</span>
                        <span class="badge-body">Interfaces que respiram, se adaptam e conversam com o usuário.</span>
                    </div>
                    <div class="badge">
                        <span class="badge-title">PMO</span>
                        <span class="badge-body">Estratégia, fluxo e ritmo para projetos saírem do papel.</span>
                    </div>
                    <div class="badge">
                        <span class="badge-title">Data</span>
                        <span class="badge-body">Dados como bússola para decisões mais inteligentes.</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- SKILLS -->
        <section class="skills">
            <div class="section-header">
                <h2>Mapa de Habilidades</h2>
                <p>
                    Cada tecnologia aqui não é só um ícone: é uma parte da forma como penso 
                    e construo soluções. Clique nas habilidades para ver o foco de cada uma.
                </p>
            </div>

            <div class="skills-grid">
                <div class="skill-card" data-skill="html5">
                    <i class="fab fa-html5"></i>
                    <h3>HTML5</h3>
                </div>
                <div class="skill-card" data-skill="css3">
                    <i class="fab fa-css3-alt"></i>
                    <h3>CSS3</h3>
                </div>
                <div class="skill-card" data-skill="js">
                    <i class="fab fa-js"></i>
                    <h3>JavaScript</h3>
                </div>
                <div class="skill-card" data-skill="python">
                    <i class="fab fa-python"></i>
                    <h3>Python</h3>
                </div>
                <div class="skill-card" data-skill="pmo">
                    <i class="fas fa-project-diagram"></i>
                    <h3>PMO</h3>
                </div>
                <div class="skill-card" data-skill="dados">
                    <i class="fas fa-database"></i>
                    <h3>Ciência de Dados</h3>
                </div>
            </div>

            <div class="skills-panel" id="skills-panel">
                <h3 id="skills-panel-title">Clique em uma habilidade</h3>
                <p id="skills-panel-text">
                    Selecione uma tecnologia ou área para ver como ela aparece no meu fluxo de trabalho. 
                    A ideia não é só saber a ferramenta, mas saber onde ela faz a diferença.
                </p>
            </div>
        </section>

        <!-- SOBRE -->
        <section class="about">
            <div class="section-header">
                <h2>Quem é a Karla por trás do código?</h2>
            </div>
            <p>
                Sou uma aprendiz de tecnologia com um forte “ascendente em humanas”. 
                Acredito que interfaces não são só telas: são conversas entre pessoas e sistemas.
            </p>
            <p>
                Hoje, curso Ciência da Computação e navego entre três mundos que se encontram o tempo todo:
                <strong>Front-end</strong>, onde dou forma às ideias; <strong>PMO</strong>, onde coloco estrutura no caos; 
                e <strong>Ciência de Dados</strong>, onde faço números contarem histórias.
            </p>
            <p>
                Para mim, tecnologia só faz sentido se gerar impacto real. Quero estar nos projetos 
                em que aprender, ensinar e compartilhar conhecimento não são “extra”, e sim parte da jornada.
            </p>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Karla Almeida. Construído em HTML, CSS e JavaScript.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>