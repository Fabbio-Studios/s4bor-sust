import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

const TUTORIAL_STORAGE_KEY = 'sabor-sustentavel-tutorial-seen-v1';

interface TutorialStep {
  id: string;
  route: string;
  targetSelector: string;
  mobileTargetSelector?: string;
  badge: string;
  icon: string;
  title: string;
  description: string;
  accentBg: string;
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: 'welcome-nav',
    route: '/',
    targetSelector: '[data-tour="desktop-nav"]',
    mobileTargetSelector: '[data-tour="bottom-nav"]',
    badge: 'Tela Inicial · Navegação',
    icon: 'home',
    title: 'Bem-vindo ao Sabor Sustentável',
    description:
      'Cada área do livro fica em uma tela própria. Use a barra fixa embaixo no celular (ou o menu do topo no computador) para alternar entre Início, Receitas, Salvas e Sobre.',
    accentBg: 'bg-[#B8E36A]',
  },
  {
    id: 'recipes-catalog',
    route: '/receitas',
    targetSelector: '[data-tour="recipes-search"]',
    badge: 'Aba Receitas',
    icon: 'menu_book',
    title: 'Busque e filtre por ingredientes',
    description:
      'Na tela de Receitas você procura pelo nome do prato, filtra por tipo de ingrediente (cascas, frutas, pães) ou escolhe a categoria.',
    accentBg: 'bg-[#FFD66B]',
  },
  {
    id: 'recipe-detail',
    route: '/receitas/brigadeiro-de-casca-de-banana',
    targetSelector: '[data-tour="recipe-ingredients"]',
    badge: 'Receita Individual',
    icon: 'checklist',
    title: 'Ingredientes interativos e preparo',
    description:
      'Dentro de cada receita você marca os ingredientes que já separou, segue o modo de preparo numerado e confere como o prato evita o desperdício.',
    accentBg: 'bg-[#B8E36A]',
  },
  {
    id: 'author-profile',
    route: '/perfil/paulo',
    targetSelector: '[data-tour="author-profile-card"]',
    badge: 'Perfil do Colaborador',
    icon: 'account_circle',
    title: 'Perfil de quem compartilhou',
    description:
      'Ao tocar no nome ou na foto de quem enviou uma receita, você abre o perfil do estudante com a seção Sobre e todas as receitas compartilhadas por ele.',
    accentBg: 'bg-[#FF8065]',
  },
  {
    id: 'saved-recipes',
    route: '/salvas',
    targetSelector: '[data-tour="saved-page-header"]',
    badge: 'Aba Salvas',
    icon: 'bookmark',
    title: 'Suas receitas favoritas',
    description:
      'Toque no ícone de marcador em qualquer receita para guardá-la neste aparelho e abrir direto na aba Salvas.',
    accentBg: 'bg-[#FF8065]',
  },
  {
    id: 'about-project',
    route: '/sobre',
    targetSelector: '[data-tour="about-team"]',
    badge: 'Aba Sobre nós',
    icon: 'groups',
    title: 'Conheça a turma do 7º ano A',
    description:
      'Aqui ficam a foto da turma, as etapas de desenvolvimento do aplicativo e a lista completa dos colaboradores.',
    accentBg: 'bg-[#FFD66B]',
  },
];

interface TutorialContextValue {
  isOpen: boolean;
  startTutorial: (stepIndex?: number) => void;
  closeTutorial: () => void;
}

const TutorialContext = createContext<TutorialContextValue>({
  isOpen: false,
  startTutorial: () => {},
  closeTutorial: () => {},
});

export const useTutorial = () => useContext(TutorialContext);

