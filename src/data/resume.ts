/**
 * Single source of truth for all site content.
 * Every fact here comes from the resume. Update this file, not the components.
 */

export const PROFILE = {
  name: 'Hemanth K',
  role: 'AI Engineer',
  location: 'Atlanta, USA',
  email: 'hemanthk.halcyon@gmail.com',
  linkedin: 'https://www.linkedin.com/in/khemanthk7/',
  github: 'https://github.com/HemanthBuild7',
  repositories: 'https://github.com/HemanthBuild7?tab=repositories',
  /** Paste a shareable link to the current resume to show the Resume buttons. */
  resumeUrl: 'https://drive.google.com/file/d/1n6MG4yx6hHGKtjHDy-KDbfW-u5KHw1eS/view?usp=sharing',
  summary:
    'AI Engineer with 5 years of experience across software engineering, machine learning, and data science, including production LLM systems.',
}

export const LIFECYCLE = [
  { label: 'Retrieval', detail: 'Hybrid search, reranking' },
  { label: 'Evaluation', detail: 'Ragas, LLM-as-judge' },
  { label: 'Guardrails', detail: 'PII, prompt injection' },
  { label: 'Deployment', detail: 'Docker, Kubernetes, CI/CD' },
  { label: 'Monitoring', detail: 'LangSmith, Langfuse' },
  { label: 'Cost', detail: 'Model routing, prompt caching' },
]

export const METRICS = [
  { value: '5 yrs', label: 'across software, ML, and data science' },
  { value: '40,000', label: 'banking help articles behind a RAG assistant' },
  { value: '~1,800', label: 'tickets resolved monthly without a human agent' },
  { value: '~38%', label: 'lower monthly LLM spend through model routing' },
]

export type NodeKind = 'default' | 'accent' | 'gate'

export interface FlowNode {
  title: string
  detail?: string
  kind?: NodeKind
}

export interface FlowStage {
  stage: string
  nodes: FlowNode[]
}

export interface System {
  id: string
  name: string
  org: string
  summary: string
  flow: FlowStage[]
  stack: string[]
}

