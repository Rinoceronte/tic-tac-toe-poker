let board = [];

function play(id){
    let playerSpan = document.getElementById('player');
    let box = document.getElementById(id);

    if(board[id] === undefined)
    {
      if(playerSpan.innerText === 'X')
      {
          box.innerText=playerSpan.innerText;
          board[id] = playerSpan.innerText;
          playerSpan.innerText = 'O'
      }
      else {
          box.innerText=playerSpan.innerText;
          board[id] = playerSpan.innerText;
          playerSpan.innerText ='X';
      }
      checkForWinner();
    }

    
}

function checkForWinner(){
    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];
  
    // CHECKS ALL WINNING COMBINATIONS
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
      declareWinner(topLeft);
      return;
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
      declareWinner(middleLeft);
      return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
      declareWinner(bottomLeft);
      return;
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
      declareWinner(topLeft);
      return;
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
      declareWinner(topCenter);
      return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
     declareWinner(topRight);
      return;
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
      declareWinner(topLeft);
      
      return;
    }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
      declareWinner(bottomLeft);
      return;
    }
      let catGame = true;
      for(let i=0;i<9;i++)
      {
          if(board[i] === undefined){
          catGame = false;
          return;
          }
      }
      if(catGame) {
          declareWinner("cat");
      }
}

function declareWinner(winner){
  if(winner === "cat")
  {
    requestAnimationFrame(() =>{
      requestAnimationFrame(function(){
          alert("Cat's game, there is no winner");
          // resetBoard();
        });
    });
  }
  else {
    requestAnimationFrame(() =>{
      requestAnimationFrame(function(){
          alert(`${winner} is the winner`);
          // resetBoard();
        });
    });
    for(let i=0;i<9;i++)
    {
      if(board[i] === undefined)
      {
        board[i] = "";
      }
    }
  }
}

function resetBoard(){
  board = [];
  document.getElementById('player').innerText = "X";
  for(let i=0;i<9;i++)
  {
    document.getElementById(i).innerText = "";
  }
}
