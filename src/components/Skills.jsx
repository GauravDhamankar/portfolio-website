import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'
import { FaMobileAlt } from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: SiReact, color: 'text-blue-500' },
        { name: 'React Native', icon: FaMobileAlt, color: 'text-cyan-500' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS3', icon: SiCss3, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-800' },
        { name: 'REST APIs', icon: null, color: 'text-primary-600' },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'Sequelize / SQL', icon: null, color: 'text-blue-700' },
        { name: 'React Query', icon: null, color: 'text-red-500' },
        { name: 'Git', icon: SiGit, color: 'text-orange-600' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="skills"
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
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      {Icon ? (
                        <Icon className={`w-8 h-8 ${skill.color} mb-2`} />
                      ) : (
                        <div className={`w-8 h-8 ${skill.color} mb-2 flex items-center justify-center font-bold text-lg`}>
                          {skill.name.charAt(0)}
                        </div>
                      )}
                      <span className="text-sm font-medium text-gray-700 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

