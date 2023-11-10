function diceMuve(){
    let dice1 = Math.floor(Math.random()*6)+1;
    let dice2 = Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").setAttribute("src",`./images/dice${dice1}.png`);
    document.querySelector(".img2").setAttribute("src",`./images/dice${dice2}.png`);
    if(dice1<dice2){
        document.querySelector("h1").innerHTML="Win Player 2";
    }else if(dice1>dice2){
        document.querySelector("h1").innerText="Win Player 1";
    }else{
        document.querySelector("h1").innerText="Draw";
    }
}
document.querySelector("body").addEventListener("click",()=>{diceMuve()});