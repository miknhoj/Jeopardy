const player = {
    name: 'playerone',
    score: 0
}

const scoreDisplay = {
    updateTotalScore: function (score) {
        $('#score').html(ScoreController)
    }
}




$(() => {
console.log("im in here")

// Need function that will update score based on whether user answered correctly 
// or not and add or subtract to total score. 
// Need to add a class for the correct answer in html to target
// Probably an if statement !== / ===
// Use data-tag

$('.correct').click(function(event){
    alert("Correct")
    let points = $(event.currentTarget).data('score')
    player.score += points
})

$('.incorrect').click(function(event){
    alert("Sorry, incorrect")
    let points = $(event.currentTarget).data('score')
    player.score -= points
})


// Need function that will remove box from the board when a question is answered or change the color. 
// Probably jQuery click event that changes the color

// 

// $('')

})