interface SpotlightRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const TutorialProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [spotlightRect, setSpotlightRect] = useState<SpotlightRect | null>(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : true
  );

  // Check first visit on mount
  useEffect(() => {
    try {
      const seen = window.localStorage.getItem(TUTORIAL_STORAGE_KEY);
      if (!seen) {
        const timer = window.setTimeout(() => {
          setStepIndex(0);
          setIsOpen(true);
        }, 450);
        return () => window.clearTimeout(timer);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const markTutorialSeen = useCallback(() => {
    try {
      window.localStorage.setItem(TUTORIAL_STORAGE_KEY, 'true');
    } catch {
      // Ignore storage errors
    }
  }, []);

  const startTutorial = useCallback(
    (initialStep = 0) => {
      const clamped = Math.max(0, Math.min(TUTORIAL_STEPS.length - 1, initialStep));
      setStepIndex(clamped);
      setIsOpen(true);
      navigate(TUTORIAL_STEPS[clamped].route);
    },
    [navigate]
  );

  const closeTutorial = useCallback(
    (returnHome = false) => {
      setIsOpen(false);
      setSpotlightRect(null);
      markTutorialSeen();
      if (returnHome) {
        navigate('/');
      }
    },
    [markTutorialSeen, navigate]
  );

  const currentStep = TUTORIAL_STEPS[stepIndex];

  const goToStep = useCallback(
    (nextIndex: number) => {
      if (nextIndex < 0) return;
      if (nextIndex >= TUTORIAL_STEPS.length) {
        closeTutorial(true);
        return;
      }
      setStepIndex(nextIndex);
      navigate(TUTORIAL_STEPS[nextIndex].route);
    },
    [closeTutorial, navigate]
  );

  // Measure and scroll to highlighted target whenever step changes or window resizes
  useEffect(() => {
    if (!isOpen) return;

    const updateMeasurement = (shouldScroll: boolean) => {
      const mobileNow = window.innerWidth < 768;
      setIsMobile(mobileNow);

      const selector =
        mobileNow && currentStep.mobileTargetSelector
          ? currentStep.mobileTargetSelector
          : currentStep.targetSelector;

      const el = document.querySelector(selector) as HTMLElement | null;
      if (!el) {
        setSpotlightRect(null);
        return;
      }

      if (shouldScroll) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      const measure = () => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) {
          setSpotlightRect(null);
          return;
        }
        const pad = 6;
        setSpotlightRect({
          top: Math.max(4, rect.top - pad),
          left: Math.max(4, rect.left - pad),
          width: Math.min(window.innerWidth - 8, rect.width + pad * 2),
          height: Math.min(window.innerHeight - 8, rect.height + pad * 2),
        });
      };

      measure();
      if (shouldScroll) {
        window.setTimeout(measure, 280);
      }
    };

    const initialTimer = window.setTimeout(() => updateMeasurement(true), 120);
    const onResize = () => updateMeasurement(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeTutorial(false);
      if (e.key === 'ArrowRight') goToStep(stepIndex + 1);
      if (e.key === 'ArrowLeft') goToStep(stepIndex - 1);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, true);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(initialTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize, true);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, stepIndex, currentStep, closeTutorial, goToStep]);

  const cardStyle = useMemo<React.CSSProperties>(() => {
    if (isMobile) {
      // On mobile, never cover the bottom nav or highlighted region
      const targetInBottomHalf =
        spotlightRect && spotlightRect.top > window.innerHeight * 0.55;
      if (targetInBottomHalf) {
        return {
          top: '64px',
          left: '12px',
          right: '12px',
        };
      }
      return {
        bottom: '76px',
        left: '12px',
        right: '12px',
      };
    }

    if (!spotlightRect) {
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(420px, calc(100vw - 32px))',
      };
    }

    const cardWidth = Math.min(410, window.innerWidth - 32);
    const spaceBelow = window.innerHeight - (spotlightRect.top + spotlightRect.height);
    const left = Math.max(
      16,
      Math.min(
        window.innerWidth - cardWidth - 16,
        spotlightRect.left + spotlightRect.width / 2 - cardWidth / 2
      )
    );

    if (spaceBelow >= 270) {
      return {
        top: `${Math.min(window.innerHeight - 280, spotlightRect.top + spotlightRect.height + 14)}px`,
        left: `${left}px`,
        width: `${cardWidth}px`,
      };
    }

    if (spotlightRect.top >= 270) {
      return {
        bottom: `${Math.min(window.innerHeight - 280, window.innerHeight - spotlightRect.top + 14)}px`,
        left: `${left}px`,
        width: `${cardWidth}px`,
      };
    }

    return {
      bottom: '24px',
      right: '24px',
      width: `${cardWidth}px`,
    };
  }, [isMobile, spotlightRect]);

  return (
    <TutorialContext.Provider value={{ isOpen, startTutorial, closeTutorial }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 pointer-events-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tutorial-step-title"
        >
          {/* Dimmed backdrop or spotlight cutout */}
          {spotlightRect ? (
            <>
              {/* Click-blocking transparent layer */}
              <div
                className="fixed inset-0 bg-transparent"
                onClick={() => closeTutorial(false)}
                aria-hidden="true"
              />
              {/* Spotlight ring with surround shadow */}
              <div
                aria-hidden="true"
                className="fixed pointer-events-none rounded-[16px] border-[3px] border-[#FFD66B] shadow-[0_0_0_9999px_rgba(32,35,31,0.68)] transition-all duration-200"
                style={{
                  top: `${spotlightRect.top}px`,
                  left: `${spotlightRect.left}px`,
                  width: `${spotlightRect.width}px`,
                  height: `${spotlightRect.height}px`,
                }}
              />
            </>
          ) : (
            <div
              className="fixed inset-0 bg-[#20231F]/68"
              onClick={() => closeTutorial(false)}
              aria-hidden="true"
            />
          )}

          {/* Tutorial Pop-up Card */}
          <div
            style={cardStyle}
            className="fixed z-50 neo-box bg-[#FFFFFF] p-4 sm:p-6 shadow-[6px_6px_0px_#20231F] animate-fade-up"
          >
            {/* Top row: Step badge & Close button */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div
                className={`inline-flex items-center gap-1.5 ${currentStep.accentBg} border-2 border-[#20231F] rounded-lg px-2.5 py-1 shadow-[2px_2px_0px_#20231F]`}
              >
                <MaterialIcon name={currentStep.icon} size={16} />
                <span className="font-display text-[11px] font-bold uppercase tracking-wider text-[#20231F]">
                  {currentStep.badge}
                </span>
              </div>

              <button
                type="button"
                onClick={() => closeTutorial(false)}
                aria-label="Pular tutorial"
                className="w-10 h-10 -mr-1 -mt-1 rounded-lg border-2 border-transparent hover:border-[#20231F] hover:bg-[#F7F5ED] flex items-center justify-center text-[#20231F] cursor-pointer"
              >
                <MaterialIcon name="close" size={20} />
              </button>
            </div>

            {/* Step Title & Body */}
            <div className="space-y-1.5 mb-4">
              <h2
                id="tutorial-step-title"
                className="font-display font-bold text-lg sm:text-xl leading-snug text-[#20231F]"
              >
                {currentStep.title}
              </h2>
              <p className="text-sm text-[#20231F]/85 leading-relaxed">
                {currentStep.description}
              </p>
            </div>

            {/* Progress Bars */}
            <div className="flex items-center gap-1.5 mb-4" aria-hidden="true">
              {TUTORIAL_STEPS.map((step, idx) => (
                <div
                  key={step.id}
                  className={`h-2 flex-1 rounded-full border border-[#20231F] transition-colors ${
                    idx <= stepIndex ? 'bg-[#B8E36A]' : 'bg-[#F7F5ED]'
                  }`}
                />
              ))}
            </div>

            {/* Footer Controls */}
            <div className="flex items-center justify-between gap-2">
              <span className="font-display text-xs font-bold text-[#20231F]/70 tabular-nums">
                Passo {stepIndex + 1} de {TUTORIAL_STEPS.length}
              </span>

              <div className="flex items-center gap-2">
                {stepIndex > 0 ? (
                  <button
                    type="button"
                    onClick={() => goToStep(stepIndex - 1)}
                    className="neo-btn bg-[#FFFFFF] hover:bg-[#F7F5ED] text-[#20231F] px-3 py-2 min-h-[42px] text-xs sm:text-sm"
                  >
                    <MaterialIcon name="arrow_back" size={16} />
                    <span>Anterior</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => closeTutorial(false)}
                    className="px-3 py-2 min-h-[42px] font-display text-xs sm:text-sm font-bold text-[#20231F]/70 hover:text-[#20231F] underline underline-offset-4 cursor-pointer"
                  >
                    Pular
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => goToStep(stepIndex + 1)}
                  className="neo-btn bg-[#B8E36A] hover:bg-[#a9da55] text-[#20231F] px-4 py-2 min-h-[42px] text-xs sm:text-sm"
                >
                  <span>
                    {stepIndex === TUTORIAL_STEPS.length - 1 ? 'Concluir' : 'Próximo'}
                  </span>
                  <MaterialIcon
                    name={
                      stepIndex === TUTORIAL_STEPS.length - 1
                        ? 'check_circle'
                        : 'arrow_forward'
                    }
                    size={16}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </TutorialContext.Provider>
  );
};
