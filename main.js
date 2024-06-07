
let Counter = document.getElementById("Counter")
let count = 0
let Boduk = document.getElementById("body")
let Boody = document.querySelector("ul")

// let btn = document.getElementById('btn'),
//     rect = btn.getBoundingClientRect(),
//     html = document.documentElement,
//     rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    
// function buttonRun(e) {
//     let L = rand(0, html.clientWidth - rect.width),
//         T = rand(0, html.clientHeight - rect.height);
        
//     this.style.left = L + 'px';
//     this.style.top = T + 'px';
// }
// btn.onclick = () =>{
//     buttonRun();
//     Plus();
//     }
// }
let btn = document.getElementById('btn'),
    rect = btn.getBoundingClientRect(),
    html = document.documentElement,
    rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    
function buttonRun(e) {
    let L = rand(0, html.clientWidth - rect.width),
        T = rand(0, html.clientHeight - rect.height);
        
    this.style.left = L + 'px';
    this.style.top = T + 'px';
}
function Plus(){
    count += 1;
    Counter.textContent = count;
}
function Check(){
    Boody.textContent = "Я"
}
function Check1(){
    if(Boody.textContent == "Я"){
        Boody.textContent = "Я люблю"
    }
    
}
function Check2(){
    
    btn.textContent = "Я люблю\
     тебя"

}
btn.addEventListener('click', Check2);


