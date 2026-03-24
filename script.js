//! get dropdown value


const inpEl=document.getElementById('question');
const subject=document.getElementById('subject');


function getValue(){   
    localStorage.setItem('subject',subject.value);
}

function start(){   
    localStorage.setItem('Number of question',inpEl.value)
    window.location = 'main.html';
    
}


const questions = [
  // Science (id: 1)
  { id: 1, subject: "science", question: "How many legs does an insect have?", answer: "6" },
  { id: 1, subject: "science", question: "How many planets are in the solar system?", answer: "8" },
  { id: 1, subject: "science", question: "How many states of matter are commonly known?", answer: "3" },
  { id: 1, subject: "science", question: "What is the chemical symbol of Hydrogen?", answer: "H" },
  { id: 1, subject: "science", question: "What is the chemical symbol of Oxygen?", answer: "O" },
  { id: 1, subject: "science", question: "How many bones are in the human skull (simplified)?", answer: "8" },
  { id: 1, subject: "science", question: "What gas do humans need to brmathe (symbol)?", answer: "O" },
  { id: 1, subject: "science", question: "What vitamin is from sunlight (short form)?", answer: "D" },
  { id: 1, subject: "science", question: "How many hearts does an octopus have?", answer: "3" },
  { id: 1, subject: "science", question: "What is the first letter of 'Cell'?", answer: "C" },

  // maths (id: 2)
  { id: 2, subject: "math", question: "What is 2 + 2?", answer: "4" },
  { id: 2, subject: "math", question: "What is 5 - 3?", answer: "2" },
  { id: 2, subject: "math", question: "What is 3 × 3?", answer: "9" },
  { id: 2, subject: "math", question: "What is 8 ÷ 4?", answer: "2" },
  { id: 2, subject: "math", question: "What is 7 - 6?", answer: "1" },
  { id: 2, subject: "math", question: "What is 1 + 0?", answer: "1" },
  { id: 2, subject: "math", question: "What is 6 ÷ 3?", answer: "2" },
  { id: 2, subject: "math", question: "What is 4 + 5?", answer: "9" },
  { id: 2, subject: "math", question: "What is 9 - 8?", answer: "1" },
  { id: 2, subject: "math", question: "What is 3 + 4?", answer: "7" },

  // GK (id: 3)
  { id: 3, subject: "gk", question: "How many days are there in a week?", answer: "7" },
  { id: 3, subject: "gk", question: "How many colors are in a rainbow?", answer: "7" },
  { id: 3, subject: "gk", question: "How many continents are there?", answer: "7" },
  { id: 3, subject: "gk", question: "How many wheels does a bicycle have?", answer: "2" },
  { id: 3, subject: "gk", question: "How many legs does a spider have?", answer: "8" },
  { id: 3, subject: "gk", question: "How many sides does a triangle have?", answer: "3" },
  { id: 3, subject: "gk", question: "How many fingers are on one hand?", answer: "5" },
  { id: 3, subject: "gk", question: "How many eyes does a human have?", answer: "2" },
  { id: 3, subject: "gk", question: "How many ears does a human have?", answer: "2" },
  { id: 3, subject: "gk", question: "How many noses does a human have?", answer: "1" }
];

question = questions.filter(num => num.subject === localStorage.getItem('subject'))

const button = document.getElementById('button2');



let arr=[]
let index=0;
let finished=false
function change(){
    const inputAns=document.getElementById('answer')

    const h5 = document.getElementById('q1');
    button.innerHTML= "Next";
    if(index < question.length){
        h5.innerHTML=question[index].question;
        index++;


        
    }
    if (finished){
        window.location='result.html'
        return
    }
    if(index === question.length){
        button.innerHTML='Completed'
        finished=true;
        button.style.backgroundColor='green';
        button.style.color='white'
    }
 
}   


