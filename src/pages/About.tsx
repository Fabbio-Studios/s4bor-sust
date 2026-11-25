import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';
import { AuthorAvatar } from '../components/AuthorAvatar';
import { authorsList } from '../data/authors';
import {
  BroccoliIllustration,
  CarrotIllustration,
  CitrusIllustration,
  LeafClusterIllustration,
  PotIllustration,
  TomatoIllustration,
} from '../components/FoodIllustrations';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Pesquisa de receitas',
    description:
      'Os alunos buscaram preparos caseiros que aproveitam cascas, pães amanhecidos, frutas maduras e sobras de refeições.',
    color: 'bg-[#B8E36A]',
    illustration: 'leaf' as const,
  },
  {
    number: '02',
    title: 'Padronização das fichas',
    description:
      'Organizamos ingredientes, tempos de preparo, rendimento e o motivo sustentável de cada prato em um modelo único.',
    color: 'bg-[#FFD66B]',
    illustration: 'carrot' as const,
  },
  {
    number: '03',
    title: 'Desenvolvimento do aplicativo',
    description:
      'A parte de programação estruturou a navegação para celular, busca por ingrediente, checklist de cozinha e perfis da turma.',
    color: 'bg-[#FF8065]',
    illustration: 'pot' as const,
  },
  {
    number: '04',
    title: 'Alimentação e revisão',
    description:
      'Os estudantes preencheram o livro com 11 receitas testadas e revisaram os passos com orientação docente.',
    color: 'bg-[#FFFFFF]',
    illustration: 'tomato' as const,
  },
];

