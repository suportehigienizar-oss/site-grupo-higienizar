'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle, Users, Award, Clock, Heart, CheckCircle, MapPin, Mail, Phone, Send, FileText, Star, Briefcase, GraduationCap, TrendingUp } from 'lucide-react'

export default function TrabalheConosco() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
    experiencia: '',
    mensagem: ''
  })

  const whatsappLink = "https://wa.me/5511915565996"
  const whatsappMessage = () => {
    const message = "Olá! Tenho interesse em trabalhar no Grupo Higienizar. Gostaria de saber mais sobre as oportunidades disponíveis."
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
    const message = `Olá! Gostaria de me candidatar a uma vaga no Grupo Higienizar.

*Nome:* ${formData.nome}
*Email:* ${formData.email}
*Telefone:* ${formData.telefone}
*Cargo de Interesse:* ${formData.cargo}
*Experiência:* ${formData.experiencia}
*Mensagem:* ${formData.mensagem}`

    const whatsappUrl = `${whatsappLink}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const vagas = [
    {
      titulo: "Técnico em Higienização",
      tipo: "CLT - Tempo Integral",
      salario: "R$ 2.200 - R$ 2.800",
      requisitos: ["Experiência em limpeza profissional", "Disponibilidade para viagens", "Carteira de habilitação B"],
      beneficios: ["Vale transporte", "Vale refeição", "Plano de saúde", "Treinamentos"]
    },
    {
      titulo: "Jardineiro",
      tipo: "CLT - Tempo Integral",
      salario: "R$ 1.800 - R$ 2.400",
      requisitos: ["Conhecimento em plantas e jardins", "Experiência com ferramentas", "Disponibilidade de horários"],
      beneficios: ["Vale transporte", "Vale refeição", "Equipamentos fornecidos", "Crescimento profissional"]
    },
    {
      titulo: "Auxiliar de Limpeza",
      tipo: "CLT - Meio Período",
      salario: "R$ 1.400 - R$ 1.800",
      requisitos: ["Experiência em limpeza", "Responsabilidade", "Trabalho em equipe"],
      beneficios: ["Vale transporte", "Vale refeição", "Flexibilidade de horários", "Treinamento completo"]
    },
    {
      titulo: "Vendedor Externo",
      tipo: "CLT + Comissões",
      salario: "R$ 2.500 - R$ 4.500",
      requisitos: ["Experiência em vendas", "Carteira de habilitação", "Facilidade de comunicação"],
      beneficios: ["Comissões atrativas", "Carro da empresa", "Plano de saúde", "Metas alcançáveis"]
    }
  ]

  const beneficios = [
    {
      icon: <Award className="w-8 h-8 text-[#2563eb]" />,
      titulo: "Plano de Carreira",
      descricao: "Oportunidades reais de crescimento profissional"
    },
    {
      icon: <Heart className="w-8 h-8 text-[#dc2626]" />,
      titulo: "Plano de Saúde",
      descricao: "Assistência médica e odontológica completa"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#16a34a]" />,
      titulo: "Treinamentos",
      descricao: "Capacitação contínua e desenvolvimento de habilidades"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#fbbf24]" />,
      titulo: "Horários Flexíveis",
      descricao: "Equilíbrio entre vida pessoal e profissional"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#8b5cf6]" />,
      titulo: "Bonificações",
      descricao: "Premiações por desempenho e metas alcançadas"
    },
    {
      icon: <Users className="w-8 h-8 text-[#06b6d4]" />,
      titulo: "Ambiente Colaborativo",
      descricao: "Equipe unida e ambiente de trabalho saudável"
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
              <Link href="/servicos" className="text-gray-700 hover:text-[#2563eb] transition-colors">
                Serviços
              </Link>
              <Link href="/depoimentos" className="text-gray-700 hover:text-[#2563eb] transition-colors">
                Depoimentos
              </Link>
              <Link href="/contato" className="text-gray-700 hover:text-[#2563eb] transition-colors">
                Contato
              </Link>
              <Link href="/trabalhe-conosco" className="text-[#2563eb] font-semibold">
                Trabalhe Conosco
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
                <Link href="/contato" className="block px-3 py-2 text-gray-700 hover:text-[#2563eb] transition-colors">
                  Contato
                </Link>
                <Link href="/trabalhe-conosco" className="block px-3 py-2 text-[#2563eb] font-semibold">
                  Trabalhe Conosco
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
            <span className="text-[#2563eb] font-semibold">Trabalhe Conosco</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Faça Parte da Nossa <span className="text-[#2563eb]">Equipe</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Junte-se ao Grupo Higienizar e construa uma carreira sólida em uma empresa que valoriza 
              seus colaboradores e oferece oportunidades reais de crescimento profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#vagas"
                className="bg-[#2563eb] text-white px-8 py-4 rounded-full hover:bg-[#1d4ed8] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
              >
                <Briefcase className="w-5 h-5" />
                Ver Vagas Disponíveis
              </a>
              <a
                href="#candidatar"
                className="border-2 border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-full hover:bg-[#2563eb] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
              >
                <Send className="w-5 h-5" />
                Candidatar-se Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Por que trabalhar conosco */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que Trabalhar Conosco?</h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Descubra os benefícios de fazer parte da nossa família</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {beneficio.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultura da Empresa */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Cultura</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  No Grupo Higienizar, acreditamos que nossos colaboradores são nosso maior patrimônio. 
                  Cultivamos um ambiente de trabalho baseado no respeito mútuo, colaboração e crescimento contínuo.
                </p>
                <p>
                  Oferecemos oportunidades reais de desenvolvimento profissional, com treinamentos regulares, 
                  plano de carreira estruturado e reconhecimento pelo bom desempenho.
                </p>
                <p>
                  Nossa equipe é diversa, inclusiva e unida pelo objetivo comum de proporcionar excelência 
                  em todos os serviços que prestamos aos nossos clientes.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2563eb] mb-2">50+</div>
                  <p className="text-gray-600">Colaboradores</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#16a34a] mb-2">95%</div>
                  <p className="text-gray-600">Satisfação Interna</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop"
                alt="Equipe trabalhando"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#16a34a] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Anos de tradição</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vagas Disponíveis */}
      <section id="vagas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vagas Disponíveis</h2>
            <div className="w-24 h-1 bg-[#16a34a] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Encontre a oportunidade perfeita para você</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vagas.map((vaga, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{vaga.titulo}</h3>
                    <p className="text-[#2563eb] font-semibold">{vaga.tipo}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-[#16a34a]">{vaga.salario}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                  <ul className="space-y-1">
                    {vaga.requisitos.map((requisito, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#16a34a] mr-2 flex-shrink-0" />
                        {requisito}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefícios:</h4>
                  <ul className="space-y-1">
                    {vaga.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-[#fbbf24] mr-2 flex-shrink-0" />
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#candidatar"
                  className="w-full bg-[#2563eb] text-white py-3 rounded-xl hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <Send className="w-4 h-4" />
                  Candidatar-se
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Seletivo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processo Seletivo</h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Como funciona nosso processo de contratação</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#2563eb] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Candidatura</h3>
              <p className="text-gray-600 text-sm">Envie seu currículo através do formulário ou WhatsApp</p>
            </div>

            <div className="text-center">
              <div className="bg-[#16a34a] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Análise</h3>
              <p className="text-gray-600 text-sm">Avaliamos seu perfil e experiência para a vaga</p>
            </div>

            <div className="text-center">
              <div className="bg-[#fbbf24] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Entrevista</h3>
              <p className="text-gray-600 text-sm">Conversa para conhecer melhor suas habilidades</p>
            </div>

            <div className="text-center">
              <div className="bg-[#dc2626] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contratação</h3>
              <p className="text-gray-600 text-sm">Bem-vindo à equipe! Início do treinamento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Candidatura */}
      <section id="candidatar" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Candidate-se Agora</h2>
            <div className="w-24 h-1 bg-[#16a34a] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Preencha o formulário e dê o primeiro passo para sua nova carreira</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cargo de Interesse *</label>
                  <select
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  >
                    <option value="">Selecione um cargo</option>
                    <option value="Técnico em Higienização">Técnico em Higienização</option>
                    <option value="Jardineiro">Jardineiro</option>
                    <option value="Auxiliar de Limpeza">Auxiliar de Limpeza</option>
                    <option value="Vendedor Externo">Vendedor Externo</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experiência Profissional *</label>
                <select
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                >
                  <option value="">Selecione sua experiência</option>
                  <option value="Sem experiência">Sem experiência</option>
                  <option value="1-2 anos">1-2 anos</option>
                  <option value="3-5 anos">3-5 anos</option>
                  <option value="5+ anos">Mais de 5 anos</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  placeholder="Conte-nos um pouco sobre você e por que gostaria de trabalhar conosco..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#25d366] text-white px-8 py-4 rounded-full hover:bg-[#20b358] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold mx-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar Candidatura via WhatsApp
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Ao clicar, você será redirecionado para o WhatsApp com suas informações preenchidas
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb] to-[#16a34a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Começar sua Nova Carreira?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a uma empresa que valoriza seus colaboradores e oferece oportunidades 
            reais de crescimento profissional e pessoal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] text-white px-8 py-4 rounded-full hover:bg-[#20b358] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com RH
            </a>
            <a
              href="#candidatar"
              className="bg-white text-[#2563eb] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
            >
              <FileText className="w-5 h-5" />
              Enviar Currículo
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
                <Link href="/trabalhe-conosco" className="block text-gray-300 hover:text-white transition-colors">
                  Trabalhe Conosco
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
                  <span className="text-gray-300">rh@grupohigienizar.com.br</span>
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