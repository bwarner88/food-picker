$(document).ready(function () {

    const placesToEat = [];


    var onClick = function () {
       
        $('#submit').on('click', function (event) {
            event.preventDefault();
            var userInput = $('#inputField').val();
            $('.choicesField').append('<ul>' + '<li>' + userInput + '</li>' + '</ul>');
            $('#inputField').val('')
            placesToEat.push(userInput)

        });
    }

    var foodRandom = function () {
        $('.pick').on('click', function () {
            var yourDinner = placesToEat[Math.floor(Math.random() * placesToEat.length)]

            $('.resultsField').append(yourDinner)

        })
    }

    onClick();
    foodRandom();

});