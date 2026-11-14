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
  category: "AI agent" | "AI" | "Platform" | "Programme" | "Initiative" | "Product" | "Venture" | "Research";
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
  ownTime?: boolean;
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
      "A browser tool with two paths. One uses rules and runs offline, for bulk runs. The other sends the label text through Bayer's AI gateway, then a second pass checks the result. Every row keeps a confidence score, the page number and the source sentence, and you can edit the cell before exporting Excel. One label or many: the 28-column schema stays, and the number of rows follows the labels. A gold-standard check on five labels, 149 pages and 155 rows, came in at 88% field-level accuracy against an expert table.",
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
    slug: "agriguide-qc",
    title: "AgriGuide QC Agent",
    tagline:
      "A production AI agent at Bayer. It checks a digital label against its approved document before it goes onto AgriGuide. It never publishes; a person does.",
    category: "AI agent",
    status: "In production at Bayer · a person checks and publishes",
    problem:
      "Before a digital label is published on AgriGuide, a colleague opens the approved Word or PDF and checks the label block by block in Quill's AgriGuide preview. They re-read the whole label every time, even when only a few blocks are wrong, and the safety and legal blocks have to be right.",
    value:
      "A first-pass punch-list of the preview blocks that look different from the approved document, so the colleague checks those instead of re-reading everything. The target is about 60–70% less QC time. On a planted-error test, 65 mistakes of 14 types in six published labels, it caught all 65, and 85% were marked Wrong rather than Check.",
    solution:
      "Upload the approved PDF and the label export. Rule checks with no AI cover the high-risk blocks: hazard and precautionary codes, signal word, pictograms, registration number and active-ingredient amounts. A model compares the rest through Bayer's AI gateway, with forced structured output, then an independent QC pass reviews the findings. Every finding names the crop card and field the colleague sees, with the quote from the approved document. Quotes that are not in the document get downgraded, and a reviewer cannot silently drop a safety or legal finding.",
    deployment:
      "Live on Agentrix, with Entra machine-to-machine auth, and model calls through Bayer's AI gateway. Uploaded files are not stored. Same Pre-Flight guardrails as the other agents: kill switch, prompt allowlist, rate limit, daily cost cap, metadata-only audit trail, injection flags, drift checks and an Agent Card. Colleagues fix in Quill, and a regulatory manager publishes from Quill.",
    impact: [
      { label: "What gets re-read", before: "The whole label, every time", after: "The blocks on the punch-list" },
      { label: "Safety and legal blocks", before: "Checked by eye", after: "Rule-checked, then by eye" },
      { label: "Planted mistakes", before: "—", after: "65 of 65 caught" },
      { label: "Who publishes", before: "Regulatory manager", after: "Still the regulatory manager" },
    ],
    metrics: [
      { label: "Planted errors caught", value: "65 / 65" },
      { label: "Marked Wrong", value: "85%" },
      { label: "QC time target", value: "~60–70% ↓" },
      { label: "Autonomy", value: "Advisory (L2)" },
    ],
    stack: [
      "LLMs",
      "Agentrix",
      "Bayer AI Gateway",
      "Python",
      "CropLife DLC JSON",
      "Human-in-the-loop UI",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/karansingh2427/agriguide-qc-assistant",
      },
    ],
    featured: true,
    depth: [
      {
        question: "What it is",
        answer:
          "An L2 advisory QC agent for Bayer's Quill → AgriGuide label digitisation. It takes the approved (golden) label PDF and the CropLife digital-label JSON export, and returns findings by AgriGuide preview block — what looks different, the golden quote, and where to fix it in Quill — plus a marked preview that colours every field by its finding.",
      },
      {
        question: "How it works",
        answer:
          "An orchestrator runs structure checks (schema, locales, required blocks), content checks (golden PDF vs label, through the AI gateway with a forced Finding schema) and presentation checks, then an independent QC agent reviews the report. High-risk blocks get deterministic rule checks with no AI. A number cross-check, a quote check and an optional run-twice mode move anything uncertain to Check. Colleagues answer each finding (confirmed / not an issue / unsure / missed), which feeds a precision report.",
      },
      {
        question: "Why it works",
        answer:
          "Colleagues QC what the label looks like, not the JSON, so every finding speaks in preview blocks and crop cards they already know. Rules handle the fields where a wrong value is a safety or legal problem; the model handles free text. Grounding every finding in a quote from the golden document keeps hallucinated findings out of the punch-list.",
      },
      {
        question: "Why I chose it",
        answer:
          "QC is the bottleneck between digitising a label and publishing it on AgriGuide, the EU project in the programme I lead. It reuses the extract → check → human pattern and the Pre-Flight governance from the use-summary agent, so the guardrails came with it rather than after it.",
      },
      {
        question: "What its limitations are",
        answer:
          "Agent Hub registration is still open. Model output varies run to run. High-risk rule checks need the golden as text — 5 of 18 goldens in the first batch give no hazard codes as text, so those are checked by eye. The planted-error test covers 14 mistake types on six labels with one seed, and the time saving is a target until the time trial is measured.",
      },
      {
        question: "What alternatives exist",
        answer:
          "Keep re-reading every label by hand; rely on the vendor's first QC alone; or a generic document-diff tool that does not know AgriGuide's blocks. A rules-only version is possible for structure and high-risk fields, but misses free-text drift in directions for use.",
      },
      {
        question: "What happens when things don't work as expected",
        answer:
          "Kill switch stops model calls and disables Run on the page. The gateway endpoint only accepts the QC prompts built into the app, so it is not an open LLM proxy. Rate limit and daily budget cap spend. Injection phrases are flagged, never obeyed. Drift checks compare accuracy, dropped findings and unfound quotes against a prior window. 'Looks clean' only shows when every high-risk field matches — otherwise the colleague checks by eye, and nothing is ever published by the tool.",
      },
    ],
  },
  {
    slug: "ai-preflight",
    title: "AI Pre-Flight Checklist",
    tagline:
      "A portable checklist for shipping agentic AI — distilled from building and deploying agents in regulated life sciences.",
    category: "AI",
    status: "Personal working standard · used on Use Summary Table, ARS Automation & AgriGuide QC",
    problem:
      "When you ship an agent, the same questions keep coming back: can you stop it, who reviews the output, what did it cost, who owns it, and did you check for prompt injection? Without a shared checklist, every project reinvented those answers — or skipped them.",
    value:
      "A reusable Pre-Flight board I can run before a pilot or a broader rollout. It turns governance into concrete work (a kill switch in the repo, an audit trail, a named owner) instead of a slide. I have already applied it to the use-summary extractor, ARS Automation and the AgriGuide QC agent.",
    solution:
      "I did not create an official corporate standard from scratch. I built a generic, portable version from shipping agentic tools in regulated workflows — turning Agentic AI / AI Governance practice and GenAI learning into a personal checklist with placeholders for whichever organisation you are in (risk gate, identity, catalog, help channel).",
    deployment:
      "Interactive checklist on this site, password-protected. Also available as a private Claude Code skill (/ai-preflight) against real repos. A practitioner synthesis, not an official policy document. Reference apps: Use Summary Table, ARS Automation and AgriGuide QC.",
    impact: [
      { label: "Governance", before: "Reinvented on each agent", after: "One checklist, about 30 items" },
      { label: "Applied to", before: "—", after: "Use summary, ARS and AgriGuide QC" },
      { label: "What it forces", before: "A slide", after: "A kill switch, an owner, an audit trail" },
    ],
    metrics: [
      { label: "Sections", value: "6" },
      { label: "Checklist items", value: "~30" },
      { label: "Apps applied", value: "3" },
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
  {
    slug: "stealth-startup",
    title: "Stealth Startup: Regulatory Data Layer",
    tagline:
      "A company I am founding. It turns the regulatory facts scattered across a chemical company's documents and systems into one governed record, then generates labels and digital labels from it.",
    category: "Venture",
    status: "Stealth · pre-seed · working prototype",
    ownTime: true,
    problem:
      "In crop protection and construction chemicals, the same fact — a use rate, a pre-harvest interval, a hazard statement — has different values in the ERP, the label, the safety data sheet and the registration decision. Nobody can say who owns it or which source is true, and every regulatory change means weeks of hunting by hand. EU law now requires digital labels for plant protection products, and digital product passports are coming for construction products.",
    value:
      "One governed source of truth per product and country. When a regulator changes its mind, every affected label, document and system is found in minutes, with drafts to approve, instead of weeks of manual search.",
    solution:
      "AI reads, rules write, experts decide. Agents extract every fact with its evidence — the page and the exact quote — and a separate check confirms the quote is really there. Facts are reconciled by owner and authoritative source, and conflicts go to a steward, whose decision and reason are recorded and reused. Labels and digital labels are compiled by fixed rules, so no AI-written text reaches a released label, and nothing is released while a conflict is open.",
    deployment:
      "A working engine with connectors (folders, SharePoint, ERP and PIM exports), a shared regulatory model that each industry extends, a versioned decision ledger with an audit log, a label compiler, change impact and an API. It runs on published documents, and exports digital labels validated against the public AgriGuide schema. Pitch deck, explainer video and demo are done; details stay private for now.",
    impact: [
      { label: "Same fact, many systems", before: "Different values, no owner", after: "One governed record with evidence" },
      { label: "A regulatory change", before: "Weeks of manual hunting", after: "Affected labels found in minutes" },
      { label: "Expert judgement", before: "In a few senior heads", after: "Recorded once, reused" },
      { label: "Released labels", before: "Hand-assembled", after: "Compiled by rules, no AI text" },
    ],
    metrics: [
      { label: "Stage", value: "Pre-seed" },
      { label: "Principle", value: "AI reads, rules write" },
      { label: "Beachhead", value: "EU crop protection" },
      { label: "Next", value: "Construction" },
    ],
    stack: [
      "Python · FastAPI",
      "Claude (structured extraction)",
      "Evidence-linked facts",
      "Decision ledger · audit log",
      "Deterministic label compiler",
      "AgriGuide data model",
    ],
    links: [],
    featured: true,
  },
  {
    slug: "when-frontier-pays",
    title: "When Frontier Pays",
    tagline:
      "My own study of when a frontier model is worth its price for regulatory data work, and when rules or a small model do the job. Tested on 300 FDA drug labels.",
    category: "Research",
    status: "Study complete · November 2026",
    ownTime: true,
    problem:
      "Every agent I build raises the same question: which model for which step? The default is the biggest model everywhere, which is expensive, or a small one, which can be wrong in ways that are hard to see. I wanted numbers instead of opinions, on a task that looks like real regulatory work.",
    value:
      "A rule I now apply to agents: give the model the official list, use agreement as the escalation signal, and send only the hard cases to the frontier model. A hybrid matched or beat Opus on every task at 45% of the cost; a stricter setting came within about 0.01 on codes at about one ninth of the cost.",
    solution:
      "Three tasks per label, with FDA's own fields as the answer key: copy the package codes, map each active ingredient to its UNII code, and name the drug class. I compared plain rules, two small models on my laptop, Claude Haiku and Claude Opus, each from memory and with a lookup tool, and hybrids. Everything was tuned on 100 dev labels and frozen before one run on 300 test labels.",
    deployment:
      "Findings write-up with a cost-versus-accuracy chart. Total API spend for the study: $18.52.",
    impact: [
      { label: "Small models on codes", before: "Asked not to guess", after: "Still invented 80–99%" },
      { label: "Haiku with the official list", before: "0.42 F1 from memory", after: "0.95 F1, nothing invented" },
      { label: "Where rules and Haiku agreed", before: "—", after: "97% of labels fully right" },
      { label: "Hybrid vs Opus everywhere", before: "$22.61 per 1,000 labels", after: "$10.23, same or better" },
    ],
    metrics: [
      { label: "Test labels", value: "300" },
      { label: "Approaches", value: "9" },
      { label: "Hybrid cost vs Opus", value: "45%" },
      { label: "Study spend", value: "$18.52" },
    ],
    stack: [
      "openFDA",
      "Claude Haiku · Claude Opus",
      "Llama 3.1 8B · Mistral Small (local)",
      "Rules and dictionaries",
      "Python · TypeScript",
    ],
    links: [],
    featured: true,
    depth: [
      {
        question: "What I found",
        answer:
          "Copying is easy and recalling is where models split: every careful approach scored 0.96–0.99 on codes printed in the label, but 0.00–0.97 on codes that had to come from memory or a list. Small models invented codes even when told not to guess. Giving the model the official list did more than a bigger model. Where rules and Haiku agreed, 97% of labels were fully right, which makes agreement a reliable escalation signal. The frontier model's lasting edge is judgement, like choosing the drug class, and that edge is noisy from run to run.",
      },
      {
        question: "How I apply it",
        answer:
          "Rules first where the answer is printed, a cheap model with a lookup for normalisation, and the frontier model only where the cheap paths disagree. It is the same split I use in my production agents: deterministic checks on the high-risk fields, a model for the rest, and a person at the end.",
      },
      {
        question: "What its limitations are",
        answer:
          "One domain and 300 test labels, so a difference of 0.01–0.02 is a handful of labels. Opus's recall of ingredient codes is probably memorised public FDA data; private vocabularies would favour lookup even more. List prices from November 2026, one effort setting, and local model times from a laptop.",
      },
    ],
  },
  {
    slug: "chiku-personal-agent",
    title: "Chiku, my personal AI agent",
    tagline:
      "An AI agent I built for myself. It runs around the clock on a small server, talks to me on Telegram and in its own Hub app, and can act only after I approve.",
    category: "AI agent",
    status: "Running daily · personal project",
    ownTime: true,
    problem:
      "I wanted to understand how agents really work, not only use one, and I wanted one that is mine: my memory, my rules, and nothing that acts without me. The model turned out to be the easy part.",
    value:
      "A morning brief, meeting prep, inbox triage with drafted replies, deadlines, training and health from my coaching app, a journal and notes, overnight research on questions I queue, and trip planning from flights and hotels to the itinerary.",
    solution:
      "Chiku's own tools, skills, Hub and voice pipeline on top of an open-source agent loop. Memory is plain markdown I can read and edit, backed up every night. Scheduled jobs send the brief, a weekly training review and a nightly review. Voice notes are transcribed in English and Hindi. Gmail and Calendar are read-only by default.",
    deployment:
      "When I wanted it to send emails, not just draft them, the real work started. Chiku can only ask: each request shows the exact email and I approve it in Telegram or the Hub. What gets sent must match what I saw, so if the draft changes after the request the send is refused. Every request and decision is logged, and requests expire after 72 hours. None of that is prompting; it is code around the model.",
    impact: [
      { label: "Morning", before: "Opening five apps", after: "One brief at 7:00" },
      { label: "Email", before: "Read and write everything myself", after: "Triage and drafts, I approve" },
      { label: "Acting on my behalf", before: "—", after: "Only after approval, logged" },
      { label: "Memory", before: "Scattered notes", after: "Markdown I can read and edit" },
    ],
    metrics: [
      { label: "Runs", value: "24/7" },
      { label: "Channels", value: "Telegram · Hub" },
      { label: "Approval expiry", value: "72 h" },
      { label: "Gmail & Calendar", value: "Read-only" },
    ],
    stack: [
      "TypeScript",
      "Claude (Haiku · Sonnet · Opus)",
      "OpenClaw agent loop",
      "Telegram · Hub web app",
      "Markdown memory",
      "Speech-to-text",
    ],
    links: [{ label: "About Chiku", href: "/chiku" }],
    featured: true,
  },
  {
    slug: "sales-sequence-agent",
    title: "Sales Sequence Agent",
    tagline:
      "An agent I built for a business development rep at a B2B software company. It turns CRM notes into a personal LinkedIn and email sequence, and nothing goes out until she approves each line.",
    category: "AI agent",
    status: "Pilot · Netherlands, then Belgium",
    ownTime: true,
    problem:
      "Leads already arrived in the CRM with company notes from another agent, but outreach was cold calls and generic templates. Personalising every step of a LinkedIn and email sequence by hand did not scale, and handing the whole thing to an agent was not acceptable either.",
    value:
      "Each lead gets a sequence written for that person from the CRM notes, the rep approves every line, any reply stops the sequence, and an interested lead reaches her on Slack with the whole conversation so she can book the demo herself.",
    solution:
      "Skills pull never-contacted leads from the last 30 days in small daily batches, draft the full multichannel flow (profile visit, invite note, one email, two LinkedIn follow-ups), push approved lines to the sending tool, classify replies, and hand off interested leads on Slack. The rep can teach the agent how she writes, and that feedback never bypasses approval.",
    deployment:
      "A web app with a demo workspace plus Claude skills she runs with her own CRM, Gmail and Slack connectors. Governance is written down: approve before send, never auto-book a calendar, English write-backs to the CRM, and evals on the rules.",
    impact: [
      { label: "Outreach", before: "Cold calls, templates", after: "A personal sequence per lead" },
      { label: "Who decides", before: "—", after: "The rep approves every line" },
      { label: "A reply", before: "Tracked by hand", after: "Stops the sequence, gets classified" },
      { label: "Demo booking", before: "—", after: "Slack handoff, booked by a person" },
    ],
    metrics: [
      { label: "Channels", value: "LinkedIn + email" },
      { label: "Emails per lead", value: "1" },
      { label: "Approval", value: "Every line" },
      { label: "Auto-booking", value: "Never" },
    ],
    stack: [
      "Next.js · TypeScript",
      "Claude skills",
      "HubSpot",
      "Lemlist · Gmail",
      "Slack",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/karansingh2427/sales-generator" },
    ],
    featured: true,
  },
  {
    slug: "inquiry-agent",
    title: "Inquiry Agent for a Yoga School",
    tagline:
      "An agent that answers student inquiries for a yoga school in Rishikesh, by email and WhatsApp, from the school's own facts. Anything sensitive waits for the owner.",
    category: "AI agent",
    status: "Live · built for a yoga school in India",
    ownTime: true,
    problem:
      "The school's owner answered every website form, email and message himself, often the same questions about courses, dates, prices and payment, while also teaching. Slow replies meant students booked somewhere else.",
    value:
      "Clear questions get an answer in minutes. Bookings, payments, refunds, health and injuries, and anything not in the knowledge base stay as drafts for the owner. It costs about a dollar a month.",
    solution:
      "Every five minutes the agent reads new mail, including form notifications, skips newsletters and threads the owner already answered, and replies from a knowledge base of the school's facts and his rules. Labels in the inbox record what happened, so nothing is answered twice. WhatsApp runs alongside the owner's own app; if a reply cannot be sent there, he gets the suggested reply by email instead of a silent failure.",
    deployment:
      "Google Cloud Run on the free tier, woken by Cloud Scheduler, with secrets in Secret Manager and Claude Haiku as the default model. It runs in the owner's own Google account, and he can revoke access at any time.",
    impact: [
      { label: "Common questions", before: "Answered by hand, when he had time", after: "Answered in minutes" },
      { label: "Bookings, payments, health", before: "—", after: "Drafted, the owner decides" },
      { label: "Answered twice", before: "Easy to miss a thread", after: "Inbox labels prevent it" },
      { label: "Running cost", before: "—", after: "About $1 a month" },
    ],
    metrics: [
      { label: "Checks inbox", value: "Every 5 min" },
      { label: "Channels", value: "Email · WhatsApp" },
      { label: "Cost", value: "~$1 / month" },
      { label: "Model", value: "Claude Haiku" },
    ],
    stack: [
      "Python",
      "Claude Haiku",
      "Gmail API",
      "WhatsApp Business",
      "Google Cloud Run",
    ],
    links: [],
    featured: true,
  },
  {
    slug: "karuna-moves",
    title: "Karuna Moves",
    tagline:
      "A mobility, calisthenics and movement coaching app I built on my own time. Answer a few questions and you get a weekly plan that adapts to how each exercise felt.",
    category: "Product",
    status: "Live at karunamoves.com · personal project",
    ownTime: true,
    problem:
      "I coach friends on mobility and strength. Programs lived in chat messages and notes, nobody logged pain or weights, and I only found out an exercise hurt or was too easy at the next conversation.",
    value:
      "Each person gets a plan built around their goals, pain areas, equipment and the time they have, follows it on their phone, and sends me a weekly check-in. The plan adjusts itself between check-ins, so I spend my time on the program, not on chasing updates.",
    solution:
      "A two-minute setup (goals, pain areas, experience, equipment, days and session length) builds a week from a library of about 100 exercises, with rules and no AI. After every exercise people rate it Easy, Good, Hard or Hurt: easy gets more sets or the harder variation, hard or hurt eases off, and a pain area at 6/10 or more eases every exercise that loads it. Sessions have cues, easier and harder options, demo clips, hold timers, weight logging and a guided one-exercise-at-a-time mode. A body map lets people tap where it hurts and get safety checks and exercises for that spot.",
    deployment:
      "Installable web app (PWA) that works offline, on its own domain. Optional sign-in with an email code syncs plans across phones and opens a coach dashboard. There, AI can draft a program for a person, and I approve it before they see it — the same draft-then-human pattern as my agents at work.",
    impact: [
      { label: "Program", before: "Chat messages and notes", after: "A weekly plan on their phone" },
      { label: "Pain and effort", before: "Heard about at the next chat", after: "Rated after every exercise" },
      { label: "Progression", before: "Adjusted by hand, if at all", after: "Adjusts itself between check-ins" },
      { label: "AI programs", before: "—", after: "Drafted by AI, approved by me" },
    ],
    metrics: [
      { label: "Setup", value: "2 min" },
      { label: "Exercises", value: "~100" },
      { label: "Session length", value: "15–60 min" },
      { label: "Works", value: "Offline" },
    ],
    stack: [
      "React · TypeScript",
      "PWA (offline)",
      "Rule-based plan generator",
      "Supabase (sign-in, sync)",
      "Claude (coach-approved drafts)",
      "GitHub Pages",
    ],
    links: [{ label: "karunamoves.com", href: "https://karunamoves.com/" }],
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
