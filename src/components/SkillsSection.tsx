import React from 'react'
import { Brain, Cpu, Cloud, Code2, Database, BarChart2, Layers, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface Skill {
  name: string
  di?: string     // devicon class suffix → <i className={`devicon-${di} colored`} />
  emoji?: string  // fallback for abstract skills
  color: string   // accent color for emoji badge bg
}

interface Group {
  Icon: LucideIcon
  title: string
  accent: string
  glowColor: string
  skills: Skill[]
}

const GROUPS: Group[] = [
  {
    Icon: Brain,
    title: "Generative AI & Agentic AI",
    accent: 'linear-gradient(90deg, #6366F1, #A855F7)',
    glowColor: 'rgba(99,102,241,0.22)',
    skills: [
      { name: "LLMs", emoji: '🧠', color: '#A855F7' },
      { name: "RAG", emoji: '🔍', color: '#8B5CF6' },
      { name: "LangGraph", emoji: '⛓️', color: '#7C3AED' },
      { name: "LangChain", emoji: '🦜', color: '#6366F1' },
      { name: "Model Context Protocol (MCP)", emoji: '🔌', color: '#8B5CF6' },
      { name: "Multi-Agent Systems", emoji: '🕸️', color: '#A855F7' },
      { name: "Tool Calling", emoji: '📞', color: '#6366F1' },
      { name: "Human-in-the-Loop", emoji: '🙋', color: '#7C3AED' },
      { name: "Prompt Engineering", emoji: '💬', color: '#6366F1' },
      { name: "Prompt Caching", emoji: '⚡', color: '#A855F7' },
      { name: "Structured Outputs", emoji: '🧾', color: '#8B5CF6' },
      { name: "OpenAI GPT", emoji: '🤖', color: '#10A37F' },
      { name: "Anthropic Claude", emoji: '🧬', color: '#B87A56' },
      { name: "Google Gemini", emoji: '✨', color: '#4285F4' },
      { name: "Hugging Face", emoji: '🤗', color: '#FFD21E' },
      { name: "Model Routing & Fallback", emoji: '🔀', color: '#6366F1' },
    ],
  },
  {
    Icon: Layers,
    title: "Retrieval & Evaluation",
    accent: 'linear-gradient(90deg, #3B82F6, #6366F1)',
    glowColor: 'rgba(59,130,246,0.18)',
    skills: [
      { name: "Embeddings", emoji: '📐', color: '#3B82F6' },
      { name: "Hybrid Search (BM25 + Vector)", emoji: '🔎', color: '#6366F1' },
      { name: "Reranking", emoji: '📶', color: '#3B82F6' },
      { name: "Metadata Filtering", emoji: '🏷️', color: '#6366F1' },
      { name: "Golden Datasets", emoji: '🥇', color: '#F59E0B' },
      { name: "LLM-as-a-Judge", emoji: '⚖️', color: '#3B82F6' },
      { name: "Ragas", emoji: '📏', color: '#6366F1' },
      { name: "A/B Testing", emoji: '🧪', color: '#EC4899' },
      { name: "Guardrails", emoji: '🛡️', color: '#10B981' },
      { name: "PII Redaction", emoji: '🔒', color: '#3B82F6' },
      { name: "Prompt-Injection Defense", emoji: '🚫', color: '#EF4444' },
      { name: "FAISS", emoji: '📚', color: '#6366F1' },
      { name: "OpenSearch", emoji: '🔍', color: '#005EB8' },
    ],
  },
  {
    Icon: Cpu,
    title: "Machine Learning & Deep Learning",
    accent: 'linear-gradient(90deg, #06B6D4, #3B82F6)',
    glowColor: 'rgba(6,182,212,0.18)',
    skills: [
      { name: "PyTorch", di: 'pytorch-original', color: '#EE4C2C' },
      { name: "TensorFlow", di: 'tensorflow-original', color: '#FF6F00' },
      { name: "scikit-learn", di: 'scikitlearn-plain', color: '#F7931E' },
      { name: "BERT", emoji: '🧩', color: '#06B6D4' },
      { name: "LayoutLMv3", emoji: '📄', color: '#3B82F6' },
      { name: "OpenCV", di: 'opencv-plain', color: '#5C3EE8' },
      { name: "OCR", emoji: '🔠', color: '#06B6D4' },
      { name: "NER", emoji: '🏷️', color: '#3B82F6' },
      { name: "Recommendation Systems", emoji: '🎯', color: '#06B6D4' },
      { name: "Collaborative Filtering", emoji: '🤝', color: '#3B82F6' },
      { name: "CNN", emoji: '🖼️', color: '#06B6D4' },
      { name: "LSTM", emoji: '🔁', color: '#3B82F6' },
      { name: "Fine-tuning", emoji: '🎛️', color: '#06B6D4' },
    ],
  },
  {
    Icon: Rocket,
    title: "LLM Inference, GPU & Observability",
    accent: 'linear-gradient(90deg, #10B981, #06B6D4)',
    glowColor: 'rgba(16,185,129,0.18)',
    skills: [
      { name: "DeepSpeed", emoji: '⚡', color: '#10B981' },
      { name: "TensorRT-LLM", emoji: '🚀', color: '#76B900' },
      { name: "NVIDIA Triton Inference Server", emoji: '🟩', color: '#76B900' },
      { name: "Tensor Parallelism", emoji: '🧮', color: '#06B6D4' },
      { name: "FlashAttention", emoji: '💡', color: '#10B981' },
      { name: "Distributed Training", emoji: '🌐', color: '#06B6D4' },
      { name: "LangSmith", emoji: '🔭', color: '#10B981' },
      { name: "Langfuse", emoji: '📡', color: '#06B6D4' },
      { name: "OpenTelemetry", emoji: '📈', color: '#10B981' },
      { name: "Prometheus", di: 'prometheus-original', color: '#E6522C' },
    ],
  },
  {
    Icon: Database,
    title: "Data Engineering",
    accent: 'linear-gradient(90deg, #F59E0B, #EF4444)',
    glowColor: 'rgba(245,158,11,0.18)',
    skills: [
      { name: "Python", di: 'python-plain', color: '#3776AB' },
      { name: "SQL", di: 'mysql-plain', color: '#4479A1' },
      { name: "Apache Spark", di: 'apachespark-original', color: '#E25A1C' },
      { name: "Redis", di: 'redis-plain', color: '#DC382D' },
      { name: "AWS S3", di: 'amazonwebservices-plain', color: '#FF9900' },
      { name: "Feature Pipelines", emoji: '🔨', color: '#F59E0B' },
      { name: "Batch & Streaming Processing", emoji: '🔄', color: '#EF4444' },
    ],
  },
  {
    Icon: Cloud,
    title: "MLOps & Cloud",
    accent: 'linear-gradient(90deg, #EC4899, #8B5CF6)',
    glowColor: 'rgba(236,72,153,0.18)',
    skills: [
      { name: "AWS (SageMaker \u00b7 Lambda \u00b7 EKS)", di: 'amazonwebservices-plain', color: '#FF9900' },
      { name: "Azure", di: 'azure-plain', color: '#0089D6' },
      { name: "Docker", di: 'docker-plain', color: '#2496ED' },
      { name: "Kubernetes", di: 'kubernetes-plain', color: '#326CE5' },
      { name: "Helm", di: 'helm-original', color: '#0F1689' },
      { name: "FastAPI", di: 'fastapi-plain', color: '#059669' },
      { name: "Flask", di: 'flask-original', color: '#8B5CF6' },
      { name: "REST APIs", emoji: '🔗', color: '#EC4899' },
      { name: "MLflow", emoji: '⚗️', color: '#0194E2' },
      { name: "GitHub Actions", di: 'githubactions-plain', color: '#2088FF' },
      { name: "Jenkins", di: 'jenkins-plain', color: '#D24939' },
      { name: "CI/CD", emoji: '♾️', color: '#8B5CF6' },
      { name: "Git", di: 'git-plain', color: '#F05032' },
    ],
  },
]

/* Individual skill chip */
const SkillChip: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.035, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-200
               hover:-translate-y-0.5 group/chip cursor-default"
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.07)',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLElement
      el.style.background = 'rgba(255,255,255,0.08)'
      el.style.borderColor = `${skill.color}55`
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLElement
      el.style.background = 'rgba(255,255,255,0.04)'
      el.style.borderColor = 'rgba(255,255,255,0.07)'
    }}
  >
    {/* Icon */}
    {skill.di ? (
      <i
        className={`devicon-${skill.di} colored text-[20px] shrink-0`}
        style={{ lineHeight: 1 }}
      />
    ) : (
      <span
        className="w-7 h-7 rounded-lg flex items-center justify-center text-[14px] shrink-0"
        style={{ background: `${skill.color}22`, border: `1px solid ${skill.color}33` }}
      >
        {skill.emoji}
      </span>
    )}

    {/* Name */}
    <span className="text-[11.5px] font-medium text-white/55 group-hover/chip:text-white/80 transition-colors leading-tight">
      {skill.name}
    </span>
  </motion.div>
)

