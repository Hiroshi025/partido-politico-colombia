"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Users, Palette, Smartphone, Leaf, ChevronRight, Check } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"

const iconMap = {
  GraduationCap,
  Briefcase,
  Users,
  Palette,
  Smartphone,
  Leaf,
}

interface Proposal {
  id: number
  title: string
  description: string
  icon: keyof typeof iconMap
  color: string
  details: string[]
}

interface ProposalCardProps {
  proposal: Proposal
}

export function ProposalCard({ proposal }: ProposalCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()
  const IconComponent = iconMap[proposal.icon]

  return (
    <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: proposal.color }}
          >
            <IconComponent className="h-7 w-7 text-white" />
          </div>
          <Badge variant="outline" className="text-xs">
            {String(proposal.id).padStart(2, "0")}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-[#7b00d2] mb-3 group-hover:text-[#23c060] transition-colors">
          {proposal.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">{proposal.description}</p>

        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full justify-between p-0 h-auto text-[#7b00d2] hover:text-[#23c060] font-medium"
        >
          {t.proposals.viewDetails}
          <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} />
        </Button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
            <ul className="space-y-2">
              {proposal.details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-[#23c060] mt-0.5 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
