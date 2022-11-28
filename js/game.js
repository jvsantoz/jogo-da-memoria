const grid = document.querySelector('.grid');

const characters = [
    'CARTA_BOY',
    'CARTA_ELEFANTE',
    'CARTA_GIRAFA',
    'CARTA_LEÃO',
    'CARTA_MACACO',
    'CARTA_RINO',
    'CARTA_TIGRE',
    'CARTA_ZEBRA'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = () => {
    
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    card.appendChild(front);
    card.appendChild(back);
    
    return card;
}

const loadGame = () => {

    characters.forEach((character) => {

        const card = createCard();
        grid.appendChild(card);

    });

}

loadGame();