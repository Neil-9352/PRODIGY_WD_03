let turn = 'X';
let isGameOver = false;

const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X';
}

const checkWin = () => {
    const boxtexts = document.getElementsByClassName('box-text')
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            isGameOver = true;
        }
    })
}

const boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    const boxtext = element.querySelector('.box-text');

    element.addEventListener('click', () => {
        if(boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = turn + "'s turn";
            }
        }
    })
})

reset.addEventListener('click', () => {
    const boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    });

    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerText = turn + "'s turn";
})