import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

const links = [
  {
    href: 'mailto:yashprajapati.9769@gmail.com',
    icon: Mail,
    label: 'Email',
    value: 'yashprajapati.9769@gmail.com',
    external: false,
  },
  {
    href: 'https://github.com/yashamitp',
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yashamitp',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/yash-prajapati-abc1212a/',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yash-prajapati',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent-blue text-sm font-mono tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Let's Build Something Useful.
          </h2>
          <p className="text-dark-200 mt-4 text-lg leading-relaxed">
            I'm interested in opportunities where I can contribute to web
            development, solve technical problems, and continue growing as an
            engineer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-dark-800 border border-dark-700 rounded-xl hover:border-accent-blue/30 transition-colors duration-200 group"
              >
                <div className="p-2.5 rounded-lg bg-accent-blue/10 group-hover:bg-accent-blue/15 transition-colors">
                  <link.icon size={20} className="text-accent-blue" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-dark-400 uppercase tracking-wider font-mono">
                    {link.label}
                  </p>
                  <p className="text-dark-200 text-sm truncate">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* CTA panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-800 border border-dark-700 rounded-xl p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-violet/10 border border-accent-blue/20 mb-6">
              <Send size={32} className="text-accent-blue" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              Send me an email
            </h3>
            <p className="text-dark-300 text-sm leading-relaxed mb-6">
              Have an opportunity, a question, or just want to connect? I'd love
              to hear from you.
            </p>

            <a
              href="mailto:yashprajapati.9769@gmail.com?subject=Hello%20Yash"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet text-white font-medium hover:opacity-90 transition-opacity hover:shadow-lg hover:shadow-accent-blue/20"
            >
              <Mail size={18} />
              Write to Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
