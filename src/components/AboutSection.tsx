import React from 'react'
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

type Job = {
  company: string
  companyShort: string
  companyColor: string
  companyBg: string
  location: string
  role: string
  period: string
  current: boolean
  isEdu?: boolean
  bullets: string[]
}

const JOBS: Job[] = [
  {
    company: 'JPMorgan Chase',
    companyShort: 'JPM',
    companyColor: '#38BDF8',
    companyBg: 'linear-gradient(135deg, #0369A1, #0284C7)',
    location: 'Atlanta, USA',
    role: 'AI Engineer',
    period: 'Jan 2026 – Present',
    current: true,
    bullets: [
      "Built a customer-support RAG assistant over 40,000 banking help articles using hybrid retrieval, reranking and metadata filtering, with cited answers; it now resolves about 1,800 tickets a month without human agent intervention.",
      "Designed a LangGraph agent for refund and dispute workflows that calls six internal account and transaction APIs, checkpoints long-running cases and requires human approval for refunds above a set limit.",
      "Designed in-house MCP servers exposing dispute cases, refund records and transaction data to support agents, with read-only scopes and full audit logs.",
      "Developed the document ingestion pipeline for chunking help articles, generating embeddings and keeping the retrieval index current as content changed.",
      "Applied role-based access controls and metadata filters so retrieval stayed limited to content appropriate for each user and workflow.",
      "Engineered prompts, tool definitions and structured outputs to keep agent decisions and API calls predictable across refund and dispute scenarios.",
      "Evaluated retrieval and answer quality with golden datasets and Ragas, using the results to tune chunking, reranking and prompts before release.",
      "Implemented guardrails for sensitive customer data, prompt-injection defense and output schema validation across assistant and agent workflows.",
      "Monitored production workflows with LangSmith and Langfuse tracing to debug failures, review agent behavior and track LLM cost.",
      "Deployed LLM services as containerized REST APIs using Docker, Kubernetes and CI/CD, working with support and engineering teams from requirements through production rollout.",
    ],
  },
  {
    company: 'Fiserv',
    companyShort: 'FI',
    companyColor: '#FB923C',
    companyBg: 'linear-gradient(135deg, #C2410C, #EA580C)',
    location: 'Atlanta, USA',
    role: 'AI / ML Engineer',
    period: 'Mar 2025 – Jan 2026',
    current: false,
    bullets: [
      "Built a CI-integrated LLM evaluation pipeline using a 600-case golden dataset, Ragas faithfulness, and LLM-as-judge scoring to block releases when evaluation quality regressed.",
      "Added guardrails for PII redaction on customer account data, prompt-injection checks on retrieved content and output schema validation.",
      "Introduced a model-routing gateway across OpenAI, Claude and Gemini with automatic fallback and prompt caching, cutting monthly LLM spend by about 38% and ending rate-limit outages.",
      "Built observability with LangSmith and Langfuse traces, per-workflow cost dashboards and on-call runbooks.",
      "Curated and maintained golden test cases with domain experts so evaluation coverage reflected real customer scenarios.",
      "Defined routing and fallback policies for each workflow by balancing response quality, latency and cost across model providers.",
      "Designed and refined prompts and structured outputs, validating each change against the evaluation pipeline before release.",
      "Analyzed traces and evaluation failures to find root causes and prioritize prompt, retrieval and model improvements.",
      "Delivered LLM workflows as REST APIs and microservices, deployed with Docker, Kubernetes and CI/CD pipelines.",
      "Partnered with product, platform and security teams to take LLM features from prototype to production and supported them through on-call incident response.",
    ],
  },
  {
    company: 'Elevance Health',
    companyShort: 'ELV',
    companyColor: '#F87171',
    companyBg: 'linear-gradient(135deg, #B91C1C, #DC2626)',
    location: 'Hyderabad, India',
    role: 'Data Scientist',
    period: 'Feb 2021 – Jul 2023',
    current: false,
    bullets: [
      "Built a recommendation system in Python and TensorFlow using collaborative filtering and deep embeddings on member and provider interaction data, lifting engagement from 3.2% to 3.9%.",
      "Built feature pipelines in SQL, Python and Spark to process member and provider interaction data in real time for model training.",
      "Validated models with A/B testing and offline metrics (precision@k, recall@k, NDCG) to choose which version went to production.",
      "Deployed the recommendation service with Docker and Kubernetes (EKS), keeping latency under 250ms at peak traffic.",
      "Worked with product and business stakeholders to translate engagement goals into machine learning problems and measurable success criteria.",
      "Performed data cleaning and exploratory analysis on member and provider data to identify usable signals and data quality issues.",
      "Engineered features and trained, tuned and compared embedding-based models to improve recommendation relevance.",
      "Exposed model predictions through REST APIs and automated build and release steps with CI/CD.",
      "Monitored production model performance and data quality, retraining models as member behavior changed.",
      "Presented experiment results and model recommendations to stakeholders to support production rollout decisions.",
    ],
  },
  {
    company: 'EPAM Systems',
    companyShort: 'EPAM',
    companyColor: '#38BDF8',
    companyBg: 'linear-gradient(135deg, #0369A1, #0284C7)',
    location: 'Hyderabad, India',
    role: 'Junior Software Engineer',
    period: 'Apr 2018 – Dec 2019',
    current: false,
    bullets: [
      "Built backend services and data pipelines in Python and SQL for Radian's mortgage insurance policy, billing and claims data.",
      "Built Python/Flask microservices for mortgage insurance quotes and policy management, serving 10,000 lender requests daily.",
      "Helped move services to Docker and Kubernetes with CI/CD on Jenkins, reducing deployment time from hours to minutes.",
      "Developed and maintained REST APIs supporting quote, policy, billing and claims workflows.",
      "Wrote and optimized SQL queries to support reliable data access across backend services and pipelines.",
      "Wrote unit and integration tests and took part in code reviews using Git and GitHub.",
      "Troubleshot application and data pipeline issues, working with senior engineers to identify root causes and ship fixes.",
      "Collaborated with business analysts, QA and engineering teams in Agile sprints to deliver features and document services.",
    ],
  },
]

