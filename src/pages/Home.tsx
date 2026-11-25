import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { useTutorial } from '../components/AppTutorial';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { startTutorial } = useTutorial();

  return (
    <div className="min-h-[calc(100dvh-114px)] md:min-h-[calc(100vh-74px)] flex items-center">
      <Hero
        onExploreClick={() => navigate('/receitas')}
        onTutorialClick={() => startTutorial(0)}
      />
    </div>
  );
};
