"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Olá, eu sou <span className="text-teal-600 dark:text-teal-400">Daniel Soares</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
          Desenvolvedor de Software Embarcado
        </h2>
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700"
            onClick={() => {
              document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Ver Projetos
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Entrar em Contato
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="animate-bounce"
        >
          <ArrowDown size={24} />
        </Button>
      </motion.div>
    </section>
  )
}
