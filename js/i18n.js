// Conmutador ES/EN.
// El español vive en el HTML (es el idioma por defecto y lo que ven los
// buscadores); aquí solo está el inglés. Las cadenas son literales de este
// archivo —no entra nada del usuario— por lo que asignarlas con innerHTML
// es seguro y permite conservar el <strong> dentro de las viñetas.

const EN = {
  skip: "Skip to content",

  "nav.exp": "Experience",
  "nav.projects": "Projects",
  "nav.edu": "Education",
  "nav.certs": "Certifications",
  "nav.stack": "Stack",
  "nav.contact": "Contact",

  "hero.role": "Industrial Engineer",
  "hero.tagline":
    "I turn manual processes into solutions that measure themselves. I care about understanding why each step exists before automating it.",
  "hero.cta": "Get in touch",
  "hero.cta2": "See projects",
  "hero.status": "Thesis student at Viña Concha y Toro",
  "hero.note": "The best automation doesn't speed up the step — it removes it.",
  "hero.basedIn": "Based in",
  "hero.stackNow": "Current stack",
  "hero.langs": "Languages",
  "lang.es": "Spanish · Native",
  "lang.en": "English · B2",

  "marquee.label": "Where I've worked and studied",

  "exp.label": "Experience",
  present: "present",

  "exp.cyt.title": "Internship &amp; Degree Thesis",
  "exp.cyt.role": "Operational Excellence &amp; Corporate Processes Division",
  "exp.cyt.b1":
    "Automation of manual processes with the <strong>Power Platform</strong> ecosystem (Power Apps, Power Automate, Power BI and SharePoint), measuring the impact in labour hours freed up.",
  "exp.cyt.b2":
    "Functional and technical owner of a corporate <strong>payment orders and commercial agreements</strong> solution: app stabilisation, repair of the approval flows, connection governance through a service account, and handover to IT with backup, evidence and a UAT plan.",
  "exp.cyt.b3":
    "Design of a <strong>Power BI visualisation platform</strong> to track the onboarding of new hires, with its own data model and per-user access control.",
  "exp.cyt.b4":
    "AS-IS process mapping, requirements specification and phased proposals, defining the process owner, the SLA and the indicators from the design stage.",
  "exp.cyt.b5":
    "<strong>Internal training on applied AI</strong>: I prepared and delivered a talk for the team on responsible use, handling of corporate data, and the difference between assistants and agents.",

  "exp.ponsse.title": "Human Resources Internship",
  "exp.ponsse.role": "People, Safety &amp; Culture",
  "exp.ponsse.b1":
    "Support to the Human Resources area in the organisational development of the Uruguayan subsidiary.",
  "exp.ponsse.b2":
    "Drafted a procedure for the area, adjusting it based on team feedback.",
  "exp.ponsse.b3":
    "Managed onboarding processes for new employees and guidance on internal procedures.",
  "exp.ponsse.b4":
    "Collaboration with professionals from Latin America and Europe in a multicultural environment.",

  "exp.watts.title": "Industrial Processes Internship",
  "exp.watts.role": "Quality assurance",
  "exp.watts.b1":
    "Quality management control across the dairy plant's production processes (Watt's produces the Danone brand in Chile under licence).",
  "exp.watts.b2":
    "Kaizen project on <strong>reducing CIP cleaning times</strong>: analysis of cleaning-cycle data and identification of idle time.",
  "exp.watts.b3": "Control and tracking of supplies and raw materials inventory.",
  "exp.watts.b4":
    "Assessment of the plant's operational, logistics and production management.",

  "tag.orgdev": "Organisational development",
  "tag.onboarding": "Onboarding",
  "tag.procedures": "Procedures",
  "tag.multicultural": "Multicultural teams",
  "tag.quality": "Quality management",
  "tag.dataanalysis": "Data analysis",
  "tag.inventory": "Inventory",

  "proj.label": "Projects",
  "proj.lead":
    "Corporate solutions in production and university projects applied at real companies in the Biobío Region. Each one states the tools and the methodology I used.",
  "proj.tab1": "Corporate",
  "proj.tab2": "Academic",

  "dg.induccion.top": "Progress per person",
  "dg.stage1": "Stage 1",
  "dg.stage2": "Stage 2",
  "dg.stage3": "Stage 3",
  "dg.stage4": "Stage 4",

  "method.tools": "Tools",
  "method.method": "Methodology",

  "proj.ordenes.title": "Payment orders and commercial agreements",
  "proj.ordenes.desc":
    "Corporate solution to request, approve and close payment orders. I inherited the solution and stabilised it: full mapping of environment variables and connections, repair of the approval flows that never triggered, replacement of the company rule with an email–company–role relationship, and a UAT and IT handover plan with an immutable backup.",
  "proj.ordenes.method":
    "Stabilisation over a versioned baseline, connection governance through a service account, UAT with process users, and a handover document.",


  "proj.induccion.title": "Onboarding tracking platform",
  "proj.induccion.meta": "IN DESIGN",
  "proj.induccion.desc":
    "I'm designing a visualisation platform for the onboarding process of new hires: so each person can see which stage they are at and what comes next, and the team in charge gets a view of the whole group without relying on manual tracking.",
  "proj.induccion.method":
    "Process mapping with the requesting area, and definition of the stages and the data model before building.",

  "proj.fondos.title": "Expense fund consolidation",
  "proj.fondos.meta": "ACCOUNTS PAYABLE",
  "proj.fondos.desc":
    "Automation of the monthly consolidation of expense funds and card blocking, with a defined data-contract output to Power BI that removes manual spreadsheet handling.",
  "proj.fondos.method":
    "Input file specification, versioned data contract between stages, and measures defined before building the dashboard.",

  "proj.smartyard.meta": "INNOVATION IN PRODUCTS AND SERVICES",
  "proj.smartyard.desc":
    "Innovation proposal for the container yard at San Vicente Terminal Internacional: intelligence that orders the yard to attack ~2,000 monthly re-handles (≈ US$200,000/year in false moves). We captured the pain on site with the yard logistics manager, mapped the process and designed a planning dashboard prototype. It was singled out by the logistics manager himself.",
  "proj.smartyard.tools":
    "Advanced Excel · Analysis of SVTI annual reports 2021–2025 · Dashboard prototype",
  "proj.smartyard.method":
    "Site visit and interview with the process owner, flow mapping, impact vs. feasibility matrix, value proposition and pitch.",

  "proj.arauco.title": "Reducing truck turnaround time",
  "proj.arauco.desc":
    "Improvement project on the reception of logging trucks at Arauco S.A. We measured 445 trucks: 35:53 min average dwell time against an internal standard of 33:00, with 68% of the excess concentrated in the afternoon shift due to the queue for a single crane. We quantified four types of waste, mapped the current-state VSM and proposed countermeasures in A3 format.",
  "proj.arauco.tools":
    "Value Stream Map · Ishikawa diagram (6M) · Five whys · A3 · Excel",
  "proj.arauco.method":
    "Full DMAIC cycle: define the waste, measure with real gatehouse data, analyse root cause, propose countermeasures and define the control plan.",

  "proj.ruteo.title": "Ruteo — Night carpooling",
  "proj.ruteo.meta": "ECONOMIC INTEGRATION PROJECT",
  "proj.ruteo.desc":
    "Verified university carpooling for Greater Concepción in the 22:00–06:00 window, aimed at the night trip that currently has no safe alternative. Includes market study, app prototype and a full economic assessment.",
  "proj.ruteo.tools": "Financial modelling in Excel · App prototype · Market survey",
  "proj.ruteo.method":
    "Feasibility study, projected cash flow, and assessment with NPV and IRR across three financing scenarios.",

  "proj.brew.title": "BrewMaster — Procurement policy",
  "proj.brew.meta": "PROCUREMENT MANAGEMENT",
  "proj.brew.desc":
    "Inventory and purchasing policy for a coffee distributor: demand forecasting with Holt-Winters (MAPE 2.63%), economic order quantity, safety stock under uncertainty, and the link between inventory and transport decisions.",
  "proj.brew.tools": "Advanced Excel · Holt-Winters · EOQ",
  "proj.brew.method":
    "Forecast method selection by fit error, economic order quantity calculation, and safety stock sizing by service level.",

  "proj.conecta.meta": "UCSC START-UP CHALLENGE",
  "proj.conecta.desc":
    "Working prototype of a mobile app connecting entrepreneurs and services in the Biobío Region. I designed the user flow, the app architecture and the business model, which we defended in a final pitch.",
  "proj.conecta.tools":
    "SPA prototype (HTML · CSS · JavaScript) · Economic model in Excel",
  "proj.conecta.method":
    "Value proposition validation, business model design and financial projection defended before a panel.",

  "proj.cip.title": "Kaizen — Reducing CIP times",
  "proj.cip.meta": "WATT'S · CHILLÁN PLANT",
  "proj.cip.desc":
    "Kaizen project at a dairy plant to reduce Clean In Place (CIP) cleaning times: analysis of cleaning-cycle data, identification of idle time and proposals to lower the operating cost of the process.",
  "proj.cip.tools": "Excel · CIP cycle records",
  "proj.cip.method":
    "Kaizen: process observation on the plant floor, analysis of historical washing data, and an improvement proposal with deliverables for the quality area.",

  "edu.label": "Education",
  "edu.ici.title": "BEng in Industrial Engineering",
  "edu.ici.b1":
    "Training in operations management, project appraisal, procurement management, Lean, and innovation in products and services.",
  "edu.ici.b2":
    "Projects applied at real companies in the Biobío Region: Arauco S.A., San Vicente Terminal Internacional and distribution.",
  "edu.ici.b3":
    "Degree thesis in progress at the Operational Excellence Division of Viña Concha y Toro.",
  "edu.lic.title": "Bachelor's Degree in Engineering",
  "edu.lic.b1":
    "Academic degree obtained during the programme, grounded in engineering sciences, mathematics and management.",
  "edu.school.date": "Graduated",
  "edu.school.title": "Primary and secondary education",

  "tag.ops": "Operations management",
  "tag.projeval": "Project appraisal",
  "tag.supply": "Procurement",
  "tag.innovation": "Innovation",
  "tag.hr": "People management",

  "cert.label": "Certifications",
  "cert.lead":
    "Courses completed at UCSC whose credentials are being issued by the university, plus verifiable external certifications.",
  "cert.pbi.title": 'Power BI Fundamentals <span class="issuer">· UCSC</span>',
  "cert.pbi.desc":
    "Power BI course at Universidad Católica de la Santísima Concepción: data modelling, measures and dashboard building. The foundation I later applied to the onboarding tracking dashboard at Viña Concha y Toro.",
  "cert.sap.title": 'Business processes with SAP <span class="issuer">· UCSC</span>',
  "cert.sap.desc":
    "Introduction to key organisational business processes with SAP: system navigation and management modules applied to procurement and finance. Knowledge I use today in the SAP VIM integration.",
  "cert.innov.title":
    'Innovation in Products and Services <span class="issuer">· UCSC</span>',
  "cert.innov.desc":
    "Innovation course taken with the SmartYard project for San Vicente Terminal Internacional, in the LTTS × MEDLOG challenge: on-site research, value proposition and a pitch to the port's counterpart.",
  "cert.claude.desc":
    "Anthropic's introductory course on Claude: capabilities and model family, prompting techniques, and how to apply it across everyday and professional workflows. It's the basis of the applied-AI talk I delivered to my team.",
  "cert.eng.title": 'English — Level B2 <span class="issuer">· EF SET</span>',
  "cert.eng.desc":
    "EF SET exam with a B2 result under the Common European Framework of Reference. Working level in multicultural environments, applied during the internship at Ponsse Uruguay with teams from Latin America and Europe.",

  "tag.datamodel": "Data modelling",
  "tag.dashboards": "Dashboards",
  "tag.processes": "Business processes",
  "tag.valueprop": "Value proposition",
  "tag.fieldwork": "Field validation",
  "tag.aiworkflows": "AI workflows",
  "tag.responsibleai": "Responsible AI",

  "stack.label": "Stack",
  "stack.data": "Data analysis",
  "stack.erp": "Management & ERP",
  "stack.ai": "Applied AI",
  "stack.lean": "Continuous improvement",
  "stack.gov": "Governance",

  "tag.excel": "Advanced Excel",
  "tag.agents": "Corporate agents",
  "tag.prompts": "Prompt design",
  "tag.training": "Internal training",
  "tag.asis": "AS-IS mapping",
  "tag.handover": "Handover to IT",
  "tag.svcaccount": "Service account",
  "tag.kpi": "KPI definition",

  "about.label": "About me",
  "about.p1":
    "I'm a final-year <strong>Industrial Engineering</strong> student at Universidad Católica de la Santísima Concepción. I'm currently doing my internship and degree thesis at the Operational Excellence Division of Viña Concha y Toro, building low-code solutions that replace manual work.",
  "about.p2":
    "I work by a simple rule: the best automation doesn't speed up the step, it removes it. And every solution should be born with an owner, an indicator and a way to measure itself.",
  "about.p3":
    "I'm looking to build my career in demanding corporate environments, bringing an analytical view to process improvement and decision-making.",

  "ref.label": "What people say",
  "ref.lead": "Extracts from the formal evaluations by my internship supervisors.",
  "ref.q1":
    "Sebastián worked on a Kaizen project focused on reducing CIP cleaning times and did a very good job. He stood out for his speed and clarity in carrying out tasks, making his deliverables understandable and useful. He was always willing to deliver what was asked and contributed ideas to improve his work, which helped the project move forward.",
  "ref.c1": "Quality Manager, Watt's S.A.",
  "ref.q2":
    "He adapted and integrated quickly into the teams, without difficulty. He took an active part in drafting a procedure for the area, showing the ability to adjust it based on feedback from the Human Resources team.",
  "ref.c2": "People, Safety &amp; Culture Manager, Ponsse Uruguay",

  "contact.label": "Contact",
  "contact.lead":
    "I'm looking for opportunities in operational excellence, process improvement and automation. If my profile fits your team, get in touch.",
  "contact.email": "The most direct way.",
  "contact.linkedin": "Career history and updates.",
  "contact.phoneKey": "phone",
  "contact.phone": "Chile, business hours.",

  "footer.loc": "Santiago, Chile",
};

