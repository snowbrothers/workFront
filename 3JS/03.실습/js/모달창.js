window.onload = () => {

    // 내부함수는 외부에서 호출 불가능 ! ! !



    // open,close 는 window객체의 내장함수
    // 아이디로 참조 불가
    // 직접 변수에 담아줘야 합니다.

    // # open : 모달창 보여주기
    // # close : 모달창 닫기 
    
    let open = document.getElementById('open');
    let close = document.getElementById('close');
    // 특수문자가 입려되서 아이디로 바로 접근 안됨
    let modal = document.getElementById('modal-box')
    

    open.addEventListener('click',function(){
        
        // 모달창 열기
        // active class 속성 추가
        modal.classList.add('active');

    });

    close.addEventListener('click', function(){

        // 모달창 닫기
        // class 속성 active 제거
        modal.classList.remove('active');

    });

}

function test(){
    console.log('test');
}