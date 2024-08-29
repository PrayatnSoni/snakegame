var player1 = {
    diceresult,
    position: document.getElementById("play1"),
}
var player2 = {
    diceresult,
    position: document.getElementById("play2"),
}
var chance = 0;
var player1sum = 0;
var player2sum = 0;

let player1name;
let player2name;

let dice;

//Adding audio on the player movement
const move = new Audio('move.mp3');
const food = new Audio('food.mp3')
const gameover = new Audio('gameover.mp3')
const audio = new Audio('music.mp3');

document.addEventListener('DOMContentLoaded', function () {
    let userConfirmed = confirm("Do You Want To Play This Game?");
    playernamefill();
    if (userConfirmed) {
        console.log("Lets Play This Game")
    } else {
        alert("Ab Aai Ho To Game Khel Hi Lo!")
    }
});

function playernamefill(){
    let playername = confirm("Do You Want To Add Custom Player Name")
    if (playername) {
        player1name = prompt("Enter The First Player Name");
        player2name = prompt("Enter The Second Player Name");
        resetgame();
    }
    else{
        player1name = "Red";
        player2name = "Yellow";
        resetgame();
    }
}

document.getElementById('playButton').addEventListener('click', function (e) {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
});

function resetgame() {
    player1.position.style.gridColumnStart = 1
    player1.position.style.gridRowStart = 10
    player2.position.style.gridColumnStart = 1
    player2.position.style.gridRowStart = 10
    player1sum = 0
    player2sum = 0
    document.getElementById("player1location").innerText = `Player ${player1name} Possition: 0`
    document.getElementById("player2location").innerText = `Player ${player2name} Possition: 0`
    document.getElementById("playerturn").innerText = `Player Turn ${player1name}`
    chance = 0;
    dice = 0;
    diceresult.innerText = `Dice Result: ${dice}`
}

function check(dice) {
    if (chance % 2 == 0) {
        document.getElementById("playerturn").innerText = `Player Turn ${player2name}`
        player1.diceresult = dice
        player1sum = player1sum + player1.diceresult
        console.log(player1sum)
        document.getElementById("player1location").innerText = `Player ${player1name} Possition: ${player1sum}`
        movePlayer(player1sum, player1.position)
        if (player1sum > 100 || player1sum == 100) {
            resetgame();
            gameover.play();
            alert(`${player1name} Wins! YEEEEE`)
        }
    }
    else if (chance % 2 > 0) {
        document.getElementById("playerturn").innerText = `Player Turn ${player1name}`
        player2.diceresult = dice
        player2sum = player2sum + player2.diceresult
        console.log(player2sum)
        document.getElementById("player2location").innerText = `Player ${player2name} Possition: ${player2sum}`
        movePlayer(player2sum, player2.position)
        if (player2sum > 100 || player2sum == 100) {
            resetgame();
            gameover.play();
            alert(`${player2name} Wins! YEEEEE`)
        }
    }
    chance = chance + 1;
}

document.getElementById("dicebtn").addEventListener("click", function (e) {
    dice = Math.floor(Math.random() * 6) + 1
    diceresult.innerText = `Dice Result: ${dice}`
    check(dice);
})

//Initialize the element with key 
let obj = {

    //colum row
    1: [1, 10],
    2: [2, 10],
    3: [3, 10],
    4: [4, 10],
    5: [5, 10],
    6: [6, 10],
    7: [7, 10],
    8: [8, 10],
    9: [9, 10],
    10: [10, 10],

    11: [10, 9],
    12: [9, 9],
    13: [8, 9],
    14: [7, 9],
    15: [6, 9],
    16: [5, 9],
    17: [4, 9],
    18: [3, 9],
    19: [2, 9],
    20: [1, 9],

    21: [1, 8],
    22: [2, 8],
    23: [3, 8],
    24: [4, 8],
    25: [5, 8],
    26: [6, 8],
    27: [7, 8],
    28: [8, 8],
    29: [9, 8],
    30: [10, 8],

    31: [10, 7],
    32: [9, 7],
    33: [8, 7],
    34: [7, 7],
    35: [6, 7],
    36: [5, 7],
    37: [4, 7],
    38: [3, 7],
    39: [2, 7],
    40: [1, 7],

    41: [1, 6],
    42: [2, 6],
    43: [3, 6],
    44: [4, 6],
    45: [5, 6],
    46: [6, 6],
    47: [7, 6],
    48: [8, 6],
    49: [9, 6],
    50: [10, 6],

    51: [10, 5],
    52: [9, 5],
    53: [8, 5],
    54: [7, 5],
    55: [6, 5],
    56: [5, 5],
    57: [4, 5],
    58: [3, 5],
    59: [2, 5],
    60: [1, 5],

    61: [1, 4],
    62: [2, 4],
    63: [3, 4],
    64: [4, 4],
    65: [5, 4],
    66: [6, 4],
    67: [7, 4],
    68: [8, 4],
    69: [9, 4],
    70: [10, 4],


    71: [10, 3],
    72: [9, 3],
    73: [8, 3],
    74: [7, 3],
    75: [6, 3],
    76: [5, 3],
    77: [4, 3],
    78: [3, 3],
    79: [2, 3],
    80: [1, 3],

    81: [1, 2],
    82: [2, 2],
    83: [3, 2],
    84: [4, 2],
    85: [5, 2],
    86: [6, 2],
    87: [7, 2],
    88: [8, 2],
    89: [9, 2],
    90: [10, 2],

    91: [10, 1],
    92: [9, 1],
    93: [8, 1],
    94: [7, 1],
    95: [6, 1],
    96: [5, 1],
    97: [4, 1],
    98: [3, 1],
    99: [2, 1],
    100: [1, 1],
}

