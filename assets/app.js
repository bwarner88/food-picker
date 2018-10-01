$(document).ready(() => {

    const placesToEat = [];


    const onClick = () => {
       
        $('#submit').on('click', (event) => {
            event.preventDefault();
            const userInput = $('#inputField').val();
            $('.choicesField').append('<ul>' + '<li>' + userInput + '</li>' + '</ul>');
            $('#inputField').val('')
            placesToEat.push(userInput)

        });

        $('.btn btn-secondary').on('click', event => {
            event.preventDefault();
            reset();
        })
    }

    const foodRandom = () => {
        $('.pick').on('click', () => {
            const yourDinner = placesToEat[Math.floor(Math.random() * placesToEat.length)]

            $('.resultsField').append(yourDinner)

        })
    }

    const reset = () => {
        const placesToEat = [];
        const yourDinner = "";
    };



    onClick();
    foodRandom();

});