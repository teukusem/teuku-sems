import { useState } from 'react';
import { motion } from 'framer-motion';

// Components
import { Header } from './components/Header';
import { HeroText } from './components/HeroText';
import { CircularText } from './components/CircularText';
import { AboutMeHighlight } from './components/AboutMeHighlight';
import { TechnologyTicker } from './components/TechnologyTicker';
import { ProjectCard } from './components/ProjectCard';

// Data
import { projects } from './data/projects';
import { primaryTechnologies, secondaryTechnologies } from './data/skills';

// Constants
import { sectionVariants, childVariants } from './constants/animations';
import { ANIMATION_DURATIONS } from './constants/ui';

interface AppProps {
  onNavigate?: (path: string) => void;
}

export default function App({ onNavigate: _ }: AppProps) {
  const [splashComplete] = useState(true);

  return (
    <div className="min-h-screen overflow-hidden text-white bg-black font-michroma">
      <Header />
      
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16">
        {/* <SplashProfile onAnimationComplete={handleSplashComplete} /> */}
        <HeroText splashComplete={splashComplete} />
        
        <CircularText />
        
        <motion.div
          className="absolute bottom-16 right-8 md:bottom-20 md:right-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs tracking-wider text-right text-gray-300 uppercase">
            Available For Freelance<br />
            Work From JAN '24
          </p>
        </motion.div>
        
        <motion.div
          className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="mailto:semteuku02@gmail.com"
            className="text-xs font-bold text-white underline uppercase transition-colors duration-300 cursor-pointer hover:text-red-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LET'S TALK
          </motion.a>
        </motion.div>
      </section>

      <section className="relative flex flex-col justify-center min-h-screen p-8 md:p-16 lg:p-24">
        <div className="flex flex-col items-start mb-8">
          <span className="mb-1 text-xs font-bold tracking-widest text-gray-300 md:text-sm">01</span>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">About Me</h2>
        </div>
        <AboutMeHighlight />
        <div className="absolute left-0 right-0 flex flex-col gap-2" style={{ bottom: '-5.5rem' }}>
          <h3 className="font-normal mb-6 mt-12 text-gray-300 mx-auto">VARIOUS TECHNOLOGIES I USE</h3>
          <TechnologyTicker 
            technologies={primaryTechnologies}
            direction="left"
            backgroundColor="bg-red-700"
            textColor="text-white"
            symbolColor="text-white"
            duration={20}
          />
          <TechnologyTicker 
            technologies={secondaryTechnologies}
            direction="right"
            backgroundColor="bg-gradient-to-r from-gray-700 via-gray-900 to-black"
            textColor="text-gray-200"
            symbolColor="text-gray-300"
            duration={22}
            marginTop="-1.5rem"
          />
        </div>
      </section>

      <section className="flex flex-col justify-center min-h-screen p-8 md:p-16 lg:p-24">
        <motion.div
          className="flex flex-col items-end mt-16 mb-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <span className="mb-1 text-xs font-bold tracking-widest text-right text-gray-300 md:text-sm">02</span>
          <motion.h2 variants={childVariants} className="text-3xl font-bold text-right md:text-4xl lg:text-5xl">Recent Projects</motion.h2>
          <motion.p variants={childVariants} className="max-w-3xl mb-12 text-lg leading-relaxed text-right md:text-xl">
            My recent work primarily involves building robust web applications, encompassing both client-commissioned projects and self-initiated developments. These projects often leverage React.js and Next.js to deliver impactful solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </section>

      <motion.section
        className="flex flex-col items-center justify-center min-h-screen p-8 text-center md:p-16 lg:p-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={childVariants} className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">
          Community Contributions
        </motion.h2>
        <motion.p variants={childVariants} className="max-w-3xl text-lg leading-relaxed md:text-xl">
          I have worked on some resources and tools; Driven by a passion for <br/> <span className='font-semibold text-red-500'>shared knowledge</span> and <span className='font-semibold text-red-500'>collaborative development</span>.
        </motion.p>
      </motion.section>

      <footer className="px-8 py-12 bg-black md:px-16 lg:px-24">
        <motion.div
          className="w-screen py-4 mb-12 overflow-hidden bg-black border-t border-b border-white"
          style={{marginLeft: 'calc(-1 * (100vw - 100%)/2)' }}
        >
          <motion.div
            className="inline-block w-full whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: ANIMATION_DURATIONS.TICKER - 2,
                ease: "linear",
              },
            }}
          >
            <span className="px-8 text-2xl font-bold text-white uppercase md:text-3xl">
              LETS TALK, LETS COLLABORATE, SAY HELLO, WANNA BE, START — LETS TALK, LETS COLLABORATE, SAY HELLO, WANNA BE, START — LETS TALK, LETS COLLABORATE, SAY HELLO, WANNA BE, START
            </span>
          </motion.div>
        </motion.div>

        <motion.a
          id="contact"
          href="mailto:semteuku02@gmail.com"
          className="block mb-12 text-3xl font-bold text-center text-red-500 transition-colors duration-300 md:text-5xl hover:text-red-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: ANIMATION_DURATIONS.HERO }}
        >
          semteuku02@gmail.com
        </motion.a>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>JAKARTA, INA</span>
          <span>TEUKU SEM 2025</span>
        </div>
      </footer>
    </div>
  );
}