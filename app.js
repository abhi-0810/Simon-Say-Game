let gameSeq=[];
let userSeq=[];

let started =false;
let level=0;

let btns=["red","yellow","purple","green"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;


    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`)
    console.log(randIndx);
    console.log(randColor);
    console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}


function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,250);
       }
    }else{
        h2.innerHTML= `Game Over! Your score was <b>${level}<b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}

let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function btnPress(){
    let btn =this;
    userFlash(btn);

    userColor =btn.getAttribute("id");
    userSeq.push(userColor);    

    checkAns(userSeq.length-1);

}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
