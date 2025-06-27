import React from 'react';
import { Users, ChevronRight } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  status: 'Ativo' | 'Em andamento' | 'Concluído';
  participantes: number;
}

interface ProjectCardProps {
  projeto: Projeto;
  onViewDetails: (projeto: Projeto) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projeto, onViewDetails }) => {
  const getStatusColor = (status: Projeto['status']): string => {
    switch (status) {
      case 'Ativo': return 'bg-green-100 text-green-800';
      case 'Em andamento': return 'bg-yellow-100 text-yellow-800';
      case 'Concluído': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card hover className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            {projeto.categoria}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(projeto.status)}`}>
            {projeto.status}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3">{projeto.titulo}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{projeto.descricao}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users className="w-4 h-4" />
            {projeto.participantes} participantes
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewDetails(projeto)}
          >
            Ver mais <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;