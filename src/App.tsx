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

// ── Visual Mockups ────────────────────────────────────────────────────────────

function BookMockup({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const isSm = size === 'sm'
  const isLg = size === 'lg'
  const width = isSm ? 'w-44' : isLg ? 'w-72 sm:w-80' : 'w-60'
  const height = isSm ? 'h-60' : isLg ? 'h-96 sm:h-[410px]' : 'h-80'
  const padding = isSm ? 'p-4' : isLg ? 'p-7' : 'p-5 sm:p-6'
  const titleSize = isSm ? 'text-lg' : isLg ? 'text-2xl sm:text-3xl' : 'text-xl'
  const iconSize = isSm ? 18 : isLg ? 26 : 22

  return (
    <div className="relative flex justify-center py-4">
      <div
        className={`relative ${width} ${height} rounded-r-3xl shadow-2xl animate-float cursor-default group transition-transform duration-300 hover:scale-105 select-none`}
        style={{
          background: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 60%, #0f172a 100%)',
          boxShadow: '0 25px 50px -12px rgba(29, 78, 216, 0.45), 0 12px 24px -6px rgba(0,0,0,0.25)',
        }}
      >
        {/* Spine 3D effect */}
        <div
          className="absolute -left-4 top-0 bottom-0 w-4 rounded-l-md"
          style={{
            background: 'linear-gradient(90deg, #0f172a 0%, #1e3a8a 50%, #1d4ed8 100%)',
            boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.5)',
          }}
        />

        {/* Gloss overlay */}
        <div
          className="absolute inset-0 rounded-r-3xl pointer-events-none opacity-25"
          style={{
            background: 'linear-gradient(115deg, rgba(255,255,255,0.7) 0%, transparent 45%)',
          }}
        />

        {/* Content on Book Cover */}
        <div className={`${padding} flex flex-col h-full justify-between relative z-10`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner">
                <Icon name="computer" size={iconSize} cls="text-white" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-blue-200 text-[10px] font-bold tracking-wider uppercase border border-white/15">
                Material Base
              </span>
            </div>

            <div
              className={`text-white font-black ${titleSize} leading-tight mb-1 tracking-tight`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Le-Robots
              <br />
              <span className="text-blue-300">Apostila</span>
            </div>
            <p className="text-blue-200 text-xs font-medium">Curso Completo de Informática</p>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-500/25 border border-blue-400/30 text-blue-100 text-xs font-bold">
                <Icon name="library_books" size={13} cls="text-blue-300" />
                10 Módulos
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-semibold">
                <Icon name="verified" size={12} cls="text-emerald-400" />
                Google Docs
              </div>
            </div>

            <div className="h-[1px] bg-white/20 my-2" />
            <div className="flex items-center justify-between text-white/80 text-[11px]">
              <span>Edição 2025</span>
              <span className="text-blue-200 text-[10px]">Rede Batista</span>
            </div>
          </div>
        </div>

        {/* Book pages edge on right */}
        <div
          className="absolute -right-2 top-3 bottom-3 w-2 rounded-r"
          style={{
            background:
              'repeating-linear-gradient(to bottom, #f8fafc 0px, #f8fafc 1.5px, #cbd5e1 1.5px, #cbd5e1 3px)',
            boxShadow: '2px 0 4px rgba(0,0,0,0.2)',
          }}
        />
      </div>

      {/* Floating shadow beneath book */}
      <div
        className="absolute -bottom-2 left-8 right-8 h-8 rounded-full blur-xl pointer-events-none"
        style={{ background: 'rgba(29,78,216,0.4)' }}
      />
    </div>
  )
}

function QuizMockup() {
  const [selectedOption, setSelectedOption] = useState<number>(1)

  const options = [
    { id: 0, text: 'HD ou SSD (Armazenamento permanente de arquivos)' },
    { id: 1, text: 'Processador / CPU (Executa instruções e cálculos do sistema)' },
    { id: 2, text: 'Monitor de Vídeo (Apenas exibe os gráficos na tela)' },
  ]

  return (
    <div className="relative flex justify-center py-4">
      <div
        className="relative w-full max-w-sm rounded-3xl p-5 sm:p-6 shadow-2xl animate-float transition-transform duration-300 hover:scale-[1.02] border border-purple-200/70 bg-white select-none"
        style={{
          background: 'linear-gradient(145deg, #ffffff 0%, #fdf4ff 100%)',
          boxShadow: '0 20px 40px -10px rgba(124, 58, 237, 0.2), 0 8px 16px -4px rgba(0,0,0,0.06)',
          animationDelay: '1s',
        }}
      >
        {/* Quiz Header Mockup */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-purple-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
              <Icon name="quiz" size={18} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-purple-900 uppercase tracking-wider">Quiz Interativo</div>
              <div className="text-[10px] text-gray-500 font-medium">Módulo 01 • Conceitos Básicos</div>
            </div>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold">
            <Icon name="timer" size={14} cls="text-amber-600" />
            0:25s
          </div>
        </div>

        {/* Question */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium mb-1">
            <span>Questão 01 de 10</span>
            <span className="text-purple-600 font-bold">+100 Pontos</span>
          </div>
          <p className="text-sm font-bold text-gray-900 leading-snug">
            Qual componente é considerado o principal cérebro do computador?
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2 mb-4">
          {options.map(opt => {
            const isSelected = selectedOption === opt.id
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedOption(opt.id)}
                className={`w-full text-left p-2.5 rounded-xl border text-xs font-medium transition-all flex items-center justify-between gap-2 cursor-pointer ${isSelected
                    ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${isSelected ? 'bg-white text-purple-700' : 'bg-gray-100 text-gray-600'
                      }`}
                  >
                    {String.fromCharCode(65 + opt.id)}
                  </span>
                  <span className="line-clamp-2">{opt.text}</span>
                </div>
                {isSelected && (
                  <Icon name="check_circle" size={16} cls="text-emerald-300 shrink-0" />
                )}
              </button>
            )
          })}
        </div>

        {/* Footer info badge */}
        <div className="flex items-center justify-between p-2 rounded-xl bg-purple-50/80 border border-purple-100 text-[11px]">
          <span className="text-purple-800 font-semibold flex items-center gap-1">
            <Icon name="insights" size={14} cls="text-purple-600" />
            Fixação Rápida
          </span>
          <span className="text-purple-600 font-bold">Feedback Imediato ⚡</span>
        </div>
      </div>

      {/* Floating shadow beneath quiz */}
      <div
        className="absolute -bottom-1 left-8 right-8 h-6 rounded-full blur-xl pointer-events-none"
        style={{ background: 'rgba(124,58,237,0.25)' }}
      />
    </div>
  )
}

// ── Navigation ────────────────────────────────────────────────────────────────

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'ODS 8', href: '#ods8' },
  { label: 'Projeto', href: '#projeto' },
  { label: 'Informática', href: '#informatica' },
  { label: 'Estudos & Quiz', href: '#estudos' },
  { label: 'Apresentação', href: '#apresentacao' },
]