export const About: React.FC = () => {
  const [groupPhotoMissing, setGroupPhotoMissing] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="py-6 sm:py-14 space-y-10 sm:space-y-16">
      {/* Section 1: Apresentação */}
      <section aria-labelledby="about-intro-title">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neo-box bg-[#FFFFFF] p-5 sm:p-11 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-[#20231F]/70">
                  Sobre o projeto
                </p>

                <h1
                  id="about-intro-title"
                  className="font-display font-bold text-3xl sm:text-5xl leading-[1.1] text-[#20231F] text-balance"
                >
                  Um livro de receitas feito pela turma para evitar desperdício.
                </h1>

                <div className="space-y-4 text-base sm:text-lg text-[#20231F]/85 leading-relaxed max-w-2xl">
                  <p>
                    O Sabor Sustentável reúne 11 receitas enviadas pelos alunos do 7º ano A com
                    foco no aproveitamento integral dos alimentos.
                  </p>
                  <p>
                    Em vez de descartar cascas de banana, batata, manga e melancia, pão amanhecido
                    ou arroz que sobrou, cada receita mostra como usar esses ingredientes em doces,
                    lanches e refeições rápidas.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center gap-4">
                <div className="bg-[#F7F5ED] border-2 border-[#20231F] rounded-[15px] shadow-[4px_4px_0px_#20231F] p-6 w-full flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center gap-3">
                    <PotIllustration className="w-24 h-24" />
                    <BroccoliIllustration className="w-20 h-20 animate-float-slow" />
                  </div>
                  <p className="font-display font-bold text-sm text-center text-[#20231F]">
                    Culinária escolar e aproveitamento integral
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: A turma por trás do projeto */}
      <section aria-labelledby="about-team-title" data-tour="about-team">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-[#20231F]/70">
                Construção coletiva
              </p>

              <h2
                id="about-team-title"
                className="font-display font-bold text-3xl sm:text-4xl leading-tight text-[#20231F] text-balance"
              >
                Quem participou do 7º ano A
              </h2>

              <p className="text-base sm:text-lg text-[#20231F]/85 leading-relaxed">
                O projeto dividiu o trabalho entre desenvolvimento técnico e curadoria culinária,
                unindo programação e pesquisa de receitas escolares em um único aplicativo.
              </p>

              <div className="neo-box-sm bg-[#B8E36A] p-4 sm:p-5 space-y-1.5">
                <p className="font-display font-bold text-sm sm:text-base text-[#20231F]">
                  Divisão de papéis
                </p>
                <p className="text-sm text-[#20231F]/85 leading-relaxed">
                  A programação construiu a interface para celular, a busca e os perfis; os
                  estudantes pesquisaram, testaram e enviaram as receitas com orientação do
                  professor.
                </p>
              </div>
            </div>

            {/* Class Group Portrait Frame */}
            <div className="lg:col-span-6">
              <figure className="neo-box bg-[#FFFFFF] overflow-hidden max-w-[480px] mx-auto">
                {!groupPhotoMissing ? (
                  <img
                    src="/assets/aistudio/31f8e28d-1996-4993-bcbf-8493d9e5ffdd.jpg_fd9b29bd_2K_c3e34fd9.jpg"
                    alt="Fotografia da turma do 7º ano A responsável pelo projeto Sabor Sustentável"
                    referrerPolicy="no-referrer"
                    onError={() => setGroupPhotoMissing(true)}
                    className="w-full aspect-[3/4] object-cover object-center"
                  />
                ) : (
                  <div className="w-full aspect-[3/4] bg-[#F7F5ED] p-6 sm:p-10 flex flex-col items-center justify-center text-center">
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
                      <TomatoIllustration className="w-12 h-12 sm:w-14 sm:h-14 animate-float-slow" />
                      <CitrusIllustration className="w-12 h-12 sm:w-14 sm:h-14 animate-sway-gentle" />
                      <CarrotIllustration className="w-12 h-12 sm:w-14 sm:h-14 animate-float-delayed" />
                      <LeafClusterIllustration className="w-12 h-12 sm:w-14 sm:h-14 animate-sway-gentle" />
                    </div>
                    <p className="font-display font-bold text-lg text-[#20231F]">
                      Turma do 7º ano A no projeto Sabor Sustentável
                    </p>
                  </div>
                )}
                <figcaption className="px-5 py-3.5 bg-[#FFFFFF] border-t-2 border-[#20231F] text-sm font-medium text-[#20231F]/80 flex items-center justify-between gap-4 flex-wrap">
                  <span>Turma do 7º ano A</span>
                  <span className="font-display text-xs font-bold text-[#20231F]">
                    Sabor Sustentável
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Como tudo foi feito */}
      <section aria-labelledby="about-process-title">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 max-w-2xl">
            <h2
              id="about-process-title"
              className="font-display font-bold text-3xl sm:text-4xl text-[#20231F]"
            >
              Etapas do desenvolvimento
            </h2>
            <p className="text-base sm:text-lg text-[#20231F]/80">
              Da escolha das receitas na sala de aula até a publicação do aplicativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className={`neo-box ${step.color} p-6 sm:p-7 flex flex-col justify-between gap-5`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display font-bold text-4xl sm:text-5xl leading-none text-[#20231F] tabular-nums">
                    {step.number}.
                  </span>

                  <div className="bg-[#FFFFFF] border-2 border-[#20231F] rounded-xl p-1.5 shadow-[2px_2px_0px_#20231F]">
                    {step.illustration === 'leaf' && (
                      <LeafClusterIllustration className="w-10 h-10" />
                    )}
                    {step.illustration === 'carrot' && (
                      <CarrotIllustration className="w-10 h-10" />
                    )}
                    {step.illustration === 'pot' && <PotIllustration className="w-10 h-10" />}
                    {step.illustration === 'tomato' && (
                      <TomatoIllustration className="w-10 h-10" />
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#20231F]">
                    {step.title}
                  </h3>
                  <p className="text-base text-[#20231F]/90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3b: Perfis dos colaboradores */}
      <section aria-labelledby="about-collaborators-title">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2 max-w-2xl">
            <h2
              id="about-collaborators-title"
              className="font-display font-bold text-2xl sm:text-3xl text-[#20231F]"
            >
              Colaboradores que alimentaram o livro
            </h2>
            <p className="text-sm sm:text-base text-[#20231F]/80">
              Toque em qualquer perfil para ver a bio e as receitas enviadas por cada estudante.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {authorsList.map((person) => (
              <Link
                key={person.id}
                to={`/perfil/${person.id}`}
                className="neo-card-interactive bg-[#FFFFFF] p-4 sm:p-5 flex items-center gap-4"
              >
                <AuthorAvatar author={person} size="md" rounded="full" />
                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="font-display font-bold text-base sm:text-lg text-[#20231F] truncate">
                    {person.name}
                  </p>
                  <p className="text-xs font-display font-bold text-[#20231F]/70 truncate">
                    {person.handle}
                  </p>
                  <p className="text-xs text-[#20231F]/80 tabular-nums">
                    {person.sharedRecipesCount}{' '}
                    {person.sharedRecipesCount === 1
                      ? 'receita publicada'
                      : 'receitas publicadas'}
                  </p>
                </div>
                <MaterialIcon name="arrow_forward" size={18} className="shrink-0 text-[#20231F]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Chamada para as receitas */}
      <section aria-labelledby="about-purpose-title">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neo-box bg-[#FFD66B] p-6 sm:p-12 text-center space-y-5 sm:space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFFFFF] border-2 border-[#20231F] rounded-[14px] shadow-[3px_3px_0px_#20231F]">
              <MaterialIcon name="eco" size={30} filled />
            </div>

            <h2
              id="about-purpose-title"
              className="font-display font-bold text-2xl sm:text-4xl leading-tight text-[#20231F] max-w-2xl mx-auto text-balance"
            >
              Quer testar alguma receita da turma hoje?
            </h2>

            <div className="pt-2">
              <Link
                to="/receitas"
                className="neo-btn bg-[#B8E36A] hover:bg-[#a9da55] text-[#20231F] px-7 py-3.5 text-base"
              >
                <span>Explorar receitas</span>
                <MaterialIcon name="arrow_forward" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
