
window.onload = function(){

    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);
    
    document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`

}
function setColor(){
    
    // 0 ~ 255 까지 임의의 수를 추출한다.
    
    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);
    
    document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`

}


// setColor();