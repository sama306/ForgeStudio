export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  includes: string[];
  process: ProcessStep[];
}

export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Diseño Web',
    description:
      'Creamos sitios web que comunican la esencia de tu marca a través de un equilibrio preciso entre estética visual, narrativa digital y funcionalidad. Cada decisión de diseño responde a una intención estratégica: guiar al usuario, generar confianza y convertir visitantes en clientes.',
    includes: [
      'Wireframing y prototipado interactivo',
      'Diseño UI con enfoque en conversión',
      'Design System y guías de componente',
      'Microinteracciones y animación sutil',
    ],
    process: [
      { title: 'Descubrimiento', description: 'Entendemos tu marca, audiencia y objetivos para establecer la dirección creativa.' },
      { title: 'Estructura', description: 'Definimos arquitectura de información y flujos de navegación óptimos.' },
      { title: 'Diseño visual', description: 'Traducimos la estrategia en interfaces pulidas y coherentes con la identidad.' },
      { title: 'Validación', description: 'Prototipos navegables que testeamos con usuarios reales antes de pasar a desarrollo.' },
    ],
  },
  {
    id: 'uiux-design',
    title: 'Diseño UI/UX',
    description:
      'Diseñamos experiencias digitales centradas en el usuario, donde cada interacción está respaldada por investigación, iteración y validación constante. No diseñamos solo pantallas: diseñamos recorridos, emociones y momentos que hacen que un producto se sienta vivo.',
    includes: [
      'Investigación y entrevistas con usuarios',
      'Arquitectura de información',
      'Prototipado de alta fidelidad',
      'Testeo de usabilidad y accesibilidad',
      'Design System interactivo',
    ],
    process: [
      { title: 'Investigar', description: 'Descubrimos necesidades reales mediante investigación cualitativa y cuantitativa.' },
      { title: 'Estructurar', description: 'Organizamos contenido y creamos flujos de usuario claros y eficientes.' },
      { title: 'Prototipar', description: 'Construimos prototipos navegables que simulan la experiencia final.' },
      { title: 'Validar', description: 'Iteramos basándonos en datos de testeo hasta alcanzar una experiencia pulida.' },
    ],
  },
  {
    id: 'development',
    title: 'Desarrollo',
    description:
      'Convertimos diseños en productos digitales sólidos con código limpio, optimizado y preparado para escalar. Trabajamos con tecnologías modernas que garantizan performance, accesibilidad y una experiencia de desarrollo sostenible en el tiempo.',
    includes: [
      'Desarrollo front-end con frameworks modernos',
      'CMS headless y gestión de contenido',
      'Optimización de performance (Core Web Vitals)',
      'Integración de APIs y servicios externos',
      'Deploy automatizado y CI/CD',
    ],
    process: [
      { title: 'Arquitectura técnica', description: 'Definimos stack, estructura y decisiones técnicas alineadas al proyecto.' },
      { title: 'Desarrollo iterativo', description: 'Construimos por módulos con revisiones constantes y código versionado.' },
      { title: 'QA y testing', description: 'Evaluamos rendimiento, accesibilidad y compatibilidad en múltiples entornos.' },
      { title: 'Deploy y monitoreo', description: 'Publicamos con procesos automatizados y garantizamos estabilidad post-lanzamiento.' },
    ],
  },
  {
    id: 'brand-identity',
    title: 'Identidad de Marca',
    description:
      'Construimos identidades visuales completas que traducen la estrategia de tu marca en un sistema coherente, memorable y flexible. Desde el concepto hasta la aplicación, cada elemento visual comunica quién eres y por qué existes.',
    includes: [
      'Estrategia y posicionamiento de marca',
      'Logotipo, símbolo y sistema visual',
      'Selección tipográfica y paleta cromática',
      'Guías de marca y manual de identidad',
      'Aplicaciones y colaterales clave',
    ],
    process: [
      { title: 'Descubrimiento', description: 'Exploramos la esencia de tu marca: propósito, valores y diferenciación.' },
      { title: 'Concepto', description: 'Desarrollamos direcciones visuales a partir de la estrategia definida.' },
      { title: 'Refinamiento', description: 'Pulimos la dirección seleccionada hasta convertirla en un sistema sólido.' },
      { title: 'Entrega', description: 'Documentamos y empaquetamos la identidad lista para implementar.' },
    ],
  },
  {
    id: 'motion-design',
    title: 'Motion Design',
    description:
      'Damos vida a las interfaces y a las historias de marca con animación intencional y narrativa visual. Cada movimiento está pensado para guiar la atención, comunicar jerarquía y crear momentos de delight que hacen que una experiencia sea inolvidable.',
    includes: [
      'Animación UI/UX funcional',
      'Video explicativo y branding animado',
      'Sistema de motion para producto',
      'Microinteracciones y transiciones',
      'Assets en Lottie y Rive',
    ],
    process: [
      { title: 'Storyboard', description: 'Definimos la narrativa visual y los momentos clave de animación.' },
      { title: 'Animación', description: 'Producimos las piezas con atención al timing, easing y ritmo.' },
      { title: 'Revisión', description: 'Iteramos sobre cada fotograma hasta alcanzar la intención deseada.' },
      { title: 'Entrega técnica', description: 'Exportamos assets optimizados listos para implementar en cualquier plataforma.' },
    ],
  },
  {
    id: 'strategy',
    title: 'Estrategia',
    description:
      'Diseñamos hojas de ruta digitales basadas en investigación profunda, datos concretos y una comprensión clara del mercado. No hacemos estrategia por hacerla: cada recomendación responde a un objetivo medible y a una oportunidad real de crecimiento.',
    includes: [
      'Auditoría digital y análisis competitivo',
      'Definición de roadmap de producto',
      'Estrategia de contenido y posicionamiento',
      'Análisis de métricas y optimización continua',
      'Talleres de alineación con stakeholders',
    ],
    process: [
      { title: 'Descubrir', description: 'Recolectamos datos cualitativos y cuantitativos sobre tu negocio y mercado.' },
      { title: 'Analizar', description: 'Identificamos oportunidades, brechas y prioridades estratégicas.' },
      { title: 'Definir', description: 'Construimos una hoja de ruta accionable con hitos claros y medibles.' },
      { title: 'Alinear', description: 'Facilitamos talleres para asegurar que todo el equipo reme en la misma dirección.' },
    ],
  },
];
