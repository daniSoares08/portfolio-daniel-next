"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Sobre Mim</h2>
        <Card className="border-teal-200 dark:border-teal-800">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed">
              Sou estudante de Engenharia da Computação, atualmente no 7.º período na PUCPR, com previsão de conclusão
              em dezembro de 2026. Atualmente, trabalho como{" "}
              <strong>Estagiário em Desenvolvimento de Software Full Stack</strong> na Radioenge, onde tenho a
              oportunidade de aplicar e expandir meus conhecimentos técnicos.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Tenho paixão por desenvolvimento com Python/Flask, Vue + TypeScript, MySQL, servidores Linux e projetos
              DIY com Arduino/ESP32. Sou entusiasta de segurança da informação, automação residencial e hardware, sempre
              buscando aprender novas tecnologias e aprimorar minhas habilidades.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Estou em constante aprimoramento do meu inglês e focado em aprendizado contínuo e trabalho colaborativo.
              Acredito que a combinação de conhecimentos em software e hardware me proporciona uma visão única para
              resolver problemas complexos e desenvolver soluções inovadoras.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
