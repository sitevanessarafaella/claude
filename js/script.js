/* ════════════════════════════════════════════════════════════════
   📄 script.js — Vanessa Rafaella
   
   📦 MÓDULOS:
   1. Configuração (WhatsApp + dicionário i18n)
   2. Tema escuro/claro
   3. Idioma PT/EN/ES (sistema baseado em data-i18n)
   4. Dropdown de idioma
   5. Menu mobile / lateral
   6. Navbar adaptativa (sombra + cor por section)
   7. Scroll reveal
   8. Partículas de fogo (canvas SÓ no hero)
   9. Smooth scroll
   10. Bottom bar ativa
   
   ════════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════
   1️⃣ CONFIGURAÇÃO
   ═══════════════════════════════════════════════════════════════ */

// 👇 Substitua pelo seu número (DDI+DDD+número, só dígitos)
const WA_NUMBER = '5581995469947';

// 🌐 DICIONÁRIO DE TRADUÇÕES
// Pra adicionar texto novo:
//   1) Marca o elemento HTML com data-i18n="chave"
//   2) Adiciona a chave em TODOS os 3 idiomas abaixo
const I18N = {
  pt: {
    /* Nav + menu */
    site_oficial: 'Site Oficial',
    nav_videos: 'Vídeos',
    menu: 'Menu',
    assinaturas: 'Assinaturas',
    conteudo: 'Conteúdo',
    videos_avulsos: 'Vídeos avulsos',
    grupo_gratis: 'Grupo grátis',
    gratis: 'grátis',
    redes: 'Redes',
    contato: 'Contato',

    /* Hero */
    exclusivo: '✦ Conteúdo Exclusivo',
    hero_tagline: 'Fotos e vídeos premium — conteúdo original e verificado, direto de mim para você.',
    hero_question: 'o que você quer comigo hoje?',
    minhas_plataformas: 'Minhas plataformas',
    role_baixo: 'Role para baixo',

    /* Plataformas principais */
    onde_acompanhar_pre: 'Onde me',
    onde_acompanhar_em: 'acompanhar',
    duas_plataformas: 'Duas plataformas, dois jeitos. Escolha a sua.',
    privacy_title_pre: 'Pra quem quer me acompanhar em',
    privacy_title_em: 'português',
    privacy_desc: 'Conteúdo exclusivo no jeito brasileiro. Pix simples, sem complicação.',
    priv_feat1: 'Vídeos exclusivos semanais',
    priv_feat2: 'Fotos em alta resolução',
    priv_feat3: 'Pagamento em Pix',
    priv_feat4: 'Cancele quando quiser',
    assinar_privacy: 'Assinar Privacy',
    of_title_pre: 'Pra quem quer a experiência',
    of_title_em: 'internacional',
    of_desc: 'Conteúdo em inglês, lives e mensagens diretas. O jeito internacional.',
    of_feat1: 'Conteúdo exclusivo semanal',
    of_feat2: 'Lives e extras',
    of_feat3: 'Acesso a DMs (vagas limitadas)',
    of_feat4: 'Pacotes 3/6/12 meses',
    assinar_of: 'Assinar OnlyFans',

    /* Vídeos / Fybot */
    sem_assinar: 'Sem assinar?',
    compra_avulsa: 'Compra avulsa',
    sem_assinar_sub: 'Pra quem quer só um vídeo específico, sem compromisso mensal.',
    catalogo_pre: 'Catálogo direto no',
    catalogo_desc: 'Cada vídeo individualmente, com prévia. Pagamento automático, entrega na hora.',
    vid_f1: 'Entrega automática 24h',
    vid_f2: 'Prévia antes de comprar',
    vid_f3: 'Pagamento seguro',
    vid_f4: 'Packs com desconto',
    ver_catalogo: 'Ver catálogo no bot',

    /* Plataformas secundárias */
    outras_redes: 'Outras redes',
    tambem_pre: 'Também estou',
    tambem_em: 'aqui',
    xv_desc: 'Vídeos completos e prévias',
    tw_desc: 'Atualizações e prévias diárias',

    /* Experiências exclusivas */
    sob_consulta: 'Sob consulta',
    experiencias_pre: 'Experiências',
    experiencias_em: 'exclusivas',
    experiencias_sub: 'Pra quem quer algo mais. Vagas limitadas.',
    vagas_limitadas: 'Vagas limitadas',
    videochamada_title: 'Videochamada 1:1',
    videochamada_desc: 'Tempo exclusivo comigo, ao vivo. Filtramos cada solicitação pessoalmente.',
    saber_mais: 'Saber mais',
    personalizado: 'Personalizado',
    pedidos_title: 'Pedidos especiais',
    pedidos_desc: 'Conteúdo personalizado, dedicatória, fetiche. Converse comigo direto.',
    falar_comigo: 'Falar comigo',

    /* Telegram CTA */
    gratis_sem_compromisso: 'Grátis · sem compromisso',
    telegram_title_pre: 'Grupo VIP no',
    telegram_text: 'Previews grátis toda semana, conteúdo de cortesia e avisos em primeira mão.',
    entrar_grupo: 'Entrar no grupo agora',
    fas_dentro: '+1500 fãs já estão dentro',

    /* Footer */
    footer_aviso: 'Conteúdo exclusivo para maiores de 18 anos',

    /* WhatsApp message */
    wa_msg: 'Olá Vanessa! Vi seu site e gostaria de saber mais.'
  },

  en: {
    site_oficial: 'Official Site',
    nav_videos: 'Videos',
    menu: 'Menu',
    assinaturas: 'Subscriptions',
    conteudo: 'Content',
    videos_avulsos: 'Single videos',
    grupo_gratis: 'Free group',
    gratis: 'free',
    redes: 'Social',
    contato: 'Contact',
    exclusivo: '✦ Exclusive Content',
    hero_tagline: 'Premium photos and videos — original and verified content, straight from me to you.',
    hero_question: 'what do you want with me today?',
    minhas_plataformas: 'My platforms',
    role_baixo: 'Scroll down',
    onde_acompanhar_pre: 'Where to',
    onde_acompanhar_em: 'follow me',
    duas_plataformas: 'Two platforms, two ways. Choose yours.',
    privacy_title_pre: 'For those who want to follow me in',
    privacy_title_em: 'Portuguese',
    privacy_desc: 'Exclusive content the Brazilian way. Simple Pix, no fuss.',
    priv_feat1: 'Weekly exclusive videos',
    priv_feat2: 'High-res photos',
    priv_feat3: 'Pix payment',
    priv_feat4: 'Cancel anytime',
    assinar_privacy: 'Subscribe to Privacy',
    of_title_pre: 'For the',
    of_title_em: 'international',
    of_desc: 'English content, live streams and direct messages. The international way.',
    of_feat1: 'Weekly exclusive content',
    of_feat2: 'Live streams & extras',
    of_feat3: 'DM access (limited slots)',
    of_feat4: '3/6/12 months bundles',
    assinar_of: 'Subscribe on OnlyFans',
    sem_assinar: 'No subscription?',
    compra_avulsa: 'Single buy',
    sem_assinar_sub: 'For those who want a specific video, no monthly commitment.',
    catalogo_pre: 'Catalog directly on',
    catalogo_desc: 'Each video individually, with preview. Automatic payment, instant delivery.',
    vid_f1: '24h automatic delivery',
    vid_f2: 'Preview before buying',
    vid_f3: 'Secure payment',
    vid_f4: 'Discounted bundles',
    ver_catalogo: 'See catalog on bot',
    outras_redes: 'Other networks',
    tambem_pre: 'I\'m also',
    tambem_em: 'here',
    xv_desc: 'Full videos and previews',
    tw_desc: 'Daily updates and previews',
    sob_consulta: 'By request',
    experiencias_pre: 'Exclusive',
    experiencias_em: 'experiences',
    experiencias_sub: 'For those who want more. Limited slots.',
    vagas_limitadas: 'Limited slots',
    videochamada_title: '1:1 Video call',
    videochamada_desc: 'Exclusive time with me, live. We filter each request personally.',
    saber_mais: 'Learn more',
    personalizado: 'Personalized',
    pedidos_title: 'Special requests',
    pedidos_desc: 'Personalized content, dedication, fetish. Talk to me directly.',
    falar_comigo: 'Talk to me',
    gratis_sem_compromisso: 'Free · no commitment',
    telegram_title_pre: 'VIP Group on',
    telegram_text: 'Free previews every week, courtesy content and first-hand notices.',
    entrar_grupo: 'Join the group now',
    fas_dentro: '+1500 fans already inside',
    footer_aviso: 'Exclusive content for adults only',
    wa_msg: 'Hello Vanessa! I saw your website and would like to know more.'
  },

  es: {
    site_oficial: 'Sitio Oficial',
    nav_videos: 'Videos',
    menu: 'Menú',
    assinaturas: 'Suscripciones',
    conteudo: 'Contenido',
    videos_avulsos: 'Videos sueltos',
    grupo_gratis: 'Grupo gratis',
    gratis: 'gratis',
    redes: 'Redes',
    contato: 'Contacto',
    exclusivo: '✦ Contenido Exclusivo',
    hero_tagline: 'Fotos y videos premium — contenido original y verificado, directo de mí para ti.',
    hero_question: '¿qué quieres conmigo hoy?',
    minhas_plataformas: 'Mis plataformas',
    role_baixo: 'Desplázate',
    onde_acompanhar_pre: 'Dónde',
    onde_acompanhar_em: 'seguirme',
    duas_plataformas: 'Dos plataformas, dos maneras. Elige la tuya.',
    privacy_title_pre: 'Para quien quiere seguirme en',
    privacy_title_em: 'portugués',
    privacy_desc: 'Contenido exclusivo al estilo brasileño. Pix simple, sin complicación.',
    priv_feat1: 'Videos exclusivos semanales',
    priv_feat2: 'Fotos en alta resolución',
    priv_feat3: 'Pago con Pix',
    priv_feat4: 'Cancela cuando quieras',
    assinar_privacy: 'Suscribir Privacy',
    of_title_pre: 'Para la experiencia',
    of_title_em: 'internacional',
    of_desc: 'Contenido en inglés, lives y mensajes directos. El modo internacional.',
    of_feat1: 'Contenido exclusivo semanal',
    of_feat2: 'Lives y extras',
    of_feat3: 'Acceso a DMs (limitado)',
    of_feat4: 'Paquetes 3/6/12 meses',
    assinar_of: 'Suscribir OnlyFans',
    sem_assinar: '¿Sin suscripción?',
    compra_avulsa: 'Compra individual',
    sem_assinar_sub: 'Para quien quiere un video específico, sin compromiso mensual.',
    catalogo_pre: 'Catálogo directo en',
    catalogo_desc: 'Cada video por separado, con vista previa. Pago automático, entrega inmediata.',
    vid_f1: 'Entrega automática 24h',
    vid_f2: 'Vista previa antes de comprar',
    vid_f3: 'Pago seguro',
    vid_f4: 'Packs con descuento',
    ver_catalogo: 'Ver catálogo en el bot',
    outras_redes: 'Otras redes',
    tambem_pre: 'También estoy',
    tambem_em: 'aquí',
    xv_desc: 'Videos completos y previas',
    tw_desc: 'Actualizaciones y previas diarias',
    sob_consulta: 'Bajo consulta',
    experiencias_pre: 'Experiencias',
    experiencias_em: 'exclusivas',
    experiencias_sub: 'Para quien quiere más. Plazas limitadas.',
    vagas_limitadas: 'Plazas limitadas',
    videochamada_title: 'Videollamada 1:1',
    videochamada_desc: 'Tiempo exclusivo conmigo, en vivo. Filtramos cada solicitud personalmente.',
    saber_mais: 'Saber más',
    personalizado: 'Personalizado',
    pedidos_title: 'Pedidos especiales',
    pedidos_desc: 'Contenido personalizado, dedicatoria, fetiche. Habla conmigo directo.',
    falar_comigo: 'Hablar conmigo',
    gratis_sem_compromisso: 'Gratis · sin compromiso',
    telegram_title_pre: 'Grupo VIP en',
    telegram_text: 'Previews gratis cada semana, contenido de cortesía y avisos exclusivos.',
    entrar_grupo: 'Entrar al grupo ahora',
    fas_dentro: '+1500 fans ya dentro',
    footer_aviso: 'Contenido exclusivo para mayores de 18 años',
    wa_msg: '¡Hola Vanessa! Vi tu sitio web y me gustaría saber más.'
  }
};


