import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Circle } from 'lucide-react'

const steps = [
  {
    label: 'Linux Basics',
    status: 'in-progress',
    detail: 'Working with Linux daily in current role',
  },
  {
    label: 'Networking Fundamentals',
    status: 'in-progress',
    detail: 'TCP/IP, DNS, DHCP — hands-on at work',
  },
  {
    label: 'Shell Scripting',
    status: 'in-progress',
    detail: 'Automating repetitive tasks with Bash',
  },
  {
    label: 'Git & GitHub Workflows',
    status: 'in-progress',
    detail: 'Using in projects, learning advanced workflows',
  },
  {
    label: 'Docker',
    status: 'planned',
    detail: 'Containerization fundamentals',
  },
  {
    label: 'Kubernetes',
    status: 'planned',
    detail: 'Container orchestration',
  },
  {
    label: 'Terraform',
    status: 'planned',
    detail: 'Infrastructure as Code',
  },
  {
    label: 'Ansible',
    status: 'planned',
    detail: 'Configuration management & automation',
  },
  {
    label: 'CI/CD',
    status: 'planned',
    detail: 'Automated build, test, and deploy pipelines',
  },
]

const statusConfig = {
  'in-progress': {
    icon: Clock,
    color: 'text-accent-blue',
    bg: 'bg-accent-blue',
    badge: 'bg-accent-blue/10 text-accent-blue',
    card: 'bg-accent-blue/[0.04] border-accent-blue/20 hover:border-accent-blue/40',
    label: 'In Progress',
  },
  planned: {
    icon: Circle,
    color: 'text-dark-400',
    bg: 'bg-dark-500',
    badge: 'bg-dark-700 text-dark-400',
    card: 'bg-dark-800 border-dark-700 hover:border-dark-600',
    label: 'Planned',
  },
}

export default function LearningRoadmap() {
  return (
    <section id="roadmap" className="section-padding bg-dark-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-accent-violet text-sm font-mono tracking-widest uppercase">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            What I'm Exploring Next
          </h2>
          <p className="text-dark-200 mt-4 max-w-2xl text-lg">
            My progression toward cloud and DevOps — this is a learning
            roadmap, not a list of technologies I've mastered.
          </p>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mb-10">
          {Object.entries(statusConfig).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-2 text-sm">
              <cfg.icon size={16} className={cfg.color} />
              <span className="text-dark-300">{cfg.label}</span>
            </div>
          ))}
        </div>

        {/* Roadmap items */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-dark-700 hidden md:block" />

          <div className="grid gap-4">
            {steps.map((step, i) => {
              const cfg = statusConfig[step.status]
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative flex items-start gap-4 md:pl-14"
                >
                  {/* Node dot */}
                  <div className="hidden md:flex absolute left-0 top-4 items-center justify-center">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${cfg.bg} ring-4 ring-dark-900`}
                    />
                  </div>

                  <div
                    className={`flex-1 p-4 rounded-xl border transition-colors duration-300 ${cfg.card}`}
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <cfg.icon size={16} className={cfg.color} />
                      <h3 className="text-white font-semibold text-sm">
                        {step.label}
                      </h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-mono ${cfg.badge}`}
                      >
                        {cfg.label}
                      </span>
                    </div>
                    <p className="text-dark-300 text-sm mt-1.5 ml-7">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
