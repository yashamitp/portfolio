import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-blue/[0.07] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent-violet/[0.07] rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-accent-blue text-sm font-mono tracking-widest uppercase"
            >
              Hello, I'm Yash Prajapati
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold mt-6 leading-[1.1] tracking-tight"
            >
              Building Web Experiences.{' '}
              <span className="text-gradient">
                Understanding the Systems Behind Them.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-dark-200 mt-6 max-w-lg leading-relaxed"
            >
              I'm a developer focused on React and full-stack web applications,
              with hands-on experience in APIs, authentication, databases,
              deployment, and IT infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#projects"
                className="group relative px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet text-white font-medium overflow-hidden transition-shadow hover:shadow-lg hover:shadow-accent-blue/20"
              >
                <span className="relative z-10">View My Projects</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-dark-600 text-dark-200 hover:text-white hover:border-dark-400 transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-5 mt-8"
            >
              <a
                href="https://github.com/yashamitp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-prajapati-abc1212a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right — Terminal visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden shadow-2xl shadow-accent-blue/5">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-700 bg-dark-800/60">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="text-xs text-dark-400 ml-3 font-mono">
                  ~/portfolio — node
                </span>
              </div>

              {/* Code body */}
              <div className="p-6 font-mono text-sm leading-[1.8] select-none">
                <Line>
                  <Kw>const</Kw> <Var>developer</Var> <Op>=</Op> <Br>{'{'}</Br>
                </Line>
                <Line indent>
                  <Prop>name</Prop>
                  <Op>:</Op> <Str>"Yash Prajapati"</Str>
                  <Op>,</Op>
                </Line>
                <Line indent>
                  <Prop>role</Prop>
                  <Op>:</Op> <Str>"Frontend Developer"</Str>
                  <Op>,</Op>
                </Line>
                <Line indent>
                  <Prop>stack</Prop>
                  <Op>:</Op> <Br>[</Br>
                  <Str>"React"</Str>
                  <Op>,</Op> <Str>"Node"</Str>
                  <Op>,</Op> <Str>"MongoDB"</Str>
                  <Br>]</Br>
                  <Op>,</Op>
                </Line>
                <Line indent>
                  <Prop>current</Prop>
                  <Op>:</Op> <Str>"System Admin &amp; IT Support"</Str>
                  <Op>,</Op>
                </Line>
                <Line indent>
                  <Prop>interests</Prop>
                  <Op>:</Op> <Br>[</Br>
                  <Str>"Cloud"</Str>
                  <Op>,</Op> <Str>"DevOps"</Str>
                  <Op>,</Op> <Str>"Linux"</Str>
                  <Br>]</Br>
                  <Op>,</Op>
                </Line>
                <Line indent>
                  <Prop>learning</Prop>
                  <Op>:</Op> <Kw>true</Kw>
                </Line>
                <Line>
                  <Br>{'}'}</Br>
                  <Op>;</Op>
                </Line>
                <div className="mt-4 flex items-center gap-1">
                  <span className="text-accent-blue">❯</span>
                  <span className="w-2 h-5 bg-accent-blue/70 animate-pulse rounded-sm" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} className="text-dark-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── tiny helper components for syntax-highlighted code ── */
function Line({ children, indent }) {
  return <div className={indent ? 'ml-6' : ''}>{children}</div>
}
function Kw({ children }) {
  return <span className="text-accent-cyan">{children}</span>
}
function Var({ children }) {
  return <span className="text-accent-blue">{children}</span>
}
function Prop({ children }) {
  return <span className="text-accent-violet">{children}</span>
}
function Str({ children }) {
  return <span className="text-green-400">{children}</span>
}
function Op({ children }) {
  return <span className="text-dark-400">{children}</span>
}
function Br({ children }) {
  return <span className="text-dark-300">{children}</span>
}
