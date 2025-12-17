import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'E-Commerce Website & Mobile Application',
      subtitle: 'Personal Shop',
      description: 'A fully functional e-commerce platform with seamless web and mobile experiences, featuring real-time cart syncing, order management, and integrated payment processing.',
      techStack: ['React', 'React Native', 'React Query', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'Native Paper', 'Socket.io'],
      features: [
        'Fully functional e-commerce web and mobile application',
        'React Query for efficient data fetching and caching',
        'Scalable backend data schemas using MongoDB',
        'Reusable UI components with Tailwind CSS and React Native Paper',
        'Real-time features with Socket.io (order updates, cart syncing)',
        'Integrated cart, wishlist, checkout, and payment flows',
      ],
      impact: 'Delivered seamless cross-platform shopping experience with real-time synchronization',
    },
    {
      title: 'Integrated Healthcare Management Platform',
      subtitle: 'Doctor-Patient Booking System',
      description: 'A comprehensive healthcare management system enabling employees and family members to book medical appointments, with automated reminders and real-time updates.',
      techStack: ['React Native', 'React Query', 'Node.js', 'Express.js', 'Sequelize ORM', 'Native Paper', 'Socket.io'],
      features: [
        'Cross-platform mobile application for appointment booking',
        'React Query for optimized server-state management',
        'Scalable backend services with Node.js and Express.js',
        'Complex relational database structures with Sequelize ORM',
        'Real-time appointment updates and notifications via Socket.IO',
        'Automated CRON jobs for reminders and status updates',
        'Patient Health Card system with hospital sync',
        'Hospital and Company management modules',
      ],
      impact: 'Streamlined healthcare appointment management with automated workflows and real-time communication',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
      id="projects"
      ref={ref}
      className="section-padding bg-gradient-to-br from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {project.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-4 bg-primary-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Impact:</h4>
                <p className="text-sm text-gray-700">{project.impact}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