/* Helpers */
const $  = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);
const html = document.documentElement;


/* ═══════════════════════════════════════════════════════════════
   2️⃣ TEMA ESCURO / CLARO
   ═══════════════════════════════════════════════════════════════ */
const themeToggle = $('themeToggle');
const themeIcon = $('themeIcon');

function setTheme(t) {
  html.setAttribute('data-theme', t);
  localStorage.setItem('vr-theme', t);
  if (themeIcon) themeIcon.className = t === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = t === 'dark' ? '#050508' : '#F8F4F4';
}

const savedTheme = localStorage.getItem('vr-theme') || 'dark';
html.style.transition = 'none';
setTheme(savedTheme);
requestAnimationFrame(() => { html.style.transition = ''; });

themeToggle?.addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});


/* ═══════════════════════════════════════════════════════════════
   3️⃣ IDIOMA PT / EN / ES
   ═══════════════════════════════════════════════════════════════ */
let currentLang = localStorage.getItem('vr-lang') || 'pt';

function applyLanguage(lang) {
  currentLang = lang;
  html.lang = lang === 'en' ? 'en' : lang === 'es' ? 'es' : 'pt-BR';

  // Aplica traduções em todos elementos com data-i18n
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = I18N[lang]?.[key] || I18N.pt[key];
    if (!text) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  updateWALinks();
  localStorage.setItem('vr-lang', lang);
}

