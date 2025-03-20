"use client"

import { Suspense, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { MapPin, Phone, Mail } from "lucide-react"
import { fadeIn, slideIn } from "@/lib/animations"
import { obfuscatedData } from "@/lib/sensitive-data"

// Loading component
function LoadingState() {
  return (
    <div className="container mx-auto py-6 sm:py-12 px-4 animate-pulse">
      <div className="h-64 bg-muted rounded-lg mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 sm:gap-8">
        <div className="space-y-6">
          <div className="h-40 bg-muted rounded-lg"></div>
          <div className="h-40 bg-muted rounded-lg"></div>
        </div>
        <div className="space-y-6">
          <div className="h-40 bg-muted rounded-lg"></div>
          <div className="h-96 bg-muted rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}

export default function CVPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [contactData, setContactData] = useState(obfuscatedData)

  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate file loading delay
        await new Promise(resolve => setTimeout(resolve, 500))
        setContactData(obfuscatedData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading data:', error)
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  if (isLoading) {
    return <LoadingState />
  }

  return (
    <Suspense fallback={<LoadingState />}>
      <div className="container mx-auto py-6 sm:py-12 px-4">
        {/* Header/Profile Section */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="mb-8 sm:mb-12"
        >
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10" />
            <CardContent className="grid sm:grid-cols-[200px_1fr] gap-6 sm:gap-8 p-6 sm:p-8">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-32 sm:h-40 w-32 sm:w-40 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                  <AvatarImage src="/images/ilona-profile.jpeg" alt={contactData.name} />
                  <AvatarFallback>ID</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="space-y-2 text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl font-bold">{contactData.name}</h1>
                  <p className="text-xl sm:text-2xl text-muted-foreground">ДИРЕКТ-МЕНЕДЖЕР</p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <button className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{contactData.address}</span>
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-fit">
                        <div className="flex flex-col gap-2">
                          <span className="font-semibold">Location</span>
                          <span>{contactData.address}</span>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <button className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Phone className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{contactData.phone}</span>
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-fit">
                        <div className="flex flex-col gap-2">
                          <span className="font-semibold">Phone</span>
                          <span>{contactData.phone}</span>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <button className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm sm:text-base break-all">{contactData.email}</span>
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-fit">
                        <div className="flex flex-col gap-2">
                          <span className="font-semibold">Email</span>
                          <span>{contactData.email}</span>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Education Section */}
            <motion.div
              variants={slideIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <h2 className="text-xl sm:text-2xl font-bold">ОСВІТА</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2 bg-primary/5">2018</Badge>
                    <h3 className="font-semibold">БАКАЛАВР ТЕХНІЧНИХ НАУК</h3>
                    <p className="text-muted-foreground">КИЇВ</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={slideIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <h2 className="text-xl sm:text-2xl font-bold">НАВИЧКИ</h2>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <Badge variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">Вирішення конфліктних ситуацій</Badge>
                    <Badge variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">Комунікаційні навички</Badge>
                    <Badge variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">Багатозадачність</Badge>
                    <Badge variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">Організованість</Badge>
                    <Badge variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">Стресостійкість</Badge>
                    <Badge variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">Креативність</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* About Section */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <h2 className="text-xl sm:text-2xl font-bold">ПРО СЕБЕ</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Відкрита до нового досвіду, завжди прагну розвиватися та приносити компанії конкретні результати.
                    Мій досвід і навички стануть цінним доповненням вашої команди. Готова розвиватися разом із вами та вносити позитивні зміни, спрямовані на покращення бізнес-процесів та досягнення спільних цілей.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Work Experience Section */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <h2 className="text-xl sm:text-2xl font-bold">ДОСВІД РОБОТИ</h2>
                </CardHeader>
                <CardContent className="space-y-6 sm:space-y-8">
                  {/* Job 1 */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg">ФЛОРИСТ • АДМІНІСТРАТОР</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">{contactData.employers[0]}, КИЇВ</p>
                      </div>
                      <Badge className="w-fit text-sm">ЛИП 2018 - ЛЮТ 2021</Badge>
                    </div>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
                      <li>Підбір ідеальних пропозицій відповідно до потреб клієнтів.</li>
                      <li>Вміння знаходити індивідуальний підхід до кожного покупця.</li>
                      <li>Впровадження нових ідей на основі аналізу ринку.</li>
                      <li>Управління клієнтською базою, підтримка довгострокових відносин.</li>
                    </ul>
                  </div>

                  <Separator />

                  {/* Job 2 */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg">КОНТЕНТ - МЕНЕДЖЕР ТА ДИРЕКТ-МЕНЕДЖЕР</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">{contactData.employers[1]}, ЧЕРНІВЦІ</p>
                      </div>
                      <Badge className="w-fit text-sm">СЕРП 2023 - СІЧ 2024</Badge>
                    </div>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
                      <li>Впровадження автоматизації для оптимізації роботи (скрипти відповідей).</li>
                      <li>Адаптація комунікації та пропозицій під конкретного клієнта.</li>
                      <li>Створення програм лояльності, спеціальних пропозицій та бонусів.</li>
                      <li>Супровід клієнта на всіх етапах співпраці (від першого контакту до повторних покупок).</li>
                    </ul>
                  </div>

                  <Separator />

                  {/* Job 3 */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg">АДМІНІСТРАТОР ТА ДИРЕКТ-МЕНЕДЖЕР</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">{contactData.employers[1]}, ЧЕРНІВЦІ</p>
                      </div>
                      <Badge className="w-fit text-sm">СІЧ 2024 - ЛИСТ 2024</Badge>
                    </div>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
                      <li>Контроль роботи персоналу.</li>
                      <li>Організація графіків змін і робочого процесу.</li>
                      <li>Взаємодія з постачальниками.</li>
                      <li>Робота з відгуками та запитами гостей.</li>
                      <li>Організація івентів.</li>
                      <li>Аналіз ринку та впровадження нових ідей для залучення клієнтів.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </Suspense>
  )
} 