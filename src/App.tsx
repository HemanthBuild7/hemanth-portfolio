import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SystemsSection from './components/SystemsSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App: React.FC = () => (
  <>
    <a href="#main" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main">
      <HeroSection />
      <SystemsSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
)

export default App
