# LinkedIn Projects — paste-ready blurbs

**Suggested LinkedIn headline:**
Global Project & Program Lead and Product Owner | Agentic AI delivery & enablement in regulatory life sciences | PhD Physics

**Suggested About opener (first lines):**
I am a Global Project & Program Lead and Product Owner in life sciences. At Bayer I have deployed two production AI agents into regulatory work, both with a person reviewing the output before it is used. One drafts EPA use-summary tables from pesticide labels and cut that manual work by about 60–70% (88% field-level accuracy). The other reads safety data sheets and drafts the toxicology and ecotoxicology sections of country registration workbooks. Around that sits the global label-data platform and AgriGuide, the industry digital-label programme.

---

**Live portfolio:** https://karandeepsingh.vercel.app  
Project pages: `https://karandeepsingh.vercel.app/projects/<slug>`

---

## 1. Use Summary Table Extractor

**Project name:** Use Summary Table Extractor

**Description:**
Built and deployed a production agentic AI application that extracts Use Summary Tables from pesticide label PDFs for EPA-ready regulatory workflows — used by colleagues in their day job.

Problem: analysts spent 45–90 minutes per label (far longer across a portfolio) copying crop, use-site and rate data from long PDFs into a 28-column schema.

Solution: browser tool with dual paths (offline regex + LLM extraction → independent QC → human review). Deployed end-to-end on Cloudflare Pages + Workers with kill switch, rate limits, cost budget and audit trail.

Impact: ~60–70% less manual work; 88% field-level accuracy; hours/months of transcription → minutes of extraction + QC. Teams that finish a run refer the next team — new use cases keep arriving by word of mouth.

Skills: Agentic AI · Production delivery · LLM extraction · Human-in-the-loop · Regulatory sciences · Enablement

**Media / links:** GitHub: https://github.com/karansingh2427/use-summary-table · Portfolio: https://karandeepsingh.vercel.app/projects/use-summary-table

---

## 2. APRS Digitalisation

**Project name:** APRS Digitalisation

**Description:**
Production agent that reads MSDS (safety data sheet) PDFs and drafts toxicology and ecotoxicology in country-specific APRS Excel workbooks. Experts review before the scores are used. That portion is about 70% of the work per active ingredient. Same human-review pattern as the use-summary extractor. Do not reuse the 88% or 60–70% figures here; those belong to the label extractor.

Problem: filling APRS portfolios is manual classification + country schema lookup; even partial automation of tox/ecotox is expected to cover ~70% of the work per active ingredient.

Solution: staged pipeline (extract → apply country schema living in the workbook → write back in-place, preserving live Score/Overall APRS formulas). Same extract → human-review pattern as Use Summary Table, adapted for multi-sheet .xlsx/.xlsm templates and a ~63-ingredient portfolio.

Status: deployed. Experts review the draft before scores are used.

Skills: Document AI · Excel automation · Regulatory workflows · Human-in-the-loop · Production delivery

**Media / links:** https://github.com/karansingh2427/APRS_digitalisation · Portfolio: https://karandeepsingh.vercel.app/projects/aprs-digitalisation

---

## 3. AgriGuide — EU digital labels (CropLife Europe)

**Project name:** AgriGuide Label Digitisation

**Description:**
Helped deliver AgriGuide (https://www.agriguide.eu/) — the CropLife Europe digital-label platform now live for farmers — through cross-company alignment and Bayer’s internal rollout.

My role: heavily involved in the tech work stream and reference-data work stream; aligned with industry peers (Bayer, BASF, Syngenta, Corteva and other collaborators); coordinated Bayer across 27 EU countries and with IT, Marketing and Product Supply so we deliver on time.

Outcome: digital labels from many countries and companies already published (1,500+ labels on the public site footprint); Bayer on track to digitise its EU product portfolio by the 2028 deadline; ~40–50% less label-authoring effort via structured-data authoring.

Skills: Digital transformation · Change management · Cross-company consortia · Reference data · Programme delivery · Regulated life sciences

**Media / links:** https://www.agriguide.eu/ · Portfolio: https://karandeepsingh.vercel.app/projects/agriguide-digitisation

---

## 4. Global Label-Data Platform

**Project name:** Global Label-Data Platform (Product Ownership)

**Description:**
Product Owner for Bayer’s global label-data platform used across 27 countries for regulatory-information management and structured-data workflows.

Own vision, roadmap, backlog and adoption; €500k+ annual budget and €250k+ vendor contracts across AI, SaaS and data partners; quarterly releases covering 100+ product labels; executive-ready Steering Committee updates.

Connects business, regulatory and technical stakeholders — and hosts AI-enabled extraction and digitisation use cases on top of the platform.

Skills: Product ownership · Roadmapping · Vendor management · Regulated data platforms · Stakeholder alignment

**Media / links:** https://karandeepsingh.vercel.app/projects/global-label-data-platform

---

## 5. Pharma R&D Digital Programme (€1M+)

**Project name:** Pharma R&D Digital Programme

**Description:**
As Project & Product Manager in Bayer Pharma R&D IT, delivered a €1M+ digital programme from requirements through MVP rollout under Steering Committee governance.

Translated scientific and business needs into roadmaps, user stories and MVP scope for early-development research workflows; led Agile delivery (Scrum/Kanban) with testing, training and change management across research, IT and business stakeholders.

Skills: Programme management · Business analysis · Agile · Regulated IT · Change management

**Media / links:** https://karandeepsingh.vercel.app/projects/pharma-rd-digital-programme

---

## LinkedIn Featured (optional short pins)

1. **Agentic AI in production** — regulatory workflows from hours/months of manual work to minutes of extraction + QC; teams refer the next use case. https://karandeepsingh.vercel.app/projects/use-summary-table
2. **AgriGuide is live** — digital PPP labels; tech + reference-data work streams and 27-country coordination toward EU 2028. https://www.agriguide.eu/
3. **Portfolio** — Global Project & Program Lead and Product Owner · agentic AI delivery in life sciences. https://karandeepsingh.vercel.app/

---

## Tips when pasting on LinkedIn

- Add via **Profile → Add section → Projects** (or Featured).
- Keep each description under ~2,000 characters if the UI truncates.
- Tag skills already on your profile (Regulated Life Sciences, AI Governance, AI Program/Project Management).
- Prefer public metrics; avoid internal gateway/auth details.
