const cards = document.querySelectorAll(".card");
const win = document.querySelector('h2');
//const cardHidden = document.querySelector(".card-hidden");
cards.forEach(card => {
    card.addEventListener('click', selectCard);
});

function selectCard(e) {
    const cardSelect = e.target;
    cardSelect.classList.add('card-border');
    cardSelect.classList.add('card-choose');
    checkForWin();
}
function checkForWin() {
    const matches = document.querySelectorAll('.card-choose');
    if(matches.length < 2) {
        win.textContent = '';
        return; 
    }
    const firstID = matches[0].id;
    const secondID = matches[1].id;
    if((matches[0].id === 'img1') && (matches[1].id === 'img3') 
    || (matches[0].id === 'img3') && (matches[1].id === 'img1')) 
    {
        win.textContent = "Winner winner -- Chicken DINNER";
        matches.forEach(match => {
            match.classList.remove('card-border');
            match.classList.remove('card-choose');
        });
    } 
    else if((matches[0].id === 'img2') && (matches[1].id === 'img4') 
    || (matches[0].id === 'img4') && (matches[1].id === 'img2')) 
    {
        win.textContent = "Winner winner -- Chicken DINNER";
        matches.forEach(match => {
            match.classList.remove('card-border');
            match.classList.remove('card-choose');
        });
    }
    else 
    {
        win.textContent = "Oh dang -- those don't match";
        matches.forEach(match => {
            match.classList.remove('card-border');
            match.classList.remove('card-choose');
        });
    }

}
function alertCorrect(e) {
    const element = e.target;
    if(element.classList.contains('card-choose')) {
        console.log('condition met');
    } else {
        console.log('oops');
    }
    
}