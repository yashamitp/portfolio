import { motion } from 'framer-motion'
import { Code2, Server, Wrench, TrendingUp } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    label: 'Frontend Development',
    desc: 'React, JavaScript, Tailwind CSS',
  },
  {
    icon: Server,
    label: 'Full-Stack Building',
    desc: 'Node.js, Express, MongoDB, REST APIs',
  },
  {
    icon: Wrench,
    label: 'System Admin & IT Support',
    desc: 'Linux, Windows, Troubleshooting',
  },
  {
    icon: TrendingUp,
    label: 'Growing Into',
    desc: 'Cloud, DevOps, Automation',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-accent-blue text-sm font-mono tracking-widest uppercase">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Developer, Troubleshooter, Learner
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-5 text-dark-200 text-lg leading-relaxed"
          >
            <p>
              I'm a BCA graduate from Chandrabhan Sharma College of Arts,
              Science and Commerce with practical experience building responsive
              web applications using React.js, integrating REST APIs,
              implementing authentication, working with databases, and deploying
              full-stack projects.
            </p>
            <p>
              My projects — from hotel booking platforms to notes management
              apps — have taken me through the full cycle of frontend
              development, backend API design, database operations, and cloud
              deployment. Along the way I've debugged API communication,
              resolved CORS issues, configured environment variables across
              environments, and connected separately deployed services.
            </p>
            <p>
              Currently I work in a system administration and IT support role at
              IdeaStack Solutions, where I troubleshoot Linux and Windows
              customer environments, support hosting workflows, and gain
              hands-on exposure to infrastructure operations. This combination
              of application development and IT support gives me perspective on
              both software and the systems it runs on.
            </p>
            <p>
              I'm now building toward cloud computing, Linux administration,
              networking, automation, and DevOps — bridging the gap between
              writing code and operating the infrastructure that runs it.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="bg-dark-800 border border-dark-700 rounded-xl p-5 hover:border-accent-blue/30 transition-colors duration-300"
              >
                <item.icon size={20} className="text-accent-blue mb-3" />
                <h3 className="text-white font-semibold text-sm">
                  {item.label}
                </h3>
                <p className="text-dark-300 text-sm mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
