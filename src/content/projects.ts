export type DepthAnswer = {
  question: string;
  answer: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: "AI" | "Platform" | "Programme" | "Initiative";
  status: string;
  problem: string;
  value: string;
  solution: string;
  deployment: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  links: { label: string; href: string }[];
  featured: boolean;
  depth?: DepthAnswer[];
};

export const projects: Project[] = [
  {
    slug: "use-summary-table",
    title: "Use Summary Table Extractor",
    tagline:
      "Agentic AI that turns pesticide label PDFs into EPA-ready use-summary tables — with human review built in.",
    category: "AI",
    status: "In production · Cloudflare Pages + Worker · used by colleagues",
    problem:
      "Preparing the Use Summary Table for EPA submission means reading long pesticide labels by hand. Use information is scattered across narrative sections, rate tables, crop tables and appendices — typically 45–90 minutes per label (and far longer across a portfolio), error-prone and inconsistent across analysts.",
    value:
      "In production with regulatory colleagues: ~60–70% less manual work. What used to take hours or stretch across weeks of transcription becomes minutes of agentic extraction plus human QC. Teams that finish a run refer the next team — adoption spreads by word of mouth. Output is schema-compliant (28 columns) and ready for EPA submission or regulatory databases.",
    solution:
      "A browser tool with two extraction paths: (1) offline regex/heuristic engine for fast bulk runs, and (2) LLM agent path (extraction → independent QC → remediation) via Cloudflare Functions against an enterprise AI gateway. Every row carries confidence, page references and source text for inline human editing before Excel export.",
    deployment:
      "End-to-end production deployment on Cloudflare Pages + Workers (secrets server-side, background job queue, kill switch, rate limits, cost budget, audit trail). Colleagues run the workflow in their day job — not a demo environment.",
    metrics: [
      { label: "Manual work cut", value: "~60–70%" },
      { label: "Field-level accuracy", value: "88%" },
      { label: "Schema", value: "28 columns" },
      { label: "Human review", value: "~30 min" },
    ],
    stack: [
      "LLMs (Claude)",
      "Cloudflare Pages / Workers / Queues / KV",
      "PDF.js",
      "SheetJS",
      "Human-in-the-loop UI",
      "GitHub Copilot agents",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/karansingh2427/use-summary-table",
      },
    ],
    featured: true,
    depth: [
      {
        question: "What it is",
        answer:
          "A production agentic system that extracts every crop, use site and application method from pesticide label PDFs into a 28-column Use Summary Table required for EPA submission — with confidence scoring, source citations and inline human review before export. Colleagues use it in their regulatory workflow today.",
      },
      {
        question: "How it works",
        answer:
          "PDF text is extracted (PDF.js). In AI mode, a Cloudflare Function forwards the label text to an enterprise LLM gateway with extraction and derivation rules; an independent QC pass flags Critical/High issues and can escalate remediation. In regex mode, 60+ field patterns and derivation rules run fully offline in the browser. Reviewers edit cells, filter low-confidence rows, then export Excel/CSV with audit columns.",
      },
      {
        question: "Why it works",
        answer:
          "The hard problem is not just OCR or chat — it is schema fidelity under regulatory scrutiny. Separating extraction from QC, grounding every cell in page/source text, and forcing human sign-off before the table is 'done' keeps accuracy usable (88% field-level vs expert gold standard on the deployed path) while still cutting most of the transcription labour.",
      },
      {
        question: "Why I chose it",
        answer:
          "The workflow already owned the pain (US team, regulated labels, clear schema). An agentic extraction + HITL pattern maps cleanly to how analysts already work, and Cloudflare gave a deployable surface with server-side secrets, queues and a kill switch — without waiting for a full enterprise platform build.",
      },
      {
        question: "What its limitations are",
        answer:
          "Pilot auth is a shared gate, not full enterprise identity — broader rollout needs a proper service-account / Agent Hub path. Regex mode tops out around ~82% field-level precision and struggles on multi-line drift/soil restrictions. LLM mode depends on gateway credits/budget and can fail on unusual layouts or gateway timeouts without streaming/retry discipline. Hallucinations are mitigated, not eliminated — human review remains mandatory.",
      },
      {
        question: "What alternatives exist",
        answer:
          "Pure offline regex (fast, deterministic, lower accuracy); GitHub Copilot agents reading knowledge files without the Bayer gateway; full fine-tuned ML extractors; or continuing fully manual analyst work. Hybrid (regex bulk + agent re-run on low-confidence rows) is often the practical middle path when credits are constrained.",
      },
      {
        question: "What happens when things don't work as expected",
        answer:
          "Kill switch disables AI paths in seconds via KV (in-flight requests finish; new ones get a clear 503). Rate limits and a daily cost budget stop runaway spend. Content-safety flags are recorded without blocking (false positives on real labels). Users fall back to regex mode or Copilot agents. Reviewers always see confidence + source text so bad cells are correctable before export — the system fails toward human judgement, not silent wrong tables.",
      },
    ],
  },
  {
    slug: "aprs-digitalisation",
    title: "APRS Digitalisation",
    tagline:
      "MSDS → pre-filled toxicology/ecotoxicology in country APRS workbooks, so experts review instead of transcribe.",
    category: "AI",
    status: "Prototype verified end-to-end · pilot app in progress",
    problem:
      "Country APRS (Assessment of Regulatory Success) portfolios live in multi-sheet Excel workbooks. Experts manually read MSDS and other sources, map hazard classifications, then look up country-specific interpretations and scores — slow, repetitive, and a bottleneck for prioritising which active ingredients have a higher chance of registration.",
    value:
      "Even partial automation of toxicology + ecotoxicology is expected to cover roughly 70% of the work per active ingredient. Faster, more reliable workbook population gives regulatory managers a clearer view for resourcing and prioritisation — using the workbook's own Overall APRS formulas rather than reinventing scoring.",
    solution:
      "A staged pipeline: extract classifications from MSDS PDFs, apply country schema mappings that live in the workbook itself, write back into the existing multi-sheet template (preserving live Score/Overall APRS formulas). Sibling design to Use Summary Table (extract → QC → human review), adapted for country-specific schemas and in-place .xlsx/.xlsm editing.",
    deployment:
      "Local Python prototype first (proven on real samples). Cloudflare Pages pilot app evolving toward a global-workbook-first flow (classifications into a shared portfolio, then country copies) before production concerns (Entra M2M, kill switch, budgets) mirror the Use Summary Table governance pattern.",
    metrics: [
      { label: "Work covered (tox/ecotox)", value: "~70%" },
      { label: "Portfolio target", value: "~63 ingredients" },
      { label: "Pattern", value: "Extract → schema → HITL" },
      { label: "Write-back", value: "In-place Excel" },
    ],
    stack: [
      "Python",
      "PDF / MSDS extraction",
      "Excel write-back (openpyxl)",
      "Country schema sheets",
      "Cloudflare Pages (pilot)",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/karansingh2427/APRS_digitalisation",
      },
    ],
    featured: true,
    depth: [
      {
        question: "What it is",
        answer:
          "A prototype that reads an MSDS PDF and pre-fills the toxicology and ecotoxicology portions of Bayer country-specific APRS portfolio workbooks, leaving country experts to review and correct rather than start from a blank sheet.",
      },
      {
        question: "How it works",
        answer:
          "Stage 1 extracts hazard classifications from the MSDS. Stage 2 applies the country workbook's own Schema sheet (classification → interpretation → score). Stage 3 writes values into the ingredient sheet (row 2, matching how the summary dashboard macro reads data), cloning a template sheet when a new active ingredient appears. Experts remain the final authority.",
      },
      {
        question: "Why it works",
        answer:
          "Scoring logic already lives in Excel formulas and macros. The tool only needs to get classifications right and write them where the existing machinery expects — so trust, auditability and country nuance stay in the systems teams already use.",
      },
      {
        question: "Why I chose it",
        answer:
          "Same extraction → review pattern that worked for Use Summary Tables, applied where another regulated team had clear ROI. Keeping schemas in the workbook (not hard-coded) respects country variation without shipping 27 bespoke parsers.",
      },
      {
        question: "What its limitations are",
        answer:
          "Prototype scope is tox/ecotox, not the full political/regulatory criteria set. MSDS quality and layout variance still need human correction. Production auth, kill switch and cost controls are intentionally deferred until extraction quality is proven. Dashboard refresh depends on existing macros/SharePoint paths outside this tool.",
      },
      {
        question: "What alternatives exist",
        answer:
          "Fully manual workbook fill; building a separate scoring UI/Power BI instead of feeding Excel; generic document AI without country schema mapping; or waiting for a central MDM platform. The chosen path maximises reuse of workbooks experts already trust.",
      },
      {
        question: "What happens when things don't work as expected",
        answer:
          "Outputs always go to a copy of the workbook, never the golden sample. Mis-mapped classifications are caught in expert review before scores drive prioritisation. Pipeline stages can be re-run independently. Future production mirror of Use Summary Table governance (kill switch, budgets, audit) is planned once the prototype is signed off.",
      },
    ],
  },
  {
    slug: "global-label-data-platform",
    title: "Global Label-Data Platform",
    tagline:
      "Product ownership for regulated label data at scale — vision, roadmap, backlog, budget and partners.",
    category: "Platform",
    status: "In production · Bayer Crop Science",
    problem:
      "Product labels across markets need consistent, data-centred authoring and global coordination. Without a shared platform, teams stay stuck in document-centric creation with high effort and weak reuse.",
    value:
      "A prioritised global backlog delivering 100+ product labels per quarter under a €500k annual budget and €250k+ vendor contracts — with executive-ready governance and measurable adoption/data-quality KPIs.",
    solution:
      "Product Owner practice: translate business, user and regulatory needs into vision, roadmap, acceptance criteria and backlog; steer external AI/data/SaaS partners; align Regulatory, IT, Marketing and industry stakeholders.",
    deployment:
      "Enterprise SaaS / platform delivery with Steering Committee updates, vendor management and operational adoption (training, data ownership, workflow measures).",
    metrics: [
      { label: "Labels / quarter", value: "100+" },
      { label: "Annual budget", value: "€500k" },
      { label: "Vendor contracts", value: "€250k+" },
      { label: "Partners steered", value: "3+" },
    ],
    stack: [
      "Product ownership",
      "Roadmapping",
      "Vendor management",
      "Regulated data platforms",
      "Agile delivery",
    ],
    links: [],
    featured: true,
  },
  {
    slug: "agriguide-digitisation",
    title: "AgriGuide Label Digitisation",
    tagline:
      "CropLife Europe digital-label platform — live online, with labels from many countries and companies, on track for the EU 2028 portfolio digitisation deadline.",
    category: "Programme",
    status: "Live · agriguide.eu · EU 2028 roadmap",
    problem:
      "Plant protection product (PPP) labels are complex, paper-heavy and hard for farmers to apply in the field. EU expectations push the industry toward machine-readable digital labels across all markets — which only works if competitors and countries align on one shared product, not 27 siloed builds.",
    value:
      "AgriGuide is already online: farmers get instant, interoperable, up-to-date digital label instructions (scan → field-relevant conditions of use → compliance guidance). Internally, data-centred authoring cut label-authoring effort by ~40–50% and overall workflow effort by ~50%. Public footprint today includes 1,500+ labels published and participation across most of the EU, with the programme aimed at all 27 Member States.",
    solution:
      "I helped deliver AgriGuide as a cross-industry CropLife Europe initiative — aligning Bayer with peer companies (BASF, Syngenta, Corteva and other collaborators) on shared delivery. Heavily involved in the tech work stream and the reference-data work stream; coordinated Bayer’s internal rollout across 27 countries; and brought IT, Marketing, Product Supply and related functions onto one delivery plan so the product shipped on time.",
    deployment:
      "Live at agriguide.eu (CropLife Europe). Pilots ran in Germany, Italy and Romania; digital labels from many companies and countries are already published. Expansion continues toward full EU coverage, with Bayer on track to digitise its EU product portfolio by the 2028 deadline.",
    metrics: [
      { label: "Labels published", value: "1,500+" },
      { label: "EU ambition", value: "27 countries" },
      { label: "Authoring effort", value: "~40–50% ↓" },
      { label: "EU deadline", value: "2028" },
    ],
    stack: [
      "Tech work stream",
      "Reference data work stream",
      "Cross-company alignment (CropLife Europe)",
      "Change & country coordination",
      "IT · Marketing · Product Supply",
      "Digital labels / SaaS",
    ],
    links: [
      { label: "agriguide.eu", href: "https://www.agriguide.eu/" },
    ],
    featured: true,
  },
  {
    slug: "pharma-rd-digital-programme",
    title: "Pharma R&D Digital Programme",
    tagline:
      "€1M programme from requirements to MVP for research workflows across early development.",
    category: "Programme",
    status: "Delivered · Bayer Pharma R&D IT",
    problem:
      "Research groups across biology, chemistry and biochemistry needed digital products that fit scientific ambition, technical feasibility and regulatory constraints — serving hundreds of researchers without losing governance.",
    value:
      "Delivered a €1M digital programme to MVP under Steering Committee governance, with testing, training and adoption support for 500–1,000 researchers.",
    solution:
      "Business analysis and project management: scientific requirements → roadmaps, user stories and MVP scope; Agile delivery (Scrum/Kanban) with documentation and feedback loops in a regulated environment.",
    deployment:
      "Enterprise IT delivery with Steering Committee oversight, phased MVP rollout, training and change support.",
    metrics: [
      { label: "Programme value", value: "€1M" },
      { label: "Researchers served", value: "500–1,000" },
      { label: "Governance", value: "Steering Committee" },
      { label: "Method", value: "Agile MVP" },
    ],
    stack: [
      "Business analysis",
      "Agile / Scrum / Kanban",
      "Regulated IT",
      "Stakeholder management",
    ],
    links: [],
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
