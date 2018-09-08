console.log("hello");

// Player object
const player = {
  name: "playerone",
  score: 0
};

// Updating score on html
function updateTotalScore() {
  $("#score").text(player.score);
}

// Updating ranking on html
function rankUpdater(string) {
  $("#ranking").text(string);
}

function rank() {
  let rank;
  let tscore = player.score;
  if (tscore <= 0) {
    rank = "Beginner";
  } else if (tscore > 0 && tscore <= 120) {
    rank = "Novice";
  } else if (tscore > 120 && tscore <= 360) {
    rank = "Intermediate";
  } else if (tscore > 360 && tscore < 500) {
    rank = "Expert";
  } else {
    rank = "Master";
  }
  rankUpdater(rank);
}

//create click event on the gameboard
// get the specific target of the click
// disable button

$(".btn").on("click", function() {
  $(event.currentTarget).addClass("disabled", true);
});

$(() => {
  console.log("im in here");

  // Need function that will update score based on whether user answered correctly
  // or not and add or subtract to total score.
  // Need to add a class for the correct answer in html to target
  // Probably an if statement !== / ===
  // Use data-tag

  // $('.btn').one('click',function (){
  //     var dataTarget = $(this).attr('data-target')
  //     console.log(dataTarget)
  //     setTimeout(function() {
  //         console.log("INSIDE SETTIMEOUT")
  //         $().attr('disabled', 'disabled')}, 2000)
  // })

  // $('.btn').on('click', function() {
  //     // alert('hey this happens first')
  //     $(this).attr('disabled', 'true')
  // })

  $(".correct").click(function(event) {
    swal("Correct");
    let points = $(event.currentTarget).data("score");
    player.score += points;
    updateTotalScore();
    rank();
  });

  $(".incorrect").click(function(event) {
    swal("Sorry, incorrect");
    let points = $(event.currentTarget).data("score");
    player.score -= points;
    updateTotalScore();
    rank();
  });

  // Need function that will remove box from the board when a question is answered or change the color.
  // Probably jQuery click event that changes the color

});
