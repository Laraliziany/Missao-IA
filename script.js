const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "O que mais preocupa você quando pensa na caça e pesca ilegal?",
        alternativas: [
            {
                texto: "A diminuição dos animais e o risco de extinção.",
                afirmacao: "Protetor da Fauna — Você se preocupa principalmente com a vida e a sobrevivência dos animais."
            },
            {
                texto:  "A destruição dos ambientes naturais e dos ecossistemas.",
                afirmacao: " Guardião dos Ecossistemas — Você valoriza o equilíbrio da natureza e a preservação dos habitats."
            }    
           
        ]
    },
    {
       
            enunciado: "Como você ajudaria no combate à caça e pesca ilegal?
",
            alternativas: [
                {
                    texto: "Denunciaria atividades ilegais às autoridades responsáveis...",
                    afirmacao: "Você acredita que atitudes responsáveis ajudam a combater práticas que prejudicam a natureza..."
                },
                {
                    texto:  "Conversaria com outras pessoas para conscientizá-las sobre o problema.. ",
                    afirmacao: "amigo da Sustentabilidade — Você procura maneiras de aproveitar os recursos naturais sem prejudicar o meio ambiente."
                }    
               
            ]
        },
        {
            enunciado: "Qual atitude você considera mais importante para proteger os animais??",

            alternativas: [
                {
                    texto: "Respeitar as leis que protegem a fauna e os períodos de reprodução..",
                    afirmacao: "Defensor das Leis Ambientais — Você acredita que seguir as regras é fundamental para preservar os animais.."
                },
                {
                    texto:    "incentivar práticas de pesca e atividades na natureza de forma sustentável..",
               
                    afirmacao: "É fundamental incentivar práticas de pesca e atividades na natureza de forma sustentável, garantindo a preservação dos ecossistemas, a proteção das espécies e o uso responsável dos recursos naturais para as futuras gerações.."
                }    
               
            ]
        },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();