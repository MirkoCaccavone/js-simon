// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi. 
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// selezione elementi di output
const outputCountDown = document.getElementById('countdown');
const randomNumber = document.getElementById('numbers-list');
const outputMessage = document.getElementById('message');

// selezione elementi di input
const form = document.getElementById('answers-form');
const numField = document.querySelectorAll('input');

// FUNZIONI

// generazione numeri casuali
let numbers = [];

for(let i = 0; i < 5; i++){
    
    let number = Math.floor(Math.random() * 50) + 1;
    let newItems = document.createElement('li');

    numbers.push(number);
    newItems.innerText = parseInt(numbers[i]);
    randomNumber.appendChild(newItems);

};
console.log(numbers);

// countdown
let second = 5;

countDown = setInterval(() => {

    if(second === 0){
        clearInterval(countDown);
        // quando il countdown è a 0 nascondo i numeri
        randomNumber.innerHTML = '';
        // mostro il form
        form.classList.remove('d-none');

    }else{
        outputCountDown.innerHTML = --second;

    }  
},1000);

// controllo le risposte 
form.addEventListener('submit', (event) => {
    // blocca il refresh
    event.preventDefault();

    let userAnswers = [];

    for(let i = 0; i < numField.length; i++){

        // cicla e aggiunge il num iesimo all'array userAnswers
        userAnswers.push(parseInt(numField[i].value));
    };

    console.log(userAnswers);

    let correctAnswers = [];

    for(let i = 0; i < numbers.length; i++){

        // se un nun iesimo dell'utente e presente nei numeri casuali creati
        if(numbers.includes(userAnswers[i])){

        // cicla e aggiunge il num iesimo all'array correctAnswers
            correctAnswers.push(userAnswers[i]);
        };
    };

    console.log(correctAnswers);

    outputMessage.innerHTML = `Hai indovinato ${correctAnswers.length} numeri su 5. (${correctAnswers.join('-')})`;

});