function updateWALinks() {
  const msg = encodeURIComponent(I18N[currentLang]?.wa_msg || I18N.pt.wa_msg);
  const url = 'https://wa.me/' + WA_NUMBER + '?text=' + msg;
  ['waFloat', 'mobWa', 'linksWa', 'footerWa'].forEach(id => {
    const el = $(id);
    if (el) el.href = url;
  });
}

// Aplica idioma inicial quando DOM carrega
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);

  // Atualiza dropdown pra refletir idioma salvo
  const flagMap = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸' };
  const langFlag = $('langFlag');
  const langCode = $('langCode');
  if (langFlag) langFlag.textContent = flagMap[currentLang];
  if (langCode) langCode.textContent = currentLang.toUpperCase();
  $$('.lang-opt').forEach(o => {
    o.setAttribute('aria-selected', o.dataset.lang === currentLang ? 'true' : 'false');
  });
});


/* ═══════════════════════════════════════════════════════════════
   4️⃣ DROPDOWN DE IDIOMA
   ═══════════════════════════════════════════════════════════════ */
const langSel = $('langSel');
const langTrigger = $('langTrigger');

langTrigger?.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = langSel.classList.toggle('open');
  langTrigger.setAttribute('aria-expanded', String(isOpen));
});

$$('.lang-opt').forEach(opt => {
  opt.addEventListener('click', e => {
    e.stopPropagation();
    const lang = opt.dataset.lang;
    const flag = opt.dataset.flag;

    $('langFlag').textContent = flag;
    $('langCode').textContent = lang.toUpperCase();

    $$('.lang-opt').forEach(o => o.setAttribute('aria-selected', 'false'));
    opt.setAttribute('aria-selected', 'true');

    langSel.classList.remove('open');
    langTrigger.setAttribute('aria-expanded', 'false');

    applyLanguage(lang);
  });
});

