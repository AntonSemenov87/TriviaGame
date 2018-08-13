$(document).ready(function () {


    //removing containers when Start button is clicked
    $('#start-button').on('click', function (event) {
        ('clicked', $('#start-button').hide());
        ('clicked', $('#intro').hide());
        ('clicked', $('#header').hide());
        ('clicked', $('#header2').text("Answer all questions until the time runs out"));

        // questions:
        var options = [
            {
                question: "Apple was founded in:",
                choice: ["1976", "1986", "1996", "2006"],
                answer: 0,
            },
            {
                question: "What year first iPhone was released?",
                choice: ["1997", "2007", "2006", "2009"],
                answer: 1,
            },
            {
                question: "Who was one of the founders of Apple?",
                choice: ["J.Travolta", "R.Martin", "S.Jobs", "T.Hanks"],
                answer: 2,
            },
            {
                question: "What was the name of small iPod?",
                choice: ["iPod Pro", "iPod mini", "iPod shuffle", "iPod Grande"],
                answer: 2,
                photo: "assets/images/harvey.jpg"
            },
            {
                question: "What is the name of watch made by Apple?",
                choice: ["iWatch", "uWatch", "AWatch", "AppleWatch"],
                answer: 3,
            },
            {
                question: "When was the first iPad released?",
                choice: ["2009", "2010", "2011", "2012"],
                answer: 1,

            }];


    });


})