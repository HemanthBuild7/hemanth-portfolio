import React from 'react'
import { EDUCATION, SKILLS } from '../data/resume'
import { Reveal, SectionHeader, Tag } from './ui'

const SkillsSection: React.FC = () => (
  <section id="stack" className="border-b border-line py-20 md:py-28">
    <div className="shell">
      <SectionHeader index="04" label="Stack" title="Tools and training" />

      <dl className="border-t border-line">
        {SKILLS.map(skill => (
          <Reveal key={skill.group} className="grid gap-3 border-b border-line py-5 md:grid-cols-12 md:gap-8">
            <dt className="text-[15px] font-medium text-fg md:col-span-4">{skill.group}</dt>
            <dd className="flex flex-wrap gap-2 md:col-span-8">
              {skill.items.map(item => <Tag key={item}>{item}</Tag>)}
            </dd>
          </Reveal>
        ))}
      </dl>

      <h3 className="eyebrow mb-5 mt-16">Education</h3>
      <ul className="grid gap-px border border-line bg-line md:grid-cols-3">
        {EDUCATION.map(item => (
          <li key={item.degree} className="flex flex-col bg-ink p-6">
            <p className="font-mono text-xs text-signal">{item.year}</p>
            <p className="mt-4 text-[15px] font-medium leading-snug text-fg">{item.degree}</p>
            <p className="mt-1.5 text-sm text-muted">{item.school}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default SkillsSection
