var button = document.querySelector("#button");
var div = document.querySelector("div");
var Timer;
var time;
button.addEventListener('click', function () {
    'use strict';
    var time = document.querySelector("#input").value;
    if (time !== 0) {
        clearInterval(Timer);
    }
    Timer = setInterval(function () {
        time--;
        document.getElementById("display").textContent = time;
        if (time <= 0) {
            clearInterval(Timer);
        }
    }, 1000);
    
}
    );
var reset = document.querySelector("#reset");
reset.addEventListener('click', function reset() {
	'use strict';
    if (time !== 0) {
        clearInterval(Timer);
    }
    document.getElementById("display").innerHTML = 0;

});
// function removeItem(time) {
//     time.target.parentElement.removeChild(time.target);
//   };
// div.onclick = removeItem;