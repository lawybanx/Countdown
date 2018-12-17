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
        reset.style.display = 'inline-block';
        pause.style.display = 'inline-block';
    }, 1000);
    
}
    );
var reset = document.querySelector("#reset");
reset.style.display = 'none';
reset.addEventListener('click', function reset() {
	'use strict';
    if (time !== 0) {
        clearInterval(Timer);
    }
    document.getElementById("display").innerHTML = 0;

});
let pause = document.querySelector("#pause");
pause.style.display = 'none';
pause.addEventListener('click', function(){
    'use-strict';
    alert("Press ok to continue.");
})