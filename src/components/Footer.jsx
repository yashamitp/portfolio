import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-dark-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gradient">YP</span>
          <span className="text-dark-400 text-sm">· Yash Prajapati</span>
        </div>

        <p className="text-dark-400 text-sm">
          Designed &amp; built by Yash Prajapati · {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/yashamitp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-prajapati-abc1212a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-400 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:yashprajapati.9769@gmail.com"
            className="text-dark-400 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
