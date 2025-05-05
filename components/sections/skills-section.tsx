"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Server, Cpu, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Linguagens & Frameworks",
    icon: <Code className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    skills: ["Python (Flask avançado)", "C/C++", "Java (básico)", "TypeScript", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Front-end",
    icon: <Layers className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    skills: ["Vue.js", "Angular (básico)", "Tailwind CSS", "Element Plus"],
  },
  {
    title: "Back-end & DB",
    icon: <Database className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    skills: ["Flask", "MySQL (modelagem, otimização, administração)", "SQL Server (intermediário)", "REST APIs"],
  },
  {
    title: "DevOps & Ferramentas",
    icon: <Server className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    skills: ["Git/GitHub", "Docker", "Linux (Ubuntu Server)", "Proxmox", "pfSense", "Fail2Ban", "ClamAV"],
  },
  {
    title: "IoT & Hardware",
    icon: <Cpu className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    skills: ["Arduino", "ESP32/ESP8266", "Eletrônica analógica/digital", "Redes e segurança"],
  },
]

export function SkillsSection() {
  return (
    <section id="competencias" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Competências</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-teal-200 dark:border-teal-800">
                <CardHeader className="flex flex-row items-center gap-4">
                  {category.icon}
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400 mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
