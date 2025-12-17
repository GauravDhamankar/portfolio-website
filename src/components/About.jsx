import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary-600 mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate <span className="font-semibold text-primary-600">MERN Stack Developer</span> with
                over <span className="font-semibold">2 years</span> of hands-on experience in building scalable web
                and mobile applications. My expertise lies in creating performant, reusable, and maintainable code
                that delivers exceptional user experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in <span className="font-semibold">React.js</span> and{' '}
                <span className="font-semibold">React Native</span>, with a strong focus on performance optimization
                using advanced hooks like <code className="bg-gray-100 px-2 py-1 rounded">useMemo</code> and{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">useCallback</code>. I've successfully delivered
                production-ready applications in the <span className="font-semibold">E-commerce</span> and{' '}
                <span className="font-semibold">Healthcare</span> domains.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My approach combines clean code principles with modern development practices, ensuring that every
                project I work on is not only functional but also scalable and maintainable for the long term.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: 'Years of Experience', value: '2+' },
                { label: 'Projects Completed', value: '10+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Happy Clients', value: '5+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

