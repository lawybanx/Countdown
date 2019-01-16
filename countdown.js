var button = document.querySelector("#button");
var Timer;
var time;
    button.addEventListener('click', countdownFunc());

    var pause = document.querySelector("#pause");
    pause.style.display = 'none';
    pause.addEventListener('click', pauseFunc());

    var resume = document.querySelector("#resume");
    resume.style.display = 'none';
    resume.addEventListener('click', resumeFunc());

    var reset = document.querySelector("#reset");
    reset.style.display = 'none';
    reset.addEventListener('click', resetFunc());
    
function resetFunc() {
    return function () {
        'use strict';
        if (time !== 0) {
            clearInterval(Timer);
        }
        document.getElementById("display").innerHTML = 0;
    };
}

function pauseFunc() {
    return function () {
        'use-strict';
        if (time !== 0) {
            clearInterval(Timer);
        }
    };
}

function countdownFunc() {
    return function () {
        'use strict';
        var time = document.querySelector("#input").value;
        if (time !== 0) {
            clearInterval(Timer);
        }
        Timer = setInterval(function () {
            document.getElementById("display").textContent = time;
            time--;
            if (time < 0) {
                clearInterval(Timer);
                document.getElementById("display").innerHTML = 0;
            }
            pause.style.display = 'inline-block';
            resume.style.display = 'inline-block';
            reset.style.display = 'inline-block';
        }, 1000);
    };
}

function resumeFunc() {
    return function () {
        'use strict';
        var time = document.querySelector("#display").textContent;
        if (time !== 0) {
            clearInterval(Timer);
        }
        Timer = setInterval(function () {
            time--;
            document.getElementById("display").textContent = time;
            if (time < 0) {
                clearInterval(Timer);
                document.getElementById("display").innerHTML = 0;
            }
        }, 1000);
    };
}

