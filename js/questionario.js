let currentQuestion = 1;
const totalQuestions = 7;
let avvisoMostrato = false;

function showQuestion(questionNumber) {
  hideAllQuestions();
  document.getElementById(`question${questionNumber}`).style.display = 'block';
}

function hideAllQuestions() {
  const questions = document.getElementsByClassName('question');
  for (let i = 0; i < questions.length; i++) {
    questions[i].style.display = 'none';
  }
}

function toggleAvviso(display) {
  const avviso = document.querySelector('.avviso');
  if (avviso) {
    avviso.style.display = display;
  }
}

function checkAndProceed() {
  const question = document.getElementById(`question${currentQuestion}`);
  if (question) {
    const checkboxes = question.querySelectorAll('input[type="checkbox"]:checked');
    const select = question.querySelector('select');
    
    const hasCheckedBoxes = checkboxes.length > 0;
    const isSelectValid = select && select.value !== '' && select.value !== 'd2o1';

    if (hasCheckedBoxes || isSelectValid) {
      if (currentQuestion < totalQuestions) {
        currentQuestion++;
        showQuestion(currentQuestion);
        toggleAvviso('none');
      } else {
        finishQuiz();
      }
    } else {
      toggleAvviso('block'); //Mostra l'avviso se non è stata data alcuna risposta
    }
  }
}


function nextQuestion() {
  checkAndProceed();
}

document.querySelectorAll('.next-button').forEach(button => {
  button.addEventListener('click', checkAndProceed);
});

document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      toggleAvviso('none');
      avvisoMostrato = false;
    });
  });
});

function previousQuestion() {
  if (currentQuestion > 1) {
    currentQuestion--;
    showQuestion(currentQuestion);
    avvisoMostrato = true;
    toggleAvviso('block');
  }
}

function finishQuiz() {
  window.location.href = 'paginaUtente.html';
}

showQuestion(currentQuestion);
