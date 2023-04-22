/* Requirements
user should type in a number in lbs
the cards should appear with the converted weight in the appropriate conversions

*/
// select items on webpage
let input_box = document.querySelector('#input');
const kg_card = document.querySelector('#kg-card');
const oz_card = document.querySelector('#oz-card');
let input_text = document.querySelector('#input-text');
let kg = document.querySelector('#kilogram');
let oz = document.querySelector('#ounces');

//Need to show cards once user clicks on input box
const showCards = () => {
    input_box.addEventListener('input', (e) => {
    let pounds = e.target.value;  
    kg_card.classList.add('show-card');
    kg.textContent = pounds * 0.45359237;
    oz_card.classList.add('show-card');
    oz.textContent = pounds * 16;
    });
}

showCards();


//Need to calculate lbs to KG

const calcKG = () => {
    let kg = input_text;
    console.log(kg); 
}

calcKG();





//Need to calculate lbs to OZ
