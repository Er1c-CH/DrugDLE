const morfina = {
    "Nome": "Morfina",
    "Descrição": "A droga em questão é um alcaloide opiáceo usado principalmente para o alívio da dor severa. É considerada uma das substâncias mais eficazes no manejo da dor intensa, especialmente em contextos pós-operatórios e de cuidados paliativos.",
    "Fórmula química": "C17H19NO3",
    "Peso molecular": 285.34,
    "Propriedades físicas": {
      "Aparência": "Cristais brancos ou pó cristalino",
      "Solubilidade": "Solúvel em água, etanol, e levemente solúvel em clorofórmio",
      "Ponto de fusão": "255 °C"
    },
    "Mecanismo de ação": "Age ligando-se aos receptores opioides no sistema nervoso central, modulando a percepção da dor e a resposta emocional à dor.",
    "Usos médicos": [
      "Alívio da dor severa",
      "Tratamento de dor pós-operatória",
      "Cuidados paliativos em pacientes com câncer",
      "Alívio da dor em infarto do miocárdio"
    ],
    "Efeitos colaterais": [
      "Sonolência",
      "Náusea e vômito",
      "Constipação",
      "Respiração lenta (depressão respiratória)",
      "Dependência e tolerância"
    ],
    "Formas de dosagem": [
      "Comprimidos",
      "Solução injetável",
      "Solução oral",
      "Supositórios"
    ],
    "Status legal": {
      "Classificação": "Agendada como substância controlada em muitos países",
      "Restrições": "Uso restrito a prescrição médica"
    },
    "Histórico": {
      "Descoberta": "Descoberta por Friedrich Sertürner em 1804",
      "Uso médico": "Introduzida na prática médica no início do século 19"
    },
    "Farmacocinetica": {
      "Absorção": "Bem absorvida pelo trato gastrointestinal",
      "Distribuição": "Amplamente distribuída pelo corpo, atravessa a barreira hematoencefálica",
      "Metabolismo": "Metabolizada principalmente no fígado",
      "Meia vida de eliminação": "2-3 horas",
      "Excreção": "Excretada principalmente pelos rins"
    },
    "Avisos": [
      "Uso prolongado pode levar à dependência",
      "Risco de overdose, que pode ser fatal",
      "Não deve ser usada em pacientes com depressão respiratória severa"
    ]
  };

const cigarro = {
    "nome": "Cigarro",
    "descricao": "O cigarro contém tabaco, uma planta cujas folhas são usadas para produzir produtos fumáveis. O tabaco contém nicotina, uma substância psicoativa que causa dependência.",
    "formula_quimica": "C10H14N2 (Nicotina)",
    "peso_molecular": 162.23,
    "propriedades_fisicas": {
        "aparencia": "Folhas secas, normalmente enroladas em papel",
        "solubilidade": "Nicotina é solúvel em água e álcool",
        "ponto_de_fusao": "Nicotine: -79 °C"
    },
    "mecanismo_de_acao": "A nicotina liga-se aos receptores nicotínicos de acetilcolina no cérebro, liberando neurotransmissores que causam efeitos estimulantes e relaxantes.",
    "usos_medicos": [],
    "efeitos_colaterais": [
        "Dependência",
        "Aumento da frequência cardíaca",
        "Danos aos pulmões e coração",
        "Risco aumentado de câncer",
        "Comprometimento da função imunológica"
    ],
    "formas_de_dosagem": [
        "Cigarros",
        "Charutos",
        "Cachimbos",
        "Rapé",
        "Tabaco de mascar"
    ],
    "status_legal": {
        "classificacao": "Legal, mas regulamentado em muitos países",
        "restricoes": "Proibido para menores de idade, regulamentações sobre publicidade e locais de uso"
    },
    "historico": {
        "descoberta": "Uso de tabaco data de 6000 a.C. pelos nativos americanos",
        "uso_medico": "Inicialmente usado em rituais e como planta medicinal, popularizado no mundo ocidental no século 16"
    },
    "farmacocinetica": {
        "absorcao": "Rápida absorção pulmonar quando fumado, absorção lenta pelo trato gastrointestinal quando mascado",
        "distribuicao": "Distribuído rapidamente pelo corpo, atravessa a barreira hematoencefálica",
        "metabolismo": "Metabolizado principalmente no fígado",
        "meia_vida_de_eliminacao": "2 horas",
        "excrecao": "Excretado principalmente pelos rins"
    },
    "avisos": [
        "Uso prolongado pode levar a várias doenças graves",
        "Risco de dependência e abstinência",
        "Pode causar complicações durante a gravidez"
    ]
};

const cafeina = {
    "nome": "Cafeína",
    "descricao": "A cafeína é um estimulante do sistema nervoso central encontrado em várias plantas, incluindo café, chá e cacau. É amplamente consumida para aumentar o estado de alerta e reduzir a fadiga.",
    "formula_quimica": "C8H10N4O2",
    "peso_molecular": 194.19,
    "propriedades_fisicas": {
        "aparencia": "Pó branco cristalino",
        "solubilidade": "Solúvel em água e etanol",
        "ponto_de_fusao": "235-238 °C"
    },
    "mecanismo_de_acao": "A cafeína bloqueia os receptores de adenosina no cérebro, prevenindo a sensação de sonolência e aumentando a liberação de neurotransmissores como dopamina e norepinefrina.",
    "usos_medicos": [
        "Tratamento de apneia do prematuro",
        "Aumento do estado de alerta",
        "Melhoria da performance física e mental"
    ],
    "efeitos_colaterais": [
        "Insônia",
        "Nervosismo",
        "Taquicardia",
        "Tremores",
        "Dependência"
    ],
    "formas_de_dosagem": [
        "Café",
        "Chá",
        "Bebidas energéticas",
        "Pílulas de cafeína",
        "Chocolates"
    ],
    "status_legal": {
        "classificacao": "Legal",
        "restricoes": "Regulamentado em alguns produtos, especialmente bebidas energéticas"
    },
    "historico": {
        "descoberta": "Isolada pela primeira vez por Friedrich Ferdinand Runge em 1819",
        "uso_medico": "Usada historicamente em bebidas como café e chá, e mais recentemente em medicamentos e suplementos"
    },
    "farmacocinetica": {
        "absorcao": "Rápida absorção pelo trato gastrointestinal",
        "distribuicao": "Distribuída amplamente pelo corpo, atravessa a barreira hematoencefálica",
        "metabolismo": "Metabolizada principalmente no fígado",
        "meia_vida_de_eliminacao": "3-5 horas",
        "excrecao": "Excretada principalmente pelos rins"
    },
    "avisos": [
        "Consumo excessivo pode causar ansiedade e problemas cardíacos",
        "Pode interferir no sono",
        "Uso prolongado pode levar à tolerância e dependência"
    ]
};

const drogas = [morfina, cigarro, cafeina];
export default morfina;
//export default drogas[parseInt(Math.random() * 3)];