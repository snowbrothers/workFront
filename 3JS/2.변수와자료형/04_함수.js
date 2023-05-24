window.onload =  function(){

    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', function(){
        console.log('addEvent')
    });


    let btn2 = document.getElementById('btn2');
    
    // 익명의 함수 : 변수에 대입하거나 함수실행시 인수로 사용할 수 있다.
    btn2.addEventListener('click', function(){
        
        alert('익명의 함수 실행(이벤트 핸들러를 통해 실행 ! ! !)');

    });

    let btn3 = document.getElementById('btn3');

    // btn3.addEventListener('click', function(){

    //     // alert('목요일 21시 23시 / 토요일 10시 12시 /  일요일 16시 18시 , 21시 23시')
    //     argTest('빰빠밤');

    // })


    

    // console.log(sum());

    btn4.addEventListener('click', ()=>{

        let res = sum_argu(11, 22, 33);
        console.log('합계 : ',res);

    })

    btn5.addEventListener('click', ()=>{
        let random = ran();
        console.log(`random : ${random}`);
    })

    

    btn6.addEventListener('click', ()=>{

        // let func = funTest();

        // console.log(func());

        funcTest()();
    })


    btn7.addEventListener('click', ()=>{
        
        // calc 의 value 값을 가져와서 text 변수에 저장
        let text = calc.value;

        // 콘솔창에 eval << 함수를 통해 text 문자열을 자바스크립트 코드로 바꿔 계산하여 출력
        console.log(eval(text));
        console.log('text 타입 : ', typeof((text)), text)
        console.log('계산 후 타입 : ', typeof(eval(text)), eval(text))

        console.log('btn7',eval(btn7));

    })



    btn8.addEventListener('click', ()=> {
        let num1 = -10 / 0;
        let num2 = 10 / 'a';
        let p = document.getElementById('p3');

          
        
    })





}; // window. onload 끝 ====================================================


function funTest(){
    
    // 클로저 
    // - 내부함수가 사용하는 외부함수의 지역변수는 
    //   내부함수가 소멸할때까지 소멸되지 않는 특성을 클로저라고 한다.

    let name = '문인수';

    return function(){
        alert( `${name}님 환영합니다.`);
    }
}


function ran(){
    let random = parseInt(Math.random() * 100 + 1);

    return random;
}



function sum_argu(){
    let res = 0;

    for(let i = 0; i< arguments.length; i++){
        res += arguments[i];
    }

    return res; 
};

// 함수의 매개변수
// 초기값지정 (ES6부터 도입)

function argTest(value = '매개값없음'){
    alert(value);
}


// 선언적 함수

// function 함수이름(매개변수,...){ }
// 호출 : 함수명 ()

function test(){
    console.log('test호출');
}

// 익명의 함수를 변수에 대입
// 익명의 함수 : 함수 이름이 없는 함수

let sum = function(a,b){

    return a + b;

}

console.log('함수실행결과 : ', sum(10, 20));



// 즉시실행함수

(
    function(a,b){
        console.log(`a : ${a}, b : ${b}`);
        console.log('자동으로 실행');
    // 파라미터로
    }(10, 20)
);



// 화살표 함수

const hi1 = function(){
    return alert('안녕하세요');
}


const hi2 = () => { 
    // return 생략가능
    alert('화살표함수 : 안녕하세요');
}


// 처리할 라인이 하나라면 {}와 return 문을 생략 할 수 있다.
const hi3 = () => alert('화살표함수 생략ver : 안녕하세요');