document.addEventListener('click', e => {
  if (langSel && !langSel.contains(e.target)) {
    langSel.classList.remove('open');
    langTrigger?.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    langSel?.classList.remove('open');
    langTrigger?.setAttribute('aria-expanded', 'false');
  }
});


/* ═══════════════════════════════════════════════════════════════
   5️⃣ MENU MOBILE / LATERAL
   ═══════════════════════════════════════════════════════════════ */
const hamburger = $('hamburger');
const btnMenuDesktop = $('btnMenuDesktop');
const mobMenu = $('mobMenu');
const mobOverlay = $('mobOverlay');
const mobClose = $('mobClose');

function openMobMenu() {
  [hamburger, btnMenuDesktop].forEach(btn => {
    btn?.classList.add('active');
    btn?.setAttribute('aria-expanded', 'true');
  });
  mobMenu?.removeAttribute('hidden');
  requestAnimationFrame(() => {
    mobMenu?.classList.add('active');
    mobOverlay?.classList.add('active');
  });
  document.body.style.overflow = 'hidden';
}

function closeMobMenu() {
  [hamburger, btnMenuDesktop].forEach(btn => {
    btn?.classList.remove('active');
    btn?.setAttribute('aria-expanded', 'false');
  });
  mobMenu?.classList.remove('active');
  mobOverlay?.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => {
    if (!mobMenu?.classList.contains('active')) {
      mobMenu?.setAttribute('hidden', '');
    }
  }, 400);
}

