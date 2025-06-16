const answerButton = document.querySelector(".btn") ;

answerButton.addEventListener("click", () => {
    const quizItems = document.querySelectorAll(".quiz-item") ;
    quizItems.forEach((quiz,index) =>{
        const quizChoice = quiz.querySelectorAll('input[type="radio"]');
        quizChoice.forEach(answer => answer.checked = "false") ;
        const randomChoice = Math.floor(Math.random()*quizChoice.length);
        quizChoice[randomChoice].checked = "true" ;
    });
}) ;