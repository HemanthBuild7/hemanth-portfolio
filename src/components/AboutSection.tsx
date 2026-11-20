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
    location: 'USA',
    role: 'Applied AI/ML Associate',
    period: 'Jan 2026 – Present',
    current: true,
    bullets: [
      "Built a customer-support RAG assistant over 40,000 banking help articles using hybrid retrieval and reranking, answering from approved content with citations and escalating low-confidence queries; it resolves 1,800 tickets a month without agent handoff.",
      "Designed a LangGraph agent to automate customer refund and transaction dispute workflows across six internal account and transaction APIs, using checkpointing for long-running cases and human-in-the-loop approval for refunds above a set limit.",
      "Developed in-house Model Context Protocol (MCP) servers that expose dispute cases, refund records and customer transaction data as tools for AI agents, enforcing read-only scopes and full audit logging to meet the bank's compliance and audit requirements.",
      "Lowered LLM inference costs by 25% while holding response quality by benchmarking model configurations in MLflow, and introduced LLM-as-a-judge regression gates that block degraded models before they reach customer-facing production.",
      "Engineered distributed ingestion pipelines in Apache Spark to chunk, embed, enrich and index banking policy and product content, and added Redis-backed conversation memory to reduce redundant retrieval in multi-turn customer sessions.",
      "Automated customer case updates across CRM and ERP systems using REST API integrations and AWS Lambda, cutting manual processing effort by 30%, with OpenTelemetry and Prometheus monitoring for latency and failures.",
    ],
  },
  {
    company: 'Fiserv',
    companyShort: 'FI',
    companyColor: '#FB923C',
    companyBg: 'linear-gradient(135deg, #C2410C, #EA580C)',
    location: 'USA',
    role: 'AI / ML Engineer',
    period: 'Mar 2025 – Jan 2026',
    current: false,
    bullets: [
      "Built a model-routing gateway across OpenAI, Anthropic Claude and Google Gemini for general LLM workloads, with automatic fallback and prompt caching, cutting LLM spend by 38% and ending rate-limit outages.",
      "Optimized self-hosted open-weight LLM serving for workloads involving sensitive customer data, using TensorRT-LLM, NVIDIA Triton Inference Server, tensor parallelism and FlashAttention on private GPU clusters, reducing inference costs by 26%.",
      "Built a CI-integrated LLM evaluation pipeline using a 600-case golden dataset, Ragas faithfulness and LLM-as-a-judge scoring that blocks releases when quality regresses, improving response accuracy by 19%.",
      "Implemented guardrails for regulated financial data, including PII redaction on customer account data, prompt-injection checks on retrieved content and output schema validation.",
      "Developed asynchronous FastAPI inference services with streaming responses for internal banking and payments applications, with automated deployment and rollback on Kubernetes using Helm and GitHub Actions.",
      "Scaled distributed PyTorch fine-tuning with DeepSpeed across multiple GPUs, reducing training time by 24%, with distributed checkpointing and fault recovery for long-running jobs.",
      "Set up LLM observability with LangSmith, Langfuse, Prometheus and OpenTelemetry, including per-workflow cost dashboards and on-call runbooks.",
    ],
  },
  {
    company: 'Elevance Health',
    companyShort: 'ELV',
    companyColor: '#F87171',
    companyBg: 'linear-gradient(135deg, #B91C1C, #DC2626)',
    location: 'India',
    role: 'Data Scientist',
    period: 'Feb 2021 – Jul 2023',
    current: false,
    bullets: [
      "Built a recommendation system in Python and TensorFlow using collaborative filtering and deep embeddings to match health plan members with in-network providers and care management programs, raising member engagement from 3.2% to 3.9%.",
      "Developed document layout classification models with PyTorch and LayoutLMv3 for scanned claims and prior authorization forms, improving field extraction accuracy by 21%.",
      "Built document AI pipelines combining OpenCV preprocessing, ABBYY OCR and BERT-based entity extraction to capture member, provider and claim details from about 3 million documents a month, with PHI handled under HIPAA controls.",
      "Engineered features and batch pipelines in SQL, Python, Apache Spark and AWS S3 on member, provider and claims data, and validated models through A/B testing and offline ranking metrics (precision@k, recall@k, NDCG).",
      "Deployed models with AWS SageMaker GPU inference, FastAPI, Docker and Kubernetes (EKS) for about 18,000 claims and operations users, reducing serving costs by 27% and keeping latency under 250 ms at peak.",
    ],
  },
  {
    company: 'EPAM Systems',
    companyShort: 'EPAM',
    companyColor: '#38BDF8',
    companyBg: 'linear-gradient(135deg, #0369A1, #0284C7)',
    location: 'India',
    role: 'Junior Software Engineer',
    period: 'Apr 2018 – Dec 2019',
    current: false,
    bullets: [
      "Built SQL and Python pipelines consolidating policy, billing and claims data for Radian, a US mortgage insurer.",
      "Wrote data validation and transformation logic in Python and SQL to keep lender loan and policy records consistent across systems.",
      "Built Flask REST microservices for mortgage insurance quotes and policies, handling 10,000 lender requests a day.",
      "Helped migrate services to Docker and Kubernetes with Jenkins CI/CD pipelines, reducing deployment time from hours to minutes.",
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
