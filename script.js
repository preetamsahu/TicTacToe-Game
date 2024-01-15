console.log("welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let AudioTurn=new Audio("ting2.wav");
let gameover = new Audio("gameover2.mp3");
let isgameover=false
let player1="X"
let player2="0"
let nameturn=player1
let turn = "X";
setbutton.addEventListener("click",()=>{
    if(document.getElementById("player1").value.length>0){
        player1=document.getElementById("player1").value
    }
    if(document.getElementById("player2").value.length>0){
        player2=document.getElementById("player2").value
    }
    nameturn=player1;
    document.getElementsByClassName("info")[0].innerText="Turn for "+nameturn;
    console.log(player1,player2)
})
swapplayer.addEventListener("click",()=>{
    let temp=player1;
    player1=player2;
    player2=temp;
    document.getElementById("player1").value=player1
    document.getElementById("player2").value=player2
    nameturn=changeName()
    document.getElementsByClassName("info")[0].innerText="Turn for "+nameturn;

})

const changeTurn=()=>{
    
    return turn==="X"?"0":"X";
}
const changeName=()=>{
    return nameturn===player1?player2:player1;
}

const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxcontent");
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,134]
    ]
    if((boxtext[0].innerText!=="")&&(boxtext[1].innerText!=="")&&(boxtext[2].innerText!=="")&&(boxtext[3].innerText!=="")&&(boxtext[4].innerText!=="")&&(boxtext[5].innerText!=="")&&(boxtext[6].innerText!=="")&&(boxtext[7].innerText!=="")&&(boxtext[8].innerText!=="")){
        document.getElementsByClassName("info")[0].innerText="Draw Match";
        setTimeout(resetEvent,2000);
    }
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.getElementsByClassName("info")[0].innerText=nameturn+"  Won";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="154px";
            document.getElementsByClassName("line")[0].style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.getElementsByClassName("line")[0].style.width="20vw";
            gameover.play()
            setTimeout(resetEvent,2000)
            setTimeout(setlinewidth=()=>{
                document.getElementsByClassName("line")[0].style.width="0vw";
            },2000)
        }
    })
}

//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxcontent");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            checkWin();
            turn =changeTurn();
            nameturn=changeName();
            AudioTurn.play();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+nameturn;
            }
            

        }

    })
})

//adding resting logic
// reset.addEventListener("click",()=>{
//     let boxtexts=document.querySelectorAll(".boxcontent");
//     Array.from(boxtexts).forEach(element=>{
//         element.innerText="";
//     })
//     turn="X"
//     document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
//     isgameover=false;
//     document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
// })

function resetEvent(){
    let boxtexts=document.querySelectorAll(".boxcontent");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    turn="X"
    nameturn=player1;
    document.getElementsByClassName("info")[0].innerText="Turn for "+player1;
    isgameover=false;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";

}