export const SYSTEMS: System[] = [
  {
    id: 'support-rag',
    name: 'Customer-support RAG assistant',
    org: 'JPMorgan Chase',
    summary:
      'Handles customer-support questions over 40,000 banking help articles and responds with cited answers.',
    flow: [
      { stage: 'Knowledge', nodes: [{ title: 'Banking help articles', detail: '40,000 articles' }] },
      { stage: 'Retrieve', nodes: [{ title: 'Hybrid retrieval' }, { title: 'Metadata filtering' }] },
      { stage: 'Rank', nodes: [{ title: 'Reranking' }] },
      { stage: 'Respond', nodes: [{ title: 'Cited answers', kind: 'accent' }] },
      {
        stage: 'Outcome',
        nodes: [{ title: '~1,800 tickets a month', detail: 'Resolved without a human agent', kind: 'accent' }],
      },
    ],
    stack: ['RAG', 'Hybrid retrieval', 'Rerankers', 'Metadata filtering', 'Cited answers'],
  },
  {
    id: 'refund-agent',
    name: 'Refund and dispute agent',
    org: 'JPMorgan Chase',
    summary:
      'A LangGraph agent for refund and dispute workflows, with checkpointing for long-running cases and a human approval step.',
    flow: [
      { stage: 'Intake', nodes: [{ title: 'Refund and dispute cases' }] },
      {
        stage: 'Orchestrate',
        nodes: [
          { title: 'LangGraph agent', kind: 'accent' },
          { title: 'Checkpoints', detail: 'Long-running cases' },
        ],
      },
      { stage: 'Act', nodes: [{ title: '6 internal APIs', detail: 'Account and transaction' }] },
      {
        stage: 'Approve',
        nodes: [{ title: 'Human approval', detail: 'Refunds above a set limit', kind: 'gate' }],
      },
    ],
    stack: ['LangGraph', 'Tool calling', 'Checkpointing', 'Human-in-the-loop'],
  },
  {
    id: 'mcp-servers',
    name: 'In-house MCP servers',
    org: 'JPMorgan Chase',
    summary:
      'Gives support agents governed access to dispute, refund, and transaction data through read-only scopes.',
    flow: [
      { stage: 'Client', nodes: [{ title: 'Support agents' }] },
      {
        stage: 'Interface',
        nodes: [
          { title: 'MCP servers', kind: 'accent' },
          { title: 'Read-only scopes', kind: 'gate' },
        ],
      },
      {
        stage: 'Data',
        nodes: [{ title: 'Dispute cases' }, { title: 'Refund records' }, { title: 'Transaction data' }],
      },
      { stage: 'Govern', nodes: [{ title: 'Full audit logs', kind: 'accent' }] },
    ],
    stack: ['MCP', 'Read-only scopes', 'Audit logs'],
  },
  {
    id: 'eval-gate',
    name: 'LLM evaluation release gate',
    org: 'Fiserv',
    summary: 'A CI-integrated evaluation pipeline that blocks releases when evaluation quality regresses.',
    flow: [
      { stage: 'Dataset', nodes: [{ title: 'Golden dataset', detail: '600 cases' }] },
      { stage: 'Score', nodes: [{ title: 'Ragas faithfulness' }, { title: 'LLM-as-judge' }] },
      { stage: 'Integrate', nodes: [{ title: 'CI pipeline', kind: 'accent' }] },
      {
        stage: 'Gate',
        nodes: [{ title: 'Release blocked', detail: 'When quality regresses', kind: 'gate' }],
      },
    ],
    stack: ['Golden datasets', 'Ragas', 'LLM-as-judge', 'CI/CD'],
  },
  {
    id: 'model-gateway',
    name: 'Model-routing gateway',
    org: 'Fiserv',
    summary:
      'Routes LLM traffic across OpenAI, Claude, and Gemini with automatic fallback and prompt caching.',
    flow: [
      { stage: 'Traffic', nodes: [{ title: 'LLM requests' }] },
      {
        stage: 'Gateway',
        nodes: [
          { title: 'Model routing', kind: 'accent' },
          { title: 'Prompt caching' },
          { title: 'Automatic fallback' },
        ],
      },
      { stage: 'Providers', nodes: [{ title: 'OpenAI' }, { title: 'Claude' }, { title: 'Gemini' }] },
      {
        stage: 'Outcome',
        nodes: [
          { title: '~38% lower spend', detail: 'Monthly LLM cost', kind: 'accent' },
          { title: 'Rate-limit outages ended', kind: 'accent' },
        ],
      },
    ],
    stack: ['Model routing', 'Automatic fallback', 'Prompt caching'],
  },
]

