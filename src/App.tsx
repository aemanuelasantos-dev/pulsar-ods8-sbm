import { useState, useEffect, useRef } from 'react'

// ── Icons ────────────────────────────────────────────────────────────────────

const Icon = ({ name, size = 24, cls = '' }: { name: string; size?: number; cls?: string }) => (
  <span className={`material-symbols-outlined ${cls}`} style={{ fontSize: size, lineHeight: 1 }}>
    {name}
  </span>
)

// ── Data ─────────────────────────────────────────────────────────────────────

const courseModules = [
  { num: 1, title: 'Introdução à Informática', desc: 'Conceitos básicos, hardware e software.' },
  { num: 2, title: 'Windows e Arquivos', desc: 'Organização de pastas, atalhos e sistema operacional.' },
  { num: 3, title: 'Digitação', desc: 'Técnica de digitação e produtividade no teclado.' },
  { num: 4, title: 'Microsoft Word', desc: 'Criação e formatação de documentos profissionais.' },
  { num: 5, title: 'Microsoft Excel', desc: 'Planilhas, fórmulas e análise de dados básica.' },
  { num: 6, title: 'Internet e E-mail', desc: 'Navegação segura, pesquisa e comunicação digital.' },
  { num: 7, title: 'PowerPoint', desc: 'Apresentações visuais impactantes e profissionais.' },
  { num: 8, title: 'Comunicação Profissional', desc: 'Etiqueta no trabalho, escrita formal e informal.' },
  { num: 9, title: 'Currículo', desc: 'Como montar um currículo atrativo e eficiente.' },
  { num: 10, title: 'Entrevista de Emprego', desc: 'Preparação, postura e técnicas para se destacar.' },
]

const projectGoals = [
  { icon: 'computer', title: 'Informática', color: 'bg-blue-100 text-blue-700' },
  { icon: 'language', title: 'Web', color: 'bg-indigo-100 text-indigo-700' },
  { icon: 'group', title: 'Trabalho em Equipe', color: 'bg-sky-100 text-sky-700' },
  { icon: 'record_voice_over', title: 'Comunicação', color: 'bg-teal-100 text-teal-700' },
  { icon: 'checklist', title: 'Organização', color: 'bg-emerald-100 text-emerald-700' },
  { icon: 'handshake', title: 'Entrevistas', color: 'bg-orange-100 text-orange-700' },
  { icon: 'trending_up', title: 'Desenvolvimento', color: 'bg-amber-100 text-amber-700' },
  { icon: 'description', title: 'Currículo', color: 'bg-rose-100 text-rose-700' },
]

const audience = [
  { icon: '💡', title: 'Sem Curso Profissionalizante', desc: 'Jovens que nunca tiveram acesso a um curso profissionalizante e buscam sua primeira formação.' },
  { icon: '🎯', title: 'Primeiro Emprego', desc: 'Jovens que buscam sua primeira oportunidade profissional no mercado de trabalho.' },
  { icon: '🚀', title: 'Em Busca de Qualificação', desc: 'Jovens motivados a se qualificar e conquistar sua independência financeira.' },
]

const results = [
  { icon: 'wifi', title: 'Inclusão Digital', desc: 'Acesso e domínio das ferramentas digitais do século XXI.', color: '#1d4ed8' },
  { icon: 'school', title: 'Capacitação Profissional', desc: 'Certificação e habilidades reconhecidas pelo mercado.', color: '#16a34a' },
  { icon: 'rocket_launch', title: 'Desenvolvimento Tecnológico', desc: 'Domínio de tecnologias emergentes e inovação.', color: '#7c3aed' },
  { icon: 'work', title: 'Maior Empregabilidade', desc: 'Aumento real nas chances de contratação.', color: '#f97316' },
  { icon: 'trending_up', title: 'Preparação para o Mercado', desc: 'Postura, currículo e entrevista dominados.', color: '#0891b2' },
]

