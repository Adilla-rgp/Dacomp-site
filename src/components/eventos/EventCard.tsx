import React from 'react';
import { Calendar, Clock, MapPin} from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

interface Evento {
  id: string;
  titulo: string;
  data: string;
  horario: string;
  local: string;
  vagas: number;
  inscritos: number;
}

interface EventCardProps {
  evento: Evento;
  onRegister: (evento: Evento) => void;
}

const EventCard: React.FC<EventCardProps> = ({ evento, onRegister }) => {
  const progressPercentage = (evento.inscritos / evento.vagas) * 100;
  const isLotado = evento.inscritos >= evento.vagas;
  
  return (
    <Card hover>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{evento.titulo}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {evento.data}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {evento.horario}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {evento.local}
              </div>
            </div>
          </div>
          
          <div className="text-right ml-4">
            <div className={`px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
              isLotado ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
            }`}>
              {evento.inscritos}/{evento.vagas} vagas
            </div>
            <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all ${
                  isLotado ? 'bg-red-500' : 'bg-blue-500'
                }`}
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
            </div>
          </div>
        </div>
        
        <Button
          variant={isLotado ? 'secondary' : 'primary'}
          className="w-full"
          disabled={isLotado}
          onClick={() => onRegister(evento)}
        >
          {isLotado ? 'Lotado' : 'Inscrever-se'}
        </Button>
      </div>
    </Card>
  );
};

export default EventCard;