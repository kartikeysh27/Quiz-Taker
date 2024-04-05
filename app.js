const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Which of the following is a correct way to comment in Python?",
    a: "// This is a comment",
    b: "/* This is a comment */",
    c: "# This is a comment",
    d: "<!-- This is a comment -->",
    correct: "c",
},
{
    question: "What does the 'len()' function do in Python?",
    a: "Returns the length of a string",
    b: "Returns the number of items in a list",
    c: "Returns the number of characters in a file",
    d: "Returns the number of elements in a dictionary",
}
{
    question:
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
allInputs[4].nextElementSibling.innerText = data.e
allInputs[5].nextElementSibling.innerText = data.f
allInputs[6].nextElementSibling.innerText = data.g
allInputs[7].nextElementSibling.innerText = data.h
allInputs[8].nextElementSibling.innerText = data.i
allInputs[9].nextElementSibling.innerText = data.j
allInputs[10].nextElementSibling.innerText = data.k
allInputs[11].nextElementSibling.innerText = data.l
allInputs[12].nextElementSibling.innerText = data.m
allInputs[13].nextElementSibling.innerText = data.n
allInputs[14].nextElementSibling.innerText = data.o
allInputs[15].nextElementSibling.innerText = data.p
allInputs[16].nextElementSibling.innerText = data.q
allInputs[17].nextElementSibling.innerText = data.r
allInputs[18].nextElementSibling.innerText = data.s
allInputs[19].nextElementSibling.innerText = data.t
allInputs[20].nextElementSibling.innerText = data.u
allInputs[21].nextElementSibling.innerText = data.v
allInputs[22].nextElementSibling.innerText = data.w
allInputs[23].nextElementSibling.innerText = data.x
allInputs[24].nextElementSibling.innerText = data.y
allInputs[25].nextElementSibling.innerText = data.z
allInputs[26].nextElementSibling.innerText = data.z1
allInputs[27].nextElementSibling.innerText = data.z2
allInputs[28].nextElementSibling.innerText = data.z3
allInputs[29].nextElementSibling.innerText = data.z4
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
    <div style = "text-align:center">
        <h3 class="w-100"> Thank you, for playing the quiz.</h3>
        <h2>${correct} / ${total} are correct</h2>
    </div>
`
}
loadQuestion(index);