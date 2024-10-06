console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let gameover=false;

const changeTurn=()=>{
    return turn === "X" ? "0" : "X";
}

const checkWin=()=>{
    let boxText=document.getElementsByClassName("boxtext")
    let wins=[

        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
        ]

        wins.forEach(e=>{
            if((boxText[e[0]].innerText===boxText[e[1]].innerText && boxText[e[2]].innerText===boxText[e[1]].innerText)&& (boxText[e[0]].innerText!== "")){
                document.querySelector(".info").innerText=boxText[e[0]].innerText + " Won"
                gameover=true
                document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
                document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width = "20vw";
                gameOver.play();
                
            }
           
        });

        if (!gameover && Array.from(boxText).every(element => element.innerText !== "")) {
            document.querySelector(".info").innerText = "It's a draw!";
            gameover = true;
            gameOver.play();
            setTimeout(() => {
                resetGame();
            }, 2000); 
        }

}





music.play();
let boxes =document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxText=element.querySelector(".boxtext")
    element.addEventListener("click",()=>{
        if(!gameover && boxText.innerText===""){
            boxText.innerText=turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!gameover)
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
        }
    })
})


const resetgame=()=>{
   let  boxText =document.querySelectorAll(".boxtext");
   Array.from(boxText).forEach(element=>{
    element.innerText=""

   });
   turn ="X"
   gameover=false
   document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px"
    document.querySelector(".line").style.width = "0vw";

}

document.getElementById("reset").addEventListener("click",resetgame)
