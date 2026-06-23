// import { useState } from 'react';
// import { useScrollReveal } from './hooks/useScrollReveal';

// import Navbar from "./components/Navbar"
// import Hero         from './components/Hero';
// import About        from './components/About';
// import Education    from './components/Education';
// import Experience   from './components/Experience';
// import Projects     from './components/Projects';
// import Skills       from './components/Skills';
// import Volunteering from './components/Volunteering';
// import Contact      from './components/Contact';
// import Footer       from './components/Footer';

// export default function App() {
//   const [photo, setPhoto] = useState(null);
//   useScrollReveal();

//   return (
//     <>
//       {/* Background blobs */}
//       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//         <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full"
//              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }} />
//         <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full"
//              style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)' }} />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
//              style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.03) 0%, transparent 70%)' }} />
//       </div>

//       <div className="relative z-10">
//         <Navbar />
//         <Hero photoUrl={photo} onPhotoChange={setPhoto} />
//         <About />
//         <Education />
//         <Experience />
//         <Projects />
//         <Skills />
//         <Volunteering />
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   );
// }

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';

import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function HomePage({ photo, setPhoto }) {
  useScrollReveal();
  return (
    <>
      <Hero photoUrl={photo} onPhotoChange={setPhoto} />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Volunteering />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  const [photo, setPhoto] = useState(null);
  // useScrollReveal();

  return (
    <BrowserRouter>
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage photo={photo} setPhoto={setPhoto} />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}