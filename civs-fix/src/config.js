// ═══════════════════════════════════════════════════════════════
//  ⚙️  CONFIGURAÇÕES — edite aqui sem mexer no restante do código
// ═══════════════════════════════════════════════════════════════
export const CONFIG = {
  nomeDoSistema:  "CIVS",
  subtitulo:      "Atenção Primária em Saúde",
  descricaoHero:  "Acesse fichas de notificação compulsória, fluxos operacionais e contatos dos técnicos responsáveis pelos agravos.",
  rodape:         "Sistema de Vigilância Epidemiológica — Itabuna - BA",
  ano:            "2026",

  // Logo: "shield" | "cross" | "heart" | "star" | "custom"
  logoTipo:       "custom",
  logoImagemUrl:  "https://i.postimg.cc/cCsqn5PR/civs.png",          // URL da imagem se logoTipo = "custom"
logoSvg: `
<svg viewBox="0 0 512 512" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">

  <path d="M256 40 L420 120 L420 260 C420 360 330 430 256 470 C182 430 92 360 92 260 L92 120 Z"
        fill="#0A1F44"/>

  <path d="M256 40 L92 120 L92 260 C92 360 182 430 256 470 Z"
        fill="#ffffff"/>

  <g stroke="#0A1F44" stroke-width="18" fill="none" stroke-linecap="round">
    <line x1="120" y1="140" x2="256" y2="80"/>
    <line x1="256" y1="80" x2="392" y2="140"/>
    <line x1="120" y1="140" x2="100" y2="260"/>
    <line x1="392" y1="140" x2="412" y2="260"/>
    <line x1="100" y1="260" x2="200" y2="400"/>
    <line x1="412" y1="260" x2="312" y2="400"/>
    <line x1="200" y1="400" x2="256" y2="470"/>
    <line x1="312" y1="400" x2="256" y2="470"/>
    <line x1="120" y1="300" x2="380" y2="220"/>
  </g>

  <g fill="#0A1F44">
    <circle cx="120" cy="140" r="16"/>
    <circle cx="256" cy="80" r="16"/>
    <circle cx="392" cy="140" r="16"/>
    <circle cx="100" cy="260" r="16"/>
    <circle cx="412" cy="260" r="16"/>
    <circle cx="200" cy="400" r="16"/>
    <circle cx="312" cy="400" r="16"/>
    <circle cx="256" cy="470" r="16"/>
  </g>

</svg>
`

`
  
  corPrimaria:       "#0A1F44",
  corDestaque:       "#F2C94C",
  corDestaqueEscuro: "#d4a832",

  adminUsuario: "julionovais",
  adminSenha:   "54110286Jn@",   // ⚠️ TROQUE antes de publicar!

  appUrl: "https://civs1.vercel.app/",  // URL após hospedar

  categorias: [
    "Todas","Arboviroses","Doenças Respiratórias","Doenças Crônicas",
    "Doenças Parasitárias","Violências e Acidentes","IST/HIV","Outras",
  ],

};
