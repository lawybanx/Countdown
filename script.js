var button = document.querySelector("#button");
var Timer;
var time;
button.addEventListener('click', countdownFunc());

var pause = document.querySelector("#pause");
pause.style.display = 'none';
pause.addEventListener('click', pauseFunc());

var resume = document.querySelector("#resume");
var resume = document.querySelector("#resume");
resume.style.display = 'none';
resume.addEventListener('click', resumeFunc());

var reset = document.querySelector("#reset");
reset.style.display = 'none';
reset.addEventListener('click', resetFunc());

var add = document.querySelector("#add");
add.style.display = 'none';
add.addEventListener('click', addFunc());

function countdownFunc() {
    'use strict';
    return function () {
        time = document.querySelector("#input").value;
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
            add.style.display = 'none';
        }, 1000);
    };
}

function pauseFunc() {
    'use strict';
    return function () {
        clearInterval(Timer);
        add.style.display = 'inline-block';
        time = document.querySelector("#display").textContent;
        if (time === '0') {
            add.style.display = 'none';
        }
    };
}

function resumeFunc() {
    'use strict';
    return function () {
        time = document.querySelector("#display").textContent;
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
        add.style.display = 'none';
    };
}

function resetFunc() {
    'use strict';
    return function () {
        if (time !== 0) {
            clearInterval(Timer);
        }
        document.getElementById("display").textContent = 0;
        add.style.display = 'none';
    };
}

function addFunc() {
    'use strict';
    return function () {
        time++;
        document.querySelector("#display").textContent = time;
    };
}