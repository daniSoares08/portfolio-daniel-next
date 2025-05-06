"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Radioenge",
    role: "Estagiário de Desenvolvimento de Software",
    period: "nov/2024 – atual",
    location: "Curitiba",
    description: [
      "Desenvolvimento full stack (Vue.js, TypeScript, Tailwind, Element Plus).",
      "APIs robustas em Flask (Python).",
      "Modelagem e otimização de MySQL em Ubuntu Server.",
      "Git/GitHub avançado e DevOps básico.",
    ],
    skills: ["Vue.js", "TypeScript", "Flask", "MySQL", "Git", "DevOps"],
  },
  {
    title: "Agora IP",
    role: "Técnico de Redes / Assistente de TI",
    period: "jan/2023 – nov/2024",
    location: "Curitiba",
    description: [
      "Configuração de linhas SIP/analógicas e PBXs físicos/cloud.",
      "Integração de APIs, suporte a clientes e documentação técnica.",
    ],
    skills: ["Redes", "VoIP", "APIs", "Suporte Técnico"],
  },
  {
    title: "ADN Industrial",
    role: "Assistente de TI & Manutenção Eletrônica",
    period: "ago/2021 – nov/2022",
    location: "Curitiba",
    description: [
      "Manutenção eletrônica industrial, criação de sistema de estoque, site corporativo, suporte ao público.",
    ],
    skills: ["Eletrônica", "Sistemas Web", "Suporte"],
  },
  {
    title: "Exército Brasileiro",
    role: "Auxiliar de TI",
    period: "ago/2021 – ago/2022",
    location: "Curitiba",
    description: [
      "Administração de servidores Linux, redes internas, switches, manutenção de PCs e rotinas militares.",
    ],
    skills: ["Linux", "Redes", "Manutenção", "Servidores"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Experiência Profissional</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start md:justify-between md:even:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-muted-foreground/20 bg-background shadow-sm text-muted-foreground z-10 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                <Briefcase size={20} />
              </div>
              <div className="w-full md:w-[calc(50%-2.5rem)] p-4 rounded-lg shadow-sm">
                <Card className="border-teal-200 dark:border-teal-800">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold">{experience.title}</CardTitle>
                        <p className="text-muted-foreground font-medium">{experience.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar size={14} className="mr-1" />
                      {experience.period} • {experience.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {experience.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
