import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import Button from '../common/Button';

interface NavItem {
  id: string;
  label: string;
}

interface NavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'projetos', label: 'Projetos & Ações' },
    { id: 'membros', label: 'Membros' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'denuncia', label: 'Denúncia' },
    { id: 'loja', label: 'Loja' }
  ];
  
  const handleSectionChange = (sectionId: string): void => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-800">DA Computação</div>
              <div className="text-xs text-gray-500">UFMA</div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => handleSectionChange(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => handleSectionChange(item.id)}
                  className="w-full justify-start"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;