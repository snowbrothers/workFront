window.onload = function(){


    // onclick 은 왜 안되지
    // onclick() << X onclick << O

    btn1.onclick = function(){

        // window.open('http://www.naver.com','창이름');
        // open(url, '창이름')

        // open(url, 창이름, '속성')
        window.open('BOM.html', 'BOM', 'width = 500, height = 500')
    }

    // window.open(); : 새탭
    // window.open('http://www.naver.com'); // 새탭에 열리고 URL로 이동
    
    // open(url, 창이름, '속성')
    // window.open(' '); 

    // btn1.addEventListener('click', function(){
    //     window.open();
    // })

    // 타이머 관련 메소드
    // window.setTimeout()
    btn2.addEventListener('click', ()=>{

        // 새창띄우기
        let newWindow = window.open();
        newWindow.alert('3초 후에 이 페이지는 종료 됩니다.')

        //  setTimeout(콜백함수, 시간)
        //  일정시간 경과 후 콜백 함수를 한번 실행
        window.setTimeout(()=>{

            newWindow.close();

        }, 3000);


        timerId = window.setTimeout(()=>{

        })


    });



    btnStart.addEventListener('click', ()=>{

        // 일정시간마다 콜백함수를 반복 실행
        // window.setInterval(함수, 시간)

        window.setInterval(()=>{
            
            // 현재 날짜, 시간 정보를 담은 객체
            let date = new Date();

            area1.innerHTML 
            =   `${date.getHours()} : ${date.getMinutes()} :`
            + `<span id='second'> ${date.getSeconds()} </span>`; //  
            
        }, 1000)


    })


    btnStop.addEventListener('click',()=>{


        clearInterval(timerId);
    })


    btn3.addEventListener('click', ()=>{
    
    
        area3.innerHTML = '<h4> location 객체 <h4>' 
    
        
        for(key in location){
            console.log('key : ', key)

            console.log('value : ', location[key])
        
            area3.innerHTML += 
                    `key : ${key}, value : ${location[key]} <br>`;
        }

        
    
    
    })

    

    

}