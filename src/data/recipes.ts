import { Recipe, RecipeCategory } from '../types/recipe';

import brigadeiroCascaBananaImg from '../assets/images/brigadeiro_casca_banana_1795644592280.jpg';
import bolinhoBananaAveiaImg from '../assets/images/bolinho_banana_aveia_1795644591294.jpg';
import picoleFrutasImg from '../assets/images/picole_sustentavel_frutas_1795644591908.jpg';
import bolinhoArrozImg from '../assets/images/bolinho_arroz_reaproveitado_1794609819093.jpg';
import carneCascaBananaImg from '../assets/images/carne_casca_banana_1795644592235.jpg';
import pudimPaoImg from '../assets/images/pudim_pao_amanhecido_1795644592705.jpg';
import bolinhoCascaMangaImg from '../assets/images/bolinho_casca_manga_1795644592779.jpg';
import doceCascaMelanciaImg from '../assets/images/doce_casca_melancia_1794609821527.jpg';
import chipsCascaBatataImg from '../assets/images/chips_casca_batata_1794609822207.jpg';
import boloCascaBananaImg from '../assets/images/bolo_casca_banana_1794609818831.jpg';
import torradaPaoImg from '../assets/images/torrada_pao_amanhecido_1795644593515.jpg';
import saladaFrutasImg from '../assets/images/salada_de_frutas_1795706216779.jpg';
import boloCascaLaranjaImg from '../assets/images/bolo_casca_laranja_1795733438764.jpg';
import farofaCascaBananaImg from '../assets/images/farofa_casca_banana_1795733438792.jpg';

export const RECIPE_CATEGORIES: RecipeCategory[] = [
  'Todas',
  'Café da manhã',
  'Almoço e jantar',
  'Lanches',
  'Sobremesas',
  'Aproveitamento integral',
];

