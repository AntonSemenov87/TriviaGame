$(document).ready(function () {

    //removing containers when Start button is clicked
    $('#start-button').on('click', function (event) {
        ('clicked', $('#start-button').hide());
        ('clicked', $('#intro').hide());
        ('clicked', $('#header').hide());
        ('clicked', $('#header2').text("Answer all questions until the time runs out"));


    });
    var counter = 0;
    function setup() {
        noCanvas();
        var timer = select("#timer");
        timer.html(counter);

        function timeIt() {
            counter++;
            timer.html(counter);

        }

        setInterval(timeIt, 1000);
    }

})