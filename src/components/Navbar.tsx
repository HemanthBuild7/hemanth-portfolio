import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PROFILE } from '../data/resume'

const LINKS = [
  { label: 'Systems', href: '#systems' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm text-fg">
          hemanth<span className="text-signal">.k</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {LINKS.map((link, i) => (
            <a key={link.href} href={link.href} className="font-mono text-[13px] text-muted transition-colors hover:text-fg">
              <span className="mr-1.5 text-faint">0{i + 1}</span>
              {link.label}
            </a>
          ))}
          {PROFILE.resumeUrl && (
            <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-2">
              Resume
            </a>
          )}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          className="-mr-2 p-2 text-fg md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-ink md:hidden">
          <div className="shell flex flex-col py-2">
            {LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 font-mono text-sm text-soft last:border-0"
              >
                <span className="mr-2 text-faint">0{i + 1}</span>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
