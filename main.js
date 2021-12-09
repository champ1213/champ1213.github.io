// window.localStorage.setItem("hi","food")

var work = document.getElementById("button").addEventListener("click", workNow)
var workr = document.getElementById("buttonr").addEventListener("click", retrive)
function workNow(){
    var p = document.getElementById("text").value
    var key = document.getElementById("key").value

    const text = {
        name: p
    }
    
    console.log(JSON.stringify(text))
    window.localStorage.setItem(key, JSON.stringify(text));
}
function retrive(){
    var r = document.getElementById("r").value
    
    var p = document.createElement("p");
    p.innerHTML = window.localStorage.getItem(r);
    document.body.appendChild(p)
    p.className = p;
    
    
}

