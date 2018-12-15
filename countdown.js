let button = document.querySelector("#button");
let div = document.querySelector("div")
let Timer;
let time;
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
let reset = document.querySelector("#reset");
reset.addEventListener('click', function reset(){
	if(time != 0){
        clearInterval(Timer)
    };
document.getElementById("display").innerHTML = 0;

})
// function removeItem(time) {
//     time.target.parentElement.removeChild(time.target);
//   };
// div.onclick = removeItem;