export const recipes: Recipe[] = [
  {
    id: '1',
    slug: 'brigadeiro-de-casca-de-banana',
    title: 'Brigadeiro de Casca de Banana',
    description:
      'Doce cremoso feito com cascas de banana bem higienizadas, chocolate em pó e um toque de manteiga para aproveitar o que iria para o lixo.',
    category: 'Sobremesas',
    tags: ['Sobremesas', 'Aproveitamento integral'],
    image: brigadeiroCascaBananaImg,
    imageAlt: 'Brigadeiros de casca de banana cobertos com granulado em prato de cerâmica',
    prepTimeMinutes: 30,
    servings: 10,
    servingsLabel: '10 porções',
    ingredientsCount: 4,
    authorId: 'paulo',
    sustainabilityInfo:
      'Em vez de descartar as cascas de banana, o preparo aproveita essa parte nutritiva da fruta na massa do brigadeiro e reduz o lixo orgânico produzido na cozinha.',
    ingredients: [
      { id: '1-1', amount: '4', unit: 'unidades', name: 'Cascas de banana bem higienizadas' },
      { id: '1-2', amount: '3', unit: 'colheres (sopa)', name: 'Chocolate em pó' },
      { id: '1-3', amount: '2', unit: 'colheres (sopa)', name: 'Açúcar' },
      { id: '1-4', amount: '1', unit: 'colher (sopa)', name: 'Manteiga' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cozinhar as cascas',
        instruction: 'Cozinhe as cascas de banana em água até ficarem bem macias.',
      },
      {
        stepNumber: 2,
        title: 'Bater',
        instruction: 'Bata as cascas no liquidificador (ou pique bem fininho).',
      },
      {
        stepNumber: 3,
        title: 'Levar ao fogo',
        instruction:
          'Leve ao fogo com o chocolate em pó, o açúcar e a manteiga, mexendo até dar o ponto de brigadeiro.',
      },
      {
        stepNumber: 4,
        title: 'Servir',
        instruction: 'Deixe esfriar e modele os brigadeiros ou sirva em colheradas.',
      },
    ],
  },
  {
    id: '2',
    slug: 'bolinho-de-banana-com-aveia',
    title: 'Bolinho de Banana com Aveia',
    description:
      'Bolinho fofinho e dourado feito com bananas bem maduras e aveia na frigideira, pronto em 15 minutos para o café da manhã ou lanche.',
    category: 'Café da manhã',
    tags: ['Café da manhã', 'Aproveitamento integral'],
    image: bolinhoBananaAveiaImg,
    imageAlt: 'Bolinhos dourados de banana com aveia empilhados com rodelas de banana e canela',
    prepTimeMinutes: 15,
    servings: 8,
    servingsLabel: '8 bolinhos',
    ingredientsCount: 6,
    authorId: 'anna-livia',
    sustainabilityInfo:
      'Usa bananas bem maduras que acabariam estragando na fruteira, com poucos ingredientes básicos de despensa.',
    ingredients: [
      { id: '2-1', amount: '2', unit: 'unidades', name: 'Bananas bem maduras' },
      { id: '2-2', amount: '1', unit: 'unidade', name: 'Ovo' },
      { id: '2-3', amount: '½', unit: 'xícara (chá)', name: 'Aveia' },
      { id: '2-4', amount: '1', unit: 'colher (chá)', name: 'Fermento em pó' },
      { id: '2-5', amount: 'a gosto', unit: '', name: 'Canela em pó' },
      { id: '2-6', amount: 'um pouquinho', unit: '', name: 'Óleo para untar' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Amassar as bananas',
        instruction: 'Amasse bem as bananas e misture com o ovo.',
      },
      {
        stepNumber: 2,
        title: 'Misturar os secos',
        instruction: 'Acrescente a aveia e a canela e misture até formar uma massa.',
      },
      {
        stepNumber: 3,
        title: 'Adicionar o fermento',
        instruction: 'Junte o fermento e mexa delicadamente.',
      },
      {
        stepNumber: 4,
        title: 'Dourar na frigideira',
        instruction:
          'Coloque pequenas porções em uma frigideira untada, em fogo baixo. Tampe e doure dos dois lados. Sirva quentinho!',
      },
    ],
  },
  {
    id: '3',
    slug: 'picole-sustentavel-de-frutas',
    title: 'Picolé Sustentável de Frutas',
    description:
      'Picolé cremoso de banana, laranja e manga feito com frutas bem maduras e forminhas reutilizáveis.',
    category: 'Sobremesas',
    tags: ['Sobremesas', 'Aproveitamento integral'],
    image: picoleFrutasImg,
    imageAlt: 'Picolés naturais de manga, banana e laranja com fatias de frutas frescas',
    prepTimeMinutes: 10,
    prepTimeNote: '+ 4h de congelamento',
    servings: 4,
    servingsLabel: '4 picolés',
    ingredientsCount: 5,
    authorId: 'geandro',
    sustainabilityInfo:
      'Prioriza frutas maduras que já estão em casa antes de passarem do ponto e substitui embalagens ou copos descartáveis por forminhas reutilizáveis.',
    ingredients: [
      { id: '3-1', amount: '1', unit: 'unidade', name: 'Banana bem madura' },
      { id: '3-2', amount: '1', unit: 'unidade', name: 'Laranja bem madura' },
      { id: '3-3', amount: '½', unit: 'unidade', name: 'Manga bem madura' },
      { id: '3-4', amount: '½', unit: 'xícara (chá)', name: 'Água' },
      { id: '3-5', amount: '4', unit: 'unidades', name: 'Forminhas de picolé reutilizáveis' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Aproveitar as frutas',
        instruction: 'Lave bem as frutas e retire apenas as partes que não podem ser consumidas.',
      },
      {
        stepNumber: 2,
        title: 'Preparar',
        instruction: 'Esprema a laranja e coloque o suco, a banana e a manga no liquidificador.',
      },
      {
        stepNumber: 3,
        title: 'Bater',
        instruction: 'Adicione a água e bata até formar uma mistura cremosa.',
      },
      {
        stepNumber: 4,
        title: 'Reutilizar e congelar',
        instruction:
          'Coloque a mistura em forminhas reutilizáveis, evitando copos ou embalagens descartáveis. Leve ao congelador por aproximadamente 4 horas, até ficar firme. Retire da forma e aproveite!',
      },
    ],
  },
  {
    id: '4',
    slug: 'bolinho-de-arroz-reaproveitado',
    title: 'Bolinho de Arroz Reaproveitado',
    description:
      'Bolinho dourado e assado feito com arroz cozido que sobrou de outra refeição, simples e econômico.',
    category: 'Lanches',
    tags: ['Lanches', 'Aproveitamento integral'],
    image: bolinhoArrozImg,
    imageAlt: 'Bolinhos de arroz dourados servidos em prato de cerâmica com cheiro-verde',
    prepTimeMinutes: 25,
    servings: 10,
    servingsLabel: '10 bolinhos',
    ingredientsCount: 5,
    authorId: 'leticia-dias',
    sustainabilityInfo:
      'Reaproveita o arroz cozido que sobrou do almoço ou jantar, evitando o descarte de comida pronta e economizando ingredientes no preparo do lanche.',
    ingredients: [
      { id: '4-1', amount: '2', unit: 'xícaras (chá)', name: 'Arroz cozido que sobrou' },
      { id: '4-2', amount: '1', unit: 'unidade', name: 'Ovo' },
      { id: '4-3', amount: '½', unit: 'xícara (chá)', name: 'Farinha de trigo' },
      { id: '4-4', amount: 'a gosto', unit: '', name: 'Cheiro-verde' },
      { id: '4-5', amount: 'a gosto', unit: '', name: 'Temperos' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Misturar os ingredientes',
        instruction:
          'Misture o arroz cozido, o ovo, a farinha de trigo, o cheiro-verde e os temperos até formar uma massa homogênea.',
      },
      {
        stepNumber: 2,
        title: 'Modelar',
        instruction: 'Modele os bolinhos com as mãos ou com o auxílio de duas colheres.',
      },
      {
        stepNumber: 3,
        title: 'Assar',
        instruction: 'Disponha os bolinhos em uma assadeira untada e asse até dourarem.',
      },
      {
        stepNumber: 4,
        title: 'Servir',
        instruction: 'Retire do forno e sirva quentinho.',
      },
    ],
  },
  {
    id: '5',
    slug: 'carne-de-casca-de-banana',
    title: 'Carne de Casca de Banana',
    description:
      'Substituto vegano de carne desfiada feito com cascas de banana e temperos caseiros, bom para sanduíches, escondidinho ou com arroz.',
    category: 'Almoço e jantar',
    tags: ['Almoço e jantar', 'Aproveitamento integral'],
    image: carneCascaBananaImg,
    imageAlt: 'Carne vegetal desfiada de casca de banana refogada com cebola e cheiro-verde',
    prepTimeMinutes: 25,
    servings: 4,
    servingsLabel: '4 porções',
    ingredientsCount: 5,
    authorId: 'anna-livia',
    sustainabilityInfo:
      'Dá uso culinário às cascas de banana cozidas e desfiadas como prato salgado vegano, reduzindo o volume de restos orgânicos descartados após o consumo da fruta.',
    ingredients: [
      { id: '5-1', amount: '4 a 5', unit: 'unidades', name: 'Cascas de banana bem lavadas' },
      { id: '5-2', amount: '1', unit: 'unidade', name: 'Cebola picada' },
      { id: '5-3', amount: '2', unit: 'dentes', name: 'Alho' },
      { id: '5-4', amount: 'a gosto', unit: '', name: 'Colorau, sal, pimenta e cheiro-verde' },
      { id: '5-5', amount: '½', unit: 'unidade', name: 'Suco de limão' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Preparar as cascas',
        instruction: 'Lave bem as cascas e retire a parte branca interna.',
      },
      {
        stepNumber: 2,
        title: 'Ferver e desfiar',
        instruction: 'Ferva as cascas por 5 minutos, escorra e desfie com um garfo.',
      },
      {
        stepNumber: 3,
        title: 'Refogar',
        instruction: 'Refogue a cebola e o alho, adicione as cascas desfiadas e tempere.',
      },
      {
        stepNumber: 4,
        title: 'Finalizar',
        instruction:
          'Cozinhe por mais 5 minutos e use em sanduíches, escondidinho ou com arroz.',
      },
    ],
  },
  {
    id: '6',
    slug: 'pudim-de-pao-amanhecido',
    title: 'Pudim de Pão Amanhecido',
    description:
      'Pudim cremoso feito com pães amanhecidos, calda caramelizada e essência de baunilha.',
    category: 'Sobremesas',
    tags: ['Sobremesas', 'Aproveitamento integral'],
    image: pudimPaoImg,
    imageAlt: 'Pudim caramelizado de pão amanhecido em prato de cerâmica com fatia cortada',
    prepTimeMinutes: 60,
    servings: 8,
    servingsLabel: '8 porções',
    ingredientsCount: 5,
    authorId: 'anna-livia',
    sustainabilityInfo:
      'Recupera pães amanhecidos que endureceram na despensa e seriam jogados fora, transformando sobras de padaria em uma sobremesa inteira para a família.',
    ingredients: [
      { id: '6-1', amount: '3', unit: 'unidades', name: 'Pães amanhecidos' },
      { id: '6-2', amount: '3', unit: 'xícaras (chá)', name: 'Leite' },
      { id: '6-3', amount: '3', unit: 'unidades', name: 'Ovos' },
      { id: '6-4', amount: '1', unit: 'xícara (chá)', name: 'Açúcar' },
      { id: '6-5', amount: '1', unit: 'colher (chá)', name: 'Essência de baunilha' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Deixar o pão de molho',
        instruction: 'Quebre os pães e deixe de molho no leite por 10 minutos.',
      },
      {
        stepNumber: 2,
        title: 'Bater',
        instruction: 'Bata no liquidificador com os ovos, o açúcar e a baunilha.',
      },
      {
        stepNumber: 3,
        title: 'Caramelizar a forma',
        instruction: 'Despeje a mistura em uma forma caramelizada.',
      },
      {
        stepNumber: 4,
        title: 'Assar',
        instruction:
          'Asse em banho-maria a 180 °C por aproximadamente 40 minutos. Deixe esfriar antes de servir.',
      },
    ],
  },
  {
    id: '7',
    slug: 'bolinho-de-casca-de-manga',
    title: 'Bolinho de Casca de Manga',
    description:
      'Bolinho de frigideira que aproveita as cascas e a polpa que fica grudada na casca da manga, em versão doce ou salgada.',
    category: 'Lanches',
    tags: ['Lanches', 'Aproveitamento integral'],
    image: bolinhoCascaMangaImg,
    imageAlt: 'Bolinhos dourados de casca de manga servidos com fatias frescas de manga',
    prepTimeMinutes: 20,
    servings: 8,
    servingsLabel: '8 bolinhos',
    ingredientsCount: 5,
    authorId: 'anna-livia',
    sustainabilityInfo:
      'Usa cascas de manga madura batidas no liquidificador para aproveitar a fibra e a polpa que normalmente vão direto para o lixo após descascar a fruta.',
    ingredients: [
      { id: '7-1', amount: '3 a 4', unit: 'unidades', name: 'Cascas de manga maduras' },
      { id: '7-2', amount: '½', unit: 'xícara (chá)', name: 'Farinha de trigo' },
      { id: '7-3', amount: '1', unit: 'unidade', name: 'Ovo' },
      { id: '7-4', amount: '¼', unit: 'xícara (chá)', name: 'Água ou leite' },
      { id: '7-5', amount: 'a gosto', unit: '', name: 'Sal ou açúcar (doce/salgado)' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Bater as cascas',
        instruction: 'Lave bem as cascas e bata no liquidificador com um pouquinho de água.',
      },
      {
        stepNumber: 2,
        title: 'Misturar',
        instruction: 'Misture com os outros ingredientes até formar uma massa.',
      },
      {
        stepNumber: 3,
        title: 'Fritar',
        instruction: 'Coloque colheradas numa frigideira com um fio de óleo.',
      },
      {
        stepNumber: 4,
        title: 'Dourar',
        instruction: 'Doure dos dois lados. Pronto!',
      },
    ],
  },
  {
    id: '8',
    slug: 'doce-de-casca-de-melancia',
    title: 'Doce de Casca de Melancia',
    description:
      'Doce em calda feito com a parte branca da casca de melancia cozida em fogo baixo e raspas de limão.',
    category: 'Sobremesas',
    tags: ['Sobremesas', 'Aproveitamento integral'],
    image: doceCascaMelanciaImg,
    imageAlt: 'Compoteira de vidro com cubos dourados de doce de casca de melancia em calda',
    prepTimeMinutes: 40,
    servings: 10,
    servingsLabel: '10 porções',
    ingredientsCount: 4,
    authorId: 'anna-livia',
    sustainabilityInfo:
      'Aproveita os 500 g da parte branca da casca de melancia, uma das porções mais pesadas e comumente desperdiçadas da fruta, em um doce econômico.',
    ingredients: [
      { id: '8-1', amount: '500', unit: 'g', name: 'Casca de melancia (parte branca)' },
      { id: '8-2', amount: '2', unit: 'xícaras (chá)', name: 'Açúcar' },
      { id: '8-3', amount: '3', unit: 'xícaras (chá)', name: 'Água' },
      { id: '8-4', amount: '1', unit: 'unidade', name: 'Casca ralada de limão' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Preparar a casca',
        instruction: 'Lave a casca e corte em cubinhos, retirando a parte verde dura.',
      },
      {
        stepNumber: 2,
        title: 'Cozinhar',
        instruction: 'Cozinhe em água por aproximadamente 10 minutos até amaciar, escorra.',
      },
      {
        stepNumber: 3,
        title: 'Fazer a calda',
        instruction: 'Faça uma calda com o açúcar e a água.',
      },
      {
        stepNumber: 4,
        title: 'Finalizar',
        instruction:
          'Junte a casca e cozinhe em fogo baixo até engrossar. Adicione a raspa de limão. Deixe esfriar e sirva.',
      },
    ],
  },
  {
    id: '9',
    slug: 'chips-de-casca-de-batata',
    title: 'Chips de Casca de Batata',
    description:
      'Chips crocantes feitos no forno com cascas de batata bem lavadas, azeite, sal e páprica.',
    category: 'Lanches',
    tags: ['Lanches', 'Aproveitamento integral'],
    image: chipsCascaBatataImg,
    imageAlt: 'Tigela de cerâmica com chips dourados e crocantes de casca de batata temperados',
    prepTimeMinutes: 30,
    servings: 4,
    servingsLabel: '4 porções',
    ingredientsCount: 4,
    authorId: 'guilherme-dias',
    sustainabilityInfo:
      'Garante aproveitamento completo das batatas usadas no almoço ao assar as cascas bem lavadas como petisco, evitando descartar uma parte rica em fibras.',
    ingredients: [
      { id: '9-1', amount: '3', unit: 'unidades', name: 'Cascas de batata bem lavadas' },
      { id: '9-2', amount: '1', unit: 'colher (sopa)', name: 'Azeite' },
      { id: '9-3', amount: 'a gosto', unit: '', name: 'Sal' },
      { id: '9-4', amount: 'a gosto', unit: '', name: 'Páprica' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Lavar as batatas',
        instruction: 'Lave muito bem as batatas antes de descascá-las.',
      },
      {
        stepNumber: 2,
        title: 'Temperar',
        instruction: 'Misture as cascas com o azeite e os temperos.',
      },
      {
        stepNumber: 3,
        title: 'Distribuir',
        instruction: 'Distribua em uma assadeira, sem amontoar.',
      },
      {
        stepNumber: 4,
        title: 'Assar',
        instruction:
          'Asse a 200 °C por aproximadamente 15 a 25 minutos, mexendo na metade do tempo. Retire quando estiverem douradas e crocantes.',
      },
    ],
  },
  {
    id: '10',
    slug: 'bolo-de-casca-de-banana',
    title: 'Bolo de Casca de Banana',
    description:
      'Bolo fofinho feito no liquidificador com cascas de banana maduras e um toque opcional de canela.',
    category: 'Café da manhã',
    tags: ['Café da manhã', 'Aproveitamento integral'],
    image: boloCascaBananaImg,
    imageAlt: 'Fatias de bolo fofinho de casca de banana polvilhadas com canela em prato de cerâmica',
    prepTimeMinutes: 15,
    prepTimeNote: '+ 35 a 45 min de forno',
    servings: 10,
    servingsLabel: '8 a 10 fatias',
    ingredientsCount: 8,
    authorId: 'girliane',
    sustainabilityInfo:
      'Substitui a polpa por quatro cascas de banana batidas na massa, aproveitando integralmente a fruta com ingredientes simples e baratos.',
    ingredients: [
      { id: '10-1', amount: '4', unit: 'unidades', name: 'Cascas de banana maduras' },
      { id: '10-2', amount: '2', unit: 'unidades', name: 'Ovos' },
      { id: '10-3', amount: '1', unit: 'xícara (chá)', name: 'Açúcar' },
      { id: '10-4', amount: '2', unit: 'xícaras (chá)', name: 'Farinha de trigo' },
      { id: '10-5', amount: '½', unit: 'xícara (chá)', name: 'Óleo' },
      { id: '10-6', amount: '1', unit: 'xícara (chá)', name: 'Leite' },
      { id: '10-7', amount: '1', unit: 'colher (sopa)', name: 'Fermento em pó' },
      { id: '10-8', amount: '1', unit: 'pitada', name: 'Canela em pó (opcional)' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Lavar as cascas',
        instruction:
          'Lave muito bem as cascas das bananas em água corrente. Retire as pontas e corte as cascas em pedaços.',
      },
      {
        stepNumber: 2,
        title: 'Bater os ingredientes',
        instruction:
          'No liquidificador, coloque as cascas, os ovos, o leite, o óleo e o açúcar. Bata até ficar uma mistura homogênea.',
      },
      {
        stepNumber: 3,
        title: 'Misturar a farinha',
        instruction:
          'Despeje a mistura em uma tigela, acrescente a farinha aos poucos e mexa bem. Por último, coloque o fermento e misture delicadamente.',
      },
      {
        stepNumber: 4,
        title: 'Assar o bolo',
        instruction:
          'Coloque a massa em uma forma untada e enfarinhada. Peça ajuda a um adulto para levar ao forno preaquecido a 180 °C por aproximadamente 35 a 45 minutos. Espete um palito no centro: se sair limpo, o bolo está pronto. Espere amornar antes de desenformar.',
      },
    ],
  },
  {
    id: '11',
    slug: 'torrada-de-pao-amanhecido',
    title: 'Torrada de Pão Amanhecido',
    description:
      'Torrada crocante feita com fatias de pão amanhecido douradas no forno ou na frigideira.',
    category: 'Café da manhã',
    tags: ['Café da manhã', 'Aproveitamento integral'],
    image: torradaPaoImg,
    imageAlt: 'Fatias douradas e crocantes de torrada de pão amanhecido sobre tábua com café',
    prepTimeMinutes: 10,
    servings: 4,
    servingsLabel: '4 porções',
    ingredientsCount: 3,
    authorId: 'girliane',
    sustainabilityInfo:
      'Prolonga o consumo do pão de dias anteriores sem precisar comprar pão novo nem descartar as sobras no lixo orgânico.',
    ingredients: [
      { id: '11-1', amount: '4', unit: 'fatias', name: 'Pão amanhecido' },
      { id: '11-2', amount: 'a gosto', unit: '', name: 'Manteiga ou azeite' },
      { id: '11-3', amount: 'a gosto', unit: '', name: 'Temperos (opcional)' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Preparar o pão',
        instruction: 'Corte o pão amanhecido em fatias.',
      },
      {
        stepNumber: 2,
        title: 'Temperar',
        instruction: 'Passe manteiga ou azeite nas fatias e tempere a gosto.',
      },
      {
        stepNumber: 3,
        title: 'Torrar',
        instruction: 'Leve ao forno ou à frigideira até dourar dos dois lados.',
      },
      {
        stepNumber: 4,
        title: 'Servir',
        instruction: 'Sirva quentinha.',
      },
    ],
  },
  {
    id: '12',
    slug: 'salada-de-frutas',
    title: 'Salada de Frutas',
    description:
      'Mistura fresca de mamão, banana, maçã com casca, morango, laranja e uva regada com suco natural de laranja e limão.',
    category: 'Sobremesas',
    tags: ['Sobremesas', 'Aproveitamento integral'],
    image: saladaFrutasImg,
    imageAlt:
      'Tigela de cerâmica com salada de frutas frescas picadas em cubos de mamão, banana, maçã com casca, morangos, laranja e uvas',
    prepTimeMinutes: 15,
    prepTimeNote: '+ 20 min de geladeira',
    servings: 6,
    servingsLabel: '6 porções',
    ingredientsCount: 10,
    authorId: 'sheldon-christyan',
    sustainabilityInfo:
      'A receita mantém a casca da maçã para aproveitar fibras e reduzir sobras e aceita qualquer fruta madura disponível em casa, como manga, melão ou pêssego, evitando que estraguem na fruteira.',
    ingredients: [
      { id: '12-1', amount: '1', unit: 'unidade', name: 'Mamão papaia médio cortado em cubos' },
      { id: '12-2', amount: '2', unit: 'unidades', name: 'Bananas cortadas em rodelas' },
      { id: '12-3', amount: '1', unit: 'unidade', name: 'Maçã picada com casca' },
      { id: '12-4', amount: '1', unit: 'xícara (chá)', name: 'Morangos cortados ao meio' },
      { id: '12-5', amount: '1', unit: 'unidade', name: 'Laranja descascada e em pedaços' },
      { id: '12-6', amount: '10', unit: 'unidades', name: 'Uvas inteiras ou cortadas' },
      { id: '12-7', amount: '½', unit: 'unidade', name: 'Suco de limão' },
      { id: '12-8', amount: '2', unit: 'unidades', name: 'Suco de laranjas' },
      { id: '12-9', amount: 'a gosto', unit: '', name: 'Leite condensado (opcional)' },
      { id: '12-10', amount: 'a gosto', unit: '', name: 'Canela em pó (opcional)' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Higienizar e picar as frutas',
        instruction:
          'Lave bem todas as frutas em água corrente, inclusive a maçã que vai com casca. Corte tudo em pedaços de tamanho parecido e substitua ou adicione outras frutas que tiver em casa, como manga, melão, melancia ou pêssego.',
      },
      {
        stepNumber: 2,
        title: 'Evitar que escureçam',
        instruction:
          'Coloque primeiro a maçã e a banana em uma tigela e despeje o suco de limão por cima para que não escureçam.',
      },
      {
        stepNumber: 3,
        title: 'Misturar e regar',
        instruction:
          'Junte o mamão, os morangos, a laranja e as uvas na tigela. Regue todas as frutas com o suco das duas laranjas.',
      },
      {
        stepNumber: 4,
        title: 'Finalizar e gelar',
        instruction:
          'Se quiser, misture leite condensado e polvilhe canela em pó. Leve à geladeira por cerca de 20 minutos antes de servir.',
      },
    ],
  },
  {
    id: '13',
    slug: 'bolo-de-casca-de-laranja',
    title: 'Bolo de Casca de Laranja',
    description:
      'Bolo fofinho de liquidificador preparado com cascas de laranja bem lavadas, sem a parte branca para não amargar.',
    category: 'Café da manhã',
    tags: ['Café da manhã', 'Aproveitamento integral'],
    image: boloCascaLaranjaImg,
    imageAlt:
      'Fatia dourada de bolo de casca de laranja em prato de cerâmica com raspas e rodelas de laranja fresca',
    prepTimeMinutes: 15,
    prepTimeNote: '+ 35 min de forno',
    servings: 10,
    servingsLabel: '10 fatias',
    ingredientsCount: 7,
    authorId: 'ana-clara',
    sustainabilityInfo:
      'Usa as cascas de duas laranjas que iriam para o lixo, aproveitando o sabor cítrico natural da fruta na massa do bolo.',
    ingredients: [
      {
        id: '13-1',
        amount: '2',
        unit: 'unidades',
        name: 'Cascas de laranja bem lavadas (sem a parte branca)',
      },
      { id: '13-2', amount: '2', unit: 'unidades', name: 'Ovos' },
      { id: '13-3', amount: '1', unit: 'xícara (chá)', name: 'Açúcar' },
      { id: '13-4', amount: '½', unit: 'xícara (chá)', name: 'Óleo' },
      { id: '13-5', amount: '1', unit: 'xícara (chá)', name: 'Leite' },
      { id: '13-6', amount: '2', unit: 'xícaras (chá)', name: 'Farinha de trigo' },
      { id: '13-7', amount: '1', unit: 'colher (sopa)', name: 'Fermento em pó' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Lavar e descascar',
        instruction:
          'Lave bem as laranjas e retire só a casca alaranjada, sem a parte branca que amarga.',
      },
      {
        stepNumber: 2,
        title: 'Bater no liquidificador',
        instruction: 'Bata no liquidificador a casca, os ovos, o açúcar, o óleo e o leite.',
      },
      {
        stepNumber: 3,
        title: 'Misturar a farinha e o fermento',
        instruction:
          'Despeje em uma tigela e misture a farinha de trigo. Por último, coloque o fermento e mexa devagar.',
      },
      {
        stepNumber: 4,
        title: 'Assar',
        instruction: 'Coloque em uma forma untada e asse por 35 minutos até dourar.',
      },
    ],
  },
  {
    id: '14',
    slug: 'farofa-de-casca-de-banana',
    title: 'Farofa de Casca de Banana',
    description:
      'Farofa sequinha feita com tirinhas finas de casca de banana refogadas com cebola, alho e cheiro-verde.',
    category: 'Almoço e jantar',
    tags: ['Almoço e jantar', 'Aproveitamento integral'],
    image: farofaCascaBananaImg,
    imageAlt:
      'Tigela de cerâmica com farofa de mandioca dourada misturada com tirinhas de casca de banana, cebola e cheiro-verde',
    prepTimeMinutes: 20,
    servings: 6,
    servingsLabel: '6 porções',
    ingredientsCount: 7,
    authorId: 'ana-clara',
    sustainabilityInfo:
      'Usa as cascas de três bananas que iriam para o lixo, transformando uma parte descartada da fruta em acompanhamento salgado.',
    ingredients: [
      { id: '14-1', amount: '3', unit: 'unidades', name: 'Cascas de banana bem lavadas' },
      { id: '14-2', amount: '1', unit: 'unidade', name: 'Cebola pequena picada' },
      { id: '14-3', amount: '1', unit: 'dente', name: 'Alho picado' },
      { id: '14-4', amount: '2', unit: 'colheres (sopa)', name: 'Óleo' },
      { id: '14-5', amount: '1', unit: 'xícara (chá)', name: 'Farinha de mandioca' },
      { id: '14-6', amount: 'a gosto', unit: '', name: 'Sal' },
      { id: '14-7', amount: 'a gosto', unit: '', name: 'Cheiro-verde' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Lavar e cortar as cascas',
        instruction: 'Lave bem as cascas da banana e corte em tirinhas bem fininhas.',
      },
      {
        stepNumber: 2,
        title: 'Dourar o tempero',
        instruction: 'Em uma panela, esquente o óleo e frite a cebola e o alho até dourar.',
      },
      {
        stepNumber: 3,
        title: 'Refogar as cascas',
        instruction: 'Coloque as cascas na panela e mexa por 5 minutos.',
      },
      {
        stepNumber: 4,
        title: 'Finalizar a farofa',
        instruction:
          'Coloque a farinha de mandioca, o sal e o cheiro-verde. Mexa tudo até ficar sequinha e desligue.',
      },
    ],
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}
