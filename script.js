let circleTurn = false;
let board = ['', '', '','', '', '','', '', ''];

function placeTile(){
    const square = document.querySelectorAll('.square');
    square.forEach((element, index) => {
        element.addEventListener('click', ()=>{
            checkTurn(element, index);
            getTilePosition();
            resetGame();
        }, {once: true})
    })
}

function checkTurn(element, index){
    if (circleTurn) {
        const o = document.createElement('img');
        o.classList.add('tile');
        o.setAttribute('src', 'assets/icon-o.svg');
        element.appendChild(o);
        board[index] = 'O';
        circleTurn = false;
    } else {
        const x = document.createElement('img');
        x.classList.add('tile');
        x.setAttribute('src', 'assets/icon-x.svg');
        element.appendChild(x);
        board[index] = 'X';
        circleTurn = true;
    }
}

function checkWin(indexes, o){
    const win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    let xArray = [];
    let oArray = []
    win.forEach((element) => {
        xArray.push(element.every(r => indexes.includes(r)));
        oArray.push(element.every(r => o.includes(r)));
    })

    if(xArray.includes(true)){
        playerWon();
    } else if(oArray.includes(true)){
        player2Won();
    }
}

function getTilePosition(){
    let indexes = [];
    let oIndex = []
    for (let i = 0; i < board.length; i++){
        if (board[i] === 'X'){
            indexes.push(i);
        }
        if (board[i] === 'O'){
            oIndex.push(i);
        }
    }
    checkWin(indexes, oIndex);
}

function playerWon(){
    const modal = document.querySelector('.modal');
    const dark = document.getElementById('dark-bg');
    const title = document.querySelector('.modal-title');
    modal.classList.add('modal-active');
    dark.classList.add('modal-bg');
    title.textContent = "Player 1 wins";
}

function player2Won(){
    const modal = document.querySelector('.modal');
    const dark = document.getElementById('dark-bg');
    const title = document.querySelector('.modal-title');
    modal.classList.add('modal-active');
    dark.classList.add('modal-bg');
    title.textContent = "Player 2 wins";
}

function resetGame(){
    const reset = document.querySelector('.btn-secondary');
    const modal = document.querySelector('.modal');
    const dark = document.getElementById('dark-bg');
    const tile = document.querySelectorAll('.tile');
    console.log(tile);
    reset.addEventListener('click', ()=>{
        // modal.classList.remove('modal-active');
        // dark.classList.remove('modal-bg');
        // board = ['', '', '','', '', '','', '', ''];
        // tile.forEach(element => {
        //     element.remove();
        // })
        location.reload();
    })
}

placeTile();