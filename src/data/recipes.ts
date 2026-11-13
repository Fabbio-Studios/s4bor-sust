import { Recipe, RecipeCategory } from '../types/recipe';

import boloCascaBananaImg from '../assets/images/bolo_casca_banana_1794609818831.jpg';
import farofaTalosImg from '../assets/images/farofa_talos_vegetais_1794609819082.jpg';
import sucoCascaAbacaxiImg from '../assets/images/suco_casca_abacaxi_1794609819672.jpg';
import bolinhoArrozImg from '../assets/images/bolinho_arroz_reaproveitado_1794609819093.jpg';
import pestoFolhasCenouraImg from '../assets/images/pesto_folhas_cenoura_1794609819591.jpg';
import doceCascaMelanciaImg from '../assets/images/doce_casca_melancia_1794609821527.jpg';
import sopaLegumesImg from '../assets/images/sopa_legumes_integral_1794609821677.jpg';
import panquecaBananaImg from '../assets/images/panqueca_banana_aveia_1794609821467.jpg';
import chipsCascaBatataImg from '../assets/images/chips_casca_batata_1794609822207.jpg';

export const RECIPE_CATEGORIES: RecipeCategory[] = [
  'Todas',
  'Café da manhã',
  'Almoço e jantar',
  'Lanches',
  'Sobremesas',
  'Bebidas',
  'Aproveitamento integral',
];

