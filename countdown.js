var button = document.querySelector("#button");
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
        if (time <= 0 || time == null) {
            clearInterval(Timer);
            alert("please input a number");
        }
        document.getElementById("display").innerHTML = 0;
        pause.style.display = 'inline-block';
        resume.style.display = 'inline-block';
        reset.style.display = 'inline-block';
        }, 1000);
});

    var pause = document.querySelector("#pause");
    pause.style.display = 'none';
    pause.addEventListener('click', function () {
        'use-strict';
        if (time !== 0) {
            clearInterval(Timer);
        }
    });

    var resume = document.querySelector("#resume");
    resume.style.display = 'none';
    resume.addEventListener('click', function () {
        'use strict';
     
        
    });

    var reset = document.querySelector("#reset");
    reset.style.display = 'none';
    reset.addEventListener('click', function () {
        'use strict';
        if (time !== 0) {
            clearInterval(Timer);
        }
        document.getElementById("display").innerHTML = 0;

    });