export const EXPERIENCE = [
  {
    role: 'AI Engineer',
    company: 'JPMorgan Chase',
    location: 'Atlanta, USA',
    period: 'Jan 2026 – Present',
    current: true,
    points: [
      'Built a customer-support RAG assistant over 40,000 banking help articles using hybrid retrieval, reranking and metadata filtering, with cited answers; it now resolves about 1,800 tickets a month without human agent intervention.',
      'Designed a LangGraph agent for refund and dispute workflows that calls six internal account and transaction APIs, checkpoints long-running cases and requires human approval for refunds above a set limit.',
      'Designed in-house MCP servers exposing dispute cases, refund records and transaction data to support agents, with read-only scopes and full audit logs.',
    ],
  },
  {
    role: 'AI / ML Engineer',
    company: 'Fiserv',
    location: 'Atlanta, USA',
    period: 'Mar 2025 – Jan 2026',
    current: false,
    points: [
      'Built a CI-integrated LLM evaluation pipeline using a 600-case golden dataset, Ragas faithfulness, and LLM-as-judge scoring to block releases when evaluation quality regressed.',
      'Added guardrails for PII redaction on customer account data, prompt-injection checks on retrieved content and output schema validation.',
      'Introduced a model-routing gateway across OpenAI, Claude and Gemini with automatic fallback and prompt caching, cutting monthly LLM spend by about 38% and ending rate-limit outages.',
      'Built observability with LangSmith and Langfuse traces, per-workflow cost dashboards and on-call runbooks.',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'Elevance Health',
    location: 'Hyderabad, India',
    period: 'Feb 2021 – Jul 2023',
    current: false,
    points: [
      'Built a recommendation system in Python and TensorFlow using collaborative filtering and deep embeddings on member and provider interaction data, lifting engagement from 3.2% to 3.9%.',
      'Built feature pipelines in SQL, Python and Spark to process member and provider interaction data in real time for model training.',
      'Validated models with A/B testing and offline metrics (precision@k, recall@k, NDCG) to choose which version went to production.',
      'Deployed the recommendation service with Docker and Kubernetes (EKS), keeping latency under 250ms at peak traffic.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    company: 'EPAM Systems',
    location: 'Hyderabad, India',
    period: 'Apr 2018 – Dec 2019',
    current: false,
    points: [
      "Built backend services and data pipelines in Python and SQL for Radian's mortgage insurance policy, billing and claims data.",
      'Built Python/Flask microservices for mortgage insurance quotes and policy management, serving 10,000 lender requests daily.',
      'Helped move services to Docker and Kubernetes with CI/CD on Jenkins, reducing deployment time from hours to minutes.',
    ],
  },
]

export const PROJECTS = [
  {
    name: 'Multi-agent research assistant',
    description:
      'LangGraph planner, researcher, writer and critic agents with checkpoints and a human approval step.',
    tags: ['LangGraph', 'Multi-agent', 'Checkpoints', 'Human approval'],
  },
  {
    name: 'Memory-based personal assistant',
    description:
      'Assistant with short-term and long-term memory, user profiles and token budgeting for long conversations.',
    tags: ['Short-term memory', 'Long-term memory', 'User profiles', 'Token budgeting'],
  },
  {
    name: 'Advanced RAG system',
    description:
      'Hybrid search (BM25 plus vectors), reranking, metadata filtering and role-based access; evaluated with Ragas.',
    tags: ['BM25 + vectors', 'Reranking', 'RBAC', 'Ragas'],
  },
]

export const SKILLS = [
  {
    group: 'Agentic AI',
    items: ['Multi-agent systems', 'LangGraph', 'MCP', 'Tool calling', 'Model routing', 'Automatic fallback', 'Human-in-the-loop', 'Checkpointing'],
  },
  {
    group: 'RAG',
    items: ['Chunking', 'LangChain', 'Embeddings', 'Hybrid retrieval', 'BM25', 'RBAC', 'Rerankers', 'Metadata filtering', 'Cited answers', 'Audit logs'],
  },
  {
    group: 'LLM Engineering',
    items: ['OpenAI', 'Anthropic Claude', 'Gemini', 'Prompt engineering', 'Prompt caching', 'Structured outputs', 'Output schema validation'],
  },
  {
    group: 'AI Evaluation and Safety',
    items: ['Golden datasets', 'Ragas', 'LLM-as-judge', 'A/B testing', 'Guardrails', 'PII redaction', 'Prompt-injection defense'],
  },
  {
    group: 'Machine Learning',
    items: ['TensorFlow', 'Recommendation systems', 'Collaborative filtering', 'Deep embeddings', 'LSTM', 'CNN', 'ARIMA'],
  },
  {
    group: 'Programming and Data Engineering',
    items: ['Python', 'SQL', 'Spark', 'Feature pipelines', 'Real-time data processing'],
  },
  {
    group: 'Backend and Cloud Deployment',
    items: ['Flask', 'REST APIs', 'Microservices', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'CI/CD', 'Git', 'GitHub'],
  },
  {
    group: 'LLMOps and Observability',
    items: ['LangSmith', 'Langfuse', 'Tracing', 'Cost dashboards'],
  },
]

export const EDUCATION = [
  { degree: 'M.S. in Business Analytics', school: 'Mercer University', year: '2024' },
  { degree: 'M.S. in Advanced Computer Science', school: 'University of Leicester', year: '2022' },
  { degree: "Bachelor's in Computer Science and Engineering", school: 'Andhra University', year: '2017' },
]
