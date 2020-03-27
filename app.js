const API_URL = "https://api.thecatapi.com/v1/images/search";
const randomCatsElement= document.querySelector('.random-cats');

async function getRandomCats() {

    randomCatsElement.innerHTML = " ";
    
    const urlArray = [];

    for(let i=0; i<3; i++) {
        const response = await fetch(API_URL);
        const json = await response.json();
        console.log(json);
        urlArray[i] = json[0].url;
    }

    console.log(urlArray);

    urlArray.forEach( url => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.classList.add('border-0');

        const cardImageElement = document.createElement('img');
        cardImageElement.classList.add('card-img');
        cardImageElement.src = url;

        cardElement.appendChild(cardImageElement);
        randomCatsElement.appendChild(cardElement);
    });

}
const goCatsButton = document.querySelector('.go-cats');

goCatsButton.addEventListener('click', getRandomCats);