let ladder = {
    4: [5, 5],
    12: [10, 6],
    14: [6, 5],
    22: [3, 5],
    41: [2, 3],
    54: [8, 2]
}
let snake = {
    28: [10, 10],
    37: [3, 10],
    48: [5, 9],
    75: [9, 7],
    94: [10, 3],
    96: [2, 6]
}



function messageladder(){
    toast.innerText = "You Got The ladder"
    toast.className = "toast show";
    // Hide the toast after 3 seconds
    setTimeout(function() {
        toast.className = toast.className.replace(" show", "");
    }, 2500);
}
function messagesnake(){
    toast.innerText = "You Got Bitten By a Snake"
    toast.className = "toast show";
    // Hide the toast after 3 seconds
    setTimeout(function() {
        toast.className = toast.className.replace(" show", "");
    }, 2500);
}






function movePlayer(dice, playerposition) {
    let sum = dice;
    if (sum > 0 && sum < 11) {
        playerposition.style.gridColumnStart = obj[sum][0]
        playerposition.style.gridRowStart = obj[sum][1]

        if (player1sum == 4) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player1sum = 56;
            move.play();
            messageladder();
        }
        if (player2sum == 4) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player2sum = 56;
            move.play();
            messageladder();
        }
        
    } else if (sum < 21 && sum > 10) {
        playerposition.style.gridColumnStart = obj[sum][0]
        playerposition.style.gridRowStart = obj[sum][1]
        //For ladder case player position
        if (player1sum == 12) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player1sum = 50;
            move.play();
            messageladder();
        }
        if (player1sum == 14) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player1sum = 55;
            move.play();
            messageladder();
        }
        if (player2sum == 12) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player2sum = 50;
            move.play();
            messageladder();
        }
        if (player2sum == 14) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player2sum = 55;
            move.play();
            messageladder();
        }
    }
    else if (sum < 31 && sum > 20) {
        playerposition.style.gridColumnStart = obj[sum][0]
        playerposition.style.gridRowStart = obj[sum][1]
        //For ladder case player position
        if (player1sum == 22) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player1sum = 58;
            move.play();
            messageladder();
        }
        if (player2sum == 22) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player2sum = 58;
            move.play();
            messageladder();
            
        }
        //For snake case player position
        if (player1sum == 28) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player1sum = 10;
            food.play();
            messagesnake();
        }
        if (player2sum == 28) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player2sum = 10;
            food.play();
            messagesnake();
        }
    }
    else if (sum < 41 && sum > 30) {
        playerposition.style.gridColumnStart = obj[sum][0]
        playerposition.style.gridRowStart = obj[sum][1]
        //for snake case player position
        if (player1sum == 37) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player1sum = 3;
            food.play();
            messagesnake();
        }
        if (player2sum == 37) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player2sum = 3;
            food.play();
            messagesnake();
        }
    }
    else if (sum < 51 && sum > 40) {
        playerposition.style.gridColumnStart = obj[sum][0]
        playerposition.style.gridRowStart = obj[sum][1]
        if (player1sum == 41) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player1sum = 79;
            move.play();
            messageladder();
        }
        if (player2sum == 41) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player2sum = 79;
            move.play();
            messageladder();
        }
        //for snake case player position
        if (player1sum == 48) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player1sum = 16;
            food.play();
            messagesnake();
        }
        if (player2sum == 48) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player2sum = 16;
            food.play();
            messagesnake();
        }
    }
    else if (sum < 61 && sum > 50) {
        playerposition.style.gridColumnStart = obj[sum][0]
        playerposition.style.gridRowStart = obj[sum][1]
        if (player1sum == 54) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player1sum = 88;
            move.play();
            messageladder();
        }
        if (player2sum == 54) {
            playerposition.style.gridColumnStart = ladder[sum][0]
            playerposition.style.gridRowStart = ladder[sum][1]
            player2sum = 88;
            move.play();
            messageladder();
        }
    }
    else if (sum < 71 && sum > 60) {
        playerposition.style.gridColumnStart = obj[sum][0]
        playerposition.style.gridRowStart = obj[sum][1]
    }
    else if (sum < 81 && sum > 70) {
        playerposition.style.gridColumnStart = obj[sum][0]
        playerposition.style.gridRowStart = obj[sum][1]
        //for snake case player position
        if (player1sum == 75) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player1sum = 32;
            food.play();
            messagesnake();
        }
        if (player2sum == 75) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player2sum = 32;
            food.play();
            messagesnake();
        }
    }
    else if (sum < 91 && sum > 80) {
        playerposition.style.gridColumnStart = obj[sum][0]
        playerposition.style.gridRowStart = obj[sum][1]
    }
    else if (sum < 101 && sum > 90) {
        playerposition.style.gridColumnStart = obj[sum][0]
        playerposition.style.gridRowStart = obj[sum][1]
        //for snake case player position
        if (player1sum == 94) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player1sum = 71;
            food.play();
            messagesnake();
        }
        if (player2sum == 94) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player2sum = 71;
            food.play();
            messagesnake();
        }
        //Another snake case player position
        if (player1sum == 96) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player1sum = 42;
            food.play();
            messagesnake();
        }
        if (player2sum == 96) {
            playerposition.style.gridColumnStart = snake[sum][0]
            playerposition.style.gridRowStart = snake[sum][1]
            player2sum = 42;
            food.play();
            messagesnake();
        }
    }
}