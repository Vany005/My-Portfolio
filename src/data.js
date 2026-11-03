// Todo o conteúdo do site fica aqui. Troque os textos entre [colchetes]
// e os links '#' pelos seus dados reais.

import fotoVania from './assets/foto-vania.webp'

// prints dos projetos (importados pra o Vite conferir se existem e versionar no build)
import dashboardImg from './assets/projetos/dashboard-blue-moon.webp'
import sstImg from './assets/projetos/sst-educacional.webp'
import portfolioImg from './assets/projetos/portfolio-terceiros.webp'

export const year = new Date().getFullYear()

export const profile = {
  name: 'Vania Melo',
  role: 'desenvolvedora fullstack',
  tagline:
    'No dia a dia, desenvolvo aplicações web completas e compartilho a rotina de código, aprendizados e projetos nas redes sociais.',
  photo: fotoVania, // importada lá em cima, de src/assets/
  photoCaption: 'System.out.println("hello!");',
  resume: null, // ex.: '/curriculo.pdf' (coloque o arquivo na pasta public/)
  email: 'vaniabeatriz999@gmail.com',
  location: 'São Paulo · presencial, híbrido ou remoto',
  links: {
    linkedin: 'https://www.linkedin.com/in/vania-melo/',
    github: 'https://github.com/Vany005',
    tiktok: 'https://www.tiktok.com/@vany.dev',
  },
  tiktokUser: 'Vany.Dev',
}

export const about = [
  'Olá! Sou a Vania, desenvolvedora de software. Sou apaixonada por transformar ideias em soluções reais de ponta a ponta — do banco de dados relacional até a interface no navegador.',
  // [texto, trecho destacado com marca-texto]
  ['Tenho background em suporte e operações logísticas, o que me deu uma visão prática sobre resolução de problemas, processos e', ' experiência do usuário'],
  'Hoje estou com a agenda aberta pra projetos freelance e avulsos. Se você tem uma ideia, eu transformo em sistema funcionando.',
]

export const now = [
  ['construindo', 'este portfólio aqui'],
  ['estudando', 'arquitetura de software e IA generativa'],
  ['ouvindo', 'We Have to Move On Inhaler', 'https://open.spotify.com/track/7LZlKjgyS1IG6BniUx9MOX'],
]

// paper: aged | grid | lined   ·   tagStyle: outline-blue | solid | outline
// image: print importado lá em cima · imageAlt: o que aparece no print (lido por leitores de tela)
// doodle: rabisco à mão acima do cartão (some no celular). side: left | right
export const projects = [
  {
    title: 'Dashboard Operacional & KPIs Logísticos',
    badge: 'projeto corporativo',
    badgeStyle: 'outline-blue',
    paper: 'aged',
    imagePlaceholder: '[print do dashboard]',
    image: dashboardImg,
    imageAlt: 'Tela do Dashboard Operacional de Entregas, com cartões de KPIs como SLA e OTD e um gráfico de tendência',
    description:
      'Dashboard web desenvolvido para a operação da multinacional logística Anjun Express, permitindo acompanhar em tempo real os principais KPIs da área e a eficiência de entregas B2B.',
    highlights: [
      'Criado por iniciativa própria, como assistente de backoffice, e adotado no dia a dia da operação',
      'Volumetria de cargas, status de transporte, devoluções, ocorrências e SLA num só lugar',
      'Trocou a análise manual de planilhas por relatórios visuais pro BackOffice',
      
    ],
    note: '* a demo usa dados fictícios e a marca “Blue Moon”, por causa do NDA',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Análise de dados'],
    tagColor: 'ink',
    doodle: { text: 'adeus, planilhas infinitas', side: 'right', color: 'var(--blue)' },
    links: [{ label: 'ver projeto', href: 'https://dashboardoperacionalbluemoon.netlify.app' }],
  },
  {
    title: 'Plataforma E\u2011commerce de Treinamentos — SST Educacional',
    badge: 'freela · cliente real',
    badgeStyle: 'solid',
    paper: 'grid',
    imagePlaceholder: '[print da plataforma]',
    image: sstImg,
    imageAlt: 'Página inicial da SST Educacional, com a chamada sobre segurança do trabalho e o botão para conhecer os cursos',
    description:
      'Plataforma completa pra vender e gerenciar cursos de Segurança do Trabalho, da jornada de compra até a automação de pagamentos e notificações.',
    highlights: [
      'APIs REST em Spring Boot pra catálogo, usuários e pedidos',
      'Pagamentos via webhook do Mercado Pago, processados de forma assíncrona',
      'E-mails transacionais com Resend pro comprador e pro admin',
      'Interface prototipada no Figma e feita em React + Tailwind',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'Tailwind', 'PostgreSQL', 'Mercado Pago', 'Resend'],
    tagColor: 'blue',
    doodle: { text: ['meu primeiro freela! do zero ao deploy ♥'], side: 'left', color: 'var(--accent)' },
    links: [{ label: 'ver site', href: 'https://ssteducacional.com' }],
  },
  {
    title: 'Website Portfólio Profissional',
    badge: 'feito pra terceiros',
    badgeStyle: 'outline',
    paper: 'lined',
    imagePlaceholder: '[print do site]',
    image: portfolioImg,
    imageAlt: 'Site de portfólio com tema escuro, mostrando a seção Sobre com texto e foto de perfil e a seção de habilidades',
    description:
      'Landing page de portfólio sob medida pra um profissional, pensada pra destacar trajetória, competências e projetos pra recrutadores e parceiros.',
    highlights: [
      'Layout responsivo com HTML semântico e CSS Flexbox/Grid',
      'Animações e navegação entre seções em JavaScript',
      'Versionado no GitHub, com deploy automático na Vercel',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    tagColor: 'accent',
    links: [{ label: 'ver site', href: 'https://davihenrick-analytics.vercel.app' }],
  },
]

export const stack = [
  { title: 'back-end', items: ['Java', 'Spring Boot', 'APIs REST', 'Mercado Pago API'] },
  { title: 'front-end', items: ['JavaScript', 'React', 'Tailwind CSS'] },
  { title: 'banco de dados', items: ['PostgreSQL', 'MySQL'] },
  { title: 'versionamento', items: ['Git', 'GitHub'] },
]
