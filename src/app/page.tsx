"use client"; 
import EventCard from '@/components/eventos/EventCard';
import HeroSection from '@/components/home/HeroSection';
import Navigation from '@/components/layout/Navigation';
import ProjectCard from '@/components/projetos/ProjectCard';
import React, { useState } from 'react';


// Dados de exemplo para demonstração
const projetos = [
  {
    id: '1',
    titulo: 'Semana da Computação 2024',
    descricao: 'Evento anual que reúne estudantes, professores e profissionais da área de computação para palestras, workshops e networking.',
    categoria: 'Evento',
    status: 'Em andamento' as const,
    participantes: 150
  },
  {
    id: '2',
    titulo: 'Projeto Inclusão Digital',
    descricao: 'Iniciativa para levar conhecimento de informática básica para comunidades carentes de São Luís.',
    categoria: 'Social',
    status: 'Ativo' as const,
    participantes: 25
  },
  {
    id: '3',
    titulo: 'Hackathon UFMA',
    descricao: 'Competição de programação que desafia estudantes a desenvolver soluções inovadoras em 48 horas.',
    categoria: 'Competição',
    status: 'Concluído' as const,
    participantes: 80
  }
];

const eventos = [
  {
    id: '1',
    titulo: 'Workshop de React.js',
    data: '15 de Julho, 2024',
    horario: '14:00 - 17:00',
    local: 'Laboratório de Informática - CCET',
    vagas: 30,
    inscritos: 28
  },
  {
    id: '2',
    titulo: 'Palestra: Inteligência Artificial',
    data: '22 de Julho, 2024',
    horario: '19:00 - 21:00',
    local: 'Auditório Central - UFMA',
    vagas: 100,
    inscritos: 45
  },
  {
    id: '3',
    titulo: 'Mesa Redonda: Mercado de TI',
    data: '29 de Julho, 2024',
    horario: '16:00 - 18:00',
    local: 'Sala de Conferências - CCET',
    vagas: 50,
    inscritos: 50
  }
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleSectionChange = (section: string): void => {
    setActiveSection(section);
  };

  const handleProjectDetails = (projeto: typeof projetos[0]): void => {
    alert(`Detalhes do projeto: ${projeto.titulo}`);
  };

  const handleEventRegister = (evento: typeof eventos[0]): void => {
    alert(`Inscrição no evento: ${evento.titulo}`);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-8">
            <HeroSection onNavigate={handleSectionChange} />
            
            {/* Seção de Projetos em Destaque */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Projetos em Destaque</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projetos.slice(0, 3).map((projeto) => (
                  <ProjectCard
                    key={projeto.id}
                    projeto={projeto}
                    onViewDetails={handleProjectDetails}
                  />
                ))}
              </div>
            </section>

            {/* Seção de Próximos Eventos */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Próximos Eventos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventos.slice(0, 3).map((evento) => (
                  <EventCard
                    key={evento.id}
                    evento={evento}
                    onRegister={handleEventRegister}
                  />
                ))}
              </div>
            </section>
          </div>
        );

      case 'projetos':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Projetos & Ações</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça as iniciativas do Diretório Acadêmico de Computação da UFMA
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projetos.map((projeto) => (
                <ProjectCard
                  key={projeto.id}
                  projeto={projeto}
                  onViewDetails={handleProjectDetails}
                />
              ))}
            </div>
          </div>
        );

      case 'eventos':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Eventos</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Participe dos nossos eventos e atividades acadêmicas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventos.map((evento) => (
                <EventCard
                  key={evento.id}
                  evento={evento}
                  onRegister={handleEventRegister}
                />
              ))}
            </div>
          </div>
        );

      case 'membros':
        return (
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Membros da Diretoria</h1>
            <p className="text-xl text-gray-600">Seção em desenvolvimento...</p>
          </div>
        );

      case 'denuncia':
        return (
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Canal de Denúncias</h1>
            <p className="text-xl text-gray-600">Seção em desenvolvimento...</p>
          </div>
        );

      case 'loja':
        return (
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Loja do DA</h1>
            <p className="text-xl text-gray-600">Seção em desenvolvimento...</p>
          </div>
        );

      default:
        return (
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Página não encontrada</h1>
            <p className="text-xl text-gray-600">A seção solicitada não existe.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold">Diretório Acadêmico de Computação</h3>
            <p className="text-gray-300">Universidade Federal do Maranhão</p>
          </div>
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 DA Computação UFMA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;