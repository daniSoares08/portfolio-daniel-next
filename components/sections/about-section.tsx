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
              Sou estudante de Engenharia da Computação na PUCPR, atualmente no{" "}
              9º período, com previsão de conclusão em dezembro de 2026. Atualmente,
              atuo como Estagiário em Desenvolvimento Embarcado na ART, desenvolvendo{" "}
              firmware em C para aplicações críticas, com foco em STM32 e{" "}
              FreeRTOS.
            </p>

            <p className="text-lg leading-relaxed mt-4">
              No dia a dia, trabalho com conceitos de sistemas de tempo real (tasks, filas, semáforos,
              sincronização e otimização), integração com hardware e validação em bancada. Também tenho experiência com{" "}
              projeto e análise de PCBs para testes e integração de sensores.
            </p>

            <p className="text-lg leading-relaxed mt-4">
              Minha base em software (Linux/Ubuntu Server, automação com Python e desenvolvimento web com Flask + Vue +
              TypeScript) complementa meu perfil e me ajuda a construir soluções ponta a ponta do firmware e
              aquisição de dados até a publicação/monitoramento em servidores. Estou em constante evolução no{" "}
              inglês e valorizo aprendizado contínuo, documentação e trabalho colaborativo.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}