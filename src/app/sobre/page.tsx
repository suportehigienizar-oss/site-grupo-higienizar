'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle, Zap, Shield, Clock, Users, Award, Target, Heart, CheckCircle, ArrowLeft } from 'lucide-react'

export default function Sobre() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappLink = "https://wa.me/5511915565996"
  const whatsappMessage = () => {
    const message = "Olá! Gostaria de conhecer mais sobre os serviços do Grupo Higienizar."
    return `${whatsappLink}?text=${encodeURIComponent(message)}`
  }

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
              <Link href="/sobre" className="text-[#2563eb] font-semibold">
                Sobre
              </Link>
              <Link href="/servicos" className="text-gray-700 hover:text-[#2563eb] transition-colors">
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
                <Link href="/sobre" className="block px-3 py-2 text-[#2563eb] font-semibold">
                  Sobre
                </Link>
                <Link href="/servicos" className="block px-3 py-2 text-gray-700 hover:text-[#2563eb] transition-colors">
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
            <span className="text-[#2563eb] font-semibold">Sobre</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Conheça o <span className="text-[#2563eb]">Grupo Higienizar</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de uma década transformando ambientes e proporcionando qualidade de vida 
              através de serviços especializados em limpeza, higienização, jardinagem e manutenção.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fundado em 2010, o Grupo Higienizar nasceu da visão de oferecer serviços de limpeza 
                  e manutenção com excelência e responsabilidade ambiental. Começamos como uma pequena 
                  empresa familiar e hoje somos referência em toda a região metropolitana de São Paulo.
                </p>
                <p>
                  Nossa trajetória é marcada pela constante busca por inovação, utilizando produtos 
                  biodegradáveis e tecnologias avançadas que garantem resultados superiores sem 
                  comprometer o meio ambiente.
                </p>
                <p>
                  Ao longo dos anos, expandimos nossos serviços para atender tanto residências quanto 
                  empresas, sempre mantendo nosso compromisso com a qualidade, pontualidade e 
                  satisfação total dos nossos clientes.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="História da empresa"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#2563eb] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Anos de experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Pilares</h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-[#2563eb] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600">
                Proporcionar ambientes limpos, saudáveis e bem cuidados, superando expectativas 
                através de serviços especializados e sustentáveis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-[#16a34a] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser a empresa líder em serviços de limpeza e manutenção na região metropolitana, 
                reconhecida pela excelência e inovação.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-[#dc2626] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-600">
                Compromisso, qualidade, sustentabilidade, respeito ao cliente e responsabilidade 
                social em todas as nossas ações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
            <div className="w-24 h-1 bg-[#16a34a] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">O que nos torna únicos no mercado</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#fbbf24] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Atendimento Express</h3>
              <p className="text-gray-600 text-sm">Resposta em até 2 horas e agendamento flexível</p>
            </div>

            <div className="text-center">
              <div className="bg-[#16a34a] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Produtos Biodegradáveis</h3>
              <p className="text-gray-600 text-sm">100% ecológicos e seguros para sua família</p>
            </div>

            <div className="text-center">
              <div className="bg-[#2563eb] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secagem Rápida</h3>
              <p className="text-gray-600 text-sm">Tecnologia avançada para secagem em até 4 horas</p>
            </div>

            <div className="text-center">
              <div className="bg-[#dc2626] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Garantia Total</h3>
              <p className="text-gray-600 text-sm">100% de satisfação garantida ou refazemos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Profissionais qualificados e comprometidos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Carlos Silva - Diretor Geral"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Carlos Silva</h3>
              <p className="text-[#2563eb] font-semibold mb-3">Diretor Geral</p>
              <p className="text-gray-600 text-sm">
                15 anos de experiência no setor, especialista em gestão de qualidade e 
                desenvolvimento de processos sustentáveis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                alt="Ana Santos - Coordenadora Técnica"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ana Santos</h3>
              <p className="text-[#16a34a] font-semibold mb-3">Coordenadora Técnica</p>
              <p className="text-gray-600 text-sm">
                Especialista em higienização e produtos biodegradáveis, responsável pelo 
                treinamento e capacitação da equipe técnica.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="Roberto Costa - Supervisor de Campo"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Roberto Costa</h3>
              <p className="text-[#dc2626] font-semibold mb-3">Supervisor de Campo</p>
              <p className="text-gray-600 text-sm">
                12 anos de experiência em jardinagem e manutenção predial, garantindo 
                a excelência na execução de todos os serviços.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Números que Comprovam</h2>
            <div className="w-24 h-1 bg-[#16a34a] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2563eb] mb-2">5000+</div>
              <p className="text-gray-600">Clientes Atendidos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#16a34a] mb-2">15+</div>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fbbf24] mb-2">98%</div>
              <p className="text-gray-600">Satisfação dos Clientes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#dc2626] mb-2">24h</div>
              <p className="text-gray-600">Atendimento de Emergência</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb] to-[#16a34a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Transformar seu Ambiente?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a manter seu espaço 
            sempre limpo, organizado e saudável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] text-white px-8 py-4 rounded-full hover:bg-[#20b358] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento
            </a>
            <Link
              href="/servicos"
              className="bg-white text-[#2563eb] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
            >
              Ver Nossos Serviços
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