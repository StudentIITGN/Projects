let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let NewGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;   //playerX,player0

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    EnableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if (turnO){
        box.innerText="0";
        turnO=false;
        //player 0
        } else{
        box.innerText="X";
        turnO=true;
        //player X
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const EnableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner =(winner) =>{
        msg.innerText=`Congratulations,winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
}

const checkWinner=()=>{
    for (let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if (pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
};

NewGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)