window.onload = () => {

    let bttn = document.getElementById('bttn');

        // 버튼이 클릭되면 실행키실 함수를 정의
    bttn.addEventListener('click', function(){
        // notiBox 에 새로운 알림을 추가    
        // noti.innerHTML = '알림 내용 표시 !!!!' ;

        let noti = document.createElement('div');
        let text = document.createTextNode('알림내용 표시');


        // 화면에 출력
        // 자식요소로 등록

        noti.appendChild(text);
        
        // class 속성 추가 (디자인)
        noti.classList.add('noti')

        let noti_box = document.getElementById('noti-box');

        noti_box.appendChild(noti);

        // 3초 후 실행 
        setTimeout(()=>{

            noti.remove();

        }, 3000)
        // 요소 삭제
        

    })

        

    

}