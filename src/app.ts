import { getRandomInt } from './utils';

let squares: NodeListOf<HTMLDivElement>;
export function runApp() {
    // find all the squares
    const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;
    const secret = getSecretNumber();
    // pick one as the secret square and "mark it".
    squares.forEach((sq, index) => {
        if (index === secret) {
            sq.dataset.secret = 'true';
        }
        sq.addEventListener('click', handleClick);
    });
}

function handleClick(e: any) {
    const clickedSquare = this as HTMLDivElement;
    if (clickedSquare.dataset.secret === 'true') {
        clickedSquare.classList.add('winner');
        const message = document.getElementById('message') as HTMLElement;
        message.innerText = 'Woah! you found it';
        squares.forEach(s => {
            if (s !== clickedSquare) {
                s.classList.add('loser');
            }
        });
    } else {
        clickedSquare.classList.add('loser');
    }
}

function getSecretNumber() {
    return getRandomInt(0, 5);
}
