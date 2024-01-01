const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const bg = document.body;

//generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i<6; i++){
        color = color + hex[Math.floor(Math.random()*16)]
    }
    return color;
};
//randomColor()
let intervalID;
const startChangingColor = () => {
    if(!intervalID){
        intervalID = setInterval(changeColor, 1000)
    }
    
    function changeColor(){
        bg.style.backgroundColor = randomColor();
    }
}
const stopChangingColor = () => {
    clearInterval(intervalID);
    intervalID = null;
}
startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor)
