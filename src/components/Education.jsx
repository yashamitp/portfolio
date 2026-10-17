import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution:
      'Chandrabhan Sharma College of Arts, Science and Commerce',
    period: '2022 – 2025',
    score: null,
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Tolani College of Commerce',
    period: '2021 – 2022',
    score: '64%',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Swami Vivekanand High School',
    period: '2019 – 2020',
    score: '79.2%',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-padding bg-dark-950/50">
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
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Academic Background
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-dark-700" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-8 top-2">
                  <div className="w-3 h-3 rounded-full bg-accent-violet -translate-x-1.5 ring-4 ring-dark-900" />
                </div>

                <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-accent-cyan text-sm font-mono whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-dark-300 text-sm">
                    <GraduationCap size={15} />
                    <span>{edu.institution}</span>
                  </div>

                  {edu.score && (
                    <p className="text-dark-400 text-sm mt-2">
                      Score: {edu.score}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
