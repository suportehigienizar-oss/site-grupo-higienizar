'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle, CheckCircle, Star, Clock, Shield, Zap, Home, Building, Wrench, Droplets, Leaf, Sparkles } from 'lucide-react'

export default function Servicos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappLink = "https://wa.me/5511915565996"
  const whatsappMessage = (service?: string) => {
    const message = service 
      ? `Olá! Gostaria de solicitar um orçamento para ${service}.`
      : "Olá! Gostaria de solicitar um orçamento."
    return `${whatsappLink}?text=${encodeURIComponent(message)}`
  }

  const servicos = [
    {
      title: "Higienização de Estofados",
      description: "Limpeza profunda de sofás, colchões, poltronas e cadeiras com tecnologia avançada de extração",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      icon: <Sparkles className="w-6 h-6" />,
      features: ["Remoção de ácaros e bactérias", "Secagem rápida em 4h", "Produtos hipoalergênicos", "Garantia de 30 dias"],
      price: "A partir de R$ 80",
      service: "higienização de estofados"
    },
    {
      title: "Limpeza Residencial",
      description: "Limpeza completa e detalhada para sua casa, incluindo todos os ambientes",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      icon: <Home className="w-6 h-6" />,
      features: ["Limpeza de todos os cômodos", "Produtos biodegradáveis", "Equipe treinada", "Flexibilidade de horários"],
      price: "A partir de R$ 120",
      service: "limpeza residencial"
    },
    {
      title: "Limpeza Comercial",
      description: "Manutenção de ambientes corporativos com padrão profissional de qualidade",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      icon: <Building className="w-6 h-6" />,
      features: ["Limpeza de escritórios", "Sanitização de ambientes", "Contratos mensais", "Atendimento noturno"],
      price: "A partir de R$ 200",
      service: "limpeza comercial"
    },
    {
      title: "Limpeza Pós-Obra",
      description: "Remoção completa de resíduos de construção e preparação do ambiente",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      icon: <Wrench className="w-6 h-6" />,
      features: ["Remoção de entulhos", "Limpeza de vidros", "Polimento de pisos", "Ambiente pronto para uso"],
      price: "A partir de R$ 300",
      service: "limpeza pós-obra"
    },
    {
      title: "Jardinagem e Paisagismo",
      description: "Cuidado completo com jardins, podas e criação de áreas verdes",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      icon: <Leaf className="w-6 h-6" />,
      features: ["Poda e manutenção", "Plantio e replantio", "Irrigação automática", "Paisagismo personalizado"],
      price: "A partir de R$ 150",
      service: "jardinagem e paisagismo"
    },
    {
      title: "Limpeza de Vidros e Fachadas",
      description: "Limpeza especializada de vidros, fachadas e superfícies externas",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      icon: <Droplets className="w-6 h-6" />,
      features: ["Equipamentos especializados", "Segurança certificada", "Produtos específicos", "Resultado cristalino"],
      price: "A partir de R$ 180",
      service: "limpeza de vidros e fachadas"
    }
  ]

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold text-[#2563eb] cursor-pointer">Grupo Higienizar</h1>
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#2563eb] transition-colors">
                Início
              </Link>
              <Link href="/sobre" className="text-gray-700 hover:text-[#2563eb] transition-colors">
                Sobre
              </Link>
              <Link href="/servicos" className="text-[#2563eb] font-semibold">
                Serviços
              </Link>
              <Link href="/depoimentos" className="text-gray-700 hover:text-[#2563eb] transition-colors">
                Depoimentos
              </Link>
              <Link href="/contato" className="text-gray-700 hover:text-[#2563eb] transition-colors">
                Contato
              </Link>
            </nav>

            {/* WhatsApp Button Desktop */}
            <div className="hidden md:block">
              <a
                href={whatsappMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] text-white px-6 py-2 rounded-full hover:bg-[#20b358] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Fale no WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#2563eb] transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-[#2563eb] transition-colors">
                  Início
                </Link>
                <Link href="/sobre" className="block px-3 py-2 text-gray-700 hover:text-[#2563eb] transition-colors">
                  Sobre
                </Link>
                <Link href="/servicos" className="block px-3 py-2 text-[#2563eb] font-semibold">
                  Serviços
                </Link>
                <Link href="/depoimentos" className="block px-3 py-2 text-gray-700 hover:text-[#2563eb] transition-colors">
                  Depoimentos
                </Link>
                <Link href="/contato" className="block px-3 py-2 text-gray-700 hover:text-[#2563eb] transition-colors">
                  Contato
                </Link>
                <a
                  href={whatsappMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mx-3 mt-4 bg-[#25d366] text-white px-4 py-2 rounded-full hover:bg-[#20b358] transition-colors text-center"
                >
                  Fale no WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#2563eb] transition-colors">
              Início
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#2563eb] font-semibold">Serviços</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-[#2563eb]">Serviços</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em limpeza, higienização, jardinagem e manutenção 
              para residências e empresas em toda São Paulo.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="relative">
                  <img
                    src={servico.image}
                    alt={servico.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#2563eb] text-white p-2 rounded-full">
                    {servico.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{servico.title}</h3>
                  <p className="text-gray-600 mb-4">{servico.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Inclui:</h4>
                    <ul className="space-y-1">
                      {servico.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#16a34a] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#2563eb]">{servico.price}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={whatsappMessage(servico.service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25d366] text-white py-3 px-6 rounded-full hover:bg-[#20b358] transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Trabalhamos</h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Processo simples e eficiente em 4 etapas</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#2563eb] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contato</h3>
              <p className="text-gray-600 text-sm">Entre em contato via WhatsApp ou telefone para solicitar seu orçamento</p>
            </div>

            <div className="text-center">
              <div className="bg-[#16a34a] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Avaliação</h3>
              <p className="text-gray-600 text-sm">Visitamos o local para avaliar o serviço e apresentar o orçamento final</p>
            </div>

            <div className="text-center">
              <div className="bg-[#fbbf24] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Execução</h3>
              <p className="text-gray-600 text-sm">Nossa equipe especializada executa o serviço com máxima qualidade</p>
            </div>

            <div className="text-center">
              <div className="bg-[#dc2626] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Garantia</h3>
              <p className="text-gray-600 text-sm">Verificamos sua satisfação e oferecemos garantia em todos os serviços</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela de Preços */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tabela de Preços</h2>
            <div className="w-24 h-1 bg-[#16a34a] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Preços transparentes e justos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pacote Residencial */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-[#2563eb]">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#2563eb] mb-2">Pacote Residencial</h3>
                <p className="text-gray-600">Ideal para casas e apartamentos</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Limpeza Geral (até 100m²)</span>
                  <span className="font-bold text-[#2563eb]">R$ 120</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Higienização Sofá 3 lugares</span>
                  <span className="font-bold text-[#2563eb]">R$ 80</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Limpeza de Vidros (até 10)</span>
                  <span className="font-bold text-[#2563eb]">R$ 60</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Jardinagem Básica</span>
                  <span className="font-bold text-[#2563eb]">R$ 100</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2563eb] mb-2">R$ 320</div>
                <p className="text-sm text-gray-600 mb-4">Pacote completo com 15% de desconto</p>
                <a
                  href={whatsappMessage("pacote residencial")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#2563eb] text-white py-3 px-6 rounded-full hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contratar Pacote
                </a>
              </div>
            </div>

            {/* Pacote Comercial */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-[#16a34a]">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#16a34a] mb-2">Pacote Comercial</h3>
                <p className="text-gray-600">Para escritórios e empresas</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Limpeza Escritório (até 200m²)</span>
                  <span className="font-bold text-[#2563eb] lasy-highlight">R$ 220</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sanitização Completa</span>
                  <span className="font-bold text-[#16a34a]">R$ 150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Limpeza de Fachada</span>
                  <span className="font-bold text-[#16a34a]">R$ 300</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Manutenção Mensal</span>
                  <span className="font-bold text-[#16a34a]">R$ 400</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-[#16a34a] mb-2">R$ 850</div>
                <p className="text-sm text-gray-600 mb-4">Pacote completo com 20% de desconto</p>
                <a
                  href={whatsappMessage("pacote comercial")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#16a34a] text-white py-3 px-6 rounded-full hover:bg-[#15803d] transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contratar Pacote
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              * Preços podem variar conforme tamanho e complexidade do serviço
            </p>
            <p className="text-sm text-gray-500">
              Orçamentos personalizados disponíveis. Entre em contato para mais informações.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que Escolher o Grupo Higienizar?</h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#fbbf24] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Atendimento Express</h3>
              <p className="text-gray-600 text-sm">Resposta em até 2 horas e agendamento no mesmo dia</p>
            </div>

            <div className="text-center">
              <div className="bg-[#16a34a] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Produtos Ecológicos</h3>
              <p className="text-gray-600 text-sm">100% biodegradáveis e seguros para sua família</p>
            </div>

            <div className="text-center">
              <div className="bg-[#2563eb] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Pontualidade</h3>
              <p className="text-gray-600 text-sm">Sempre no horário combinado, sem atrasos</p>
            </div>

            <div className="text-center">
              <div className="bg-[#dc2626] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Garantia Total</h3>
              <p className="text-gray-600 text-sm">Satisfação garantida ou refazemos o serviço</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb] to-[#16a34a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Contratar Nossos Serviços?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo e receba um orçamento personalizado 
            para suas necessidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] text-white px-8 py-4 rounded-full hover:bg-[#20b358] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento Grátis
            </a>
            <Link
              href="/contato"
              className="bg-white text-[#2563eb] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
            >
              Outras Formas de Contato
            </Link>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link href="/">
                <h3 className="text-2xl font-bold text-[#2563eb] mb-4 cursor-pointer">Grupo Higienizar</h3>
              </Link>
              <p className="text-gray-300 mb-4">
                Excelência em limpeza, higienização, jardinagem e manutenção.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
                <Link href="/sobre" className="block text-gray-300 hover:text-white transition-colors">
                  Sobre
                </Link>
                <Link href="/servicos" className="block text-gray-300 hover:text-white transition-colors">
                  Serviços
                </Link>
                <Link href="/contato" className="block text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#25d366]" />
                  <span className="text-gray-300">(11) 91556-5996</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Grupo Higienizar — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <a
        href={whatsappMessage()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20b358] transition-all duration-300 hover:scale-110 z-50"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}