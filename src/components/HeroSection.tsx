import React from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import portrait from '../assets/profile-portrait.webp'
import { LIFECYCLE, METRICS, PROFILE } from '../data/resume'

const HeroSection: React.FC = () => (
  <section id="top" className="relative border-b border-line pt-16">
    <div className="shell grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
      <div className="flex flex-col justify-center lg:col-span-8">
        <p className="eyebrow mb-6">
          {PROFILE.name} <span className="text-faint">/</span> <span className="text-signal">{PROFILE.role}</span>
        </p>
        <h1 className="max-w-4xl text-[42px] font-semibold leading-[1.03] tracking-tight text-fg sm:text-6xl lg:text-[76px]">
          Production LLM systems, built end to end.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-soft md:text-xl">
          I build RAG assistants and LangGraph agents, from retrieval and evaluation to guardrails, deployment,
          monitoring, and cost optimization.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#systems" className="btn-primary">
            View systems <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="btn-secondary">
            <Mail size={16} aria-hidden="true" /> Email me
          </a>
          {PROFILE.resumeUrl && (
            <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Resume
            </a>
          )}
        </div>
      </div>

      <figure className="relative mx-auto w-full max-w-[340px] lg:col-span-4 lg:mx-0 lg:max-w-none">
        <div className="corner-frame border border-line bg-panel p-2">
          <img
            src={portrait}
            alt="Portrait of Hemanth K"
            width={800}
            height={1000}
            className="aspect-[4/5] w-full object-cover grayscale-[35%]"
          />
        </div>
        <figcaption className="mt-3 flex justify-between font-mono text-xs text-muted">
          <span>{PROFILE.location}</span>
          <span>{PROFILE.role}</span>
        </figcaption>
      </figure>
    </div>

    <div className="border-t border-line bg-panel/60">
      <ol className="shell grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6" aria-label="LLM system lifecycle">
        {LIFECYCLE.map((step, i) => (
          <li key={step.label} className="lifecycle-step py-5 pr-4">
            <p className="font-mono text-xs text-signal">0{i + 1}</p>
            <p className="mt-2 text-sm font-medium text-fg">{step.label}</p>
            <p className="mt-1 text-[13px] leading-snug text-muted">{step.detail}</p>
          </li>
        ))}
      </ol>
    </div>

    <div className="border-t border-line">
      <dl className="shell grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
      {METRICS.map(metric => (
        <div key={metric.value}>
          <dt className="sr-only">{metric.label}</dt>
          <dd className="font-mono text-3xl font-medium tracking-tight text-fg md:text-[40px]">{metric.value}</dd>
          <dd className="mt-2 max-w-[240px] text-sm leading-snug text-muted">{metric.label}</dd>
        </div>
      ))}
      </dl>
    </div>
  </section>
)

export default HeroSection
