'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, CheckCircle, Star, ArrowRight, User, Mail, Home, Briefcase, Sparkles, Shield, Award, ChevronDown, ChevronUp } from 'lucide-react';

export default function Agendamento() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: '',
    tipoServico: '',
    data: '',
    horario: '',
    observacoes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const servicos = [
    {
      id: 'higienizacao-estofados',
      nome: 'Higienização de Estofados',
      preco: 'A partir de R$ 80',
      tempo: '2-4 horas',
      descricao: 'Sofás, colchões, poltronas e cadeiras com secagem rápida',
      beneficios: ['Produtos biodegradáveis', 'Secagem em 2-4h', 'Garantia de satisfação', 'Remove ácaros e bactérias'],
      icon: '🛋️'
    },
    {
      id: 'limpeza-residencial',
      nome: 'Limpeza Residencial',
      preco: 'A partir de R$ 120',
      tempo: '3-5 horas',
      descricao: 'Limpeza completa para sua casa com produtos ecológicos',
      beneficios: ['Equipe treinada', 'Produtos seguros', 'Flexibilidade de horários', 'Limpeza profunda'],
      icon: '🏠'
    },
    {
      id: 'limpeza-comercial',
      nome: 'Limpeza Comercial',
      preco: 'A partir de R$ 200',
      tempo: '4-6 horas',
      descricao: 'Manutenção profissional para escritórios e empresas',
      beneficios: ['Atendimento noturno', 'Contratos mensais', 'Equipamentos profissionais', 'Discrição total'],
      icon: '🏢'
    },
    {
      id: 'limpeza-pos-obra',
      nome: 'Limpeza Pós-Obra',
      preco: 'A partir de R$ 300',
      tempo: '6-8 horas',
      descricao: 'Remoção completa de resíduos e sujeira de construção',
      beneficios: ['Equipamentos especiais', 'Descarte responsável', 'Resultado impecável', 'Segurança garantida'],
      icon: '🏗️'
    },
    {
      id: 'jardinagem',
      nome: 'Jardinagem e Paisagismo',
      preco: 'A partir de R$ 150',
      tempo: '3-6 horas',
      descricao: 'Criação e manutenção de jardins e áreas verdes',
      beneficios: ['Design personalizado', 'Plantas selecionadas', 'Manutenção periódica', 'Consultoria gratuita'],
      icon: '🌱'
    },
    {
      id: 'manutencao-predial',
      nome: 'Manutenção Predial',
      preco: 'A partir de R$ 100',
      tempo: '2-4 horas',
      descricao: 'Serviços elétricos, hidráulicos e reparos gerais',
      beneficios: ['Técnicos qualificados', 'Materiais de qualidade', 'Garantia dos serviços', 'Atendimento emergencial'],
      icon: '🔧'
    }
  ];

  const horarios = [
    '08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    setShowConfirmation(true);
    
    // Preparar mensagem para WhatsApp
    const servicoSelecionado = servicos.find(s => s.id === formData.tipoServico);
    const mensagem = `🏠 *NOVO AGENDAMENTO*

👤 *Cliente:* ${formData.nome}
📞 *Telefone:* ${formData.telefone}
📧 *Email:* ${formData.email}
📍 *Endereço:* ${formData.endereco}

🛠️ *Serviço:* ${servicoSelecionado?.nome}
📅 *Data:* ${formData.data}
⏰ *Horário:* ${formData.horario}

📝 *Observações:* ${formData.observacoes || 'Nenhuma observação adicional'}

_Agendamento realizado através do site_`;

    // Redirecionar para WhatsApp após 3 segundos
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/5511915565996?text=${encodeURIComponent(mensagem)}`;
      window.open(whatsappUrl, '_blank');
    }, 3000);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.tipoServico !== '';
      case 2:
        return formData.data !== '' && formData.horario !== '';
      case 3:
        return formData.nome !== '' && formData.telefone !== '' && formData.endereco !== '';
      default:
        return false;
    }
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Agendamento Confirmado!</h2>
          <p className="text-gray-600 mb-6">
            Seu agendamento foi recebido com sucesso. Em instantes você será redirecionado para o WhatsApp para finalizar os detalhes.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-green-700">
              <strong>Próximo passo:</strong> Nossa equipe entrará em contato via WhatsApp para confirmar todos os detalhes e finalizar seu agendamento.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <a
              href="/"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors"
            >
              Voltar ao Início
            </a>
            <a
              href="/agendamento"
              className="text-blue-500 hover:text-blue-600 transition-colors"
              onClick={() => {
                setShowConfirmation(false);
                setCurrentStep(1);
                setFormData({
                  nome: '',
                  telefone: '',
                  email: '',
                  endereco: '',
                  tipoServico: '',
                  data: '',
                  horario: '',
                  observacoes: ''
                });
              }}
            >
              Fazer Novo Agendamento
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a807f0ac-bc7f-4e1d-ad8a-22b1f5ccc8c4.png" 
                alt="Grupo Higienizar Logo" 
                className="h-12 w-auto"
              />
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
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Agende seu Serviço
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Processo rápido e fácil em apenas 3 passos
          </p>
          
          {/* Progress Bar */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  currentStep >= step 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step ? 'bg-blue-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <span className={currentStep >= 1 ? 'text-blue-600 font-semibold' : ''}>
              Escolher Serviço
            </span>
            <span className={currentStep >= 2 ? 'text-blue-600 font-semibold' : ''}>
              Data e Horário
            </span>
            <span className={currentStep >= 3 ? 'text-blue-600 font-semibold' : ''}>
              Seus Dados
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Escolher Serviço */}
            {currentStep === 1 && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 text-blue-500 mr-2" />
                  Escolha o Serviço Desejado
                </h2>
                
                <div className="grid gap-4">
                  {servicos.map((servico, index) => (
                    <div key={servico.id} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors">
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="tipoServico"
                          value={servico.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`p-6 ${formData.tipoServico === servico.id ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'}`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <span className="text-3xl">{servico.icon}</span>
                              <div>
                                <h3 className="text-lg font-bold text-gray-800">{servico.nome}</h3>
                                <p className="text-gray-600">{servico.descricao}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                  <span className="text-blue-600 font-bold">{servico.preco}</span>
                                  <span className="text-gray-500 text-sm flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {servico.tempo}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => setExpandedService(expandedService === index ? null : index)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              {expandedService === index ? <ChevronUp /> : <ChevronDown />}
                            </button>
                          </div>
                          
                          {expandedService === index && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <h4 className="font-semibold text-gray-800 mb-2">Benefícios inclusos:</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {servico.beneficios.map((beneficio, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    {beneficio}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Data e Horário */}
            {currentStep === 2 && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Calendar className="w-6 h-6 text-blue-500 mr-2" />
                  Escolha Data e Horário
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data Preferida *
                    </label>
                    <input
                      type="date"
                      name="data"
                      value={formData.data}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Atendemos de segunda a sábado
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horário Preferido *
                    </label>
                    <select
                      name="horario"
                      value={formData.horario}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Selecione um horário</option>
                      {horarios.map((horario) => (
                        <option key={horario} value={horario}>
                          {horario}
                        </option>
                      ))}
                    </select>
                    <p className="text-sm text-gray-500 mt-1">
                      Horários disponíveis das 8h às 17h
                    </p>
                  </div>
                </div>

                {/* Resumo do Serviço Selecionado */}
                {formData.tipoServico && (
                  <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="font-bold text-gray-800 mb-2">Serviço Selecionado:</h3>
                    {(() => {
                      const servico = servicos.find(s => s.id === formData.tipoServico);
                      return servico ? (
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{servico.icon}</span>
                          <div>
                            <p className="font-semibold text-gray-800">{servico.nome}</p>
                            <p className="text-gray-600">{servico.descricao}</p>
                            <p className="text-blue-600 font-bold">{servico.preco}</p>
                          </div>
                        </div>
                      ) : null;
                    })()}
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Dados Pessoais */}
            {currentStep === 3 && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <User className="w-6 h-6 text-blue-500 mr-2" />
                  Seus Dados para Contato
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Endereço Completo *
                    </label>
                    <input
                      type="text"
                      name="endereco"
                      value={formData.endereco}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Rua, número, bairro, cidade"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Observações Adicionais
                  </label>
                  <textarea
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descreva detalhes específicos sobre o serviço, acesso ao local, preferências de horário, etc."
                  />
                </div>

                {/* Resumo Final */}
                <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Resumo do Agendamento
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Serviço:</strong> {servicos.find(s => s.id === formData.tipoServico)?.nome}</p>
                    <p><strong>Data:</strong> {formData.data ? new Date(formData.data + 'T00:00:00').toLocaleDateString('pt-BR') : ''}</p>
                    <p><strong>Horário:</strong> {formData.horario}</p>
                    <p><strong>Cliente:</strong> {formData.nome}</p>
                    <p><strong>Telefone:</strong> {formData.telefone}</p>
                    <p><strong>Endereço:</strong> {formData.endereco}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="bg-gray-50 px-8 py-6 flex justify-between items-center">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-3 rounded-xl transition-colors ${
                  currentStep === 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                }`}
                disabled={currentStep === 1}
              >
                Voltar
              </button>
              
              <div className="flex items-center space-x-4">
                {/* Garantias */}
                <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-green-500 mr-1" />
                    <span>100% Seguro</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-blue-500 mr-1" />
                    <span>Garantia Total</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span>5000+ Clientes</span>
                  </div>
                </div>
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`px-8 py-3 rounded-xl flex items-center space-x-2 transition-all ${
                      isStepValid()
                        ? 'bg-blue-500 hover:bg-blue-600 text-white hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <span>Continuar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid()}
                    className={`px-8 py-3 rounded-xl flex items-center space-x-2 transition-all ${
                      isStepValid()
                        ? 'bg-green-500 hover:bg-green-600 text-white hover:scale-105 shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Confirmar Agendamento</span>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Agendamento Garantido</h3>
            <p className="text-gray-600 text-sm">Confirmação imediata via WhatsApp</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Profissionais Qualificados</h3>
            <p className="text-gray-600 text-sm">Equipe treinada e experiente</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Satisfação Garantida</h3>
            <p className="text-gray-600 text-sm">98% de aprovação dos clientes</p>
          </div>
        </div>
      </div>
    </div>
  );
}