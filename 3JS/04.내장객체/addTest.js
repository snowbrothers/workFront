window.onload = ()=>{

    let text = document.querySelector('#container > h2').innerText;

    let orderInfo = document.getElementById('orderInfo');

    order.onclick = function(){

        
        // orderInfo.innerHTML = text;

        let p = document.createElement('p');
        let innerTxt = document.querySelector('#container > h2').innerText;
        let textNode = document.createTextNode(innerTxt);

        p.appendChild(textNode);

        // style
        p.style.fontSize = '0.8em';
        p.style.color = 'blue';
        p.style.fontWeight = 800;
        //

        orderInfo.appendChild(p);

    }


}


// document.querySelector('#container > h2');
// <h2>​HTML+CSS+자바스크립트 웹 표준의 정석​</h2>​
// document.querySelector('#container > h2').innerText
// 'HTML+CSS+자바스크립트 웹 표준의 정석'
// let text = document.querySelector('#container > h2').innerText;
// undefined
// text
// 'HTML+CSS+자바스크립트 웹 표준의 정석'