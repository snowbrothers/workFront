window.onload = function(){

    btn1.onclick = function(){

        let element = document.createElement('h3');
        
        console.log(element);
        let textNode = document.createTextNode('세종대왕');


        element.appendChild(textNode);


        // area1 의 자식요소로 접근
        area1.appendChild(element);

        area1. innerHTML += '<h3>innerHTML 로도 가능하구나</h3>'

    }
    


    // 요소의 속성을 설정하는 방법  !
    btn2.addEventListener('click', function(){

        //  img 요소노드 생성

        let imgNode = document.createElement('img');
        


        // 속성 설정하는 방법
        imgNode.src = 'images/morning.jpg';

        imgNode.setAttribute('width','400px')
        imgNode.setAttribute('height','300px')

        // 요소 의 자식객체로 연결 
        area2.appendChild(imgNode);



        area2.innerHTML += '<br>짜잔 <img src="images/morning.jpg" width = "150px" height="100px">';

    });

    btn3.addEventListener('click', (e)=>{
        //  바로 선택 가능
        area3.remove();

        // 이벤트가 발생한 요소

        let target = e.target;

        console.log(target);

        // 상위요소를 반환
        console.log(target.parentNode);


        
        // 상위요소의 자식노드를 삭제
        let delNode = document.getElementById('area1');
        target.parentNode.removeChild(delNode);    

        
    })

    btn4.addEventListener('click', function(){
        
        // p요소 생성
        let element = document.createElement('p');
        // text node 생성
        let textNode = document.createTextNode('신규노드 추가요~')

        // 연결
        // 부모요소의 맨 마지막 요소로 추가가 됨
        element.appendChild(textNode);

        // 부모요소 선택(body 선택)
        let body = document.querySelector('body');

        // 노드 선택 (삽입하고 싶은 위치의 요소를 선택) h1 선택
        let btn2 = document.getElementById('btn2')

        // insertBefore(추가할 요소, 추가할 위치의 요소)
        body.insertBefore(element, btn2);

    })



}