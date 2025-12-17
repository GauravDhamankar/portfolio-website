import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-lg font-semibold text-white mb-2">
              Gaurav Dhamankar
            </p>
            <p className="text-sm">
              MERN Stack Developer | React & React Native Specialist
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/gaurav-dhamankar-swe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:gauravdhamankar23@gmail.com"
              className="text-2xl hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <HiMail />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-sm"
        >
          <p>
            © {currentYear} Gaurav Dhamankar. All rights reserved. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

