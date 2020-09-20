var cel_live = '*';
var cel_death = '.';
var board = [];
var boardstring = "";

//function show_alert();
function show_alert() {
  var valuex = parseInt(prompt("Introduce el valor x para guardarlo"));
  var valuey = parseInt(prompt("Introduce el valor y para guardarlo"));
  let board = new Array(valuey);
  for (i = 0; i < board.length; i++) {
    board[i] = new Array(valuex);
  }

  for (var i = 0; i < board.length; i++) {
    //Recorremos el array de cada posición i
    for (var j = 0; j < board[i].length; j++) {
      //Creamos un array en cada posición
      var randomvar = Math.random();
      if (randomvar >= 0.5) {
        board[i][j] = cel_death;
      } else {
        board[i][j] = cel_live;
      }
      boardstring += board[i][j];
    }
    boardstring += '\n';
  }
  console.log(boardstring);
  match(board);
}


function run() {
  show_alert();
}
run();

function match(boardVar) {
  for (var loop = 0; loop <= 3; loop++) {
    for (var i = 0; i < boardVar.length; i++) {
      for (var j = 0; j < boardVar[i].length; j++) {
        var cell = boardVar[i][j];
        cell_status = checkCell(boardVar, cell, i, j);
        if (cell_status) {
          boardVar[i][j] = cel_live;
        } else {
          boardVar[i][j] = cel_death;
        }
      }
    }
    printBoard(boardVar);
    alert("Revisa tu consola");
  }
}
// la i deben estar entre 0 y board.length-1
// la j debe de estar entre 0 y board[i].length-1;
function checkCell(board, prevStatus, i, j) {
  var count = 0;
  if  (i-1>=0 && j-1 >= 0)
  {
    if (board[i - 1][j - 1] == cel_live) {
      count++;
    }
    if (board[i - 1][j] == cel_live) {
      count++;
    }
    if (board[i - 1][j + 1] == cel_live) {
      count++;
    }
    if (board[i][j - 1] == cel_live) {
      count++;
    }
  }
  if  (i+1<=board.length-1 && j+1<=board[i].length-1){
    if (board[i][j + 1] == cel_live) {
      count++;
    }
    if (board[i + 1][j - 1] == cel_live) {
      count++;
    }
    if (board[i + 1][j] == cel_live) {
      count++;
    }
    if (board[i + 1][j + 1] == cel_live) {
      count++;
    }
  }
  //if(board[i][j] == '1')count++;//la casilla en cuestión
  
  //Si está muerta y tiene 3 o más vivas 
  if (prevStatus== cel_death && count == 3) {
    return true;
  }
  //si está viva y tiene 2 o 3 vivas sigue viva
  if (prevStatus== cel_live && (count == 2 || count == 3)) {
    return true;
  }
  //de lo contrario muere
  return false;
}

function printBoard(boardVar) {
  boardstring = "";
  for (var i = 0; i < boardVar.length; i++) {
    for (var j = 0; j < boardVar[i].length; j++) {
      boardstring += boardVar[i][j];
    }
    boardstring += '\n';
  }
  console.log(boardstring);
}