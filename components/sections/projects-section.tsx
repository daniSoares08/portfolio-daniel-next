"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Sistema de Monitoramento de Qualidade da Água",
    description: "Sistema com sensores de pH, turbidez, O₂ e temperatura, com painel em tempo real para piscicultura.",
    technologies: ["ESP32", "Flask", "Vue.js", "IoT", "Sensores"],
    github: "https://github.com/daniSoares08/water_quality_backend",
    demo: null,
  },
  {
    title: "Servidor Caseiro",
    description: "Proxmox + pfSense com duas WAN (load balance) e serviços Nextcloud/TrueNAS.",
    technologies: ["Proxmox", "pfSense", "Nextcloud", "TrueNAS", "Linux"],
    github: "",
    demo: null,
  },
  {
    title: "Controle de LEDs via ESP8266 integrado com Alexa",
    description: "Sistema de controle de iluminação inteligente com integração à Alexa.",
    technologies: ["ESP8266", "Alexa", "IoT", "C++", "Arduino"],
    github: "https://github.com/daniSoares08/ESP8266-MQTT-LED-Controller",
    demo: "https://www.linkedin.com/posts/danielsoares08_automa%C3%A7%C3%A3o-de-leds-com-esp8266-e-alexa-activity-7255568919971659776-0X0U?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsmwOcBRVT8R68TeZcV4gxpR_RFca7attA",
  },
  {
    title: "Teclado Macro com Arduino Leonardo",
    description: "Teclado macro personalizado com controle de volume analógico (potenciômetro 10 kΩ).",
    technologies: ["Arduino", "C++", "Eletrônica", "HID"],
    github: "https://github.com/daniSoares08/Teclado-Macro-Arduino-Leonardo",
    demo: null,
  },
  {
    title: "Jogo estilo PAC-MAN em C",
    description: "Implementação de um jogo inspirado no clássico PAC-MAN como projeto acadêmico.",
    technologies: ["C", "Algoritmos", "Jogos", "Programação"],
    github: "https://github.com/daniSoares08/PAC-MAN-C",
    demo: null,
  },
  {
    title: "Protótipo de Persiana Automática",
    description: "Sistema de automação de persianas com ESP8266 e integração com Alexa.",
    technologies: ["ESP8266", "Alexa", "IoT", "Automação Residencial"],
    github: "https://github.com/daniSoares08/persiana-inteligente",
    demo: null,
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Projetos Destaques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col border-teal-200 dark:border-teal-800 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.github && (
                    <Button variant="outline" size="sm" onClick={() => window.open(project.github, "_blank")}>
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-teal-600 hover:bg-teal-700"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
