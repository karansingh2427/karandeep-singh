export type DepthAnswer = {
  question: string;
  answer: string;
};

export type ImpactRow = {
  label: string;
  before: string;
  after: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: "AI agent" | "AI" | "Platform" | "Programme" | "Initiative";
  status: string;
  problem: string;
  value: string;
  solution: string;
  deployment: string;
  impact: ImpactRow[];
  metrics: { label: string; value: string }[];
  stack: string[];
  links: { label: string; href: string }[];
  featured: boolean;
  depth?: DepthAnswer[];
  mission?: string;
  vision?: string;
  valueEnablers?: { title: string; detail: string }[];
};

export const projects: Project[] = [
  {
    slug: "global-digital-label-programme",
    title: "Global Digital Label Programme",
    tagline:
      "Turns static product labels into trusted, structured data that people, systems and machines can reuse. I lead it across the EU, APAC, North America, ANZ and LATAM.",
    category: "Programme",
    status: "Global",
    problem:
      "Product and use information sat in static documents. It was assembled by hand, spread across systems, hard to keep current, and not structured enough for reuse by regulatory teams, digital products, farm-management systems or application equipment.",
    value:
      "The near-term value is less manual effort and less duplication. Inside Bayer, writing labels from structured data cut authoring effort by about 40–50%, and overall workflow effort by about 50%. AgriGuide, the EU project, is online: a farmer can scan a label and get the conditions of use that apply in the field. More than 1,500 labels are published, across most of the EU, with all 27 countries in scope. The same data foundation is what later use cases sit on.",
    mission:
      "Turn product labels from static documents into trusted, structured, reusable data, and make that data available to the people, systems and machines that need it.",
    vision:
      "A connected label-data ecosystem. Ownership is clear, the data flows from authoritative sources, and the same information supports automated label creation, digital labels, compliant use in the field, and later field-specific decisions.",
    valueEnablers: [
      {
        title: "Trusted, reusable label information",
        detail:
          "Complete, current label information in a structured format, so teams and connected systems are not extracting it from documents again.",
      },
      {
        title: "Faster creation and maintenance",
        detail:
          "Label authoring and review tied to structured source data, so there is less copying and a shorter cycle when an approved change has to go out.",
      },
      {
        title: "One foundation, several use cases",
        detail:
          "Build the data once, then use it for regulatory work, customer-facing digital labels and digital farming. AgriGuide is the EU project on that foundation.",
      },
      {
        title: "Access at the moment of use",
        detail:
          "Rates, dose and conditions of use in a form someone can search and apply, including on a phone in the field.",
      },
      {
        title: "Compliance in the workflow",
        detail:
          "Authorised conditions in a machine-readable form, so farm-management systems and application equipment can follow the label.",
      },
      {
        title: "A path to field-specific decisions",
        detail:
          "From country-level instructions on a document toward guidance that can take local conditions into account.",
      },
    ],
    solution:
      "I lead the global digital label programme. On the EU project, AgriGuide, the work is a CropLife Europe delivery with Bayer, BASF, Syngenta, Corteva and others. My part there was the tech stream, the reference data, Bayer's rollout across 27 countries, and getting IT, Marketing and Product Supply onto one plan.",
    deployment:
      "In the EU, AgriGuide is live at agriguide.eu. Pilots started in Germany, Italy and Romania, and Bayer is working toward a digitised EU portfolio by 2028. The global programme, which I lead, also runs in APAC, North America, ANZ and LATAM.",
    impact: [
      { label: "Programme", before: "No programme", after: "Global: EU, APAC, North America, ANZ, LATAM" },
      { label: "EU", before: "Separate country builds", after: "27 countries, 2028" },
      { label: "Label in the field", before: "Paper", after: "EU: scan, 1,500+ labels live" },
      { label: "Authoring effort", before: "Previous practice", after: "About 40–50% less" },
    ],
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
    slug: "use-summary-table",
    title: "Use Summary Table Extractor",
    tagline:
      "A production AI agent at Bayer. It drafts EPA use-summary tables from pesticide labels. Reviewers spot-check before anything goes out.",
    category: "AI agent",
    status: "In production at Bayer · used on regulatory submissions",
    problem:
      "EPA use-summary tables were filled by reading pesticide labels by hand. Crop, rate and use-site data is scattered through the narrative, the rate tables and the appendices. Regulatory managers were spending 100+ hours building those tables from the PDFs.",
    value:
      "The tables are now drafted in a few minutes. Regulatory managers only spot-check them, which takes minutes, so the submission gets to market faster. A label costs about $0.50–$0.75 to run.",
    solution:
      "A browser tool with two paths. One uses rules and runs offline, for bulk runs. The other sends the label text through Bayer's AI gateway, then a second pass checks the result. Every row keeps a confidence score, the page number and the source sentence, and you can edit the cell before exporting Excel.",
    deployment:
      "Deployed on Agentrix (container runtime) and through Bayer's AI gateway for model calls. Secrets stay on the server. There is a job queue, a kill switch, a rate limit, a daily cost cap, an audit trail, content-safety flags and drift checks — the Pre-Flight guardrails I apply when shipping agentic tools. It is part of how the department prepares submissions.",
    impact: [
      {
        label: "EPA tables from pesticide labels",
        before: "100+ hours by hand",
        after: "A few minutes",
      },
      {
        label: "What managers do",
        before: "Write the tables from the PDFs",
        after: "Spot check, minutes",
      },
      { label: "Cost per label", before: "—", after: "$0.50–$0.75" },
      {
        label: "Submission",
        before: "Waits on transcription",
        after: "Faster time to market",
      },
    ],
    metrics: [
      { label: "Spent by hand", value: "100+ hrs" },
      { label: "To draft a table", value: "A few min" },
      { label: "Spot check", value: "Minutes" },
      { label: "Per label", value: "$0.50–$0.75" },
    ],
    stack: [
      "LLMs (Claude)",
      "Agentrix",
      "Bayer AI Gateway",
      "PDF.js",
      "SheetJS",
      "Human-in-the-loop UI",
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
          "A Bayer production agent that extracts every crop, use site and application method from pesticide label PDFs into a 28-column Use Summary Table required for EPA submission — with confidence scoring, source citations and inline human review before export. Colleagues use it in their regulatory workflow today.",
      },
      {
        question: "How it works",
        answer:
          "PDF text is extracted (PDF.js). In AI mode, the app relays label text through Bayer's AI gateway with extraction and derivation rules; an independent QC pass flags Critical/High issues and can escalate remediation. In regex mode, 60+ field patterns and derivation rules run fully offline in the browser. Reviewers edit cells, filter low-confidence rows, then export Excel/CSV with audit columns.",
      },
      {
        question: "Why it works",
        answer:
          "The hard problem is not just OCR or chat — it is schema fidelity under regulatory scrutiny. Separating extraction from QC, grounding every cell in page/source text, and forcing human sign-off before the table is 'done' keeps accuracy usable (88% field-level vs expert gold standard on the deployed path) while still cutting most of the transcription labour.",
      },
      {
        question: "Why I chose it",
        answer:
          "The workflow already owned the pain (US team, regulated labels, clear schema). An agentic extraction + HITL pattern maps cleanly to how analysts already work, and Agentrix plus the AI gateway gave a deployable surface with server-side secrets and a kill switch — without waiting for a full platform rebuild.",
      },
      {
        question: "What its limitations are",
        answer:
          "Pilot auth is a shared gate, not full enterprise identity — broader rollout needs a proper service-account / Agent Hub path. Regex mode tops out around ~82% field-level precision and struggles on multi-line drift/soil restrictions. LLM mode depends on gateway credits/budget and can fail on unusual layouts or gateway timeouts without streaming/retry discipline. Hallucinations are mitigated, not eliminated — human review remains mandatory.",
      },
      {
        question: "What alternatives exist",
        answer:
          "Pure offline regex (fast, deterministic, lower accuracy); GitHub Copilot agents reading knowledge files without the Bayer AI gateway; full fine-tuned ML extractors; or continuing fully manual analyst work. Hybrid (regex bulk + agent re-run on low-confidence rows) is often the practical middle path when credits are constrained.",
      },
      {
        question: "What happens when things don't work as expected",
        answer:
          "Kill switch disables AI paths in seconds (in-flight requests finish; new ones get a clear stop). Rate limits and a daily cost budget stop runaway spend. Content-safety / prompt-injection flags are recorded without blocking (false positives on real labels). Drift checks compare recent QC severity against a prior window. Users fall back to regex mode or Copilot agents. Reviewers always see confidence + source text so bad cells are correctable before export — the system fails toward human judgement, not silent wrong tables.",
      },
    ],
  },
  {
    slug: "ars-automation",
    title: "ARS (Assessment of Regulatory Success) Automation",
    tagline:
      "A production AI agent at Bayer. It reads a safety data sheet and drafts the toxicology sections of country ARS workbooks.",
    category: "AI agent",
    status: "In production at Bayer · expert review before scores are used",
    problem:
      "Country ARS (Assessment of Regulatory Success) portfolios live in multi-sheet Excel workbooks. Experts read an MSDS, map the hazard lines, then apply that country's scoring rules. It is slow, it is the same job for every ingredient, and it holds up decisions on which active ingredients are worth registering.",
    value:
      "Toxicology and ecotoxicology look like about 70% of the work per active ingredient. If those cells are pre-filled, the expert reviews instead of typing, and regulatory managers get a clearer view for resourcing. Scoring stays in the workbook's own formulas.",
    solution:
      "Pull the classifications out of the MSDS, apply the schema sheet that already lives in the country file, and write back into the existing template without breaking the live score formulas. Same idea as the use-summary table: a draft, then a person.",
    deployment:
      "Interactive pilot plus a local Python path, calling Bayer's AI gateway for model work. Secrets stay on the server. Same Pre-Flight guardrails as the use-summary tool: kill switch, rate limit, daily cost cap, metadata audit trail, injection-phrase flags, Agent Card and drift check. An expert still reviews before scores are used.",
    impact: [
      { label: "Tox / ecotox", before: "Typed from the safety data sheet", after: "Drafted for review" },
      { label: "Share of the job", before: "The slow part of every ingredient", after: "About 70% pre-filled" },
      { label: "Who decides", before: "Expert starts from a blank sheet", after: "Expert checks before scores are used" },
    ],
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
      "Bayer AI Gateway",
      "AI Pre-Flight guardrails",
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
          "A Bayer system that reads an MSDS PDF and pre-fills the toxicology and ecotoxicology portions of country ARS (Assessment of Regulatory Success) portfolio workbooks, leaving country experts to review and correct rather than start from a blank sheet.",
      },
      {
        question: "How it works",
        answer:
          "Stage 1 extracts hazard classifications from the MSDS. Stage 2 applies the country workbook's own Schema sheet (classification → interpretation → score). Stage 3 writes values into the ingredient sheet (row 2, matching how the summary dashboard macro reads data), cloning a template sheet when a new active ingredient appears. Experts remain the final authority; chat can propose edits but never auto-applies them.",
      },
      {
        question: "Why it works",
        answer:
          "Scoring logic already lives in Excel formulas and macros. The tool only needs to get classifications right and write them where the existing machinery expects — so trust, auditability and country nuance stay in the systems teams already use.",
      },
      {
        question: "Why I chose it",
        answer:
          "Same extraction → review pattern that worked for Use Summary Tables at Bayer, applied where another regulated team had clear ROI. Keeping schemas in the workbook (not hard-coded) respects country variation without shipping dozens of bespoke parsers.",
      },
      {
        question: "What its limitations are",
        answer:
          "Scope is tox/ecotox, not the full political/regulatory criteria set. MSDS quality and layout variance still need human correction. Per-user enterprise identity and Agent Hub registration are not done yet. Dashboard refresh depends on existing macros/SharePoint paths outside this tool.",
      },
      {
        question: "What alternatives exist",
        answer:
          "Fully manual workbook fill; building a separate scoring UI/Power BI instead of feeding Excel; generic document AI without country schema mapping; or waiting for a central MDM platform. The chosen path maximises reuse of workbooks experts already trust.",
      },
      {
        question: "What happens when things don't work as expected",
        answer:
          "Outputs always go to a copy of the workbook, never the golden sample. Unmapped classifications stay flagged for expert review rather than guessed. Kill switch, rate limit and daily budget stop runaway AI spend; audit records stay metadata-only (no raw MSDS text). Injection-style phrases are flagged, not blindly obeyed. Drift checks watch rising unmapped rates — correction stays a human decision.",
      },
    ],
  },
  {
    slug: "ai-preflight",
    title: "AI Pre-Flight Checklist",
    tagline:
      "A portable checklist for shipping agentic AI — distilled from building and deploying agents in regulated life sciences.",
    category: "AI",
    status: "Personal working standard · used on Use Summary Table & ARS Automation",
    problem:
      "When you ship an agent, the same questions keep coming back: can you stop it, who reviews the output, what did it cost, who owns it, and did you check for prompt injection? Without a shared checklist, every project reinvented those answers — or skipped them.",
    value:
      "A reusable Pre-Flight board I can run before a pilot or a broader rollout. It turns governance into concrete work (a kill switch in the repo, an audit trail, a named owner) instead of a slide. I have already applied it to the use-summary extractor and ARS Automation.",
    solution:
      "I did not create an official corporate standard from scratch. I built a generic, portable version from shipping agentic tools in regulated workflows — turning Agentic AI / AI Governance practice and GenAI learning into a personal checklist with placeholders for whichever organisation you are in (risk gate, identity, catalog, help channel).",
    deployment:
      "Interactive checklist on this site, password-protected. Also available as a private Claude Code skill (/ai-preflight) against real repos. A practitioner synthesis, not an official policy document. Reference apps: Use Summary Table and ARS Automation.",
    impact: [
      { label: "Governance", before: "Reinvented on each agent", after: "One checklist, about 30 items" },
      { label: "Applied to", before: "—", after: "Use summary and ARS" },
      { label: "What it forces", before: "A slide", after: "A kill switch, an owner, an audit trail" },
    ],
    metrics: [
      { label: "Sections", value: "6" },
      { label: "Checklist items", value: "~30" },
      { label: "Apps applied", value: "2+" },
      { label: "Access", value: "Password" },
    ],
    stack: [
      "AI governance practice",
      "HITL · kill switch · audit",
      "Portable across employers",
      "Agent Card / sign-off",
      "Claude Code skill",
    ],
    links: [
      {
        label: "Open checklist",
        href: "/ai-preflight/checklist.html",
      },
    ],
    featured: true,
    depth: [
      {
        question: "What it is",
        answer:
          "A personal AI Pre-Flight checklist for agentic apps: decide autonomy and scope, ground the agent, test it, wire HITL/monitoring/security/cost controls, document and sign off, and implement golden-standard guardrails (kill switch, rate/budget, drift, audit, cyber).",
      },
      {
        question: "How it works",
        answer:
          "For each item, look at the real codebase (done / partial / missing / accepted gap), then implement — no empty ticks. ORG-tagged items map to whatever risk gate, identity and catalog your current organisation uses.",
      },
      {
        question: "Why it works",
        answer:
          "It came from shipping, not theory. Use Summary Table and ARS Automation forced concrete patterns. A checklist that only names ideals would not have survived those pilots.",
      },
      {
        question: "Why I built a generic version",
        answer:
          "I needed something I could reuse on the next agent — and that would still make sense at another employer. Distilling a portable checklist from that practice was the honest shape. The detailed board stays private; this page is the public summary.",
      },
      {
        question: "What its limitations are",
        answer:
          "Not an official standard of any organisation. Training sign-off and catalog registration stay project-specific follow-ups. The interactive board on this site is password-protected.",
      },
      {
        question: "What alternatives exist",
        answer:
          "Ad-hoc per-project notes; waiting for a central platform team; copying a vendor trust framework wholesale. This sits in the middle: opinionated enough to drive engineering, portable enough to reuse.",
      },
      {
        question: "What happens when things don't work as expected",
        answer:
          "Gaps are named as accepted limitations (shared pilot secret, placeholder budget numbers) rather than hidden. Detection (drift, flags) triggers human review — the checklist never pretends automated correction replaces ownership.",
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
    impact: [
      { label: "How labels were made", before: "Documents, country by country", after: "One backlog, 100+ labels a quarter" },
      { label: "Budget", before: "—", after: "About €500k a year" },
      { label: "Vendors", before: "—", after: "Contracts over €250k" },
    ],
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
    slug: "pharma-rd-digital-programme",
    title: "Pharma R&D Digital Programme",
    tagline:
      "I led PIx Portfolio Tracking (PIx PT), covering every Pharma indication from Phase 0 to Phase 2. I was also one of the business analysts on the PIx platform, and did data analysis for a PIx module.",
    category: "Programme",
    status: "Delivered · Bayer Pharma R&D IT",
    problem:
      "Pharma needed the whole indication portfolio tracked in one place, from Phase 0 to Phase 2.",
    value:
      "I led PIx Portfolio Tracking (PIx PT). It tracked the entire portfolio of all Pharma indications from Phase 0 to Phase 2. PIx was connected to that tracking. I was also one of the business analysts on the PIx platform, and did data analysis for a PIx module. The release they could use reached somewhere between 500 and 1,000 researchers. A steering committee watched a budget of about €1 million.",
    solution:
      "I turned what the labs asked for into a roadmap, user stories and a scope for PIx PT. Delivery was Scrum and Kanban, with testing, training and a feedback loop.",
    deployment:
      "Bayer Pharma R&D IT, with steering oversight, a phased rollout, and training.",
    impact: [
      {
        label: "What shipped",
        before: "Requests from the labs",
        after: "PIx Portfolio Tracking, Phase 0 to Phase 2",
      },
      {
        label: "Analyst work",
        before: "—",
        after: "Business analyst on the PIx platform, data analysis for a PIx module",
      },
      { label: "Who it served", before: "—", after: "500–1,000 researchers" },
      {
        label: "Money",
        before: "—",
        after: "About €1 million, under a steering committee",
      },
    ],
    metrics: [
      { label: "Programme value", value: "€1M" },
      { label: "Researchers served", value: "500–1,000" },
      { label: "Governance", value: "Steering Committee" },
      { label: "Tracking", value: "Phase 0 to Phase 2" },
    ],
    stack: [
      "PIx PT",
      "Portfolio tracking",
      "Business analysis",
      "Data analysis",
      "Agile / Scrum / Kanban",
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
