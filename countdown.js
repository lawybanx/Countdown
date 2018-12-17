let button = document.querySelector("#button");
let div = document.querySelector("div")
let Timer;
button.addEventListener('click', function countDown(){
let time = document.querySelector("#input").value;
    if(time != 0){
        clearInterval(Timer)
    }
    Timer = setInterval(function(){
        time--;
        document.getElementById("display").textContent = time;
        if(time <= 0){
        clearInterval(Timer)};
    },1000);
    
}
)