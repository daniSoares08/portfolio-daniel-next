"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Plataforma Embarcada Multissensor (Confidencial)",
    description:
      "Desenvolvimento de firmware em STM32 para controle de atuadores (iluminação, ventilação e módulos específicos) e aquisição de dados de múltiplos sensores, com publicação em servidor Linux para monitoramento e controle remoto.",
    technologies: ["STM32", "FreeRTOS", "C", "RTOS", "Sensores", "Linux", "IoT", "PCB"],
    github: "",
    demo: null,
  },
  {
    title: "Placa de Aquisição de Sensores (I2C + RS-485) PCB",
    description:
      "Projeto de PCB para integração de múltiplos sensores: multiplexação I2C (8 canais) e 9 conectores RS-485 para encaminhamento de dados ao microcontrolador principal (STM).",
    technologies: ["PCB", "I2C", "Multiplexador", "RS-485", "Sensores", "STM32", "Hardware"],
    github: "",
    demo: "https://www.linkedin.com/posts/danielsoares08_pcb-hardware-embeddedsystems-activity-7426818746389852160-QrcJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsmwOcBRVT8R68TeZcV4gxpR_RFca7attA",
  },
  {
    title: "Compilador LaTeX para TI-84 Plus CE",
    description:
      "Ferramenta para visualização/renderização de conteúdo LaTeX na calculadora TI-84 Plus CE, focada em exibição de fórmulas e notação matemática em tela limitada.",
    technologies: ["C/C++", "LaTeX", "Tooling", "Sistemas Embarcados", "TI-84"],
    github: "https://github.com/daniSoares08/LatexViewer-in-TI-84-Plus-CE",
    demo: null,
  },
  {
    title: "Sistema de Monitoramento de Qualidade da Água",
    description: "Sistema com sensores de pH, turbidez, O₂ e temperatura, com painel em tempo real para piscicultura.",
    technologies: ["ESP32", "Flask", "Vue.js", "IoT", "Sensores"],
    github: "https://github.com/daniSoares08/water_quality_backend",
    demo: null,
  },
  {
    title: "Controle de LEDs via ESP8266 integrado com Alexa",
    description: "Sistema de controle de iluminação inteligente com integração à Alexa.",
    technologies: ["ESP8266", "Alexa", "IoT", "C++", "Arduino", "MQTT"],
    github: "https://github.com/daniSoares08/ESP8266-MQTT-LED-Controller",
    demo: "https://www.linkedin.com/posts/danielsoares08_automa%C3%A7%C3%A3o-de-leds-com-esp8266-e-alexa-activity-7255568919971659776-0X0U?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsmwOcBRVT8R68TeZcV4gxpR_RFca7attA",
  },
  {
    title: "Protótipo de Persiana Automática",
    description: "Sistema de automação de persianas com ESP8266 e integração com Alexa.",
    technologies: ["ESP8266", "Alexa", "IoT", "Automação Residencial"],
    github: "https://github.com/daniSoares08/persiana-inteligente",
    demo: null,
  },
  {
    title: "Teclado Macro com Arduino Leonardo",
    description: "Teclado macro personalizado com controle de volume analógico.",
    technologies: ["Arduino", "C++", "Eletrônica", "HID"],
    github: "https://github.com/daniSoares08/Teclado-Macro-Arduino-Leonardo",
    demo: null,
  },
  {
    title: "Servidor Caseiro",
    description: "Proxmox + pfSense com dual WAN (load balance) e serviços Nextcloud/TrueNAS.",
    technologies: ["Proxmox", "pfSense", "Nextcloud", "TrueNAS", "Linux", "Redes"],
    github: "",
    demo: null,
  },
  {
    title: "Jogo estilo PAC-MAN em C",
    description: "Implementação de um jogo inspirado no clássico PAC-MAN como projeto acadêmico.",
    technologies: ["C", "Algoritmos", "Jogos", "Programação"],
    github: "https://github.com/daniSoares08/PAC-MAN-C",
    demo: "https://www.linkedin.com/posts/danielsoares08_pacman-programaaexaeto-jogos-activity-7116682066217320448-SgQX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsmwOcBRVT8R68TeZcV4gxpR_RFca7attA",
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