/* Company logo badge */
const CompanyLogo: React.FC<{ job: Job }> = ({ job }) => (
  <div
    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0
               text-white text-[13px] font-black tracking-wide shadow-lg"
    style={{ background: job.companyBg }}
  >
    {job.companyShort}
  </div>
)

const AboutSection: React.FC = () => (
  <section id="about" className="bg-[#06090F]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

      <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-indigo-400 mb-4">
        Career Path
      </p>
      <h2
        className="font-extrabold tracking-tight text-white mb-16"
        style={{ fontSize: 'clamp(44px, 6.5vw, 76px)', lineHeight: 0.93 }}
      >
        Experience
      </h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical guide line */}
        <div
          className="absolute left-[27px] top-4 bottom-4 w-px hidden md:block"
          style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.45), rgba(99,102,241,0.04))' }}
        />

        <div className="space-y-5">
          {JOBS.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-7 md:gap-10"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center shrink-0 w-14 pt-7">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center border-2 z-10"
                  style={job.current ? {
                    background: 'linear-gradient(135deg, #6366F1, #7C3AED)',
                    borderColor: 'rgba(99,102,241,0.5)',
                    boxShadow: '0 0 16px rgba(99,102,241,0.45)',
                  } : {
                    background: '#0A0F1C',
                    borderColor: 'rgba(255,255,255,0.1)',
                  }}
                >
                  {job.isEdu
                    ? <GraduationCap size={14} className={job.current ? 'text-white' : 'text-white/35'} />
                    : <Briefcase size={14} className={job.current ? 'text-white' : 'text-white/35'} />
                  }
                </div>
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl p-7 md:p-9 transition-all duration-300"
                style={{
                  background: job.current
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.07), rgba(124,58,237,0.03))'
                    : 'rgba(255,255,255,0.022)',
                  border: job.current
                    ? '1px solid rgba(99,102,241,0.22)'
                    : '1px solid rgba(255,255,255,0.055)',
                }}
              >
                {/* Card header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <CompanyLogo job={job} />
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1">
                        <span className="text-[14px] font-bold tracking-wide" style={{ color: job.companyColor }}>
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-white/28">
                          <MapPin size={10} />
                          {job.location}
                        </span>
                        {job.current && (
                          <span
                            className="inline-flex items-center gap-1.5 text-[10px] font-bold
                                       tracking-widest uppercase px-2.5 py-1 rounded-full"
                            style={{
                              color: '#34D399',
                              background: 'rgba(52,211,153,0.1)',
                              border: '1px solid rgba(52,211,153,0.22)',
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-[18px] md:text-[20px] font-bold text-white leading-snug">
                        {job.role}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[12px] text-white/28 shrink-0">
                    <Calendar size={12} />
                    {job.period}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.05)' }} />

                {/* Bullet points */}
                <ul className="space-y-3">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-[14px] text-white/45 leading-[1.75]">
                      <span
                        className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: job.current ? 'rgba(129,140,248,0.7)' : 'rgba(255,255,255,0.2)' }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection
