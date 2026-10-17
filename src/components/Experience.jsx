import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const responsibilities = [
  'Troubleshooting Linux and Windows-based customer environments across application, software, hardware, and connectivity issues',
  'Supporting hosting workflows and working with WHMCS for customer issue documentation and ticket management',
  'Using remote support tools such as AnyDesk and UltraViewer for customer assistance',
  'Gaining hands-on exposure to virtual machine provisioning and management',
  'Working with backup tools and related support workflows',
  'Learning server administration, networking fundamentals, and infrastructure troubleshooting in a production support environment',
]

const techTags = [
  'Linux',
  'Windows Server',
  'WHMCS',
  'AnyDesk',
  'UltraViewer',
  'VM Management',
  'Networking',
  'Technical Support',
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
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
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Professional Work
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          {/* Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-dark-700" />

          <div className="relative pl-8 md:pl-20">
            {/* Dot */}
            <div className="absolute left-0 md:left-8 top-1">
              <div className="w-3 h-3 rounded-full bg-accent-blue -translate-x-1.5 ring-4 ring-dark-900" />
            </div>

            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <h3 className="text-xl font-bold text-white">
                  System Administrator / IT Support
                </h3>
                <span className="flex items-center gap-1.5 text-accent-blue text-sm font-mono whitespace-nowrap">
                  <Calendar size={14} />
                  Aug 2026 — Present
                </span>
              </div>

              <div className="flex items-center gap-2 mb-5">
                <Briefcase size={16} className="text-dark-400" />
                <span className="text-dark-200">
                  IdeaStack Solutions Private Limited
                </span>
              </div>

              <ul className="space-y-3">
                {responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="text-dark-200 text-sm flex items-start gap-2 leading-relaxed"
                  >
                    <span className="text-accent-blue mt-1 shrink-0">▹</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {techTags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-dark-700 text-dark-300 border border-dark-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
