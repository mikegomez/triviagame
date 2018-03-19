var correct = 0;
var incorrect = 0;
var unanswered = 0;
var choice;
var countStartNumber = 0;
var timeLeft = 30;


//random question
var questions = [{
  q: "Who is Dee married to in real life?",
  answer: ['mac', 'charlie', 'dennis', 'the waitress'],
  correct: "mac",
  images: "assets/images/friends.jpg"
}, {
  q: "What's the best band in the world, according to the game, Chardee McDennis?",
  answer: ['Radiohead', 'Drake', 'Two live crew', 'Chuwbawuba'],
  correct: "Chuwbawuba",
  images: "assets/images/friends.jpg"
}, {
  q: "What's the name of the former priest who's in love with Dee?",
  answer: ['McPoyle', 'Bill Ponderosa', 'Rickety Cricket', 'Dennis'],
  correct: "Rickety Cricket",
  images: "assets/images/friends.jpg"
}];

function timer(){
  $(".timer").html("<b>" + timeLeft + " Seconds left</b>");
  function less(){
    if (timeLeft == 0) {
      $(".timer").html("<b>0 Seconds left</b>");
      alert("Time is up");
      unanswered++;
      $(".scoreArea").html("<div><span class=scores well well-sm>Correct: <span class='badge'>"+ correct +"</span> | Incorrect: <span class='badge'>"+ correct +"</span> | Unanswered: <span class='badge'>" + unanswered + "</span> </span></div>");
      clearTimeout(tid);    
    } else {
      timeLeft--;
      $(".timer").html("<b>" + timeLeft + " Seconds left</b>");
      console.log(timeLeft);
    }
  }
 let tid = setInterval(less, 1000);
}

//timer
function nextQuestion(){
  timeLeft = 7;
    timer();

  for (var i = 0; i < questions.length; i++) {

     $(".question").html('<h2>' + questions[i].q + '</h2>' );

     $(".answer").html('<form>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[0]+'">  ' + questions[i].answer[0] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[1]+'">  ' + questions[i].answer[1] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[2]+'">  ' + questions[i].answer[2] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[3]+'">  ' + questions[i].answer[3] + '</p>');


      function chosen(){
        alert('Clicked '+ questions[i].answer[i]);
        choice = document.getElementById("myRadio").value;
        console.log(choice);
      }
   }  
}

function startGame(){
  alert("You will have 7 seconds for each question. \n You can now begin the game");
  nextQuestion();
}

function reset(){
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  choice = null;
  countStartNumber = 0;
  $(".timer").html("<div></div>");
  $(".scoreArea").html("<div></div>");
  $(".question").html("<div></div>");
  $(".answer").html("<div></div>");
}


$('.start').click(startGame);
$('.resetbtn').click(reset);