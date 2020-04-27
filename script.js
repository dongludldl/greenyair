// QUESTIONS

const questions = [
  // Electricity Category
  {
    "question": "You will get an environmental challenge in the end. To start with, pick one of these categories",
    "answer1": "Electrical appliances",
    "answer1Total": "1",
    "answer2": "Vehicle",
    "answer2Total": "28",
    "answer3": "Iteration 2 - Coming soon",
    "answer3Total": "58"
  },
  {
    "question": "Which household electric appliances do you use most frequently (in comparison with the others)?",
    "answer1": "Washing Machine",
    "answer1Total": "1",
    "answer2": "Dish Washer",
    "answer2Total": "10",
    "answer3": "Cooling & Heating",
    "answer3Total": "19"
  },
  {
    "question":
      "What is the power consumption (kWh/year) of your appliance?",
    "answer1": "<200",
    "answer1Total": "1",
    "answer2": "200~1000",
    "answer2Total": "4",
    "answer3": ">1000",
    "answer3Total": "7"
  },
  {
    "question": "What is your usual using time?",
    "answer1": "1am~8am",
    "answer1Total": "1",
    "answer2": "8am~8pm",
    "answer2Total": "2",
    "answer3": "8pm~1am",
    "answer3Total": "3"
  },
  // prevent page crushing
  {
    "question": "",
    "answer1": "",
    "answer1Total": "0",
    "answer2": "",
    "answer2Total": "0",
    "answer3": "",
    "answer3Total": "0"
  },
  // Vehicle category
  {
    "question": "What is your car type?",
    "answer1": "Small",
    "answer1Total": "1",
    "answer2": "Medium",
    "answer2Total": "10",
    "answer3": "Heavy",
    "answer3Total": "19"
  },
  {
    "question":
      "Where is your most frequent traveling location?",
    "answer1":
      "HOPPERS CROSSING ~ CBD, RAVENHALL ~ CBD, AIRPORT ~ CBD",
    "answer1Total": "1",
    "answer2": "EPPING ~ CBD, BUNDOORA ~ NUNAWADING, DANDENONG ~ CBD",
    "answer2Total": "4",
    "answer3": "Other",
    "answer3Total": "7"
  },
  {
    "question": "When is your most frequent traveling time?",
    "answer1": "6:30am - 9:00am",
    "answer1Total": "1",
    "answer2": "3:30pm - 6:30pm",
    "answer2Total": "2",
    "answer3": "Other",
    "answer3Total": "3"
  }
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    //Populate html elements
    questionEl.innerHTML = ` ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please choose one answer');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()


    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    // if choose Vehicle, jump to Vehicle question
    if (score == 28){
        generateQuestions(currentQuestion=5);
    }

    if (currentQuestion ==4 && totalScore == 4){
        window.location.replace("result/result1-4.php");
    }

    if (currentQuestion ==4 && totalScore == 5){
        window.location.replace("result/result1-5.php");
    }

    if (currentQuestion ==4 && totalScore == 6){
        window.location.replace("result/result1-6.php");
    }

    if (currentQuestion ==4 && totalScore == 7){
        window.location.replace("result/result1-7.php");
    }

    if (currentQuestion ==4 && totalScore == 8){
        window.location.replace("result/result1-8.php");
    }

    if (currentQuestion ==4 && totalScore == 9){
        window.location.replace("result/result1-9.php");
    }

    if (currentQuestion ==4 && totalScore == 10){
        window.location.replace("result/result1-10.php");
    }

    if (currentQuestion ==4 && totalScore == 11){
        window.location.replace("result/result1-11.php");
    }

    if (currentQuestion ==4 && totalScore == 12){
        window.location.replace("result/result1-12.php");
    }

    if (currentQuestion ==4 && totalScore == 13){
        window.location.replace("result/result1-13.php");
    }

    if (currentQuestion ==4 && totalScore == 14){
        window.location.replace("result/result1-14.php");
    }

    if (currentQuestion ==4 && totalScore == 15){
        window.location.replace("result/result1-15.php");
    }

    if (currentQuestion ==4 && totalScore == 16){
        window.location.replace("result/result1-16.php");
    }

    if (currentQuestion ==4 && totalScore == 17){
        window.location.replace("result/result1-17.php");
    }

    if (currentQuestion ==4 && totalScore == 18){
        window.location.replace("result/result1-18.php");
    }

    if (currentQuestion ==4 && totalScore == 19){
        window.location.replace("result/result1-19.php");
    }

    if (currentQuestion ==4 && totalScore == 20){
        window.location.replace("result/result1-20.php");
    }

    if (currentQuestion ==4 && totalScore == 21){
        window.location.replace("result/result1-21.php");
    }

    if (currentQuestion ==4 && totalScore == 22){
        window.location.replace("result/result1-22.php");
    }

    if (currentQuestion ==4 && totalScore == 23){
        window.location.replace("result/result1-23.php");
    }

    if (currentQuestion ==4 && totalScore == 24){
        window.location.replace("result/result1-24.php");
    }

    if (currentQuestion ==4 && totalScore == 25){
        window.location.replace("result/result1-25.php");
    }

    if (currentQuestion ==4 && totalScore == 26){
        window.location.replace("result/result1-26.php");
    }

    if (currentQuestion ==4 && totalScore == 27){
        window.location.replace("result/result1-27.php");
    }

    if (currentQuestion ==4 && totalScore == 28){
        window.location.replace("result/result1-28.php");
    }

    if (currentQuestion ==4 && totalScore == 29){
        window.location.replace("result/result1-29.php");
    }

    if (currentQuestion ==4 && totalScore == 30){
        window.location.replace("result/result1-30.php");
    }

    //If the question is finished then we hide the questions container and show the results
    if(currentQuestion == totalQuestions && totalScore == 31) {
        window.location.replace("result/result2-31.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 32) {
        window.location.replace("result/result2-32.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 33) {
        window.location.replace("result/result2-33.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 34) {
        window.location.replace("result/result2-34.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 35) {
        window.location.replace("result/result2-35.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 36) {
        window.location.replace("result/result2-36.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 37) {
        window.location.replace("result/result2-37.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 38) {
        window.location.replace("result/result2-38.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 39) {
        window.location.replace("result/result2-39.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 40) {
        window.location.replace("result/result2-40.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 41) {
        window.location.replace("result/result2-41.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 42) {
        window.location.replace("result/result2-42.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 43) {
        window.location.replace("result/result2-43.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 44) {
        window.location.replace("result/result2-44.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 45) {
        window.location.replace("result/result2-45.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 46) {
        window.location.replace("result/result2-46.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 47) {
        window.location.replace("result/result2-47.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 48) {
        window.location.replace("result/result2-48.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 49) {
        window.location.replace("result/result2-49.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 50) {
        window.location.replace("result/result2-50.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 51) {
        window.location.replace("result/result2-51.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 52) {
        window.location.replace("result/result2-52.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 53) {
        window.location.replace("result/result2-53.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 54) {
        window.location.replace("result/result2-54.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 55) {
        window.location.replace("result/result2-55.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 56) {
        window.location.replace("result/result2-56.php");
    }

    if(currentQuestion == totalQuestions && totalScore == 57) {
        window.location.replace("result/result2-57.php");
    }

    if(totalScore == 58) {
        window.location.replace("result/result3-58.php");
    }

    generateQuestions(currentQuestion);
}


//Function to load previous question
function loadPreviousQuestion() {
  if (currentQuestion == 5){
    score.pop();
    generateQuestions(currentQuestion=0);
  } else {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);}
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