hamburger?.addEventListener('click', openMobMenu);
btnMenuDesktop?.addEventListener('click', openMobMenu);
mobClose?.addEventListener('click', closeMobMenu);
mobOverlay?.addEventListener('click', closeMobMenu);
$$('#mobMenu a').forEach(link => link.addEventListener('click', closeMobMenu));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobMenu?.classList.contains('active')) closeMobMenu();
});


/* ═══════════════════════════════════════════════════════════════
   6️⃣ NAVBAR ADAPTATIVA
   ═══════════════════════════════════════════════════════════════ */
const mainNav = $('mainNav');
const heroEl = $('hero');

// Sombra quando sai da hero
if (heroEl) {
  new IntersectionObserver(
    ([entry]) => mainNav?.classList.toggle('scrolled', !entry.isIntersecting),
    { threshold: 0 }
  ).observe(heroEl);
}

// Nav clarinha quando passa pela section Privacy
const privacySection = $('privacy');
if (privacySection && mainNav) {
  new IntersectionObserver(
    ([entry]) => mainNav.classList.toggle('nav--light', entry.isIntersecting),
    { threshold: 0.5 }
  ).observe(privacySection);
}

// Nav azul quando passa pela section OnlyFans
const ofSection = $('onlyfans');
if (ofSection && mainNav) {
  new IntersectionObserver(
    ([entry]) => {
      mainNav.classList.toggle('nav--onlyfans', entry.isIntersecting);
      if (entry.isIntersecting) mainNav.classList.remove('nav--light');
    },
    { threshold: 0.5 }
  ).observe(ofSection);
}


/* ═══════════════════════════════════════════════════════════════
   7️⃣ SCROLL REVEAL
   ═══════════════════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

$$('[data-reveal]').forEach(el => revealObs.observe(el));


/* ═══════════════════════════════════════════════════════════════
   8️⃣ PARTÍCULAS DE FOGO — SÓ NO HERO
   
   ⚠️ Canvas posicionado dentro da section .hero
   Quando a hero sai da tela, a animação pausa (performance)
   ═══════════════════════════════════════════════════════════════ */
(function initHeroParticles() {
  const heroSection = $('hero');
  const particlesContainer = $('hero-particles');
  if (!heroSection || !particlesContainer) return;

  // Pula em movimento reduzido ou mobile (economia de bateria)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Cria canvas DENTRO do hero
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
  canvas.setAttribute('aria-hidden', 'true');
  particlesContainer.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  function resize() {
    const rect = particlesContainer.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const particles = [];
  const COLORS = ['#E50914', '#FF6B00', '#FF9D00', '#FF333D'];
  const MAX = 60;       // limite máximo de partículas

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 10;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = -(0.5 + Math.random() * 1.2);
      this.size = 1.5 + Math.random() * 2.5;
      this.life = 1;
      this.maxLife = 0.005 + Math.random() * 0.008;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vx += (Math.random() - 0.5) * 0.04;
      this.life -= this.maxLife;
      if (this.life <= 0) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.life * 0.7;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.size * 4;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Cria partículas iniciais com posições aleatórias (não todas na base)
  for (let i = 0; i < MAX; i++) {
    const p = new Particle();
    p.y = Math.random() * canvas.height;
    p.life = Math.random();
    particles.push(p);
  }

  // Pausa quando hero sai da viewport (economiza bateria)
  let isVisible = true;
  new IntersectionObserver(
    ([entry]) => { isVisible = entry.isIntersecting; },
    { threshold: 0 }
  ).observe(heroSection);

  function loop() {
    requestAnimationFrame(loop);
    if (!isVisible) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
  }
  loop();
})();


/* ═══════════════════════════════════════════════════════════════
   9️⃣ SMOOTH SCROLL
   ═══════════════════════════════════════════════════════════════ */
$$('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navH = mainNav?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + scrollY - navH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ═══════════════════════════════════════════════════════════════
   🔟 BOTTOM BAR — ESTADO ATIVO
   ═══════════════════════════════════════════════════════════════ */
$$('.footer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.footer-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});


/* Remove loading screen quando tudo carregou */
window.addEventListener('load', () => {
  const loading = $('loading');
  if (loading) {
    loading.classList.add('hidden');
    setTimeout(() => loading.remove(), 500);
  }
});

console.log('🔥 Vanessa Rafaella — site carregado!');
