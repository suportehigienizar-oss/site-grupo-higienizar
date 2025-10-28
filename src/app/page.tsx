'use client';

import { useState, useEffect } from 'react';
import { Phone, WhatsApp, Star, CheckCircle, Users, Clock, Leaf, Shield, ArrowRight, Menu, X, MapPin, Mail, Instagram, Facebook, Youtube, Play } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      location: "Vila Madalena, SP",
      rating: 5,
      text: "Excelente serviço! Meu sofá ficou como novo após a higienização. Equipe muito profissional e pontual.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "João Santos",
      location: "Moema, SP",
      rating: 5,
      text: "Contratei para limpeza pós-obra e superou minhas expectativas. Recomendo para todos!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      location: "Pinheiros, SP",
      rating: 5,
      text: "Serviço de jardinagem impecável. Transformaram meu quintal em um verdadeiro jardim!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const services = [
    {
      title: "Higienização de Estofados",
      description: "Sofás, colchões, poltronas e cadeiras com secagem rápida",
      price: "A partir de R$ 80",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      features: ["Produtos biodegradáveis", "Secagem em 2-4h", "Garantia de satisfação"]
    },
    {
      title: "Limpeza Residencial",
      description: "Limpeza completa para sua casa com produtos ecológicos",
      price: "A partir de R$ 120",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      features: ["Equipe treinada", "Produtos seguros", "Flexibilidade de horários"]
    },
    {
      title: "Limpeza Comercial",
      description: "Manutenção profissional para escritórios e empresas",
      price: "A partir de R$ 200",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      features: ["Atendimento noturno", "Contratos mensais", "Equipamentos profissionais"]
    },
    {
      title: "Limpeza Pós-Obra",
      description: "Remoção completa de resíduos e sujeira de construção",
      price: "A partir de R$ 300",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      features: ["Equipamentos especiais", "Descarte responsável", "Resultado impecável"]
    },
    {
      title: "Jardinagem e Paisagismo",
      description: "Criação e manutenção de jardins e áreas verdes",
      price: "A partir de R$ 150",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      features: ["Design personalizado", "Plantas selecionadas", "Manutenção periódica"]
    },
    {
      title: "Manutenção Predial",
      description: "Serviços elétricos, hidráulicos e reparos gerais",
      price: "A partir de R$ 100",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
      features: ["Técnicos qualificados", "Materiais de qualidade", "Garantia dos serviços"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center text-sm">
            <Mail className="w-4 h-4 mr-2" />
            <span className="font-medium">comercial@grupohigienizar.com.br</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a807f0ac-bc7f-4e1d-ad8a-22b1f5ccc8c4.png" 
                alt="Grupo Higienizar Logo" 
                className="h-12 w-auto"
              />

            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </button>
              <a href="/agendamento" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">
                Agendamento
              </a>
              <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </button>
              <a href="/trabalhe-conosco" className="text-gray-700 hover:text-blue-600 transition-colors">
                Trabalhe Conosco
              </a>
              <a
                href="https://wa.me/5511915565996"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Fale no WhatsApp</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('sobre')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('servicos')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Serviços
                </button>
                <a href="/agendamento" className="text-left text-gray-700 hover:text-blue-600 transition-colors font-semibold">
                  Agendamento
                </a>
                <button onClick={() => scrollToSection('depoimentos')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Depoimentos
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Contato
                </button>
                <a href="/trabalhe-conosco" className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Trabalhe Conosco
                </a>
                <a
                  href="https://wa.me/5511915565996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors w-fit"
                >
                  <Phone className="w-4 h-4" />
                  <span>Fale no WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Soluções completas em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  Limpeza, Higienização, Jardinagem
                </span>{' '}
                e Manutenção
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Atendimento rápido, sustentável e de alta qualidade em toda São Paulo. 
                Transformamos seu ambiente com produtos biodegradáveis e equipe especializada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/agendamento"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all hover:scale-105 shadow-lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Agendar Serviço</span>
                </a>
                <a
                  href="https://wa.me/5511915565996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">Solicitar Orçamento</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/279a0c75-8fa6-46c9-bb22-febff30411d0.jpg"
                alt="Equipe profissional de limpeza"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">+5000</p>
                    <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quem Somos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O Grupo Higienizar é especialista em soluções de limpeza, higienização, jardinagem e manutenção 
              para residências e empresas em toda a região de São Paulo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossa Missão</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Proporcionar conforto, bem-estar e ambientes saudáveis com produtos biodegradáveis, 
                atendimento rápido e resultados garantidos. Acreditamos que um ambiente limpo e 
                organizado é fundamental para a qualidade de vida.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Com mais de 10 anos de experiência no mercado, nossa equipe é formada por profissionais 
                qualificados e comprometidos com a excelência em cada serviço prestado.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=300&h=200&fit=crop"
                alt="Equipe profissional"
                className="rounded-xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop"
                alt="Produtos ecológicos"
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Atendimento Express</h3>
              <p className="text-gray-600">Resposta rápida e agendamento flexível para sua conveniência</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Produtos Biodegradáveis</h3>
              <p className="text-gray-600">Cuidamos do meio ambiente com produtos ecológicos e seguros</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Secagem Rápida</h3>
              <p className="text-gray-600">Tecnologia avançada para secagem em 2-4 horas</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Garantia de Satisfação</h3>
              <p className="text-gray-600">100% de garantia em todos os nossos serviços</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços para manter seu ambiente sempre limpo, 
              saudável e bem cuidado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-blue-600 mb-2">{service.price}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href="/agendamento"
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors text-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Agendar</span>
                    </a>
                    <a
                      href="https://wa.me/5511915565996"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Orçamento</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600">
              Mais de 5.000 clientes satisfeitos em toda São Paulo
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-gray-800 text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">5000+</p>
              <p className="text-gray-600">Clientes Atendidos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">98%</p>
              <p className="text-gray-600">Satisfação</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">10+</p>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-600 mb-2">24h</p>
              <p className="text-gray-600">Atendimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Fale Conosco</h2>
            <p className="text-xl text-gray-600">
              Entre em contato e solicite seu orçamento gratuito
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicite seu Orçamento</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descreva o serviço que precisa..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Entre em Contato</h3>
                
                {/* WhatsApp Highlight */}
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-2xl mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">WhatsApp</p>
                      <p className="text-green-600 font-semibold">(11) 91556-5996</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/5511915565996"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Chamar no WhatsApp</span>
                  </a>
                </div>

                {/* Other Contact Methods */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-500 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">contato@grupohigienizar.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-red-500 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Área de Atendimento</p>
                      <p className="text-gray-600">Toda a Grande São Paulo</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-purple-500 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Horário de Atendimento</p>
                      <p className="text-gray-600">Segunda a Sábado: 7h às 19h</p>
                      <p className="text-gray-600">Domingo: 8h às 17h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">Siga-nos nas Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-2">@grupohigienizar</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nossa Área de Atendimento</h3>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Grande São Paulo</h4>
              <p className="text-gray-600 mb-4">
                Atendemos toda a região metropolitana de São Paulo, incluindo:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <p>• Vila Madalena</p>
                  <p>• Pinheiros</p>
                  <p>• Moema</p>
                  <p>• Itaim Bibi</p>
                </div>
                <div>
                  <p>• Jardins</p>
                  <p>• Vila Olímpia</p>
                  <p>• Brooklin</p>
                  <p>• Campo Belo</p>
                </div>
                <div>
                  <p>• Morumbi</p>
                  <p>• Alto de Pinheiros</p>
                  <p>• Perdizes</p>
                  <p>• E muito mais!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/763f676b-d5c3-42c8-b6a3-c9e71c06e2cc.png" 
                  alt="Grupo Higienizar Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-2xl font-bold">Grupo Higienizar</h3>
                  <p className="text-gray-400">Excelência em limpeza, higienização, jardinagem e manutenção</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transformamos ambientes com qualidade, sustentabilidade e compromisso. 
                Sua satisfação é nossa prioridade há mais de 10 anos.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-pink-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-500 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-white transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-white transition-colors">Sobre</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="text-gray-300 hover:text-white transition-colors">Serviços</button></li>
                <li><a href="/agendamento" className="text-gray-300 hover:text-white transition-colors">Agendamento</a></li>
                <li><button onClick={() => scrollToSection('depoimentos')} className="text-gray-300 hover:text-white transition-colors">Depoimentos</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300">(11) 91556-5996</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-300 lasy-highlight">comercial@grupohigienizar.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-gray-300">Grande São Paulo</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Solicite seu orçamento agora mesmo e descubra o poder de um ambiente limpo e saudável!
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/agendamento"
                  className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Agendar Serviço</span>
                </a>
                <a
                  href="https://wa.me/5511915565996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Falar no WhatsApp Agora</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Grupo Higienizar — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511915565996"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all z-50"
      >
        <Phone className="w-8 h-8" />
      </a>
    </div>
  );
}