/* Category card */
const SkillCard: React.FC<Group & { cardIndex: number }> = ({
  Icon, title, accent, glowColor, skills, cardIndex,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.55, delay: cardIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className="group relative rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1"
    style={{
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.06)',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLElement
      el.style.borderColor = 'rgba(255,255,255,0.12)'
      el.style.boxShadow = `0 20px 60px ${glowColor}`
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLElement
      el.style.borderColor = 'rgba(255,255,255,0.06)'
      el.style.boxShadow = 'none'
    }}
  >
    {/* Category icon */}
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0"
      style={{ background: accent }}
    >
      <Icon size={18} strokeWidth={1.8} className="text-white" />
    </div>

    {/* Title */}
    <h3 className="text-[15px] font-bold text-white/90 tracking-tight leading-tight mb-5">{title}</h3>

    {/* Divider */}
    <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.06)' }} />

    {/* Skill chips — 2-column grid */}
    <div className="grid grid-cols-2 gap-2">
      {skills.map((skill, i) => (
        <SkillChip key={skill.name} skill={skill} index={i} />
      ))}
    </div>
  </motion.div>
)

const SkillsSection: React.FC = () => (
  <section id="skills" className="bg-[#06090F]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-indigo-400 mb-4">
        Capabilities
      </p>
      <h2
        className="font-extrabold tracking-tight text-white mb-3"
        style={{ fontSize: 'clamp(44px, 6.5vw, 76px)', lineHeight: 0.93 }}
      >
        Skills &amp; Stack
      </h2>
      <p className="text-[15px] text-white/35 mb-16 max-w-xl leading-relaxed">
        Covering the full spectrum — LLM engineering, data science, cloud infrastructure,
        and forward deployment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GROUPS.map((g, i) => (
          <SkillCard key={i} cardIndex={i} {...g} />
        ))}
      </div>
    </div>
  </section>
)

export default SkillsSection
