import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './Hello.jsx'
import About from './About.jsx'
import Experience from './Experience.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('home')).render(
  <StrictMode>
    <Hello />
  </StrictMode>,
)

createRoot(document.getElementById('about')).render(
  <StrictMode>
    <About />
  </StrictMode>,
)

createRoot(document.getElementById('experience')).render(
  <StrictMode>
    <Experience />
  </StrictMode>,
)

createRoot(document.getElementById('contact')).render(
  <StrictMode>
    <Contact />
  </StrictMode>,
)

