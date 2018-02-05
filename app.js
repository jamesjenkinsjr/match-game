const card = document.querySelector(".card");
const cardHidden = document.querySelector(".card-hidden");

card.addEventListener('click', revealCard);

function revealCards(e) {
    const cards = document.querySelectorAll('.card');
    
    const element = e.target;
    console.log('something');
}