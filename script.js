const quizData = [
    {
        question: "1) Quantas asas tem a libélula?",
        a: "a- duas asas",
        b: "b- Quatro asas",
        c: "c- Seis asas",
        d: "d-  Nenhuma",
        correct: "b",
    },
    {
        question: "2) Que ano o papá atual nasceu?",
        a: "a- 1930",
        b: "b- 1930",
        c: "c- 1928",
        d: "d- 1959",
        correct: "c",
    },
    {
        question: "3) Quantos litros de sangue tem o corpo humano?",
        a: "a- Entre 4 a 6 litros",
        b: "b- Entre 5 a 7 litros",
        c: "c- Entre 1 a 3 litros ",
        d: "d- Entre 6 a 8 litros",
        correct: "a",
    },
    {
        question: "4) Qual o livro mais vendido a seguir da bíblia?",
        a: "a- Senhor dos anéis",
        b: "b- Um conto de duas cidades",
        c: "c- O pequeno príncipe",
        d: "d- Dom Quinxote",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('b_text')
const b_text = document.getElementById('c_text')
const c_text = document.getElementById('a_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})