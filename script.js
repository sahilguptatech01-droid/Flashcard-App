//! get dropdown value

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


const noQuestion=document.getElementById('question');  //Getting the input  no of question. 
const subject=document.getElementById('subject'); //Getting the input subject.



function start(){   
    localStorage.setItem('subject',subject.value);
    if(noQuestion.value<0||noQuestion.value>10){
       alert("Please enter a number between 0 and 10")
       noQuestion.value="";
       return
    }
    localStorage.setItem('Number of question',noQuestion.value)
    window.location = 'main.html';   
}


question = questions.filter(num => num.subject === localStorage.getItem('subject'));



const button = document.getElementById('button2');
const h5 = document.getElementById('q1');  
const nextBtn=document.getElementById('nextBtn');
const answer=document.getElementById('answer');




let score=0;
let index=0;
function startquiz(){
    let start=document.getElementById('startBtn');
    h5.innerHTML=question[index].question;
    start.style.display='none'
    nextBtn.style.display="inline-block";


}

function submit(){
    let userAnswer=document.getElementById('answer');
    let correctAnswer=question[index].answer;
    console.log(userAnswer);
    
    if(userAnswer.value === correctAnswer){
        score++;
        userAnswer.value='';

    }
}
function next(){
    submit()
    index++;
    if(index<localStorage.getItem('Number of question')){
        h5.innerHTML=question[index].question;
        answer.value=""
    }else{
        localStorage.setItem('quizScore',score);
        window.location='result.html'
    }
}

window.onload=function(){
    let score=localStorage.getItem('quizScore');
    let total=localStorage.getItem('Number of question');
    let quizScore= document.getElementById('score');
    quizScore.innerHTML="Score:"+score+"/"+total
    localStorage.removeItem('quizScore')

}


























