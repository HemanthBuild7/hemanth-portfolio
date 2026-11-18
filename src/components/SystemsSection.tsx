import React, { useRef, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { FlowNode, SYSTEMS } from '../data/resume'
import { Reveal, SectionHeader, Tag } from './ui'

const NODE_STYLES: Record<NonNullable<FlowNode['kind']>, string> = {
  default: 'border-line bg-ink',
  accent: 'border-signal/60 bg-signal/[0.07]',
  gate: 'border-gate/70 bg-gate/[0.08]',
}

const Node: React.FC<{ node: FlowNode }> = ({ node }) => (
  <div className={`border px-3 py-2.5 ${NODE_STYLES[node.kind ?? 'default']}`}>
    <p className="text-[13px] font-medium leading-snug text-fg">{node.title}</p>
    {node.detail && <p className="mt-1 text-xs leading-snug text-muted">{node.detail}</p>}
  </div>
)

const SystemsSection: React.FC = () => {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const system = SYSTEMS[active]

  const onKeyDown = (event: React.KeyboardEvent) => {
    const keys: Record<string, number> = {
      ArrowDown: (active + 1) % SYSTEMS.length,
      ArrowRight: (active + 1) % SYSTEMS.length,
      ArrowUp: (active - 1 + SYSTEMS.length) % SYSTEMS.length,
      ArrowLeft: (active - 1 + SYSTEMS.length) % SYSTEMS.length,
      Home: 0,
      End: SYSTEMS.length - 1,
    }
    const next = keys[event.key]
    if (next === undefined) return
    event.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <section id="systems" className="border-b border-line py-20 md:py-28">
      <div className="shell">
        <SectionHeader
          index="01"
          label="Systems"
          title="How the work fits together"
          intro="Simplified views of production systems I have built. Select one to see its architecture."
        />

        <Reveal className="grid border border-line lg:grid-cols-12">
          <div
            role="tablist"
            aria-label="Production systems"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="border-b border-line lg:col-span-4 lg:border-b-0 lg:border-r"
          >
            {SYSTEMS.map((item, i) => {
              const selected = i === active
              return (
                <button
                  key={item.id}
                  ref={el => { tabs.current[i] = el }}
                  id={`tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`block w-full border-b border-l-2 border-b-line px-5 py-4 text-left transition-colors last:border-b-0 ${
                    selected ? 'border-l-signal bg-panel' : 'border-l-transparent hover:bg-panel/60'
                  }`}
                >
                  <span className={`block text-[15px] font-medium ${selected ? 'text-fg' : 'text-soft'}`}>
                    {item.name}
                  </span>
                  <span className="mt-1 block font-mono text-xs text-muted">{item.org}</span>
                </button>
              )
            })}
          </div>

          <div
            id={`panel-${system.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${system.id}`}
            tabIndex={0}
            className="blueprint min-w-0 p-5 md:p-8 lg:col-span-8"
          >
            <p className="font-mono text-xs text-signal">{system.org}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg">{system.name}</h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-soft">{system.summary}</p>

            <ol className="mt-8 flex flex-col gap-2 xl:flex-row xl:items-stretch xl:gap-0">
              {system.flow.map((stage, i) => (
                <li key={stage.stage} className="flex min-w-0 flex-1 flex-col xl:flex-row">
                  <div className="min-w-0 flex-1">
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted">{stage.stage}</p>
                    <div className="grid gap-2">
                      {stage.nodes.map(node => <Node key={node.title} node={node} />)}
                    </div>
                  </div>
                  {i < system.flow.length - 1 && (
                    <div className="flex items-center justify-center py-1 text-faint xl:w-7 xl:flex-none xl:py-0 xl:pt-5" aria-hidden="true">
                      <ArrowDown size={15} className="xl:hidden" />
                      <ArrowRight size={15} className="hidden xl:block" />
                    </div>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-5">
              {system.stack.map(item => <Tag key={item}>{item}</Tag>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default SystemsSection
