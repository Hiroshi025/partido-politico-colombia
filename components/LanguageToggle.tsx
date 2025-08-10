"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="flex items-center space-x-1"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </Button>
  )
}
