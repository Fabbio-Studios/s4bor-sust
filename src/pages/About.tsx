import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';
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
    title: 'Pesquisa e planejamento.',
    description:
      'Identificamos a importância da alimentação consciente e pensamos em maneiras de conectar tecnologia e sustentabilidade.',
    color: 'bg-[#B8E36A]',
    illustration: 'leaf' as const,
  },
  {
    number: '02',
    title: 'Organização das ideias.',
    description:
      'Definimos a estrutura do livro digital, os tipos de receitas e as funcionalidades que fariam parte da demonstração.',
    color: 'bg-[#FFD66B]',
    illustration: 'carrot' as const,
  },
  {
    number: '03',
    title: 'Desenvolvimento.',
    description:
      'Construímos a interface, organizamos as receitas e criamos uma experiência digital para apresentar a proposta do projeto.',
    color: 'bg-[#FF8065]',
    illustration: 'pot' as const,
  },
  {
    number: '04',
    title: 'Apresentação.',
    description:
      'Reunimos o resultado em uma demonstração navegável, mostrando como a tecnologia pode tornar o conhecimento mais acessível e interessante.',
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
    <div className="py-10 sm:py-14 space-y-16">
      {/* Section 1: Apresentação */}
      <section aria-labelledby="about-intro-title">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neo-box bg-[#FFFFFF] p-7 sm:p-11 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider bg-[#B8E36A] border-2 border-[#20231F] px-3 py-1 rounded-lg shadow-[2px_2px_0px_#20231F]">
                  <MaterialIcon name="spa" size={16} filled />
                  <span>Sobre o projeto</span>
                </div>

                <h1
                  id="about-intro-title"
                  className="font-display font-bold text-3xl sm:text-5xl leading-[1.1] text-[#20231F] text-balance"
                >
                  Uma ideia que nasceu da vontade de transformar.
                </h1>

                <div className="space-y-4 text-base sm:text-lg text-[#20231F]/85 leading-relaxed max-w-2xl">
                  <p>
                    O Sabor Sustentável é uma iniciativa que une tecnologia, criatividade e educação
                    ambiental.
                  </p>
                  <p>
                    Nossa proposta é mostrar que a sustentabilidade também pode começar na cozinha,
                    por meio de pequenas mudanças nos hábitos alimentares e de novas maneiras de
                    aproveitar os alimentos.
                  </p>
                  <p>
                    Mais do que reunir receitas, queremos valorizar a criatividade, o
                    compartilhamento de conhecimentos e a construção de uma relação mais consciente
                    com aquilo que consumimos.
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
                    Educação ambiental &amp; culinária afetiva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: A turma por trás do projeto */}
      <section aria-labelledby="about-team-title">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider bg-[#FFD66B] border-2 border-[#20231F] px-3 py-1 rounded-lg shadow-[2px_2px_0px_#20231F]">
                <MaterialIcon name="groups" size={16} />
                <span>Construção coletiva</span>
              </div>

              <h2
                id="about-team-title"
                className="font-display font-bold text-3xl sm:text-4xl leading-tight text-[#20231F] text-balance"
              >
                Por trás dessa ideia, existe uma turma inteira.
              </h2>

              <p className="text-base sm:text-lg text-[#20231F]/85 leading-relaxed">
                Este projeto foi desenvolvido de forma colaborativa, reunindo estudantes e
                educadores interessados em pesquisar receitas, organizar conteúdos e testar soluções
                digitais para incentivar o aproveitamento integral nas cozinhas escolares e
                familiares.
              </p>

              <div className="neo-box-sm bg-[#B8E36A] p-4 sm:p-5 space-y-1.5">
                <p className="font-display font-bold text-sm sm:text-base text-[#20231F]">
                  Trabalho em equipe na prática
                </p>
                <p className="text-sm text-[#20231F]/85 leading-relaxed">
                  Enquanto a parte de programação deu vida à interface para celular, os estudantes
                  pesquisaram, organizaram e alimentaram o livro com receitas reais de
                  aproveitamento integral, sob orientação docente.
                </p>
              </div>
            </div>

            {/* Class Group Portrait Frame */}
            <div className="lg:col-span-6">
              <figure className="neo-box bg-[#FFFFFF] overflow-hidden max-w-[480px] mx-auto">
                {!groupPhotoMissing ? (
                  <img
                    src="/assets/aistudio/31f8e28d-1996-4993-bcbf-8493d9e5ffdd.jpg_fd9b29bd_2K_c3e34fd9.jpg"
                    alt="Fotografia da turma responsável pelo projeto Sabor Sustentável"
                    referrerPolicy="no-referrer"
                    onError={() => setGroupPhotoMissing(true)}
                    className="w-full aspect-[3/4] object-cover object-center"
                  />
                ) : (
                  <div className="w-full aspect-[3/4] bg-[#F7F5ED] p-6 sm:p-10 flex flex-col items-center justify-center text-center">
                    <div className="flex items-center justify-center gap-4 mb-5">
                      <TomatoIllustration className="w-14 h-14 animate-float-slow" />
                      <CitrusIllustration className="w-14 h-14 animate-sway-gentle" />
                      <CarrotIllustration className="w-14 h-14 animate-float-delayed" />
                      <LeafClusterIllustration className="w-14 h-14 animate-sway-gentle" />
                    </div>
                    <p className="font-display font-bold text-lg text-[#20231F]">
                      Turma colaboradora do projeto Sabor Sustentável
                    </p>
                  </div>
                )}
                <figcaption className="px-5 py-3.5 bg-[#FFFFFF] border-t-2 border-[#20231F] text-sm font-medium text-[#20231F]/80 flex items-center justify-between gap-4 flex-wrap">
                  <span>Turma colaboradora do Sabor Sustentável</span>
                  <span className="font-display text-xs font-bold text-[#20231F]">
                    Educação • Tecnologia • Sustentabilidade
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
              Como tudo foi feito
            </h2>
            <p className="text-base sm:text-lg text-[#20231F]/80">
              Do levantamento de ideias à criação da demonstração navegável, cada etapa valorizou a
              colaboração.
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

      {/* Section 4: Nosso propósito */}
      <section aria-labelledby="about-purpose-title">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neo-box bg-[#FFD66B] p-8 sm:p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFFFFF] border-2 border-[#20231F] rounded-[14px] shadow-[3px_3px_0px_#20231F]">
              <MaterialIcon name="eco" size={30} filled />
            </div>

            <h2
              id="about-purpose-title"
              className="font-display font-bold text-3xl sm:text-5xl leading-tight text-[#20231F] max-w-2xl mx-auto text-balance"
            >
              Menos desperdício. Mais consciência. Mais sabor.
            </h2>

            <div className="pt-2">
              <Link
                to="/#recipe-book"
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
