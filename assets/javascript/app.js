$( document ).ready(function() {
var secondsLeft = 60;
var timer = setInterval(function()
    {secondsLeft--; console.log(secondsLeft);
    $("#timer").text(secondsLeft);
    if (secondsLeft === 0) {
        clearInterval(timer);
        alert("You ran out of time");

    }
    }, 1000);

$(".btn").on("click", function(){
    alert("Congratulations, you're done!");
    var radioValue = $("input[type='radio']:checked"). val();
    if(radioValue === "correct") {
        console.log(radioValue);
    }
    console.log(radioValue);
    clearInterval(timer);

})


})