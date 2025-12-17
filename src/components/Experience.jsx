import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase } from 'react-icons/hi'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const experiences = [
    {
      company: 'Spidrontech LLP',
      location: 'Hinjewadi, Pune, Maharashtra, India',
      role: 'Assistant Software Developer',
      duration: 'November 2023 - Present',
      type: 'MERN Stack Developer',
      totalExperience: '2+ Years',
      responsibilities: [
        'Developed scalable web and mobile applications using React.js and React Native',
        'Implemented React Query for efficient data fetching, caching, and optimistic UI updates',
        'Built reusable and modular UI components ensuring consistent design and responsive layouts',
        'Engineered backend services using Node.js and Express.js with RESTful APIs',
        'Managed database schemas using MongoDB with Mongoose and Sequelize ORM',
        'Integrated Socket.io for real-time features like notifications and live updates',
        'Optimized application performance using useMemo, useCallback, and other React optimization techniques',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
      ],
    },
  ]

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary-600">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <HiBriefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl font-semibold text-primary-600 mb-1">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 mb-2">{exp.location}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="bg-primary-100 px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                      <span className="bg-primary-100 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                      <span className="bg-primary-100 px-3 py-1 rounded-full">
                        {exp.totalExperience}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="font-semibold text-gray-800 mb-4">Key Responsibilities & Achievements:</h5>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + (idx * 0.1) }}
                      >
                        <span className="text-primary-600 mt-1">▸</span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

