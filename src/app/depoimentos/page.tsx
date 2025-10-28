'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle, Star, Play, Quote, ThumbsUp, Users, Award, TrendingUp } from 'lucide-react'

export default function Depoimentos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappLink = "https://wa.me/5511915565996"
  const whatsappMessage = () => {
    const message = "Olá! Vi os depoimentos e gostaria de contratar os serviços do Grupo Higienizar."
    return `${whatsappLink}?text=${encodeURIComponent(message)}`
  }

  const depoimentos = [
    {
      name: "Maria Silva",
      service: "Higienização de Estofados",
      text: "Excelente serviço! Meu sofá ficou como novo. A equipe foi muito profissional, pontual e cuidadosa. Produtos de qualidade e resultado surpreendente. Recomendo para todos!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "Janeiro 2025",
      location: "Vila Madalena, SP"
    },
    {
      name: "João Santos",
      service: "Limpeza Pós-Obra",
      text: "Contratei para limpeza pós-obra do meu apartamento e superou todas as minhas expectativas. Deixaram tudo impecável, removeram toda a sujeira e poeira. Trabalho perfeito!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "Dezembro 2024",
      location: "Moema, SP"
    },
    {
      name: "Ana Costa",
      service: "Jardinagem e Paisagismo",
      text: "Serviço de jardinagem impecável! Transformaram completamente meu jardim. A equipe é muito conhecedora e cuidadosa. Meu jardim nunca esteve tão bonito e bem cuidado.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "Novembro 2024",
      location: "Jardins, SP"
    },
    {
      name: "Carlos Oliveira",
      service: "Limpeza Comercial",
      text: "Contrato mensalmente para limpeza do meu escritório. Sempre pontuais, eficientes e com ótimo custo-benefício. Meus funcionários e clientes sempre elogiam a limpeza do ambiente.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "Janeiro 2025",
      location: "Faria Lima, SP"
    },
    {
      name: "Fernanda Lima",
      service: "Limpeza Residencial",
      text: "Equipe maravilhosa! Fazem limpeza da minha casa quinzenalmente há mais de um ano. Sempre caprichosos, educados e respeitosos. Confio totalmente no trabalho deles.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      date: "Dezembro 2024",
      location: "Pinheiros, SP"
    },
    {
      name: "Roberto Mendes",
      service: "Limpeza de Vidros",
      text: "Limpeza de vidros da minha empresa ficou perfeita! Usam equipamentos profissionais e têm toda segurança necessária. Resultado cristalino e duradouro. Muito satisfeito!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      date: "Janeiro 2025",
      location: "Vila Olímpia, SP"
    },
    {
      name: "Juliana Ferreira",
      service: "Higienização de Colchões",
      text: "Serviço incrível! Higienizaram todos os colchões da família. Removeram manchas antigas e o cheiro ficou maravilhoso. Dormimos muito melhor agora. Vale cada centavo!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      date: "Novembro 2024",
      location: "Brooklin, SP"
    },
    {
      name: "Paulo Rodrigues",
      service: "Manutenção Predial",
      text: "Excelente trabalho de manutenção no meu prédio. Resolveram problemas elétricos e hidráulicos com muita competência. Equipe técnica muito qualificada e preços justos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      date: "Dezembro 2024",
      location: "Itaim Bibi, SP"
    },
    {
      name: "Luciana Alves",
      service: "Limpeza Geral",
      text: "Contratei para uma limpeza geral antes de uma festa em casa. Ficou tudo perfeito! Atenção aos detalhes impressionante. Todos os convidados elogiaram como estava limpo.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      date: "Janeiro 2025",
      location: "Perdizes, SP"
    }
  ]

  const videoTestimonials = [
    {
      name: "Empresa ABC Ltda",
      service: "Limpeza Comercial",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      duration: "2:15"
    },
    {
      name: "Família Martins",
      service: "Higienização Completa",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      duration: "1:45"
    },
    {
      name: "Condomínio Jardim das Flores",
      service: "Jardinagem",
      thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      duration: "3:20"
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
              <Link href="/depoimentos" className="text-[#2563eb] font-semibold">
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
                <Link href="/servicos" className="block px-3 py-2 text-gray-700 hover:text-[#2563eb] transition-colors">
                  Serviços
                </Link>
                <Link href="/depoimentos" className="block px-3 py-2 text-[#2563eb] font-semibold">
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
            <span className="text-[#2563eb] font-semibold">Depoimentos</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              O que nossos <span className="text-[#2563eb]">clientes</span> dizem
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 5.000 clientes satisfeitos comprovam a qualidade dos nossos serviços. 
              Confira os depoimentos reais de quem já experimentou a excelência do Grupo Higienizar.
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="bg-[#2563eb] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2563eb] mb-2">5.000+</div>
              <p className="text-gray-600">Clientes Atendidos</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="bg-[#16a34a] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#16a34a] mb-2">4.9/5</div>
              <p className="text-gray-600">Avaliação Média</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl">
              <div className="bg-[#fbbf24] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#fbbf24] mb-2">98%</div>
              <p className="text-gray-600">Satisfação</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="bg-[#dc2626] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#dc2626] mb-2">95%</div>
              <p className="text-gray-600">Recontratação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Depoimentos dos Nossos Clientes</h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Experiências reais de quem confia no nosso trabalho</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative">
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-[#2563eb] opacity-20" />
                </div>
                
                <div className="flex items-center mb-6">
                  <img
                    src={depoimento.image}
                    alt={depoimento.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{depoimento.name}</h4>
                    <p className="text-[#2563eb] font-semibold text-sm">{depoimento.service}</p>
                    <p className="text-gray-500 text-xs">{depoimento.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 italic mb-4 leading-relaxed">
                  "{depoimento.text}"
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{depoimento.date}</span>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-[#16a34a]" />
                    <span className="text-[#16a34a] font-semibold">Verificado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeo Depoimentos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Depoimentos em Vídeo</h2>
            <div className="w-24 h-1 bg-[#16a34a] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Veja nossos clientes falando sobre nossa qualidade</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={video.thumbnail}
                    alt={`Depoimento ${video.name}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-[#2563eb]" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-gray-900 mb-1">{video.name}</h3>
                  <p className="text-[#2563eb] text-sm">{video.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Quer ver mais depoimentos? Acesse nosso canal no YouTube!
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
            >
              <Play className="w-5 h-5" />
              Ver Mais Vídeos
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Avaliações por Serviço */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Avaliações por Serviço</h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Higienização de Estofados</h3>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-[#2563eb] mb-2">4.9/5</div>
              <p className="text-gray-600">847 avaliações</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Limpeza Residencial</h3>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-[#16a34a] mb-2">4.8/5</div>
              <p className="text-gray-600">1.234 avaliações</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Jardinagem</h3>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-[#fbbf24] mb-2">4.9/5</div>
              <p className="text-gray-600">523 avaliações</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Limpeza Comercial</h3>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-[#dc2626] mb-2">4.8/5</div>
              <p className="text-gray-600">689 avaliações</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Limpeza Pós-Obra</h3>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-[#2563eb] mb-2">4.9/5</div>
              <p className="text-gray-600">312 avaliações</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manutenção Predial</h3>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-[#16a34a] mb-2">4.7/5</div>
              <p className="text-gray-600">456 avaliações</p>
            </div>
          </div>
        </div>
      </section>

      {/* Números que Comprovam */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Números que Comprovam Nossa Qualidade</h2>
            <div className="w-24 h-1 bg-[#16a34a] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2563eb] mb-2">15+</div>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#16a34a] mb-2">5.000+</div>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fbbf24] mb-2">98%</div>
              <p className="text-gray-600">Taxa de Satisfação</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#dc2626] mb-2">24h</div>
              <p className="text-gray-600">Atendimento Express</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb] to-[#16a34a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Seja Nosso Próximo Cliente Satisfeito!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se aos milhares de clientes que já experimentaram a qualidade 
            e excelência dos nossos serviços. Solicite seu orçamento agora!
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