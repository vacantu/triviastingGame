$( document ).ready(function() {
    var questions = [
        {
            question: "1. What do Armadillos, Llamas, Kunekune Pigs and Bobcats do in vineyards around the world?",
            answers: {
                a: 'They are pests that eat all the grapes',
                b: 'They keep pests and keep the vineyard tidy',
                c: 'They are used as an early warning system for winter frosts',
                d: 'They are names given for the automated icking machines that mechanically harvest grapes'
            },
            correctAnswer: 'b'
        },
        {
            question: "2. What type of vineyard agriculture incorporates cosmology, philosophy and homeopathy?",
            answers: {
                a: 'Hippy',
                b: 'Biodynamic',
                c: 'Organic',
                d: 'Telepathic'
            },
            correctAnswer: 'b'
        },
        {
            question: "3. What is the normal species of vine used for wine production?",
            answers: {
                a: 'Verita Serum',
                b: 'Vitis Nustangensis',
                c: 'Verita Lambrusca',
                d: 'Vitis Vinifera'
            },
            correctAnswer: 'd'
        },
        {
            question: "4. Cold temperatures can kill vines. In Ningxia what do they do in the vineyards to protect the vines in winter?",
            answers: {
                a: 'They\'ve installed under-soil heating',
                b: 'They light fires',
                c: 'They bury them',
                d: 'They spray them from helicopters'
            },
            correctAnswer: 'd'
        },
        {
            question: "5. What are the normal latitudes that vines grow between?",
            answers: {
                a: '30°-50°',
                b: '20*-60°',
                c: '30°-40°',
                d: '40°-60°'
            },
            correctAnswer: 'a'
        }
    ];

    function showQuestions(questions, quiz){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers =[];
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + '&nbsp;&nbsp;'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                    + '<br/>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
    //  combine the output list into one string of html and put it on the page
        quiz.innerHTML = output.join('');
    }

    function generateQuiz(questions, quiz, results, submit){
    
        // show the questions
        showQuestions(questions, quiz);
    
        // when user clicks submit, show results & stop the clock
        submitButton.onclick = function(){
            showResults(questions, quiz, results);
            clearInterval(timer);
        }
    }
    
    function showResults(questions, quiz, results){
	
        // gather answer containers from our quiz
        var answerContainers = quiz.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the right answers green
                answerContainers[i].style.color = 'darkgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    generateQuiz(questions, quiz, results, submit);

    var secondsLeft = 60;
    var timer = setInterval(function()
    {secondsLeft--; console.log(secondsLeft);
    $("#timer").text(secondsLeft);
    if (secondsLeft === 0) {
        clearInterval(timer);
        alert("You ran out of time");
    }
    }, 1000);
})