function Navbar({ onNavigate }: { onNavigate?: (href: string) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate(href)
      setMenuOpen(false)
    }
  }

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
        <a href="#inicio" onClick={e => handleLinkClick(e, '#inicio')} className="flex items-center gap-2">
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
                onClick={e => handleLinkClick(e, item.href)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-200 hover:after:w-full ${scrolled
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
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
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
              onClick={e => handleLinkClick(e, item.href)}
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

function Hero({ onOpenStudyQuiz }: { onOpenStudyQuiz: () => void }) {
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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)' }}>
              <Icon name="explore" size={18} cls="text-white" />
              Conhecer o Projeto
            </a>

            <button
              onClick={onOpenStudyQuiz}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}>
              <Icon name="menu_book" size={18} cls="text-white" />
              Apostila & Quiz
            </button>
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
            <div key={g.title} className="card-hover rounded-2xl p-6 flex flex-col items-center text-center gap-3 bg-white border border-gray-100 shadow-sm">
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

function Informatica({ onOpenStudyQuiz }: { onOpenStudyQuiz: () => void }) {
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
            <button
              onClick={onOpenStudyQuiz}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
            >
              <Icon name="menu_book" size={18} cls="text-white" />
              <span>Ver Apostila & Quiz Completo</span>
            </button>

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

// ── Aprendizado Section (Single Consolidated Card on Landing Page) ─────────────

function AprendizadoSection({ onOpenStudyQuiz }: { onOpenStudyQuiz: () => void }) {
  return (
    <section id="estudos" className="py-20 relative overflow-hidden" style={{ background: '#f8faff' }}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Single Consolidated Master Card */}
        <div
          className="relative bg-white rounded-3xl p-8 sm:p-12 border border-blue-100/80 shadow-xl shadow-blue-900/5 overflow-hidden group"
          style={{
            boxShadow: '0 20px 50px -10px rgba(29, 78, 216, 0.08), 0 1px 3px rgba(0,0,0,0.05)',
          }}
        >
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column (Left) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative">
                <BookMockup size="md" />

                {/* Floating Quiz Badge */}
                <div
                  className="absolute -bottom-2 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-purple-200 shadow-xl shadow-purple-500/15 flex items-center gap-3 animate-float z-20"
                  style={{ animationDelay: '1.5s' }}
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <Icon name="quiz" size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                      <span>Quiz Interativo</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="text-[10px] text-purple-700 font-semibold">10 Módulos • Desafios</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column (Right) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 bg-blue-50 text-blue-700 border border-blue-200/70 shadow-xs">
                <Icon name="splitscreen" size={15} />
                Ambiente Integrado de Aprendizagem
              </div>

              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 tracking-tight leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Apostila de Informática & <br />
                <span style={{ background: 'linear-gradient(90deg, #1d4ed8, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Quiz de Conhecimento
                </span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Preparamos um espaço exclusivo para o seu desenvolvimento: consulte a <strong>apostila digital completa no Google Docs</strong> com os 10 módulos do curso e pratique com o nosso <strong>Quiz Interativo</strong> para fixar o aprendizado e se preparar para o mercado de trabalho.
              </p>

              {/* Integrated feature pills */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100/70">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 text-sm">
                    <Icon name="menu_book" size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Apostila Completa</div>
                    <div className="text-[11px] text-gray-500">10 módulos estruturados no Google Docs</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-50/60 border border-purple-100/70">
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 text-sm">
                    <Icon name="bolt" size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Quiz de Fixação</div>
                    <div className="text-[11px] text-gray-500">Questões práticas com feedback imediato</div>
                  </div>
                </div>
              </div>

              {/* Action Button & Tip */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenStudyQuiz}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] text-base cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                  }}
                >
                  <Icon name="splitscreen" size={20} />
                  <span>Acessar Ambiente de Aprendizagem</span>
                  <Icon name="arrow_forward" size={18} />
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
                <Icon name="info" size={14} cls="text-blue-600 shrink-0" />
                <span>Abre a tela dividida com a apostila e o quiz lado a lado.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Split Study & Quiz Screen (Tela dividida em dois) ─────────────────────────

function SplitStudyQuizScreen({ onBack }: { onBack: () => void }) {
  const [quizNoticeOpen, setQuizNoticeOpen] = useState(false)
  const APOSTILA_DOCS_URL =
    'https://docs.google.com/document/d/1Elg9TGelZ1Y95nLwF1seO-8cNSxfAZIdUygyFrY-z1k/edit?tab=t.0#heading=h.aczyuw2yex2w'

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:text-blue-700 bg-gray-100 hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <Icon name="arrow_back" size={18} />
              <span>Voltar ao Início</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
              <span>/</span>
              <span className="text-gray-700 font-medium">Central de Estudos & Quiz</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Icon name="computer" size={16} />
            </div>
            <span className="font-bold text-gray-900 text-sm hidden md:inline" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Le-Robots <span className="text-blue-600 font-normal text-xs">• ODS 8</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Split-Screen Container */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
        {/* Header summary */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <Icon name="splitscreen" size={15} />
            Ambiente Integrado de Aprendizagem
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Apostila Digital & Desafio do Quiz
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Utilize a apostila no lado esquerdo como material de consulta e preparação para responder às questões do Quiz no lado direito.
          </p>
        </div>

        {/* Split Grid: Left Side (Apostila) and Right Side (Quiz) */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* ────────────────── LADO ESQUERDO: APOSTILA ────────────────── */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-xl shadow-blue-500/5 flex flex-col relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="flex-1 flex flex-col">
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 shadow-xs">
                  <Icon name="menu_book" size={15} />
                  Material Didático Oficial
                </span>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                  Google Docs
                </span>
              </div>

              {/* 3D Book Graphic - Enlarged to match Quiz preview */}
              <div className="my-3">
                <BookMockup size="lg" />
              </div>

              {/* Title & Body matching user print */}
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Apostila Completa do <br />
                <span className="text-blue-700">Curso de Informática</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                Desenvolvida especialmente para o projeto <strong>Le-Robots</strong>, nossa apostila abrange todos os <strong>10 módulos</strong> com linguagem acessível, exercícios práticos e exemplos do cotidiano.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                O material foi criado para atender jovens com pouca ou nenhuma experiência com tecnologia, tornando o aprendizado inclusivo e servindo como a base ideal de estudos para o Quiz.
              </p>

              {/* Checklist points */}
              <div className="space-y-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/80 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Icon name="check" size={13} />
                  </div>
                  <div className="text-xs text-gray-700">
                    <strong className="text-gray-900">10 Módulos Estruturados:</strong> Do hardware básico à elaboração de currículo e entrevistas de emprego.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Icon name="check" size={13} />
                  </div>
                  <div className="text-xs text-gray-700">
                    <strong className="text-gray-900">Acesso Gratuito e Completo:</strong> Documento interativo online disponível para leitura no celular ou computador.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Icon name="check" size={13} />
                  </div>
                  <div className="text-xs text-gray-700">
                    <strong className="text-gray-900">Base para o Quiz:</strong> Consulte os tópicos da apostila para responder às questões com facilidade.
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-auto pt-2">
              <a
                href={APOSTILA_DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] text-base cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)' }}
              >
                <Icon name="visibility" size={20} />
                <span>Visualizar Apostila no Google Docs</span>
                <Icon name="open_in_new" size={18} />
              </a>

              <p className="text-xs text-gray-500 mt-3.5 flex items-center justify-center gap-1.5 text-center">
                <Icon name="info" size={15} cls="text-blue-600 shrink-0" />
                <span>Link oficial do Google Documentos configurado para leitura imediata.</span>
              </p>
            </div>
          </div>

          {/* ────────────────── LADO DIREITO: QUIZ ────────────────── */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-purple-100 shadow-xl shadow-purple-500/5 flex flex-col relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="flex-1 flex flex-col">
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200 shadow-xs">
                  <Icon name="bolt" size={15} />
                  Desafio & Fixação de Conhecimento
                </span>
                <span className="text-xs font-bold text-purple-700 bg-purple-100/70 px-2.5 py-1 rounded-lg border border-purple-200">
                  Em Breve ⚡
                </span>
              </div>

              {/* 3D Quiz Preview Card */}
              <div className="my-3">
                <QuizMockup />
              </div>

              {/* Title & Body for the Quiz */}
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Quiz Interativo do <br />
                <span style={{ background: 'linear-gradient(90deg, #7c3aed, #ea580c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Curso de Informática
                </span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                Coloque em prática tudo o que você aprendeu com a apostila! Nosso <strong>Quiz Interativo</strong> foi desenvolvido para testar sua compreensão dos 10 módulos de forma dinâmica, rápida e gamificada.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                Descubra seus pontos fortes, reforce os conceitos essenciais e ganhe a confiança necessária para se destacar em processos seletivos do mercado de trabalho.
              </p>

              {/* Checklist points */}
              <div className="space-y-3 p-4 rounded-2xl bg-purple-50/50 border border-purple-100/80 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Icon name="check" size={13} />
                  </div>
                  <div className="text-xs text-gray-700">
                    <strong className="text-gray-900">Perguntas dos 10 Módulos:</strong> Questões diretas sobre hardware, Word, Excel, internet, segurança e postura profissional.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Icon name="check" size={13} />
                  </div>
                  <div className="text-xs text-gray-700">
                    <strong className="text-gray-900">Feedback e Explicações:</strong> Entenda a resposta correta instantaneamente após cada pergunta.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Icon name="check" size={13} />
                  </div>
                  <div className="text-xs text-gray-700">
                    <strong className="text-gray-900">Simulação para o Mercado:</strong> Ganhe prática para testes práticos de vagas de Jovem Aprendiz e Primeiro Emprego.
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA for Quiz */}
            <div className="mt-auto pt-2">
              <button
                type="button"
                onClick={() => setQuizNoticeOpen(true)}
                className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl font-bold text-white shadow-lg shadow-purple-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] text-base cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #9333ea)' }}
              >
                <Icon name="play_arrow" size={22} />
                <span>Acessar Quiz Interativo</span>
                <Icon name="bolt" size={18} />
              </button>

              <p className="text-xs text-gray-500 mt-3.5 flex items-center justify-center gap-1.5 text-center">
                <Icon name="schedule" size={15} cls="text-purple-600 shrink-0" />
                <span>O módulo interativo de perguntas e respostas está sendo preparado pela equipe Le-Robots!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Modal / Alert Dialog for Quiz */}
        {quizNoticeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-up">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                <Icon name="rocket_launch" size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Quiz em Construção!
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Estamos preparando as questões interativas dos 10 módulos com muito carinho. Enquanto isso, aproveite para ler a apostila completa no Google Docs e se preparar para gabaritar o desafio!
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href={APOSTILA_DOCS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <Icon name="menu_book" size={18} />
                  <span>Estudar na Apostila</span>
                </a>
                <button
                  type="button"
                  onClick={() => setQuizNoticeOpen(false)}
                  className="py-2.5 px-5 rounded-xl font-semibold text-sm text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

// ── Apresentação & Slides (Imagens Diretas) ──────────────────────────────────

import slide1Img from '@/assets/slides/slide-1.jpg'
import slide2Img from '@/assets/slides/slide-2.jpg'
import slide3Img from '@/assets/slides/slide-3.jpg'
import slide4Img from '@/assets/slides/slide-4.jpg'
import slide5Img from '@/assets/slides/slide-5.jpg'
import slide6Img from '@/assets/slides/slide-6.jpg'
import slide7Img from '@/assets/slides/slide-7.jpg'

interface SlideItem {
  id: number
  number: string
  title: string
  subtitle: string
  image: string
}

const presentationSlides: SlideItem[] = [
  {
    id: 1,
    number: '01',
    title: 'Capa — Tecnologia que Transforma',
    subtitle: 'Apresentação do Projeto e Equipe',
    image: slide1Img,
  },
  {
    id: 2,
    number: '02',
    title: 'Introdução',
    subtitle: 'Contexto e Justificativa do Projeto',
    image: slide2Img,
  },
  {
    id: 3,
    number: '03',
    title: 'Objetivos',
    subtitle: 'Metas e Entregas Principais',
    image: slide3Img,
  },
  {
    id: 4,
    number: '04',
    title: 'Metodologia',
    subtitle: 'Ferramentas e Processo de Produção',
    image: slide4Img,
  },
  {
    id: 5,
    number: '05',
    title: 'Resultados',
    subtitle: 'Importância da Qualificação & Aprendizados',
    image: slide5Img,
  },
  {
    id: 6,
    number: '06',
    title: 'Conclusão',
    subtitle: 'Síntese do Projeto & Citação Pochmann',
    image: slide6Img,
  },
  {
    id: 7,
    number: '07',
    title: 'Referências Bibliográficas',
    subtitle: 'ONU ODS 8, Pochmann e Blog Uniube',
    image: slide7Img,
  },
]

function Apresentacao() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(true)

  const currentSlide = presentationSlides[currentSlideIndex]
  const totalSlides = presentationSlides.length

  const nextSlide = () => {
    setImageLoaded(false)
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setImageLoaded(false)
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (idx: number) => {
    if (idx !== currentSlideIndex) {
      setImageLoaded(false)
      setCurrentSlideIndex(idx)
    }
  }

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [isPlaying, currentSlideIndex])

  // Keyboard navigation & Esc for fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen])

  return (
    <section id="apresentacao" className="py-24 bg-slate-50/80 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4 shadow-xs"
            style={{ background: '#f3e8ff', color: '#7c3aed' }}
          >
            <Icon name="slideshow" size={16} />
            Apresentação do Projeto
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Slides da <span className="text-blue-700">Apresentação</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Confira os slides oficiais do projeto <span className="font-semibold text-gray-800">Tecnologia que Transforma</span>.
          </p>
        </div>

        {/* Presentation Slide Player Box */}
        <div
          className={`relative rounded-3xl transition-all duration-300 ${isFullscreen
              ? 'fixed inset-0 z-50 bg-black/95 p-4 sm:p-8 flex flex-col justify-between overflow-y-auto rounded-none'
              : 'bg-slate-900 border border-slate-800 shadow-2xl shadow-blue-950/20 mb-8 overflow-hidden'
            }`}
        >
          {/* Top Player Control Bar */}
          <div className="px-5 py-3.5 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Icon name="slideshow" size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  Slide {currentSlide.number} de 0{totalSlides}
                </div>
                <div className="text-sm font-semibold text-slate-200 hidden sm:block">
                  {currentSlide.title}
                </div>
              </div>
            </div>

            {/* Actions: AutoPlay, Fullscreen */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${isPlaying
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                title={isPlaying ? 'Pausar Reprodução Automática' : 'Iniciar Reprodução Automática'}
              >
                <Icon name={isPlaying ? 'pause' : 'play_arrow'} size={16} />
                <span className="hidden md:inline">{isPlaying ? 'Pausar' : 'Auto Play'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium inline-flex items-center gap-1.5 transition-all"
                title={isFullscreen ? 'Sair da Tela Cheia' : 'Modo Tela Cheia'}
              >
                <Icon name={isFullscreen ? 'fullscreen_exit' : 'fullscreen'} size={18} />
                <span className="hidden md:inline">{isFullscreen ? 'Sair' : 'Tela Cheia'}</span>
              </button>
            </div>
          </div>

          {/* Slide Progress Line */}
          <div className="w-full bg-slate-800 h-1">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 ease-out"
              style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
            />
          </div>

          {/* Main Slide Image Display Canvas */}
          <div className="relative w-full bg-black/90 flex items-center justify-center select-none overflow-hidden group">
            {/* Direct Slide Image */}
            <div className="w-full max-w-5xl aspect-[16/9] flex items-center justify-center p-2 sm:p-6">
              <img
                key={currentSlide.id}
                src={currentSlide.image}
                alt={currentSlide.title}
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-300 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
              />
            </div>

            {/* Left & Right Floating Overlay Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 active:scale-95"
              title="Slide Anterior (Seta Esquerda)"
            >
              <Icon name="chevron_left" size={28} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 active:scale-95"
              title="Próximo Slide (Seta Direita)"
            >
              <Icon name="chevron_right" size={28} />
            </button>
          </div>

          {/* Bottom Player Navigation Controls */}
          <div className="px-5 py-3.5 bg-slate-950 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Slide Indicator Text */}
            <div className="text-xs text-slate-400 font-medium order-2 sm:order-1">
              Use as setas <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">←</kbd> e <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">→</kbd> do teclado para navegar
            </div>

            {/* Prev / Counter / Next Controls */}
            <div className="flex items-center gap-3 order-1 sm:order-2">
              <button
                type="button"
                onClick={prevSlide}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold inline-flex items-center gap-1.5 transition-all active:scale-95 border border-slate-700"
              >
                <Icon name="arrow_back" size={16} />
                Anterior
              </button>

              <span className="text-xs font-bold text-blue-400 px-2 py-1 rounded-lg bg-blue-950/60 border border-blue-800/60">
                {currentSlideIndex + 1} / {totalSlides}
              </span>

              <button
                type="button"
                onClick={nextSlide}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/30 active:scale-95"
              >
                Próximo
                <Icon name="arrow_forward" size={16} />
              </button>
            </div>
          </div>
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
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-all text-gray-500 cursor-pointer">
              <Icon name="chevron_left" size={20} />
            </button>

            <div className="flex gap-2">
              {quotes.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? '#1d4ed8' : '#cbd5e1',
                  }}
                />
              ))}
            </div>

            <button onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-all text-gray-500 cursor-pointer">
              <Icon name="chevron_right" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer({ onNavigate }: { onNavigate?: (href: string) => void }) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate(href)
    }
  }

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
                  <a
                    href={item.href}
                    onClick={e => handleLinkClick(e, item.href)}
                    className="text-sm text-blue-300 hover:text-white transition-colors"
                  >
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
  const [currentView, setCurrentView] = useState<'home' | 'study-quiz'>('home')

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#estudos-quiz' || window.location.hash === '#quiz-hub') {
        setCurrentView('study-quiz')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleOpenStudyQuiz = () => {
    setCurrentView('study-quiz')
    window.location.hash = '#estudos-quiz'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    window.location.hash = '#estudos'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigate = (href: string) => {
    if (currentView !== 'home') {
      setCurrentView('home')
    }
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.hash = href
      }
    }, 50)
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {currentView === 'study-quiz' ? (
        <SplitStudyQuizScreen onBack={handleBackToHome} />
      ) : (
        <>
          <Navbar onNavigate={handleNavigate} />
          <Hero onOpenStudyQuiz={handleOpenStudyQuiz} />
          <Ods8 />
          <Projeto />
          <Informatica onOpenStudyQuiz={handleOpenStudyQuiz} />
          <AprendizadoSection onOpenStudyQuiz={handleOpenStudyQuiz} />
          <Apresentacao />
          <Metodologia />
          <Resultados />
          <Conclusao />
          <Footer onNavigate={handleNavigate} />
        </>
      )}
    </>
  )
}
