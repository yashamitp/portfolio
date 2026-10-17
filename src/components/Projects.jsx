import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github,
  ChevronDown,
  ChevronUp,
  Layers,
  Code2,
  Globe,
} from 'lucide-react'

const projects = [
  {
    id: 'quick-stay',
    category: 'Full-Stack Web Development',
    title: 'Quick Stay',
    subtitle: 'Hotel Booking Application',
    tech: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Clerk',
      'ImageKit',
      'Vercel',
      'Render',
    ],
    overview:
      'A full-stack hotel booking application that brings together a responsive user interface, backend APIs, authentication, database operations, and cloud deployment.',
    features: [
      'Responsive hotel listing and detail interfaces built with React and Tailwind CSS',
      'REST APIs for hotel, room, and booking operations using Express.js',
      'Clerk authentication integration for login and session management',
      'ImageKit integration for cloud-based image uploading and delivery',
      'Frontend–backend–database connectivity with MongoDB Atlas',
      'Frontend deployed on Vercel, backend deployed on Render',
    ],
    caseStudy: {
      architecture:
        'The React frontend communicates with Express.js backend APIs over HTTP. Clerk handles user authentication and session tokens that are verified on each API request. MongoDB Atlas stores hotel listings, room data, and booking records. ImageKit serves optimized images through its CDN.',
      challenges:
        'Working through API communication issues between separately deployed frontend and backend services. Configuring environment variables correctly across Vercel and Render. Resolving CORS configuration to allow cross-origin requests. Debugging authentication token flow between Clerk, the frontend, and backend middleware.',
      deployment:
        'The frontend is deployed on Vercel with environment variables pointing to the production API. The backend runs on Render with MongoDB Atlas connection strings and Clerk API keys configured as environment variables. This setup required understanding how deployed services communicate differently than local development.',
    },
    github: 'https://github.com/yashamitp',
  },
  {
    id: 'thinkbook',
    category: 'Full-Stack Application Development',
    title: 'ThinkBook',
    subtitle: 'Notes Management Application',
    tech: [
      'React',
      'Vite',
      'Tailwind CSS',
      'DaisyUI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Axios',
      'Upstash Redis',
    ],
    overview:
      'A full-stack notes management application enabling users to create, read, update, and delete notes through a React interface backed by an Express REST API and MongoDB.',
    features: [
      'Full CRUD functionality for managing notes',
      'Reusable React components with clean component architecture',
      'Backend routes and controllers following RESTful patterns',
      'Frontend–backend communication using Axios',
      'CORS and environment-based API URL configuration',
      'API rate limiting using Upstash Redis to protect backend endpoints',
    ],
    caseStudy: {
      architecture:
        'The frontend is a Vite-powered React app styled with Tailwind CSS and DaisyUI. Axios handles HTTP requests to the Express.js backend, which exposes RESTful endpoints for notes CRUD. MongoDB stores note documents. Upstash Redis is used as a rate-limiting store to prevent API abuse.',
      challenges:
        'Configuring CORS correctly to allow the frontend origin to communicate with the backend API. Setting up environment-based API URLs so the app works in both development and production. Implementing Redis-based rate limiting with Upstash to protect public API endpoints without adding significant latency.',
      deployment:
        'Configuration management across development and production environments, ensuring API URLs, database connections, and Redis credentials are correctly set through environment variables.',
    },
    github: 'https://github.com/yashamitp',
  },
  {
    id: 'workfit',
    category: 'Web Application Development',
    title: 'WorkFit',
    subtitle: 'Workout Planner',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'External APIs'],
    overview:
      'A fitness planning application designed to help users organize workouts, create diet plans, and track their fitness journey through a structured dashboard.',
    features: [
      'Workout and diet planning functionality',
      'Daily and weekly progress tracking through a structured dashboard',
      'Chatbot-based fitness guidance for users',
      'External API integrations for recommendations and interactions',
      'Responsive user interface',
      'Modular code organization for maintainability',
    ],
    caseStudy: {
      architecture:
        'Built with PHP and MySQL on the backend, with HTML, CSS, and JavaScript powering the frontend. External APIs provide additional fitness data and chatbot capabilities. The dashboard presents a structured view of workout schedules and progress.',
      challenges:
        'Designing user flows for workout planning that feel intuitive rather than overwhelming. Integrating external APIs for fitness recommendations while handling response variability. Building a chatbot interface that provides useful guidance within the scope of the available data.',
      deployment:
        'Developed as an academic project to explore server-side development with PHP and MySQL, external API integration, and building interactive user interfaces.',
    },
    github: 'https://github.com/yashamitp',
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className="section-padding">
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
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Featured Work
          </h2>
          <p className="text-dark-200 mt-4 max-w-2xl text-lg">
            Real applications I've built to learn full-stack development — from
            frontend interfaces to API design, authentication, and deployment.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden hover:border-dark-600 transition-colors duration-300"
            >
              {/* Header area */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <span className="text-accent-cyan text-xs font-mono tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                      {project.title}
                    </h3>
                    <p className="text-dark-300 text-sm mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2.5 rounded-lg border border-dark-600 text-dark-300 hover:text-white hover:border-dark-400 transition-all"
                      aria-label={`${project.title} source code`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>

                <p className="text-dark-200 mt-4 text-base leading-relaxed max-w-3xl">
                  {project.overview}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-md bg-dark-700 text-dark-200 border border-dark-600 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Feature list */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Key Implementation Details
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {project.features.map((f, j) => (
                      <li
                        key={j}
                        className="text-sm text-dark-200 flex items-start gap-2"
                      >
                        <span className="text-accent-blue mt-1 shrink-0">
                          ▹
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Toggle */}
                <button
                  onClick={() =>
                    setExpanded(expanded === project.id ? null : project.id)
                  }
                  className="mt-6 flex items-center gap-2 text-sm text-accent-blue hover:text-accent-violet transition-colors font-medium"
                  aria-expanded={expanded === project.id}
                >
                  {expanded === project.id ? 'Hide' : 'View'} Case Study
                  {expanded === project.id ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
              </div>

              {/* Case study */}
              <AnimatePresence>
                {expanded === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-dark-700 space-y-6">
                      <CaseSection
                        icon={<Layers size={16} className="text-accent-blue" />}
                        title="Architecture"
                        body={project.caseStudy.architecture}
                      />
                      <CaseSection
                        icon={
                          <Code2 size={16} className="text-accent-violet" />
                        }
                        title="Challenges & Solutions"
                        body={project.caseStudy.challenges}
                      />
                      <CaseSection
                        icon={<Globe size={16} className="text-accent-cyan" />}
                        title="Deployment & Configuration"
                        body={project.caseStudy.deployment}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseSection({ icon, title, body }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h5 className="text-sm font-semibold text-white">{title}</h5>
      </div>
      <p className="text-dark-200 text-sm leading-relaxed">{body}</p>
    </div>
  )
}
