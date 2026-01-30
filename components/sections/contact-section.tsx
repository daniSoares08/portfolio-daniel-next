"use client"

import type { CSSProperties } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react"

const emailCurveTail = "gmail.com"

const contactInfo = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "WhatsApp",
    value: "+55 41 99562-2187",
    link: "https://wa.me/5541995622187",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "E-mail",
    value: "campossoares.daniel@gmail.com",
    link: "mailto:campossoares.daniel@gmail.com",
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "daniSoares08",
    link: "https://github.com/daniSoares08",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "Daniel Campos Soares",
    link: "https://www.linkedin.com/in/daniel-campos-soares-b47426238/",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Localização",
    value: "Curitiba / PR – Brasil",
    link: null,
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Contato</h2>
        <Card className="border-teal-200 dark:border-teal-800">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const shouldCurveEmail =
                  contact.label === "E-mail" && contact.value.endsWith(emailCurveTail)
                const emailHead = shouldCurveEmail
                  ? contact.value.slice(0, -emailCurveTail.length)
                  : contact.value
                const emailTail = shouldCurveEmail ? emailCurveTail : ""
                const curveStep = 6
                const curveRadius = 32

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400">
                      {contact.icon}
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {shouldCurveEmail ? (
                        <p className="font-medium">
                          <span className="email-curve">
                            <span className="email-curve-head">{emailHead}</span>
                            <span className="email-curve-tail">
                              {emailTail.split("").map((char, charIndex) => {
                                const rotation = curveStep * charIndex
                                const angle = (rotation * Math.PI) / 180
                                const offsetY = curveRadius * (1 - Math.cos(angle))
                                return (
                                  <span
                                    key={`${char}-${charIndex}`}
                                    className="email-curve-char"
                                    style={
                                      {
                                        "--curve-offset-y": `${offsetY}px`,
                                        "--curve-rot": `${rotation}deg`,
                                      } as CSSProperties
                                    }
                                  >
                                    {char}
                                  </span>
                                )
                              })}
                            </span>
                          </span>
                        </p>
                      ) : (
                        <p className="font-medium">{contact.value}</p>
                      )}
                    </div>
                    {contact.link && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0 relative z-10"
                        onClick={() => window.open(contact.link, "_blank")}
                        aria-label={`Abrir ${contact.label}`}
                      >
                        <ExternalLink size={16} />
                      </Button>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
