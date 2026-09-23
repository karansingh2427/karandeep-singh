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
      "Drafts the EPA use-summary table from a pesticide label. A reviewer still signs it off before it goes anywhere.",
    category: "AI",
    status: "In production · used on regulatory submissions",
    problem:
      "Use-summary tables for EPA submission were filled by reading long labels by hand. Crop, rate and use-site data is scattered through the narrative, the rate tables and the appendices. One label took 45–90 minutes. Across a portfolio, that is weeks of transcription.",
    value:
      "This is in production for regulatory submissions. Manual work on the step is down by about 60–70%. The output is a 28-column table, ready for an EPA filing or a regulatory database after review. That review still takes about half an hour, which is the point.",
    solution:
      "A browser tool with two paths. One uses rules and runs offline, for bulk runs. The other sends the label text through the company AI gateway, then a second pass checks the result. Every row keeps a confidence score, the page number and the source sentence, and you can edit the cell before exporting Excel.",
    deployment:
      "Live on Cloudflare Pages and Workers. Secrets stay on the server. There is a job queue, a kill switch, a rate limit, a daily cost cap and an audit trail. It is part of how the department prepares submissions.",
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
      "Reads a safety data sheet and fills the toxicology sections of country registration workbooks.",
    category: "AI",
    status: "Prototype checked on real files · pilot app in progress",
    problem:
      "Country APRS portfolios (Assessment of Regulatory Success) live in multi-sheet Excel workbooks. Experts read an MSDS, map the hazard lines, then apply that country's scoring rules. It is slow, it is the same job for every ingredient, and it holds up decisions on which active ingredients are worth registering.",
    value:
      "Toxicology and ecotoxicology look like about 70% of the work per active ingredient. If those cells are pre-filled, the expert reviews instead of typing, and regulatory managers get a clearer view for resourcing. Scoring stays in the workbook's own formulas.",
    solution:
      "Pull the classifications out of the MSDS, apply the schema sheet that already lives in the country file, and write back into the existing template without breaking the Score and Overall APRS formulas. Same idea as the use-summary table: a draft, then a person.",
    deployment:
      "A Python prototype, checked on real samples. A Cloudflare pilot is in progress. Login, kill switch and cost controls wait until the extraction is good enough to put in front of the department.",
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
      "Product ownership for the global label-data platform: what gets built, in what order, and with whose budget.",
    category: "Platform",
    status: "In production · Bayer",
    problem:
      "Labels were still being written as documents, country by country. Reuse was poor, and there was no single backlog for what the department needed next.",
    value:
      "More than 100 product labels a quarter, on about €500k a year, with vendor contracts over €250k. Steering updates, and measures for whether people actually use the data.",
    solution:
      "I own the roadmap and the backlog. Business, user and regulatory needs become acceptance criteria. I also manage the external data and software partners, and keep Regulatory, IT and Marketing on the same plan.",
    deployment:
      "The live platform. Steering committee, vendor management, training, and the arguments about who owns the data.",
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
      "A shared digital-label product for the industry, already online, aimed at the EU 2028 deadline.",
    category: "Programme",
    status: "Live · agriguide.eu · EU 2028",
    problem:
      "Product labels are dense paper documents, hard to apply in the field. The EU wants them machine-readable in every market. That only works if competitors and countries use one product, instead of 27 separate builds.",
    value:
      "AgriGuide is online. A farmer can scan a label and get the conditions of use that apply in the field. Inside Bayer, writing labels from structured data cut authoring effort by about 40–50%, and overall workflow effort by about 50%. More than 1,500 labels are published, across most of the EU, with all 27 countries in scope.",
    solution:
      "I worked on this as a CropLife Europe programme, with Bayer, BASF, Syngenta, Corteva and others on the same delivery. My part was the tech stream, the reference data, Bayer's rollout across 27 countries, and getting IT, Marketing and Product Supply onto one plan.",
    deployment:
      "Live at agriguide.eu. Pilots started in Germany, Italy and Romania. Bayer is working toward a digitised EU portfolio by 2028.",
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
      "A €1 million digital programme for research groups, from what they asked for to a first release.",
    category: "Programme",
    status: "Delivered · Bayer Pharma R&D IT",
    problem:
      "Biology, chemistry and biochemistry groups needed software that scientists would actually open, inside the usual IT and regulatory controls. The user base was hundreds of researchers.",
    value:
      "Shipped a first release for somewhere between 500 and 1,000 researchers. A steering committee watched a budget of about €1 million.",
    solution:
      "I turned lab requests into a roadmap, user stories and a scope we could ship. Delivery was Scrum and Kanban, with testing, training and a feedback loop.",
    deployment:
      "Bayer Pharma R&D IT, with steering oversight, a phased rollout, and training.",
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
