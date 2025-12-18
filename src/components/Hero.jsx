import { motion } from 'framer-motion'
import { HiDownload, HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import resumePdf from '../assets/resume.pdf'
import profileImage from '../assets/ProfilePhoto.jpg'


const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Gaurav_Dhamankar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding pt-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.img
              src={profileImage}
              alt="Gaurav Dhamankar"
              className="w-52 h-52 rounded-full object-cover mb-4 mx-auto"
              variants={itemVariants}
            />
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Gaurav Dhamankar
            </motion.h1>
            <motion.div
              className="text-2xl md:text-4xl font-semibold text-gray-700 mb-6"
              variants={itemVariants}
            >
              <span className="inline-block mr-2">React</span>
              <span className="text-primary-600">/</span>
              <span className="inline-block mx-2">React Native</span>
              <span className="text-primary-600">/</span>
              <span className="inline-block ml-2">MERN Developer</span>
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            MERN Stack Developer with 2+ years of hands-on experience specializing
            in building scalable, reusable, and testable components. Passionate
            about creating seamless user experiences across web and mobile platforms.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={handleDownloadResume}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </motion.button>
            <motion.button
              onClick={handleContactClick}
              className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiMail className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/gaurav-dhamankar-swe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-primary-600 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/GauravDhamankar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-primary-600 transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

