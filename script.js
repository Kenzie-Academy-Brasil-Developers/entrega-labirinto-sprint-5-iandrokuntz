
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
  ];
  let player = document.getElementById("jogador");
    player.classList.add("player");

  let parede = document.querySelector("#wall");
  
    for (let row = 0; row < map.length; row++){
        
        let linha = document.createElement("div");
        linha.classList.add("linha");
        parede.appendChild(linha);
    
    for (let column = 0; column < map[row].length; column++){
        
        if (map[row][column] === "W"){
            
            let wall = document.createElement("div");
            wall.classList.add("tijolo");
            linha.appendChild(wall);

        }if (map[row][column] === "S"){

            let start = document.createElement("div");
            start.classList.add("start");
            linha.appendChild(start);
            start.appendChild(player);

        }if (map[row][column] === "F"){

            let finish = document.createElement("div");
            finish.classList.add("finish");
            linha.appendChild(finish);

        }if (map[row][column] === " "){

            let vazio = document.createElement("div");
            vazio.classList.add("caminho");
            linha.appendChild(vazio);

        }
    }
}

jogadorTop = 0
jogadorLeft = 0

let positionPLayer = [9, 0]

document.addEventListener("keydown", (event) => {
    const movePlayer = event.key;

    if(movePlayer === "ArrowUp"){

        if(map[positionPLayer[0] - 1][positionPLayer[1]] === " "){
            positionPLayer[0] -= 1
            jogadorTop -= 50
            player.style.top = jogadorTop + "px"

        }
        
    }else if(movePlayer === "ArrowDown"){

        if(map[positionPLayer[0] + 1][positionPLayer[1]] === " "){
            positionPLayer[0] += 1
            jogadorTop += 50 
            player.style.top = jogadorTop + "px"
        }
        
    }else if(movePlayer === "ArrowRight"){

        if(map[positionPLayer[0]][positionPLayer[1] + 1] === " "){

            positionPLayer[1] += 1
            jogadorLeft += 50 
            player.style.left = jogadorLeft + "px"
       
        }else if(map[positionPLayer[0]][positionPLayer[1] + 1] === "F"){

            positionPLayer[1] += 1
            jogadorLeft += 50 
            player.style.left = jogadorLeft + "px"
            alert("you win!!!")
        }
    }else if(movePlayer === "ArrowLeft"){

        if(map[positionPLayer[0]][positionPLayer[1] - 1] === " "){

            positionPLayer[1] -= 1
            jogadorLeft -= 50 
            player.style.left = jogadorLeft + "px"
        }
        
        
    }
     

})










    