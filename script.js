let randomNum=Math.floor(Math.random()*101);
let lives=10;
function res(){
    const temp=document.querySelector("#startBox");
    const value1=document.querySelector("#startBox");
    let num=parseInt(value1.value);
    if(randomNum==num){
        const href="./win.html";
        window.open(href,"_self");
    }
    else{
        lives--;
        const liv=document.querySelector("#liv");
        liv.innerText=`Lives - ${lives}`;
        if(lives==0){
            lives=0;
            const href="./lose.html";
            window.open(href,"_self");
        }
        else if(num<randomNum){
            const res1=document.querySelector("#rem");
            res1.innerText=`Your Guess is Too Low, You Have Remaining ${lives} Lives..!`
        }
        else if(num>randomNum){
            const res1=document.querySelector("#rem");
            res1.innerText=`Your Guess is Too High, You Have Remaining ${lives} Lives..!`
        }
    }
}