const quotes = [
  {
    text: 'Programas de qualificação e formação continuada são estratégias importantes para aumentar a empregabilidade e a inclusão social da juventude...',
    author: 'POCHMANN, Márcio',
    source: 'Estado e Políticas Públicas no Brasil: Mudanças e Continuidades',
    year: '2017',
  },
  {
    text: 'O acesso à tecnologia e à informação é um dos principais vetores para a redução das desigualdades sociais e a promoção do desenvolvimento humano.',
    author: 'ONU — Agenda 2030',
    source: 'ODS 8: Trabalho Decente e Crescimento Econômico',
    year: '2015',
  },
  {
    text: 'A formação em informática e tecnologia abre portas para jovens que, sem ela, teriam poucas chances de ingressar no mercado de trabalho formal.',
    author: 'LETÍCIA (da Uniube)',
    source: 'Área de Ciência da Computação — Blog Uniube',
    year: '2019',
  },
  {
    text: 'Investir na educação tecnológica dos jovens é investir no futuro econômico e social do país.',
    author: 'Grupo Le-Robots',
    source: 'Projeto Tecnologia que Transforma — Rede Batista Mineiro de Lagoa Santa',
    year: '2025',
  },
]

// ── Navigation ────────────────────────────────────────────────────────────────

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'ODS 8', href: '#ods8' },
  { label: 'Projeto', href: '#projeto' },
  { label: 'Informática', href: '#informatica' },
  { label: 'Apostila', href: '#apostila' },
  { label: 'Apresentação', href: '#apresentacao' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 24px rgba(29,78,216,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
            <Icon name="computer" size={18} cls="text-white" />
          </div>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.125rem' }}>
            <span className={scrolled ? 'text-blue-700 transition-colors' : 'text-blue-400 transition-colors'}>Le</span>
            <span className={scrolled ? 'text-gray-900 transition-colors' : 'text-white transition-colors'}>-Robots</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-200 hover:after:w-full ${
                  scrolled
                    ? 'text-slate-700 hover:text-blue-700 after:bg-blue-700'
                    : 'text-white/90 hover:text-white after:bg-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 shadow-xl">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-700 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const audienceTags = [
    { icon: 'calendar_month', label: '16 a 20 anos' },
    { icon: 'work_off', label: 'Sem experiência profissional' },
    { icon: 'school', label: 'Sem formação prévia' },
    { icon: 'emoji_people', label: 'Buscando o 1º emprego' },
  ]

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1d4ed8 100%)' }}
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #22c55e, transparent)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: 'rgba(249,115,22,0.2)', color: '#fb923c', border: '1px solid rgba(249,115,22,0.3)' }}>
            <Icon name="emoji_events" size={14} cls="text-orange-400" />
            ODS 8 — Trabalho Decente e Crescimento Econômico
          </div>

          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}>
            Tecnologia que<br />
            <span style={{ background: 'linear-gradient(90deg, #22c55e, #86efac)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Transforma
            </span>
          </h1>

          <p className="text-blue-300 text-lg font-medium mb-8" style={{ fontFamily: 'Outfit,sans-serif' }}>
            10 módulos para preparar os jovens para um futuro mais tecnológico
          </p>

          <p className="text-base text-blue-100 leading-relaxed mb-8 max-w-xl">
            O projeto <strong className="text-white">Le-Robots</strong> promove o trabalho decente e o crescimento
            econômico por meio da capacitação tecnológica e profissional dos jovens.
          </p>

          {/* Audience tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {audienceTags.map(t => (
              <div key={t.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#bfdbfe', border: '1px solid rgba(255,255,255,0.15)' }}>
                <Icon name={t.icon} size={13} cls="text-blue-300" />
                {t.label}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#projeto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)' }}>
              <Icon name="explore" size={18} cls="text-white" />
              Conhecer o Projeto
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="relative animate-float">
            <div className="w-[480px] h-[380px] rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=960&h=760&fit=crop&auto=format"
                alt="Jovens estudantes utilizando computadores"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(30,58,138,0.7))' }} />
            </div>

            <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl p-3 flex items-center gap-3"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <Icon name="verified" size={20} cls="text-green-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-800">Certificado</div>
                <div className="text-xs text-gray-500">ao final do curso</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-6 bg-white rounded-2xl p-3 flex items-center gap-3"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                <Icon name="groups" size={20} cls="text-orange-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-800">Inclusão Social</div>
                <div className="text-xs text-gray-500">Jovens sem curso profissionalizante</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 55 960 0 720 30C480 60 240 5 0 40L0 60Z" fill="#f8faff" />
        </svg>
      </div>
    </section>
  )
}

// ── ODS 8 ─────────────────────────────────────────────────────────────────────

function Ods8() {
  return (
    <section id="ods8" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{ background: '#dcfce7', color: '#15803d' }}>
              <Icon name="public" size={14} />
              Agenda 2030 — ONU
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              ODS 8 – Trabalho Decente e<br />
              <span className="text-blue-700">Crescimento Econômico</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Este projeto está alinhado com a <strong>ODS 8 da ONU</strong>, que busca promover trabalho decente,
              crescimento econômico sustentável e oportunidades para todos. O projeto <strong>Tecnologia que Transforma</strong> do
              grupo Le-Robots atende jovens de <strong>16 a 20 anos</strong> sem experiência ou formação profissional,
              identificando e ajudando nas dificuldades causadas pela falta de qualificação.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Por meio do desenvolvimento de conhecimentos em informática e tecnologia, o projeto amplia as
              oportunidades de emprego e contribui para uma economia mais inclusiva e justa.
            </p>

            {/* Simpler, clearer blocks */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'handshake', label: 'Emprego Digno', sub: 'Trabalho decente para todos', bg: '#dbeafe', fg: '#1d4ed8' },
                { icon: 'menu_book', label: 'Capacitação', sub: 'Formação gratuita e acessível', bg: '#dcfce7', fg: '#15803d' },
                { icon: 'diversity_3', label: 'Inclusão Social', sub: 'Sem deixar ninguém para trás', bg: '#fef3c7', fg: '#d97706' },
                { icon: 'show_chart', label: 'Crescimento', sub: 'Mais oportunidades no mercado', bg: '#f3e8ff', fg: '#7c3aed' },
              ].map(m => (
                <div key={m.label} className="flex items-center gap-3 p-4 rounded-2xl"
                  style={{ background: m.bg }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: m.fg }}>
                    <Icon name={m.icon} size={18} cls="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: m.fg }}>{m.label}</div>
                    <div className="text-xs text-gray-500 leading-tight">{m.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-blue-100"
              style={{ boxShadow: '0 24px 60px rgba(29,78,216,0.15)' }}>
              <img
                src="https://images.unsplash.com/photo-1723987135977-ae935608939e?w=800&h=600&fit=crop&auto=format"
                alt="Jovens estudantes em aula de tecnologia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(29,78,216,0.2), transparent)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Projeto ───────────────────────────────────────────────────────────────────

function Projeto() {
  return (
    <section id="projeto" className="py-24" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: '#dbeafe', color: '#1d4ed8' }}>
            <Icon name="lightbulb" size={14} />
            Objetivos do Projeto
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            O que o <span className="text-blue-700">Le-Robots</span> oferece
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Capacitar, disponibilizar materiais e preparar jovens para as oportunidades reais do mercado de trabalho.
          </p>
        </div>

        {/* 3 main objectives */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: 'school', num: '01', title: 'Capacitar', desc: 'Jovens por meio de cursos de informática, desenvolvendo habilidades digitais e profissionais.', color: '#1d4ed8' },
            { icon: 'devices', num: '02', title: 'Disponibilizar', desc: 'Um site, uma apostila digital e materiais de apoio para facilitar o acesso ao aprendizado em qualquer lugar.', color: '#16a34a' },
            { icon: 'work', num: '03', title: 'Preparar', desc: 'Os jovens para oportunidades de primeiro emprego no mercado de trabalho.', color: '#f97316' },
          ].map(o => (
            <div key={o.title} className="card-hover relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              <div className="absolute top-4 right-5 text-6xl font-black opacity-5 select-none"
                style={{ fontFamily: 'Outfit,sans-serif', color: o.color }}>{o.num}</div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${o.color}15` }}>
                <Icon name={o.icon} size={24} />
              </div>
              <div className="text-lg font-black text-gray-900 mb-2" style={{ fontFamily: 'Outfit,sans-serif' }}>
                <span style={{ color: o.color }}>{o.title}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {projectGoals.map(g => (
            <div key={g.title} className={`card-hover rounded-2xl p-6 flex flex-col items-center text-center gap-3 bg-white border border-gray-100 shadow-sm`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${g.color}`}>
                <Icon name={g.icon} size={22} />
              </div>
              <span className="text-sm font-semibold text-gray-800">{g.title}</span>
            </div>
          ))}
        </div>

        {/* Público-alvo */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Nosso <span className="text-green-600">Público-Alvo</span>
          </h3>
          <p className="text-gray-500">Jovens de 16 a 20 anos que estão dando o primeiro passo na vida profissional.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {audience.map(a => (
            <div key={a.title} className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
              <div className="text-4xl mb-3">{a.icon}</div>
              <div className="text-sm font-bold text-gray-800 mb-2">{a.title}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Informática ───────────────────────────────────────────────────────────────

function Informatica() {
  return (
    <section id="informatica" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{ background: '#dbeafe', color: '#1d4ed8' }}>
              <Icon name="computer" size={14} />
              Curso de Informática
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              10 Módulos para o<br />
              <span className="text-blue-700">Mercado de Trabalho</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Do básico ao profissional: do uso do computador até a conquista do primeiro emprego,
              cada módulo foi pensado para as necessidades reais do mercado.
            </p>
            <a
              href="#apostila"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
            >
              <Icon name="menu_book" size={18} cls="text-white" />
              Ver Apostila Completa
            </a>

            <div className="mt-8 rounded-2xl overflow-hidden bg-blue-50">
              <img
                src="https://images.unsplash.com/photo-1640163561331-1b68a6474957?w=600&h=300&fit=crop&auto=format"
                alt="Estudante utilizando computador"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="relative pl-6">
            {courseModules.map((m, i) => (
              <div key={m.num} className="timeline-item relative pl-8 pb-6">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ background: i < 5 ? '#1d4ed8' : '#16a34a', zIndex: 1 }}>
                  {m.num}
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all">
                  <div className="font-semibold text-gray-800 text-sm">{m.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Apostila ──────────────────────────────────────────────────────────────────

function Apostila() {
  const APOSTILA_URL = '#'
  return (
    <section id="apostila" className="py-24" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="relative w-56 h-72 rounded-r-2xl shadow-2xl animate-float"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #1e3a8a)' }}>
                <div className="absolute -left-4 top-0 bottom-0 w-4"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a, #172554)', borderRadius: '4px 0 0 4px' }} />
                <div className="p-6 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon name="computer" size={24} cls="text-white" />
                  </div>
                  <div className="text-white font-black text-xl leading-tight mb-2"
                    style={{ fontFamily: 'Outfit,sans-serif' }}>
                    Le-Robots<br />Apostila
                  </div>
                  <div className="text-blue-200 text-xs">Curso de Informática</div>
                  <div className="mt-auto">
                    <div className="text-blue-300 text-xs">10 Módulos</div>
                    <div className="h-0.5 bg-white/20 mt-2" />
                    <div className="mt-2 text-white/60 text-xs">Edição 2025</div>
                  </div>
                </div>
                <div className="absolute -right-1 top-2 bottom-2 w-1 rounded-r"
                  style={{ background: 'repeating-linear-gradient(to bottom, #e2e8f0 0px, #e2e8f0 1px, #cbd5e1 1px, #cbd5e1 2px)' }} />
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-8 rounded-full blur-lg"
                style={{ background: 'rgba(29,78,216,0.3)' }} />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{ background: '#dbeafe', color: '#1d4ed8' }}>
              <Icon name="menu_book" size={14} />
              Material Didático
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Apostila Completa do<br />
              <span className="text-orange-500">Curso de Informática</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Desenvolvida especialmente para o projeto Le-Robots, nossa apostila abrange todos os 10 módulos
              com linguagem acessível, exercícios práticos e exemplos do cotidiano.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              O material foi criado para atender jovens com pouca ou nenhuma experiência com tecnologia,
              tornando o aprendizado inclusivo e eficaz.
            </p>

            <a
              href={APOSTILA_URL}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)' }}
            >
              <Icon name="visibility" size={18} cls="text-white" />
              Visualizar Apostila
            </a>
            <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
              <Icon name="info" size={14} cls="text-gray-400" />
              Link da apostila será disponibilizado em breve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Apresentação ──────────────────────────────────────────────────────────────

function Apresentacao() {
  const SLIDES_URL = ''
  return (
    <section id="apresentacao" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: '#f3e8ff', color: '#7c3aed' }}>
            <Icon name="slideshow" size={14} />
            Apresentação do Projeto
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Slides da <span className="text-blue-700">Apresentação</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Confira os slides completos do projeto Le-Robots, preparados para apresentação escolar.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-gray-50 aspect-video flex items-center justify-center mb-8"
          style={{ maxHeight: 500 }}>
          {SLIDES_URL ? (
            <iframe src={SLIDES_URL} title="Apresentação Le-Robots" className="w-full h-full" allowFullScreen />
          ) : (
            <div className="flex flex-col items-center gap-4 text-gray-400 p-12">
              <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Icon name="slideshow" size={40} cls="text-blue-400" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-600 mb-1">Apresentação em breve</div>
                <div className="text-sm text-gray-400">O link do Google Slides será adicionado aqui.</div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <a
            href={SLIDES_URL || '#'}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
          >
            <Icon name="play_circle" size={20} cls="text-white" />
            Assistir Apresentação
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Metodologia ───────────────────────────────────────────────────────────────

function Metodologia() {
  return (
    <section className="py-24" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: '#f3e8ff', color: '#7c3aed' }}>
            <Icon name="science" size={14} />
            Como foi feito
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Nossa <span className="text-indigo-600">Metodologia</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            O Le-Robots foi desenvolvido com ferramentas modernas e colaboração em equipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'language', title: 'Website Integrado', desc: 'Desenvolvemos um site completo com o curso e a apostila integrada para facilitar o acesso ao conteúdo.', color: '#1d4ed8' },
            { icon: 'auto_awesome', title: 'Figma AI', desc: 'Utilizamos o Figma AI para projetar e produzir o website e o Quiz interativo do projeto.', color: '#7c3aed' },
            { icon: 'description', title: 'Google Documentos', desc: 'A apostila foi produzida com Google Docs, garantindo fácil edição e compartilhamento colaborativo.', color: '#16a34a' },
            { icon: 'psychology', title: 'IA Generativa', desc: 'Utilizamos ChatGPT e Gemini para criar textos, contextualizar ideias e aprimorar o conteúdo pedagógico.', color: '#f97316' },
          ].map(m => (
            <div key={m.title} className="card-hover bg-white rounded-3xl p-7 border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${m.color}15` }}>
                <Icon name={m.icon} size={24} />
              </div>
              <div className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit,sans-serif' }}>{m.title}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Resultados ────────────────────────────────────────────────────────────────

function Resultados() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: '#dcfce7', color: '#15803d' }}>
            <Icon name="bar_chart" size={14} />
            Resultados
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            O que o projeto <span className="text-green-600">nos ensinou</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Os resultados da pesquisa mostram o impacto real da qualificação tecnológica na vida dos jovens.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {[
            { icon: 'lightbulb', title: 'Compreender', desc: 'A importância da qualificação profissional e digital para conseguir oportunidades de trabalho no mercado atual.', color: '#1d4ed8' },
            { icon: 'search', title: 'Identificar', desc: 'As principais dificuldades enfrentadas pelos jovens para entrar no mercado de trabalho, como a falta de experiência e formação.', color: '#f97316' },
            { icon: 'verified', title: 'Reconhecer', desc: 'Como conhecimentos em informática, comunicação e trabalho em equipe podem ajudar na preparação para o primeiro emprego.', color: '#16a34a' },
          ].map(r => (
            <div key={r.title} className="card-hover bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${r.color}15` }}>
                <Icon name={r.icon} size={28} />
              </div>
              <div className="text-xl font-black mb-3" style={{ fontFamily: 'Outfit,sans-serif', color: r.color }}>
                {r.title}
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* 5 result cards — static, decorative with colored borders */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {results.map(r => (
            <div key={r.title} className="text-center p-6 rounded-2xl bg-white"
              style={{ border: `2px solid ${r.color}30`, boxShadow: `0 4px 20px ${r.color}10` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${r.color}12`, border: `1.5px solid ${r.color}30` }}>
                <Icon name={r.icon} size={22} cls="" />
              </div>
              <div className="font-bold text-sm mb-1" style={{ fontFamily: 'Outfit,sans-serif', color: r.color }}>{r.title}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Conclusão com carrossel ───────────────────────────────────────────────────

function Conclusao() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % quotes.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const goTo = (idx: number) => {
    setCurrent(idx)
    startTimer()
  }
  const prev = () => goTo((current - 1 + quotes.length) % quotes.length)
  const next = () => goTo((current + 1) % quotes.length)

  const q = quotes[current]

  return (
    <section className="py-24" style={{ background: '#f8faff' }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8"
          style={{ background: '#dbeafe', color: '#1d4ed8' }}>
          <Icon name="flag" size={14} />
          Conclusão
        </div>
        <h2 className="text-4xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Qualificação que <span className="text-blue-700">abre portas</span>
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          A pesquisa mostrou que a <strong>qualificação profissional e digital</strong> pode ampliar as oportunidades
          dos jovens no mercado de trabalho. O projeto atende ao objetivo inicial ao propor cursos de
          informática e outras atividades que ajudam a desenvolver habilidades necessárias para o
          primeiro emprego, estágio e Jovem Aprendiz.
        </p>

        {/* Quote carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="rounded-3xl p-10 transition-all duration-500"
            style={{ background: 'linear-gradient(135deg, #1e3a8a, #1d4ed8)', minHeight: 260 }}>
            <div className="text-5xl text-white/20 font-black leading-none mb-4 select-none text-left"
              style={{ fontFamily: 'Georgia, serif' }}>"</div>
            <blockquote className="text-lg text-white font-medium leading-relaxed mb-6 transition-opacity duration-300">
              {q.text}
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <cite className="text-blue-200 text-sm font-semibold not-italic">{q.author}</cite>
              <span className="text-blue-300 text-xs">{q.source} — {q.year}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-all text-gray-500">
              <Icon name="chevron_left" size={20} />
            </button>

            <div className="flex gap-2">
              {quotes.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? '#1d4ed8' : '#cbd5e1',
                  }}
                />
              ))}
            </div>

            <button onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-all text-gray-500">
              <Icon name="chevron_right" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: '#0f172a' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Icon name="computer" size={18} cls="text-white" />
              </div>
              <span className="font-black text-lg text-white" style={{ fontFamily: 'Outfit,sans-serif' }}>
                Le-Robots
              </span>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed">
              Capacitando jovens sem curso profissionalizante para o mercado de trabalho por meio da tecnologia.
            </p>
            <div className="flex gap-3 mt-6">
              {['facebook', 'instagram', 'youtube'].map(n => (
                <a key={n} href="#" aria-label={n}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-blue-700"
                  style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <Icon name={n === 'instagram' ? 'photo_camera' : n === 'youtube' ? 'smart_display' : 'thumb_up'} size={16} cls="text-blue-300" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Seções</div>
            <ul className="space-y-2.5">
              {navItems.map(item => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-blue-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Projeto Escolar</div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-lg"
                style={{ background: 'linear-gradient(135deg, #f97316, #dc2626)', fontFamily: 'Outfit,sans-serif' }}>
                8
              </div>
              <div>
                <div className="text-sm font-semibold text-white">ODS 8 — ONU</div>
                <div className="text-xs text-blue-400">Trabalho Decente e Crescimento Econômico</div>
              </div>
            </div>
            <p className="text-xs text-blue-400 leading-relaxed">
              Projeto desenvolvido como trabalho escolar alinhado à Agenda 2030 das Nações Unidas.
            </p>
            <div className="mt-4 text-xs text-gray-500 leading-relaxed">
              <span className="text-gray-400 font-semibold block mb-1">Autores:</span>
              Emanuela Oliveira, Gabriel Távora, Julia Fernandes, Julia Matos,
              Kauã Florentino, Samuel Chaves, Sophia Gomes, Yasmin Ferreira.
            </div>
            <div className="mt-2 text-xs text-blue-400">
              Rede Batista Mineiro de Lagoa Santa
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Referências Bibliográficas</p>
          <ul className="space-y-2 text-xs text-gray-600 leading-relaxed">
            <li>ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU). <em>ODS 8: Trabalho Decente e Crescimento Econômico.</em> Nações Unidas Brasil, 2015. Disponível em: <a href="https://brasil.un.org/pt-br/sdgs/8" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">brasil.un.org/pt-br/sdgs/8</a></li>
            <li>POCHMANN, Márcio. <em>Estado e Políticas Públicas no Brasil: Mudanças e Continuidades.</em> São Paulo: Cortez Editora, 2017.</li>
            <li>LETÍCIA (da Uniube). <em>Ciência da Computação.</em> Blog da Uniube, 2019. Disponível em: <a href="https://blog.uniube.br/graduacao/graduacao/ciencia-da-computacao" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">blog.uniube.br</a></li>
          </ul>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2025 Le-Robots — Rede Batista Mineiro de Lagoa Santa. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            <Icon name="favorite" size={12} cls="text-red-500" />
            Feito com propósito — tecnologia que transforma
          </p>
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <Navbar />
      <Hero />
      <Ods8 />
      <Projeto />
      <Informatica />
      <Apostila />
      <Apresentacao />
      <Metodologia />
      <Resultados />
      <Conclusao />
      <Footer />
    </>
  )
}
