// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi. 
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// selezione elementi di output
const outputCountDown = document.getElementById('countdown');
const randomNumber = document.getElementById('numbers-list');


// selezione elementi di input


// FUNZIONI

// countdown
let second = 30;

countDown = setInterval(() => {

    if(second === 0){
        clearInterval(countDown);

    }else{
        outputCountDown.innerHTML = --second;

    }  
},1000);

let numbers = Math.floor(Math.random() * 50) + 1;
const newItems = document.createElement('li');

newItems.innerText = parseInt(numbers);

randomNumber.appendChild(newItems);



