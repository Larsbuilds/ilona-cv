"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"
import { fadeIn } from "@/lib/animations"

export default function NotFound() {
  return (
    <div className="container mx-auto py-12 px-4 min-h-screen flex items-center justify-center">
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="w-full max-w-lg"
      >
        <Card>
          <CardHeader>
            <h1 className="text-4xl font-bold text-center">404</h1>
            <p className="text-xl text-muted-foreground text-center">Сторінку не знайдено</p>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <p className="text-center text-muted-foreground">
              Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
            </p>
            <Link href="/">
              <Button className="gap-2">
                <Home className="w-4 h-4" />
                На головну
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
} 