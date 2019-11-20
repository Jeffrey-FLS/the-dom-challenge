
"use strict";

//main logic for increasing counter
let counter = document.querySelector("#counter");
let unpaused = true;
setInterval(setTime, 1000);

function setTime() {
    if (unpaused){
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }
}

//find body element
let bodyVar = document.querySelector("#center");

bodyVar.addEventListener('click', function(event){
    event.preventDefault();
    let targetID = event.target.id;

    if (unpaused){
        if (targetID === "-") {counter.innerHTML = parseInt(counter.innerHTML) - 1;}
        if (targetID === "+") {counter.innerHTML = parseInt(counter.innerHTML) + 1;}
        if (targetID === "<3"){
            let x = counter.innerText;
            if (!(document.getElementById(x))){
                let like = document.createElement("LI");
                like.id = x;
                like.dataset.n = 1;
                like.innerText = `${x} has been liked ${like.dataset.n} times.`;
                document.querySelector(".likes").appendChild(like)
            }
            else{
                let like = document.getElementById(x);
                like.dataset.n++;
                like.innerText = `${x} has been liked ${like.dataset.n} times.`
            }
        }
    }

    if (targetID === "pause") {
        unpaused = !unpaused;
        let text = "";
        unpaused ? text = "pause": text = "resume";
        event.target.innerText = text;
    }

    //console.log(targetID);
    if (targetID === "submit"){
        let text = document.querySelector("input");

        // console.log(text.value);
        let newText = document.createElement("p");
        newText.innerText = text.value;
        document.querySelector(".comments").appendChild(newText);
        text.value = "";
    }
});