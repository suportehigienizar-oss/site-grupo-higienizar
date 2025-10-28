'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle, Instagram, Facebook, Youtube, Calendar, Shield, Zap } from 'lucide-react'

export default function Contato() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    endereco: '',
    mensagem: ''
  })

  const whatsappLink = "https://wa.me/5511915565996"
  const whatsappMessage = (service?: string) => {
    const message = service 
      ? `Olá! Gostaria de solicitar um orçamento para ${service}.`
      : "Olá! Gostaria de solicitar um orçamento."
    return `${whatsappLink}?text=${encodeURIComponent(message)}`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Email: ${formData.email}
Serviço: ${formData.servico}
Endereço: ${formData.endereco}
Mensagem: ${formData.mensagem}`
    
    window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const servicos = [
    "Higienização de Estofados",
    "Limpeza Residencial",
    "Limpeza Comercial",
    "Limpeza Pós-Obra",
    "Jardinagem e Paisagismo",
    "Limpeza de Vidros e Fachadas",
    "Manutenção Predial",
    "Outros"
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
              <Link href="/servicos" className="text-gray-700 hover:text-[#2563eb] transition-colors">
                Serviços
              </Link>
              <Link href="/depoimentos" className="text-gray-700 hover:text-[#2563eb] transition-colors">
                Depoimentos
              </Link>
              <Link href="/contato" className="text-[#2563eb] font-semibold">
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
                <Link href="/servicos" className="block px-3 py-2 text-gray-700 hover:text-[#2563eb] transition-colors">
                  Serviços
                </Link>
                <Link href="/depoimentos" className="block px-3 py-2 text-gray-700 hover:text-[#2563eb] transition-colors">
                  Depoimentos
                </Link>
                <Link href="/contato" className="block px-3 py-2 text-[#2563eb] font-semibold">
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
            <span className="text-[#2563eb] font-semibold">Contato</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Fale <span className="text-[#2563eb]">Conosco</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entre em contato conosco e receba um orçamento personalizado. 
              Estamos prontos para atender suas necessidades com rapidez e qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Contato Principal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Solicite seu Orçamento</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço Desejado *
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    required
                    value={formData.servico}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    {servicos.map((servico, index) => (
                      <option key={index} value={servico}>{servico}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-2">
                    Endereço *
                  </label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    required
                    value={formData.endereco}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                    placeholder="Rua, número, bairro, cidade"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                    placeholder="Descreva detalhes do serviço, tamanho do ambiente, urgência, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25d366] text-white py-4 px-6 rounded-lg hover:bg-[#20b358] transition-colors font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar via WhatsApp
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Campos obrigatórios. Ao enviar, você será redirecionado para o WhatsApp.
                </p>
              </form>
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Outras Formas de Contato</h2>
              
              {/* WhatsApp Destaque */}
              <div className="bg-[#25d366] text-white p-8 rounded-2xl mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="w-10 h-10" />
                  <div>
                    <h3 className="text-2xl font-bold">WhatsApp</h3>
                    <p className="text-green-100">Atendimento rápido e direto</p>
                  </div>
                </div>
                <a
                  href={whatsappMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold hover:underline block mb-2"
                >
                  📱 (11) 91556-5996
                </a>
                <p className="text-green-100 text-sm">
                  Disponível de segunda a sábado, das 7h às 19h
                </p>
              </div>

              {/* Outros Contatos */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <Phone className="w-6 h-6 text-[#2563eb] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Telefone Fixo</h4>
                    <p className="text-gray-600">(11) 3456-7890</p>
                    <p className="text-sm text-gray-500">Segunda a sexta, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <Mail className="w-6 h-6 text-[#16a34a] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@grupohigienizar.com</p>
                    <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <MapPin className="w-6 h-6 text-[#dc2626] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Área de Atendimento</h4>
                    <p className="text-gray-600">São Paulo - SP</p>
                    <p className="text-sm text-gray-500">Grande São Paulo e região metropolitana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <Clock className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Horário de Funcionamento</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 7h às 19h</p>
                      <p>Sábado: 8h às 16h</p>
                      <p>Domingo: Emergências</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Siga-nos nas Redes Sociais</h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Acompanhe nossos trabalhos e dicas de limpeza</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">@grupohigienizar</p>
              <p className="text-sm text-gray-500 mb-6">
                Veja nossos trabalhos em fotos e stories. Dicas diárias de limpeza e organização.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors font-semibold"
              >
                <Instagram className="w-4 h-4" />
                Seguir
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Facebook className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facebook</h3>
              <p className="text-gray-600 mb-4">Grupo Higienizar</p>
              <p className="text-sm text-gray-500 mb-6">
                Depoimentos de clientes, promoções especiais e conteúdo educativo sobre limpeza.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
              >
                <Facebook className="w-4 h-4" />
                Curtir
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">YouTube</h3>
              <p className="text-gray-600 mb-4">Grupo Higienizar</p>
              <p className="text-sm text-gray-500 mb-6">
                Vídeos dos nossos serviços, depoimentos de clientes e tutoriais de limpeza.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                <Youtube className="w-4 h-4" />
                Inscrever
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa e Área de Atendimento */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Área de Atendimento</h2>
            <div className="w-24 h-1 bg-[#16a34a] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Atendemos toda a região metropolitana de São Paulo</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Regiões Atendidas</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Centro de São Paulo",
                  "Zona Sul",
                  "Zona Norte", 
                  "Zona Leste",
                  "Zona Oeste",
                  "ABC Paulista",
                  "Osasco",
                  "Guarulhos",
                  "Barueri",
                  "Cotia",
                  "Taboão da Serra",
                  "Embu das Artes"
                ].map((regiao, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#16a34a] flex-shrink-0" />
                    <span className="text-gray-700">{regiao}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-3">Atendimento Especial</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#fbbf24]" />
                    <span className="text-sm text-gray-600">Atendimento de emergência 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#2563eb]" />
                    <span className="text-sm text-gray-600">Agendamento flexível</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#16a34a]" />
                    <span className="text-sm text-gray-600">Orçamento gratuito</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#2563eb] text-white p-8 rounded-2xl text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">São Paulo - SP</h3>
                <p className="text-blue-100 mb-6">
                  Nossa base de operações fica estrategicamente localizada para atender 
                  rapidamente toda a região metropolitana de São Paulo.
                </p>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Tempo médio de deslocamento:</strong><br />
                    Centro: 15-30 min | Zona Sul: 20-40 min<br />
                    Zona Norte: 25-45 min | ABC: 30-50 min
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">Qual o prazo para agendamento?</h3>
              <p className="text-gray-600">
                Normalmente conseguimos agendar em 24-48 horas. Para emergências, 
                atendemos no mesmo dia quando possível.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">O orçamento é gratuito?</h3>
              <p className="text-gray-600">
                Sim! Fazemos avaliação gratuita no local e apresentamos orçamento 
                detalhado sem compromisso.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">Vocês trabalham aos finais de semana?</h3>
              <p className="text-gray-600">
                Sim, atendemos aos sábados das 8h às 16h. Domingos apenas para 
                emergências com taxa adicional.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">Quais formas de pagamento aceitam?</h3>
              <p className="text-gray-600">
                Aceitamos dinheiro, PIX, cartão de débito/crédito e transferência bancária. 
                Parcelamento disponível para serviços acima de R$ 300.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb] to-[#16a34a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Solicitar seu Orçamento?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo! Nossa equipe está pronta para atender 
            você com rapidez e qualidade excepcional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] text-white px-8 py-4 rounded-full hover:bg-[#20b358] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Agora
            </a>
            <a
              href="tel:+5511915565996"
              className="bg-white text-[#2563eb] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </a>
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
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-gray-300">contato@grupohigienizar.com</span>
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