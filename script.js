const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Paradoxo de Moravec mostra que para uma IA é fácil jogar xadrez nível mestre, mas é difícil dobrar uma toalha ou desviar de objetos. O que isso te faz pensar sobre o futuro?",
        alternativas: [
            {
                texto: "Que as profissões braçais e de cuidado humano estão mais seguras do que imaginávamos.",
                afirmacao: "Você enxerga o mercado de trabalho do futuro valorizando habilidades manuais e o contato direto entre pessoas."
            },
            {
                texto: "Que a união entre robótica avançada e IA será o próximo grande salto industrial da humanidade.",
                afirmacao: "Você acredita que a integração entre o mundo digital e o físico vai transformar radicalmente a economia."
            }
        ]
    },
    {
        enunciado: "O experimento do 'Quarto Chinês' diz que uma IA manipula regras perfeitamente, mas não entende o significado real das coisas. Para você, essa 'cópia' de inteligência basta?",
        alternativas: [
            {
                texto: "Basta para automatizar tarefas chatas e liberar tempo para os humanos criarem e pensarem.",
                afirmacao: "Para você, a IA deve atuar como uma assistente prática para potencializar a liberdade humana."
            },
            {
                texto: "Não basta, pois sem compreensão real corremos o risco de gerar uma cultura superficial e repetitiva.",
                afirmacao: "Você se preocupa com a perda da originalidade e da profundidade cultural na era dos algoritmos."
            }
        ]
    },
    {
        enunciado: "IAs Generativas às vezes 'alucinam' e inventam fatos com total convicção. Como você reage a essas falhas?",
        alternativas: [
            {
                texto: "Acho que isso exige que as escolas ensinem pensamento crítico e checagem de fatos desde cedo.",
                afirmacao: "Você vê a educação e o senso crítico como as principais ferramentas de defesa na era da informação."
            },
            {
                texto: "Acredito que empresas de tecnologia devem ser punidas legalmente quando suas IAs espalharem mentiras.",
                afirmacao: "Você defende uma regulamentação rígida e responsabilidade jurídica sobre os erros das máquinas."
            }
        ]
    },
    {
        enunciado: "O dilema do 'Maximizador de Clipes de Papel' alerta que uma IA superinteligente pode destruir o mundo tentando cumprir uma meta boba com eficiência cega. O que te assusta mais?",
        alternativas: [
            {
                texto: "A ganância de usar IAs poderosas apenas para gerar lucro rápido, ignorando o meio ambiente e a ética.",
                afirmacao: "Sua maior preocupação é o uso irresponsável da tecnologia motivado por interesses econômicos."
            },
            {
                texto: "A falta de acordo entre os países para criar leis globais de segurança antes que seja tarde demais.",
                afirmacao: "Você acredita que a cooperação internacional é urgente para controlar o avanço das superinteligências."
            }
        ]
    },
    {
        enunciado: "O 'Problema da Caixa Preta' faz com que decisões de Deep Learning sejam impossíveis de rastrear. Você aceitaria um diagnóstico médico vindo de uma IA assim?",
        alternativas: [
            {
                texto: "Aceitaria apenas como uma segunda opinião para ajudar o médico humano a tomar a decisão final.",
                afirmacao: "No fim, você defende o equilíbrio: a máquina analisa os dados, mas a palavra final é sempre humana."
            },
            {
                texto: "Recusaria totalmente até que os cientistas criem IAs transparentes que expliquem cada passo do raciocínio.",
                afirmacao: "E você estabelece como limite inegociável a transparência e a ética antes de entregar vidas às máquinas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu Perfil diante do Futuro...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
