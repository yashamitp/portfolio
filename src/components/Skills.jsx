import { motion } from 'framer-motion'
import { Layout, Server, Database, Wrench, Monitor, BookOpen } from 'lucide-react'

const categories = [
  {
    icon: Layout,
    title: 'Frontend Development',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'Bootstrap',
      'GSAP',
      'Responsive Design',
      'API Integration',
      'Figma-to-UI',
    ],
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'CRUD Operations',
      'Axios',
      'Auth Integration',
      'CORS',
      'Environment Config',
    ],
  },
  {
    icon: Database,
    title: 'Databases & Data Services',
    skills: ['MongoDB', 'MySQL', 'MongoDB Atlas', 'Upstash Redis'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
      'Vercel',
      'Render',
      'Netlify',
      'ImageKit',
      'Clerk',
    ],
  },
  {
    icon: Monitor,
    title: 'IT Support & Infrastructure',
    skills: [
      'Linux Basics',
      'Windows 10/11',
      'Windows Server',
      'Active Directory',
      'DNS & DHCP',
      'TCP/IP',
      'LAN/WAN',
      'Hardware Troubleshooting',
      'Remote Support',
      'System Maintenance',
    ],
  },
  {
    icon: BookOpen,
    title: 'Currently Learning',
    accent: true,
    skills: [
      'Linux Administration',
      'Networking',
      'Shell Scripting',
      'Git & GitHub Workflows',
      'Docker',
      'Cloud & DevOps Fundamentals',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark-950/50">
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
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Technical Toolkit
          </h2>
          <p className="text-dark-200 mt-4 max-w-2xl text-lg">
            Technologies and tools I use to build applications and support
            infrastructure, organized by domain.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`bg-dark-800 border rounded-xl p-6 hover:border-accent-blue/30 transition-colors duration-300 ${
                cat.accent
                  ? 'border-accent-violet/30 bg-accent-violet/[0.04]'
                  : 'border-dark-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`p-2 rounded-lg ${
                    cat.accent ? 'bg-accent-violet/10' : 'bg-accent-blue/10'
                  }`}
                >
                  <cat.icon
                    size={18}
                    className={
                      cat.accent ? 'text-accent-violet' : 'text-accent-blue'
                    }
                  />
                </div>
                <h3 className="text-white font-semibold">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-md font-medium ${
                      cat.accent
                        ? 'bg-accent-violet/10 text-accent-violet/90 border border-accent-violet/20'
                        : 'bg-dark-700 text-dark-200 border border-dark-600'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
