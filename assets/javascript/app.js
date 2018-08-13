$(document).ready(function () {

    //removing containers when Start button is clicked
    $('#start-button').on('click', function (event) {
        ('clicked', $('#start-button').hide());
        ('clicked', $('#intro').hide());
        ('clicked', $('#header').hide());
        ('clicked', $('#header2').text("Answer all questions until the time runs out"));

    });

    //adding content when start button was clicked:
    $('#start-button').on('click', function (event) {


    });

})