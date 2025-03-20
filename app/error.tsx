'use client';

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"
import { fadeIn } from "@/lib/animations"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
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
            <h1 className="text-4xl font-bold text-center">Помилка</h1>
            <p className="text-xl text-muted-foreground text-center">Щось пішло не так</p>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <p className="text-center text-muted-foreground">
              Вибачте за незручності. Спробуйте оновити сторінку.
            </p>
            <Button onClick={reset} className="gap-2">
              <RefreshCcw className="w-4 h-4" />
              Спробувати знову
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
} 