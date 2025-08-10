"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Users,
  Target,
  Heart,
  ArrowRight,
  ExternalLink,
  Github,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Star,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "../contexts/LanguageContext"
import { LanguageToggle } from "../components/LanguageToggle"
import { ProposalCard } from "../components/ProposalCard"
import { AnimatedCounter } from "../components/AnimatedCounter"
import proposalsData from "../data/proposals.json"
import { useEffect, useState } from "react"

export default function Home() {
  const { language, t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const proposals = proposalsData[language]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const testimonials = [
    {
      name: "María González",
      age: 22,
      role: "Estudiante Universitaria",
      content:
        "Las propuestas de Freidyn realmente entienden nuestras necesidades como jóvenes. Especialmente el programa de becas.",
      avatar: "/young-woman-student.png",
    },
    {
      name: "Carlos Rodríguez",
      age: 19,
      role: "Emprendedor",
      content:
        "El apoyo al emprendimiento juvenil es exactamente lo que necesitamos para crear nuestras propias oportunidades.",
      avatar: "/young-man-entrepreneur.png",
    },
    {
      name: "Ana Martínez",
      age: 24,
      role: "Activista Ambiental",
      content: "Me emociona ver propuestas concretas para el medio ambiente lideradas por jóvenes. Es nuestro futuro.",
      avatar: "/young-woman-activist.png",
    },
  ]

  return (
    <div className="min-h-screen bg-[#fefefe]">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/images/oxigeno-symbol.png" alt="Oxígeno" width={32} height={32} className="w-8 h-8" />
              <div>
                <h1 className="text-xl font-bold text-[#7b00d2]">FREIDYN</h1>
                <p className="text-xs text-[#23c060] font-medium">CMJ 2025</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-[#7b00d2] font-medium transition-colors">
                {t.nav.home}
              </Link>
              <Link href="#sobre-mi" className="text-gray-700 hover:text-[#7b00d2] font-medium transition-colors">
                {t.nav.about}
              </Link>
              <Link href="#propuestas" className="text-gray-700 hover:text-[#7b00d2] font-medium transition-colors">
                {t.nav.proposals}
              </Link>
              <Link href="#juventud" className="text-gray-700 hover:text-[#7b00d2] font-medium transition-colors">
                {t.nav.youth}
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-[#7b00d2] font-medium transition-colors">
                {t.nav.contact}
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <LanguageToggle />
              <Button className="bg-[#23c060] hover:bg-[#1ea050] text-white transition-all duration-300 hover:scale-105">
                {t.nav.joinChange}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#7b00d2] via-[#9d4edd] to-[#23c060] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#23c060]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7b00d2]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <Badge className="bg-[#23c060]/20 text-[#23c060] border-[#23c060]/30 mb-4">
                <Zap className="w-3 h-3 mr-1" />
                Campaña 2025
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {t.hero.title}
                <span className="block text-[#fefefe] bg-gradient-to-r from-[#23c060] to-[#7b00d2] bg-clip-text text-transparent">
                  {t.hero.subtitle}
                </span>
              </h1>

              <h2 className="text-3xl font-semibold mb-6 text-[#23c060] animate-pulse">{t.hero.hashtag}</h2>

              <p className="text-xl mb-8 opacity-90 leading-relaxed">{t.hero.description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#23c060] hover:bg-[#1ea050] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {t.hero.cta1}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#7b00d2] px-8 py-4 text-lg font-semibold bg-transparent transition-all duration-300 hover:scale-105"
                >
                  {t.hero.cta2}
                </Button>
              </div>
            </div>

            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative group">
                <Image
                  src="/images/campaign-event.jpg"
                  alt="Freidyn Rivera - Campaña CMJ 2025"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>

                <div className="absolute -bottom-6 -left-6 bg-[#23c060] text-white p-6 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <p className="font-bold text-lg">{t.hero.badge1}</p>
                  <p className="text-sm opacity-90">{t.hero.badge2}</p>
                </div>

                <div className="absolute -top-4 -right-4 bg-white text-[#7b00d2] p-4 rounded-full shadow-xl animate-bounce">
                  <Star className="w-6 h-6 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#7b00d2] mb-4">{t.stats.title}</h2>
            <p className="text-lg text-gray-600">{t.stats.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[#23c060] to-[#1ea050] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <AnimatedCounter end={5000} suffix="+" />
              <p className="text-gray-600 font-medium">{t.stats.youth}</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[#7b00d2] to-[#9d4edd] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                <Target className="w-8 h-8 text-white" />
              </div>
              <AnimatedCounter end={15} suffix="+" />
              <p className="text-gray-600 font-medium">{t.stats.programs}</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[#23c060] to-[#1ea050] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <AnimatedCounter end={1200} suffix="+" />
              <p className="text-gray-600 font-medium">{t.stats.jobs}</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[#7b00d2] to-[#9d4edd] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                <Award className="w-8 h-8 text-white" />
              </div>
              <AnimatedCounter end={50} suffix="+" />
              <p className="text-gray-600 font-medium">{t.stats.projects}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7b00d2] mb-4">{t.about.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.about.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-[#23c060] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-[#23c060] to-[#1ea050] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#7b00d2] mb-4">{t.about.leadership.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.about.leadership.description}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#7b00d2] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-[#7b00d2] to-[#9d4edd] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#7b00d2] mb-4">{t.about.vision.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.about.vision.description}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#23c060] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-[#23c060] to-[#1ea050] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#7b00d2] mb-4">{t.about.commitment.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.about.commitment.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proposals Section */}
      <section id="propuestas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#7b00d2]/10 text-[#7b00d2] border-[#7b00d2]/20 mb-4">
              <Target className="w-3 h-3 mr-1" />
              Plan de Gobierno
            </Badge>
            <h2 className="text-4xl font-bold text-[#7b00d2] mb-4">{t.proposals.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.proposals.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proposals.map((proposal, index) => (
              <div
                key={proposal.id}
                className={`transform transition-all duration-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProposalCard proposal={proposal} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#7b00d2]/5 to-[#23c060]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7b00d2] mb-4">{t.testimonials.title}</h2>
            <p className="text-xl text-gray-600">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-[#7b00d2]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.age} años
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#23c060] fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#23c060] via-[#1ea050] to-[#7b00d2] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#7b00d2] hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {t.cta.contact}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#7b00d2] px-8 py-4 text-lg font-semibold bg-transparent transition-all duration-300 hover:scale-105"
            >
              {t.cta.social}
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/images/logo-oxigeno.png"
                  alt="Partido Oxígeno"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{t.footer.description}</p>
              <p className="text-sm text-gray-400 mb-6">{t.footer.party}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-[#23c060]">{t.footer.followUs}</h4>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="bg-[#7b00d2] hover:bg-[#23c060] p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#7b00d2] hover:bg-[#23c060] p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#7b00d2] hover:bg-[#23c060] p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#7b00d2] hover:bg-[#23c060] p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#23c060]">{t.footer.links}</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://verdeoxigeno.com/"
                    target="_blank"
                    className="text-gray-300 hover:text-[#23c060] flex items-center transition-colors duration-300"
                  >
                    {t.footer.partyLink}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#propuestas"
                    className="text-gray-300 hover:text-[#23c060] transition-colors duration-300"
                  >
                    {t.nav.proposals}
                  </Link>
                </li>
                <li>
                  <Link href="#sobre-mi" className="text-gray-300 hover:text-[#23c060] transition-colors duration-300">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="#juventud" className="text-gray-300 hover:text-[#23c060] transition-colors duration-300">
                    {t.nav.youth}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#23c060]">{t.footer.contact}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="h-4 w-4 text-[#23c060]" />
                  <span className="text-sm">freidyn.rivera@cmj2025.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="h-4 w-4 text-[#23c060]" />
                  <span className="text-sm">+57 (XXX) XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-[#23c060]" />
                  <span className="text-sm">Colombia</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-[#23c060]">{t.footer.newsletter}</h4>
                <p className="text-sm text-gray-400 mb-3">{t.footer.newsletterDesc}</p>
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-r-none"
                  />
                  <Button className="bg-[#23c060] hover:bg-[#1ea050] rounded-l-none">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Credits */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">{t.footer.rights}</p>

              <div className="flex items-center space-x-4">
                <p className="text-sm text-gray-400">{t.footer.developer}</p>
                <Link
                  href="https://github.com/Hiroshi025"
                  target="_blank"
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#23c060] transition-colors duration-300 group"
                >
                  <Image
                    src="/images/developer-avatar.jpg"
                    alt="Hiroshi025"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-medium">Hiroshi025</span>
                  <Github className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
