const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
let messageBoard1 = document.querySelector(".message-board-1")
let messageBoard2 = document.querySelector(".message-board-2")
let message1 = document.querySelector(".message-1")
let message2= document.querySelector(".message-2")


let createBoard1 = function(){
    let div = document.createElement("div");
    div.classList.add("pa");
    let p = document.createElement("p");
    p.innerHTML=message1.value;
    div.appendChild(p);
    messageBoard1.appendChild(div);
}

let createBoard12 = function(){
    let div= document.createElement("div");
    div.classList.add("pb-left");
    let p = document.createElement("p");
    p.innerHTML=message1.value;
    div.appendChild(p);
    messageBoard2.appendChild(div);
}
let createBoard2 = function(){
    let div= document.createElement("div");
    div.classList.add("pb");
    let p = document.createElement("p");
    p.innerHTML=message2.value;
    div.appendChild(p);
    messageBoard2.appendChild(div);
}
let createBoard22 = function(){
    let div = document.createElement("div");
    div.classList.add("pa-left");
    let p = document.createElement("p");
    p.innerHTML=message2.value;
    div.appendChild(p);
    messageBoard1.appendChild(div);
}


let messageDisplay1 = function(){
    if(message1 === ""){
        createBoard1.remove(div)
    }
    else{
        createBoard1();
        createBoard12();
        message1.value=""
    }  
}
let messageDisplay2 = function(){
    if(message2 === ""){

    }
    else{
        createBoard2();
        createBoard22();
        message2.value="";
    }  
}

btn1.addEventListener("click",messageDisplay1);

btn2.addEventListener("click",messageDisplay2);