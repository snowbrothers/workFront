// 함수를 실행시키기 위해서 버튼을 클릭 합니다 !!
function typeTest(){
    
    // document.write('typeTest')

    // alert('출력')

    console.log('typeTest')
    

    // 변수 선언시 사용되는 키워드
    // var, let, const(상수)
    // 숫자형 : 정수와 실수를 포함
    let age = 20;
    let height = 163.5;

    // 문자열 : 작은따옴표, 큰따옴표로 묶은 데이터
    let name = "문희숙";
    let name1 = '문희숙';
    let name2 = ""; //빈문자열


    // 논리값 : true, false
    let check = false;

    // 박스 선택 
    // 박스에 값 입력
    var text = document.getElementById("area1");
    
    // Template literals 템플릿리터럴
    // "",'' 대신 ``(백팃)을 사용하여 변수($ {expression} 를 함께 출력
    text.innerHTML += '<h4>안녕하세요</h4>'
    text.innerHTML +=  `이름: ${name}, type : ${typeof(name)} <br>
                        나이 : ${age}, type : ${typeof(age)} <br>
                        키 : ${height}, type : ${typeof(height)}`
    

}

function typeTest2(){

    console.log(typeTest2);
    
    // 배열 선언
    let hobbies = ['축구','농구','야구'];

    let area2 = document.getElementById('area2');
    area2.innerHTML = ('객체 테스트 <br>');
    area2.innerHTML += `hobbies : ${hobbies},  type : ${typeof(hobbies) }<br>`

    // 함수 선언 : 익명의 함수를 변수에 저장
    // 함수를 변수에 저장이 가능하고, 매개변수로 함수를 넘겨 줄 수도 있다.

    // let testFunc = function(num1, num2){
        // 매개변수의 갯수가 일치하지 않은 경우
        // , undefined가 매개변수 값으로 입력 되므로 오류가 발생한다 
        // 때문에 오류를 처리하기 위해 초기값을 지정해 줄 수 있다.

    // 초기값 지정.
    let testFunc = function(num1=0, num2=0) { 
        
        console.log('num1', num1);
        console.log('num2', num2);
        return num1 + num2;
    
    }

    // 함수를 실행 한다 : 변수이름(매개변수)
    console.log('testFunc', testFunc(10, 20));
    
    // 매개변수의 갯수가 일치하지 않아도 실행이 가능하다.
    console.log('testFunc', testFunc());

    area2.innerHTML += `testFuc : ${testFunc}, type : ${typeof(testFunc)} <br>`

    //객체타입

    let user = {
        /* 속성과 값으로 이루어져 있다.

            속성 : 값,
             속성 : 값, ...

        */
        name : '문인수',
        age  : 20,
        height : 163,
        id :'doorinwater',
        hobbies : ['축구','농구','야구']
        
    };

    // console.log(user);
    console.log('age : ',user.age);

    area2.innerHTML += `<br><br>user : ${user} / type : ${typeof(user)}<br>`;
    area2.innerHTML += `null type : ${typeof(null)}<br>`;
    area2.innerHTML += `undefined type : ${typeof(undefined)}<br>`;


}

function castingTest(){

    let area4 = document.getElementById('area4');

    area4.innerHTML += `${2 + '3'} <br>;`;
    area4.innerHTML += `${String(2) + Number(3)} <br>`;
    area4.innerHTML += `${2 + parseInt('3')} <br>`;
    area4.innerHTML += `${2 + parseFloat('3')}`;

    // 16진수를 10진수로 변환
    // ff : 255

    area4.innerHTML += `${parseInt('ff',16)}`
    
}


function opTest(){

    let area5 = document.getElementById('area5');

    // 안에 들어있는 '값'만 비교한다.
    area5.innerHTML = '"==" 연산자 테스트 <br><br>'
    area5.innerHTML += `7 == 7 : ${7 == 7}<br>`
    area5.innerHTML += `7 == 7 : ${7 == '7'}<br>`
    area5.innerHTML += `7 != 7 : ${7 != '7'}<br>`
    area5.innerHTML += `7 != 7 : ${'7' != '7'}<br>`



    // 값과 타입을 비교한다.
    area5.innerHTML += '<br>"=== 연산자 테스트 <br><br>'
    area5.innerHTML += `7 === 7 : ${7 === 7}<br>`
    area5.innerHTML += `7 === 7 : ${7 === '7'}<br>`
    area5.innerHTML += `7 !== 7 : ${7 !== '7'}<br>`
    area5.innerHTML += `7 !== 7 : ${'7' !== '7'}<br>`
}

function forTest(){
    

    let array = [1,2,3,4,5,6,7,8,9,10];

    
    for(let i = 0; i < array.length; i++){

        console.log(array[i]);

    }

    console.log('for =============================');
    
    for(let i in array){
        // 인덱스 값을 가지고 온다. 
        // i 에 배열의 인덱스 값 저장
        console.log(array[i]);

    }


    let student = {
        name : '고경희'
        , age : 20
        , class : '1'
    }

    // 객체의 속성, 속성값을 출력
    for(key in student){
        console.log(key,student[key]);
        
        // 객체명.속성명 -> 속성명을 알고 있을 때 사용
        // 속성명이 key인 요소를 찾는데 없기때문에 undefiend 반환
        // console.log(key, student.key); ERR
        
    }


    console.log('for in =============================');


    // 배열.forEach(function(변수){})
    // 배열의 요소를 함수의 매개변수로 전달
    array.forEach(function(num){
        console.log(num)
    });

    console.log('forEach =============================');

    let i = 0;
   
    while(true){
       
        i++;
        // 짝수이면 출력
        
        if(i % 2 == 0){
            continue;
        }
    
    console.log(i);

    if(i > 5){
        break;
    }

}

    console.log('while=====================')

    //ES6 부터 추가된 for문
    for(let iterator of array){
        console.log(iterator);
    }

}