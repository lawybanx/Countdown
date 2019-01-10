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
        rest.style.display = 'inline-block';
    }, 1000);
    
}
    );
var stop = document.querySelector("#reset");
stop.style.display = 'none';
stop.addEventListener('click', function reset() {
	'use strict';
    if (time !== 0) {
        clearInterval(Timer);
    }
    
});
let resume = document.querySelector("#pause");
resume.style.display = 'none';
resume.addEventListener('click', function(){
    'use-strict';
    time = document.getElementById("display").textContent;
     if (time !== 0) {
        clearInterval(Timer);
    }
})

var rest = document.querySelector("#rest");
rest.style.display = 'none';
rest.addEventListener('click', function rest() {
	'use strict';
    if (time !== 0) {
        clearInterval(Timer);
    }
    document.getElementById("display").innerHTML = 0;

});