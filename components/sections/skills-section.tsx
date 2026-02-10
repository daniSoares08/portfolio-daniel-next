"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Server, Cpu, Layers, Bug, Shield } from "lucide-react"

const skillCategories = [
  {
    title: "Embedded & RTOS",
    icon: <Cpu className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    skills: [
      "C (avançado) para firmware",
      "STM32 / ARM Cortex-M",
      "FreeRTOS (tasks, prioridades, preempção)",
      "Sincronização (mutex, semáforos, event groups)",
      "Comunicação entre tasks (queues, stream buffers)",
      "Memória (stack/heap), timing e otimização",
      "Drivers/Periféricos e interrupções (ISR)",
    ],
  },
  {
    title: "Protocolos & Comunicação",
    icon: <Layers className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    skills: [
      "UART",
      "I²C (incl. multiplexação)",
      "SPI",
      "RS-485 (Modbus/RTU)",
      "TCP/IP (integração com Linux/servidores)",
    ],
  },
  {
    title: "Hardware & PCB",
    icon: <Code className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    skills: [
      "Projeto/análise de PCBs para integração e testes",
      "Integração de sensores (analógico/digital)",
      "Eletrônica analógica/digital (diagnóstico, bancada, solda)",
      "Instrumentação (multímetro, osciloscópio, lógica)",
      "Leitura de datasheets e validação de circuitos",
    ],
  },
  {
    title: "Debug, Qualidade & Segurança",
    icon: <Bug className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    skills: [
      "Debug em JTAG/SWD (ST-LINK) e análise de falhas",
      "Logs, rastreabilidade e diagnóstico em campo",
      "Boas práticas: modularização, MISRA (noções), code review",
      "Testes (unitário/integração)",
      "Noções de sistemas críticos e confiabilidade",
    ],
  },
  {
    title: "Linux & Ferramentas",
    icon: <Server className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    skills: [
      "Linux (Ubuntu), shell, redes, SSH",
      "Git/GitHub (fluxo, branches, PRs) Avançado",
      "Docker (básico)",
      "Automação com Python (scripts e testes)",
      "Proxmox, pfSense (infra/homelab)",
    ],
  },
  {
    title: "Software Complementar (Full Stack)",
    icon: <Database className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    skills: [
      "Python (Flask)",
      "MySQL (modelagem e administração)",
      "REST APIs",
      "Vue.js + TypeScript",
      "HTML & CSS",
    ],
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