const STORAGE_KEY = "sbt-lang";
const nodes = [...document.querySelectorAll("[data-i18n]")];

// El HTML nace en español: se guarda como fuente antes de tocar nada.
const ES = new Map(nodes.map((el) => [el, el.innerHTML]));

const setLang = (lang, { persist = true } = {}) => {
  const useEnglish = lang === "en";

  nodes.forEach((el) => {
    const key = el.dataset.i18n;
    const english = EN[key];
    if (useEnglish && english !== undefined) {
      el.innerHTML = english;
    } else {
      el.innerHTML = ES.get(el);
    }
  });

  document.documentElement.lang = useEnglish ? "en" : "es";

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Modo privado de Safari: el idioma no persiste, pero la página funciona.
    }
  }
};

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

// Prioridad: ?lang= en la URL → elección guardada → idioma del navegador.
const fromUrl = new URLSearchParams(location.search).get("lang");
let stored = null;
try {
  stored = localStorage.getItem(STORAGE_KEY);
} catch {
  stored = null;
}
const initial =
  fromUrl === "en" || fromUrl === "es"
    ? fromUrl
    : stored === "en" || stored === "es"
      ? stored
      : navigator.language?.startsWith("en")
        ? "en"
        : "es";

if (initial === "en") setLang("en", { persist: false });
