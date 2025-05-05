"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    title: "Engenharia da Computação",
    institution: "PUCPR",
    period: "jan/2022 – dez/2026",
    status: "7.º período",
    icon: <GraduationCap className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
  },
]

const certifications = [
  {
    title: "LPIC-1 / Linux Essentials",
    status: "Em andamento",
    icon: <Award className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
  },
]

const courses = [
  {
    title: "Hacking Ético",
    description: "Aula própria",
    icon: <BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
  },
  {
    title: "FreeRTOS",
    description: "Conhecimentos básicos",
    icon: <BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
  },
  {
    title: "Projetos DIY",
    description: "Diversos projetos práticos",
    icon: <BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
  },
]

export function EducationSection() {
  return (
    <section id="educacao" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Educação & Certificações</h2>

        <div>
          <h3 className="text-xl font-semibold mb-4">Formação Acadêmica</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-teal-200 dark:border-teal-800">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {item.icon}
                    <div>
                      <CardTitle>{item.title}</CardTitle>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{item.period}</p>
                    <p className="font-medium">{item.status}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Certificações</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-teal-200 dark:border-teal-800">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {item.icon}
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{item.status}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Cursos & Workshops</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-teal-200 dark:border-teal-800">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {item.icon}
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
