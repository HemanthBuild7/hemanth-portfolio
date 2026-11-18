import React from 'react'
import { Calendar, MapPin, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

type Degree = {
  school: string
  schoolShort: string
  schoolColor: string
  schoolBg: string
  location: string
  degree: string
  year: string
}

const DEGREES: Degree[] = [
  {
    school: 'Mercer University',
    schoolShort: 'MU',
    schoolColor: '#FB923C',
    schoolBg: 'linear-gradient(135deg, #C2410C, #EA580C)',
    location: 'Georgia, USA',
    degree: 'M.S. in Business Analytics',
    year: '2024',
  },
  {
    school: 'University of Leicester',
    schoolShort: 'UoL',
    schoolColor: '#F87171',
    schoolBg: 'linear-gradient(135deg, #B91C1C, #DC2626)',
    location: 'Leicester, UK',
    degree: 'M.S. in Advanced Computer Science',
    year: '2022',
  },
  {
    school: 'Andhra University',
    schoolShort: 'AU',
    schoolColor: '#38BDF8',
    schoolBg: 'linear-gradient(135deg, #0369A1, #0284C7)',
    location: 'India',
    degree: "Bachelor's in Computer Science and Engineering",
    year: '2017',
  },
]

const EducationSection: React.FC = () => (
  <section id="education" className="bg-[#06090F]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

      <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-indigo-400 mb-4">
        Academic Background
      </p>
      <h2
        className="font-extrabold tracking-tight text-white mb-16"
        style={{ fontSize: 'clamp(44px, 6.5vw, 76px)', lineHeight: 0.93 }}
      >
        Education
      </h2>

      {/* Timeline */}
      <div className="relative">
        <div
          className="absolute left-[27px] top-4 bottom-4 w-px hidden md:block"
          style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.45), rgba(99,102,241,0.04))' }}
        />

        <div className="space-y-5">
          {DEGREES.map((item, i) => (
            <motion.div
              key={item.school}
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
                  style={{ background: '#0A0F1C', borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <GraduationCap size={14} className="text-white/35" />
                </div>
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl p-7 md:p-9 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.022)', border: '1px solid rgba(255,255,255,0.055)' }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                                 text-white text-[13px] font-black tracking-wide shadow-lg"
                      style={{ background: item.schoolBg }}
                    >
                      {item.schoolShort}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1">
                        <span className="text-[14px] font-bold tracking-wide" style={{ color: item.schoolColor }}>
                          {item.school}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-white/28">
                          <MapPin size={10} />
                          {item.location}
                        </span>
                      </div>
                      <h3 className="text-[18px] md:text-[20px] font-bold text-white leading-snug">
                        {item.degree}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[12px] text-white/28 shrink-0">
                    <Calendar size={12} />
                    {item.year}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default EducationSection
