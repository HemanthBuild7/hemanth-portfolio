import React from 'react'
import { PROFILE } from '../data/resume'

const Footer: React.FC = () => (
  <footer className="border-t border-line">
    <div className="shell flex flex-col justify-between gap-2 py-7 font-mono text-xs text-muted sm:flex-row">
      <p>© {new Date().getFullYear()} {PROFILE.name}</p>
      <p>{PROFILE.role} · {PROFILE.location}</p>
    </div>
  </footer>
)

export default Footer
