const player = {
    name: 'playerone',
    score: 0
}

function updateTotalScore() {
    $("#score").text(player.score)
}



//create click event on the gameboard
// get the specific target of the click
// disable button

$('.btn').on('click', function(){
    console.log("clicked")
    $(event.currentTarget).addClass('disabled', true)
})


$(() => {
console.log("im in here")

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


$('.correct').click(function(event){
    alert("ding dong")
    let points = $(event.currentTarget).data('score')
    player.score -= points


})


$('.incorrect').click(function(event){
    alert("Sorry, incorrect")
    let points = $(event.currentTarget).data('score')
    player.score -= points
    player.score -= points
    player.score -= points
    player.score -= points
    player.score -= points
    player.score -= points
    updateTotalScore(points)
})


// Need function that will remove box from the board when a question is answered or change the color. 
// Probably jQuery click event that changes the color

// 

// $('')

})