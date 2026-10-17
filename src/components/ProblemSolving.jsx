import { motion } from 'framer-motion'
import { Bug, Shield, Key, Rocket, Database, MonitorCog } from 'lucide-react'

const approaches = [
  {
    icon: Bug,
    title: 'API Troubleshooting',
    description:
      'Investigating frontend-backend communication by tracing HTTP requests, analyzing response codes, and debugging request/response payloads to identify where data flow breaks down.',
    snippet: 'fetch("/api/bookings") → 500\n→ Check server logs\n→ Fix MongoDB query\n→ 200 ✓',
  },
  {
    icon: Shield,
    title: 'CORS Configuration',
    description:
      'Resolving cross-origin request issues by understanding how browsers enforce same-origin policies and configuring Express CORS middleware with the correct allowed origins.',
    snippet:
      'origin: "https://app.vercel.app"\nmethods: ["GET","POST","PUT","DELETE"]\ncredentials: true → Allowed ✓',
  },
  {
    icon: Key,
    title: 'Authentication Integration',
    description:
      'Integrating Clerk for user authentication and managing session tokens across frontend and backend, ensuring protected routes verify tokens correctly.',
    snippet: 'Client → Clerk Token\n→ API Middleware → Verify\n→ Authorize ✓',
  },
  {
    icon: Rocket,
    title: 'Deployment & Config',
    description:
      'Configuring environment variables across Vercel and Render, connecting deployed services, and debugging issues that only appear in production environments.',
    snippet:
      'LOCAL: .env → VITE_API_URL\nPROD:  Vercel Env Vars\n→ Build → Connect API ✓',
  },
  {
    icon: Database,
    title: 'Backend Protection',
    description:
      'Implementing Redis-based API rate limiting with Upstash to protect backend endpoints from excessive requests without adding significant latency.',
    snippet:
      'Request → Upstash Redis\n→ Check limit (100/15min)\n→ Allow or 429 → Respond',
  },
  {
    icon: MonitorCog,
    title: 'Infrastructure Troubleshooting',
    description:
      'Investigating OS-level issues, network connectivity problems, and application failures in customer environments using remote tools and systematic diagnosis.',
    snippet:
      'Ticket → Remote Connect\n→ Diagnose → Isolate cause\n→ Fix → Document ✓',
  },
]

export default function ProblemSolving() {
  return (
    <section id="approach" className="section-padding">
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
            Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Problem Solving in Practice
          </h2>
          <p className="text-dark-200 mt-4 max-w-2xl text-lg">
            Practical examples of how I approach debugging, configuration, and
            system-level issues across my projects and work.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-accent-blue/30 transition-colors duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-accent-blue/10 w-fit mb-4 group-hover:bg-accent-blue/15 transition-colors">
                <item.icon size={20} className="text-accent-blue" />
              </div>

              <h3 className="text-white font-semibold mb-2">{item.title}</h3>

              <p className="text-dark-300 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              <pre className="bg-dark-900 rounded-lg p-3 font-mono text-xs text-dark-200 border border-dark-700 leading-relaxed overflow-x-auto whitespace-pre">
                {item.snippet}
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
