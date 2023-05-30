window.onload = ()=>{
    // 페이지가 모두 불러져 있으면 함수를 실행
    // onload : 이벤트 

    

    btn1.onclick = function(e){

        // 버튼이 1개인 경우 submit 버튼으로 동작.
        // 기본 이벤트 제거
        

        // input 필드에 입력된 내용을 변수에 저장한다.
        let name = document.getElementById('username').value;
        let maj = document.getElementById('major').value;
        // 요소 생성
        let tr = document.createElement('tr')
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        
        
        // text 노드 생성 
        let userNode = document.createTextNode(name);
        let majorNode = document.createTextNode(maj);
    

    // let td = document.createElement('td');

    // 자식요소로
    td1.appendChild(userNode);
    td2.appendChild(majorNode);

    tr.appendChild(td1);
    tr.appendChild(td2);

    let tbody = document.querySelector('tbody')

    tbody.appendChild(tr);

    return false;
    
    }



}