export const recipes: Recipe[] = [
  {
    id: '1',
    slug: 'bolo-de-casca-de-banana',
    title: 'Bolo de casca de banana',
    description:
      'Fofinho, perfumado com canela e ideal para o café da tarde. As cascas maduras garantem umidade natural e um sabor aconchegante.',
    category: 'Sobremesas',
    tags: ['Sobremesas', 'Aproveitamento integral'],
    image: boloCascaBananaImg,
    imageAlt: 'Fatias de bolo caseiro de casca de banana polvilhadas com canela em prato de cerâmica',
    prepTimeMinutes: 40,
    servings: 10,
    ingredientsCount: 8,
    authorId: 'marina',
    sustainabilityInfo:
      'O aproveitamento da casca da banana permite utilizar uma parte do alimento que frequentemente seria descartada, transformando-a em um ingrediente rico em fibras para uma preparação saborosa e econômica.',
    ingredients: [
      { id: '1-1', amount: '4', unit: 'unidades', name: 'cascas de banana madura bem higienizadas' },
      { id: '1-2', amount: '3', unit: 'unidades', name: 'ovos inteiros' },
      { id: '1-3', amount: '1/2', unit: 'xícara (chá)', name: 'óleo vegetal' },
      { id: '1-4', amount: '1 e 1/2', unit: 'xícara (chá)', name: 'açúcar mascavo ou demerara' },
      { id: '1-5', amount: '2', unit: 'xícaras (chá)', name: 'farinha de trigo' },
      { id: '1-6', amount: '1', unit: 'colher (sopa)', name: 'fermento químico em pó' },
      { id: '1-7', amount: '1', unit: 'colher (chá)', name: 'canela em pó' },
      { id: '1-8', amount: '1', unit: 'pitada', name: 'sal' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Higienizar e picar as cascas',
        instruction:
          'Lave as bananas inteiras em água corrente com uma escovinha limpa antes de descascá-las. Retire as pontinhas das cascas e corte-as em pedaços menores para facilitar na hora de bater.',
      },
      {
        stepNumber: 2,
        title: 'Bater a base líquida',
        instruction:
          'No liquidificador, bata as cascas picadas, os ovos, o óleo e o açúcar por cerca de 3 minutos, até formar um creme liso e homogêneo sem pedaços grandes.',
      },
      {
        stepNumber: 3,
        title: 'Incorporar os ingredientes secos',
        instruction:
          'Transfira o creme para uma tigela, peneire a farinha de trigo com a canela e o sal aos poucos e misture delicadamente com um batedor de arame ou espátula.',
      },
      {
        stepNumber: 4,
        title: 'Adicionar o fermento e assar',
        instruction:
          'Misture o fermento por último, apenas até incorporar. Despeje em uma forma untada e enfarinhada e asse em forno preaquecido a 180 °C por cerca de 35 a 40 minutos.',
      },
    ],
  },
  {
    id: '2',
    slug: 'farofa-de-talos-de-vegetais',
    title: 'Farofa de talos de vegetais',
    description:
      'Crocante, colorida e cheia de textura. Talos de couve, brócolis e espinafre viram um acompanhamento indispensável para o almoço.',
    category: 'Almoço e jantar',
    tags: ['Almoço e jantar', 'Aproveitamento integral'],
    image: farofaTalosImg,
    imageAlt: 'Tigela rústica com farofa dourada de mandioca e talos verdes refogados',
    prepTimeMinutes: 20,
    servings: 6,
    ingredientsCount: 7,
    authorId: 'lucas',
    sustainabilityInfo:
      'Talos de folhas verdes e floretes costumam ser descartados no pré-preparo, embora concentrem textura firme e sabor fresco. Picados finamente, substituem temperos prontos e evitam desperdício na cozinha diária.',
    ingredients: [
      { id: '2-1', amount: '2', unit: 'xícaras (chá)', name: 'talos variados bem picados (couve, brócolis, agrião ou salsa)' },
      { id: '2-2', amount: '2', unit: 'xícaras (chá)', name: 'farinha de mandioca flocada ou torrada' },
      { id: '2-3', amount: '1', unit: 'unidade', name: 'cebola média picada em cubinhos' },
      { id: '2-4', amount: '2', unit: 'dentes', name: 'alho amassados' },
      { id: '2-5', amount: '3', unit: 'colheres (sopa)', name: 'azeite de oliva ou manteiga' },
      { id: '2-6', amount: '1/2', unit: 'colher (chá)', name: 'cúrcuma em pó' },
      { id: '2-7', amount: 'a gosto', unit: '', name: 'sal e pimenta-do-reino' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Lavar e picar os talos',
        instruction:
          'Higienize os talos em água corrente e seque-os bem com um pano limpo. Pique em rodelinhas bem finas para que cozinhem rapidamente e fiquem macios.',
      },
      {
        stepNumber: 2,
        title: 'Refogar os aromáticos',
        instruction:
          'Em uma frigideira larga em fogo médio, aqueça o azeite e refogue a cebola até dourar levemente. Junte o alho e a cúrcuma e mexa por 1 minuto.',
      },
      {
        stepNumber: 3,
        title: 'Saltear os talos',
        instruction:
          'Adicione os talos picados à frigideira e refogue por 4 minutos até perderem o excesso de umidade e ficarem verde-vibrantes.',
      },
      {
        stepNumber: 4,
        title: 'Tostar a farinha',
        instruction:
          'Abaixe o fogo, acrescente a farinha de mandioca aos poucos e mexa sem parar por 5 minutos até ficar bem crocante. Ajuste o sal e a pimenta antes de servir.',
      },
    ],
  },
  {
    id: '3',
    slug: 'suco-de-casca-de-abacaxi',
    title: 'Suco de casca de abacaxi',
    description:
      'Refrescante, aromático e naturalmente adocicado com folhas frescas de hortelã. Uma bebida perfeita para dias quentes.',
    category: 'Bebidas',
    tags: ['Bebidas', 'Aproveitamento integral'],
    image: sucoCascaAbacaxiImg,
    imageAlt: 'Copo alto de suco dourado de casca de abacaxi com folhas de hortelã e gelo',
    prepTimeMinutes: 15,
    servings: 5,
    ingredientsCount: 5,
    authorId: 'camila',
    sustainabilityInfo:
      'A casca do abacaxi representa uma parcela expressiva do peso total da fruta e guarda grande concentração de aroma. Transformá-la em suco ou chá gelado multiplica o rendimento de uma única compra.',
    ingredients: [
      { id: '3-1', amount: '1', unit: 'unidade', name: 'casca de abacaxi inteiro bem lavada' },
      { id: '3-2', amount: '1', unit: 'litro', name: 'água filtrada bem gelada' },
      { id: '3-3', amount: '1', unit: 'punhado', name: 'folhas frescas de hortelã' },
      { id: '3-4', amount: '1', unit: 'unidade', name: 'suco de limão tahiti' },
      { id: '3-5', amount: '2', unit: 'colheres (sopa)', name: 'açúcar demerara ou mel (opcional)' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Higienizar a fruta inteira',
        instruction:
          'Antes de cortar o abacaxi, esfregue toda a casca sob água corrente usando uma escova de cozinha limpa para remover impurezas da superfície.',
      },
      {
        stepNumber: 2,
        title: 'Bater com água e hortelã',
        instruction:
          'Coloque as cascas picadas em pedaços médios no liquidificador junto com metade da água gelada e as folhas de hortelã. Bata por 2 minutos.',
      },
      {
        stepNumber: 3,
        title: 'Coar e finalizar',
        instruction:
          'Passe o líquido por uma peneira fina pressionando bem com as costas de uma colher para extrair todo o sabor. Misture o restante da água, o suco de limão e adoce se desejar.',
      },
      {
        stepNumber: 4,
        title: 'Servir bem gelado',
        instruction:
          'Sirva imediatamente em copos com pedras de gelo e raminhos de hortelã fresca. A polpa coada pode ser aproveitada em compostagem.',
      },
    ],
  },
  {
    id: '4',
    slug: 'bolinho-de-arroz-reaproveitado',
    title: 'Bolinho de arroz reaproveitado',
    description:
      'Douradinho por fora e macio por dentro, temperado com cheiro-verde e queijo. A forma mais gostosa de dar vida nova ao arroz de ontem.',
    category: 'Lanches',
    tags: ['Lanches', 'Almoço e jantar'],
    image: bolinhoArrozImg,
    imageAlt: 'Bolinhos de arroz dourados e crocantes servidos com salsinha fresca e limão',
    prepTimeMinutes: 30,
    servings: 4,
    ingredientsCount: 7,
    authorId: 'beatriz',
    sustainabilityInfo:
      'O arroz cozido é um dos alimentos mais desperdiçados nos lares. Ao combiná-lo com ervas frescas e assar ou dourar em porções individuais, evitamos que sobras seguras acabem descartadas.',
    ingredients: [
      { id: '4-1', amount: '2', unit: 'xícaras (chá)', name: 'arroz cozido amanhecido' },
      { id: '4-2', amount: '2', unit: 'unidades', name: 'ovos batidos' },
      { id: '4-3', amount: '1/2', unit: 'xícara (chá)', name: 'queijo minas padrão ou parmesão ralado' },
      { id: '4-4', amount: '4', unit: 'colheres (sopa)', name: 'farinha de trigo ou aveia em flocos finos' },
      { id: '4-5', amount: '1/2', unit: 'xícara (chá)', name: 'salsinha e cebolinha picadas' },
      { id: '4-6', amount: '1', unit: 'colher (chá)', name: 'fermento químico em pó' },
      { id: '4-7', amount: '2', unit: 'colheres (sopa)', name: 'azeite de oliva para pincelar ou dourar' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Soltar o arroz',
        instruction:
          'Em uma tigela grande, solte os grãos do arroz cozido com um garfo e amasse levemente uma parte dele para ajudar a dar liga natural à massa.',
      },
      {
        stepNumber: 2,
        title: 'Misturar os temperos e a liga',
        instruction:
          'Acrescente os ovos, o queijo ralado, o cheiro-verde e o azeite. Misture bem até obter uma massa úmida e aromática.',
      },
      {
        stepNumber: 3,
        title: 'Ajustar a consistência',
        instruction:
          'Adicione a farinha ou aveia aos poucos junto com o fermento até conseguir moldar bolinhos firmes com as mãos ou com duas colheres.',
      },
      {
        stepNumber: 4,
        title: 'Assar até dourar',
        instruction:
          'Disponha os bolinhos em uma assadeira untada, pincele um fio de azeite por cima e leve ao forno preaquecido a 200 °C por cerca de 22 minutos, virando na metade do tempo.',
      },
    ],
  },
  {
    id: '5',
    slug: 'pesto-de-folhas-de-cenoura',
    title: 'Pesto de folhas de cenoura',
    description:
      'Molho verde vibrante, fresco e versátil feito com a rama da cenoura. Fica incrível em massas, pães tostados e legumes assados.',
    category: 'Almoço e jantar',
    tags: ['Almoço e jantar', 'Aproveitamento integral'],
    image: pestoFolhasCenouraImg,
    imageAlt: 'Molho pesto verde intenso de folhas de cenoura com castanhas e pão rústico',
    prepTimeMinutes: 10,
    servings: 6,
    ingredientsCount: 6,
    authorId: 'rafael',
    sustainabilityInfo:
      'Quando compramos cenouras em maço, a rama fresca quase sempre fica esquecida. Suas folhas têm sabor herbáceo suave que lembra salsinha e substituem integralmente o manjericão em molhos frios.',
    ingredients: [
      { id: '5-1', amount: '2', unit: 'xícaras (chá)', name: 'folhas frescas de cenoura lavadas e secas' },
      { id: '5-2', amount: '1/3', unit: 'xícara (chá)', name: 'castanha-de-caju ou nozes tostadas' },
      { id: '5-3', amount: '1/2', unit: 'xícara (chá)', name: 'azeite de oliva extravirgem' },
      { id: '5-4', amount: '1', unit: 'dente', name: 'alho descascado' },
      { id: '5-5', amount: '1', unit: 'colher (sopa)', name: 'suco de limão' },
      { id: '5-6', amount: '1/3', unit: 'xícara (chá)', name: 'queijo parmesão ralado (ou levedura nutricional)' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Separar apenas as folhas',
        instruction:
          'Lave bem a rama da cenoura, seque com papel-toalha ou centrífuga de salada e separe as folhinhas mais tenras dos talos grossos.',
      },
      {
        stepNumber: 2,
        title: 'Tostar levemente as castanhas',
        instruction:
          'Em uma frigideira seca em fogo baixo, toste as castanhas por 2 minutos até perfumarem. Deixe esfriar um pouco antes de processar.',
      },
      {
        stepNumber: 3,
        title: 'Processar em pulsos',
        instruction:
          'Bata as folhas de cenoura, as castanhas, o alho, o suco de limão e metade do azeite no processador ou liquidificador usando a função pulsar.',
      },
      {
        stepNumber: 4,
        title: 'Finalizar com queijo e azeite',
        instruction:
          'Adicione o queijo ralado e o restante do azeite em fio até formar um molho rústico e brilhante. Ajuste o sal e guarde em pote fechado na geladeira.',
      },
    ],
  },
  {
    id: '6',
    slug: 'doce-de-casca-de-melancia',
    title: 'Doce de casca de melancia',
    description:
      'Cubinhos translúcidos em calda perfumada com cravo e canela. Uma receita afetiva que resgata tradições de cozinha sem sobras.',
    category: 'Sobremesas',
    tags: ['Sobremesas', 'Aproveitamento integral'],
    image: doceCascaMelanciaImg,
    imageAlt: 'Compoteira de vidro com cubos dourados de doce de casca de melancia com canela e cravo',
    prepTimeMinutes: 55,
    servings: 8,
    ingredientsCount: 6,
    authorId: 'beatriz',
    sustainabilityInfo:
      'A parte branca entre a polpa vermelha e a casca verde da melancia é rica em água e possui textura firme perfeita para compotas. Aproveitá-la dobra o rendimento de uma melancia inteira.',
    ingredients: [
      { id: '6-1', amount: '4', unit: 'xícaras (chá)', name: 'parte branca da casca de melancia em cubos' },
      { id: '6-2', amount: '2', unit: 'xícaras (chá)', name: 'açúcar cristal ou demerara' },
      { id: '6-3', amount: '2', unit: 'xícaras (chá)', name: 'água filtrada' },
      { id: '6-4', amount: '2', unit: 'paus', name: 'canela em rama' },
      { id: '6-5', amount: '5', unit: 'unidades', name: 'cravos-da-índia' },
      { id: '6-6', amount: '1', unit: 'tira', name: 'casca de laranja ou limão sem a parte branca' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Preparar os cubos da casca',
        instruction:
          'Lave a melancia por fora. Com uma faca firme, retire a película verde escura mais dura e corte a parte branca (deixando um fio da polpa rosa, se quiser) em cubos regulares.',
      },
      {
        stepNumber: 2,
        title: 'Fervura rápida para amaciar',
        instruction:
          'Leve os cubos ao fogo cobertos com água por 10 minutos para pré-cozinhar. Escorra toda a água e reserve os cubinhos.',
      },
      {
        stepNumber: 3,
        title: 'Cozinhar na calda aromática',
        instruction:
          'Em uma panela funda, misture o açúcar, as 2 xícaras de água, a canela, os cravos e a casca cítrica. Junte os cubos de melancia e cozinhe em fogo baixo.',
      },
      {
        stepNumber: 4,
        title: 'Apurar até ficar translúcido',
        instruction:
          'Deixe cozinhar por cerca de 35 minutos, mexendo ocasionalmente com cuidado, até os cubos ficarem macios, brilhantes e a calda encorpar. Sirva frio.',
      },
    ],
  },
  {
    id: '7',
    slug: 'sopa-de-legumes-com-aproveitamento-integral',
    title: 'Sopa de legumes com aproveitamento integral',
    description:
      'Caldo reconfortante preparado com abóbora com casca, cenoura, talos e folhas verdes. Nutritiva, colorida e prática para qualquer noite.',
    category: 'Almoço e jantar',
    tags: ['Almoço e jantar', 'Aproveitamento integral'],
    image: sopaLegumesImg,
    imageAlt: 'Tigela de sopa caseira colorida com cubos de abóbora, cenoura e folhas verdes frescas',
    prepTimeMinutes: 35,
    servings: 5,
    ingredientsCount: 8,
    authorId: 'lucas',
    sustainabilityInfo:
      'Manter a casca limpa de abóboras e cenouras e cozinhar talos no caldo inicial adiciona sabor profundo sem depender de caldos industrializados, aproveitando cada vegetal do começo ao fim.',
    ingredients: [
      { id: '7-1', amount: '2', unit: 'xícaras (chá)', name: 'abóbora cabotiá com casca bem lavada em cubos' },
      { id: '7-2', amount: '2', unit: 'unidades', name: 'cenouras com casca cortadas em rodelas' },
      { id: '7-3', amount: '1', unit: 'xícara (chá)', name: 'talos picados de salsão, couve ou espinafre' },
      { id: '7-4', amount: '1', unit: 'maço pequeno', name: 'folhas verdes rasgadas (couve ou espinafre)' },
      { id: '7-5', amount: '1', unit: 'unidade', name: 'cebola picada' },
      { id: '7-6', amount: '2', unit: 'dentes', name: 'alho picados' },
      { id: '7-7', amount: '1,2', unit: 'litro', name: 'água ou caldo caseiro de aparas de legumes' },
      { id: '7-8', amount: '2', unit: 'colheres (sopa)', name: 'azeite de oliva e sal a gosto' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Refogar a base aromática',
        instruction:
          'Aqueça o azeite em uma panela grande e refogue a cebola, o alho e os talos picados por 4 minutos até começarem a amaciar e perfumar.',
      },
      {
        stepNumber: 2,
        title: 'Cozinhar os legumes com casca',
        instruction:
          'Adicione os cubos de abóbora e as rodelas de cenoura já escovados e limpos. Cubra com a água ou caldo caseiro e tempere com sal.',
      },
      {
        stepNumber: 3,
        title: 'Cozimento em fogo médio',
        instruction:
          'Tampe parcialmente e deixe cozinhar por cerca de 20 minutos, até que a abóbora e a cenoura fiquem macias ao espetar com um garfo.',
      },
      {
        stepNumber: 4,
        title: 'Finalizar com as folhas',
        instruction:
          'Desligue o fogo e misture as folhas verdes rasgadas para que murchem apenas com o calor residual da sopa, mantendo a cor vibrante.',
      },
    ],
  },
  {
    id: '8',
    slug: 'panqueca-de-banana',
    title: 'Panqueca de banana',
    description:
      'Pronta em 15 minutos, sem açúcar refinado e perfeita para aproveitar bananas bem maduras que já passaram do ponto na fruteira.',
    category: 'Café da manhã',
    tags: ['Café da manhã', 'Lanches'],
    image: panquecaBananaImg,
    imageAlt: 'Pilha de panquecas douradas de banana e aveia com rodelas de banana e mel',
    prepTimeMinutes: 15,
    servings: 2,
    ingredientsCount: 5,
    authorId: 'rafael',
    sustainabilityInfo:
      'Bananas com a casca pintadinha costumam ser deixadas de lado, mas estão no auge de sua doçura natural. Usá-las na panqueca dispensa açúcar adicionado e reduz o descarte de frutas maduras.',
    ingredients: [
      { id: '8-1', amount: '2', unit: 'unidades', name: 'bananas bem maduras amassadas' },
      { id: '8-2', amount: '2', unit: 'unidades', name: 'ovos' },
      { id: '8-3', amount: '1/2', unit: 'xícara (chá)', name: 'aveia em flocos finos' },
      { id: '8-4', amount: '1', unit: 'colher (chá)', name: 'canela em pó' },
      { id: '8-5', amount: '1', unit: 'colher (chá)', name: 'óleo de coco ou manteiga para grelhar' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Amassar as bananas',
        instruction:
          'Em um prato fundo, amasse bem as bananas maduras com um garfo até virarem um purê cremoso e docinho.',
      },
      {
        stepNumber: 2,
        title: 'Incorporar ovos e aveia',
        instruction:
          'Bata os ovos junto com o purê de banana, acrescente a aveia e a canela e deixe a massa descansar por 3 minutos para hidratar os flocos.',
      },
      {
        stepNumber: 3,
        title: 'Dourar em fogo baixo',
        instruction:
          'Aqueça levemente uma frigideira antiaderente untada. Despeje pequenas conchas de massa e cozinhe por 2 minutos até surgirem bolhinhas nas bordas.',
      },
      {
        stepNumber: 4,
        title: 'Virar e servir',
        instruction:
          'Vire com uma espátula e doure o outro lado por mais 1 minuto. Sirva empilhadas com rodelas de banana, castanhas ou um fio de mel.',
      },
    ],
  },
  {
    id: '9',
    slug: 'chips-de-casca-de-batata',
    title: 'Chips de casca de batata',
    description:
      'Petisco sequinho, assado e perfumado com alecrim e sal marinho. Transforma o que sobraria do preparo do purê em snack crocante.',
    category: 'Lanches',
    tags: ['Lanches', 'Aproveitamento integral'],
    image: chipsCascaBatataImg,
    imageAlt: 'Tigela com chips dourados e crocantes de casca de batata com alecrim e flor de sal',
    prepTimeMinutes: 25,
    servings: 3,
    ingredientsCount: 5,
    authorId: 'camila',
    sustainabilityInfo:
      'Ao preparar purês ou escondidinhos, as cascas da batata quase sempre vão direto para o lixo. Assadas com um fio de azeite e ervas, tornam-se um lanche crocante em poucos minutos.',
    ingredients: [
      { id: '9-1', amount: '3', unit: 'xícaras (chá)', name: 'cascas de batata lavadas com escova e bem secas' },
      { id: '9-2', amount: '1 e 1/2', unit: 'colher (sopa)', name: 'azeite de oliva' },
      { id: '9-3', amount: '1', unit: 'ramo', name: 'alecrim fresco debulhado' },
      { id: '9-4', amount: '1/2', unit: 'colher (chá)', name: 'páprica doce ou defumada' },
      { id: '9-5', amount: '1/2', unit: 'colher (chá)', name: 'sal marinho' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Secar muito bem as cascas',
        instruction:
          'Após lavar bem as batatas e descascá-las, lave as cascas rapidamente e seque-as completamente com um pano de prato limpo. Quanto mais secas, mais crocantes ficam.',
      },
      {
        stepNumber: 2,
        title: 'Temperar uniformemente',
        instruction:
          'Em uma tigela, misture as cascas secas com o azeite, a páprica, o sal e as folhinhas de alecrim até todas ficarem levemente envolvidas.',
      },
      {
        stepNumber: 3,
        title: 'Espalhar sem sobrepor',
        instruction:
          'Distribua as cascas em uma assadeira grande em uma única camada, evitando que fiquem amontoadas para que assem por igual.',
      },
      {
        stepNumber: 4,
        title: 'Assar até ficarem crocantes',
        instruction:
          'Leve ao forno preaquecido a 200 °C por 15 a 20 minutos, mexendo na metade do tempo, até ficarem douradas e firmes ao esfriar.',
      },
    ],
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}
