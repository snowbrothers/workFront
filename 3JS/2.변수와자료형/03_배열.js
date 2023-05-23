window.onload = function () {

    // 연결 확인
    let btn1 = document.getElementById('btn1');
    let area = document.getElementById('area1');

    // btn1 요소에 click 이벤트가 발생하면 함수를 실행한다.
    btn1.addEventListener('click', function () {

        // area.innerHTML = '삐용';

        let array1 = new Array(); // []
        let array2 = new Array(3); // [빈공간 x 3]

        let array3 = new Array('빨강', '파랑', '노랑', '초록');
        let array4 = ['java', 'oracle', 'html5', 'css3', 'javascript'];

        console.log('array1', array1);
        console.log('array2', array2);
        console.log('array3', array3);
        console.log('array4', array4);

        // 여러가지 타입을 입력
        let array5 = [
            '고경희'        // 문자
            , 20            // 숫자
            , true          // 논리값
            , [1, 2, 3, 4]  // 배열
            , function () {   // 함수
                return 1
            }
            , {}            // 객체

        ]

        console.log('array5', array5);


        // 2. 배열에 값을 추가하기

        array1[0] = '귤';
        array1[1] = '사과';
        array1[3] = '망고';
        array1[4] = '딸기';

        console.log('======================= ', array1);
        area.innerHTML = `array1(빈배열) 에 값 대입 : [${array1}] <br>`
            + `array1.length : ${array1.length} <br><br>`
    });

    // array2[0] = '자동차';
    // array2[1] = '비행기';
    // array2[2] = '마차';
    // array2[3] = '선박';


    // area.innerHTML += `array2(빈배열)에 값 대입 : [${array2}] <br>`

    //                     + `array2.length : ${array2.length}`;


    let btn3 = document.getElementById('btn3');
    let area3 = document.getElementById('area3');

    btn3.addEventListener('click', function () {

        // area3.innerHTML = '실행확인';

    })


    // 2) concat() : 배열을 연결하여 반환
    // 배열1.concat(배열2)
    // 배열1의 요소, 배열2의 요소 를 결합하여 새로운 배열을 만들어 반환
    // 원본에 영향을 미치지 않는다.
    btn3.addEventListener('click', function () {

        let array1 = ['귤', '사과'];
        let array2 = ['바나나', '수박', '오렌지'];

        area3.innerHTML = `array1: [${array1}] <br>`
        area3.innerHTML += `array2: [${array2}] <br>`

        area3.innerHTML += `결합 : [${array1.concat(array2)}] <br>`
        area3.innerHTML += `array1: [${array1}] <br>`   // 원본에 영향을 미치지 않는다.
        area3.innerHTML += `결합 : [${array2.concat(array1)}] <br>`
    })

    // 3) join() 배열의 요소들을 결합하여 문자열로 반환
    // 매개값으로 구분자를 입력할 수 있다.
    let btn4 = document.getElementById('btn4');
    let area4 = document.getElementById('area4')

    btn4.addEventListener('click', function(){

        area4.innerHTML = '실행완료';
        let array = ['서울', '강원', '경기'];
        
        area4.innerHTML = `array : [${array}] <br>`
        area4.innerHTML += `arary.toString : [${array.toString()}]<br>`
        // 배열 -> 문자열
        area4.innerHTML += `arary.join : [${array.join('/')}]<br>`
        area4.innerHTML += `typeof(arary.join('/') : [${typeof(array.join('/'))}]<br>`

        // 공백을 구분자로 문자열 생성
        let str = array.join(' ');
        // 문자열 -> 배열
        

        area4.innerHTML += `str.split(' ') : [${str.split(' ')}]<br>` ;
        area4.innerHTML += `typeof(str.split(' ')) : [${typeof(str.split(' '))}]` ;

    })


    // 4) reverse
    // 원본에 영향을 미치는 메소드()

    let btn5 = document.getElementById('btn5');
    let area5 = document.getElementById('area5');


    btn5.addEventListener('click', function(){

        area5.innerHTML = '되나?'

        // ES6 에서 추가된 배열 생성 메소드
        
        let array = Array.of(10, 5, 3, 6);


        area5.innerHTML = `array : [${array}] <br><br>`;
        area5.innerHTML += `array.reverse() : [${array.reverse()}] <br><br>`;
        area5.innerHTML += `array 바뀜 ㅋ: [${array}] <br><br>`;

    })

    // sort()
    // 매개변수가 없는 경우 ASCII 문자 오름차순으로 정렬
    // 원본 배열에 영향을 미치는 메서드
    let btn6 = document.getElementById('btn6');
    let area6 = document.getElementById('area6');

    btn6.addEventListener('click', function(){

        area6.innerHTML = '확인';

        let array = Array.of(1, 5, 6, 2);
        let array2 = Array.of('다','나','가','라');

        area6.innerHTML = `array : [${array}] <br><br>`
        area6.innerHTML += `array2 : [${array2}] <br><br>`
        area6.innerHTML += `array.sort : [${array.sort()}] <br><br>`
        area6.innerHTML += `array.sort : [${array2.sort()}]<br><br>`

        area6.innerHTML += `array : [${array}] <br><br>`
        area6.innerHTML += `array2 : [${array2}] <br><br>`

        // sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다.
        array.sort(function(left, right){
            return left - right; // 
            
        });

        area6.innerHTML += `array 오름차순 정렬 : [${array}] <br>`;


        array.sort(function(left, right){
            return right - left;
        });

        area6.innerHTML += `array2 내림차순 정렬 : [${array2.sort().reverse()}]`
        
    });


    // push(), pop()

    let btn7 = document.getElementById('btn7');
    let area7 = document.getElementById('area7');

    btn7.addEventListener('click', function(){

        area7.innerHTML = '확인';

        let arr = ['하이유','유재식','데북혼','방명수','정중앙','노옹철'];

        area7.innerHTML = `arr : [${arr}]<br>`
        console.log(arr.push('잔나라'));
        area7.innerHTML += `arr : [${arr}]<br>`
        console.log(arr.push('김진짜'));
        area7.innerHTML += `arr : [${arr}]<br>`

        // 배열의 마지막 요소를 반환하고 제거합니다.
        area7.innerHTML += `제거되는 요소 : [${arr.pop()}]<br>`
        area7.innerHTML += `arr : [${arr}]`
        

    })

    
    let btn8 = document.getElementById('btn8');
    let area8 = document.getElementById('area8');

    btn8.addEventListener('click', function(){

        let arr = ['이병건', '철면수심','단군', '주호민','김풍','통닭천사'];

        area8.innerHTML = '확인';

        area8.innerHTML += `arr : [${arr}]<br><br>`
        arr.unshift('에스파');
        area8.innerHTML += `arr unshift 후 : [${arr}]<br><br>`
        // unshift 후 요소의 개수를 리턴한다.
        arr.unshift('아이브');
        area8.innerHTML += `arr unshift 후 : [${arr}]<br><br>`

         // 맨앞에 요소를 반환 후 제거한다
    area8.innerHTML += `arr.shift() : ${arr.shift()}<br>`
    area8.innerHTML += `arr.shift() 후 : [${arr}]<br>`
    area8.innerHTML += `arr.shift() : ${arr.shift()}<br>`
    area8.innerHTML += `arr.shift() 후 : [${arr}]<br>`


    })



    // 8) slice(), splice()
    let btn9 = document.getElementById('btn9');
    let area9 = document.getElementById('area9');

    btn9.addEventListener('click', function(){

        let array = ['java', 'oracle', 'HTML5', 'CSS3', 'JS'];

        area.innerHTML += `array : [${array}]<br><br>`;
        // array.slice (시작인덱스, 끝인덱스)
        // 시작인덱스 ~ (끝인덱스 -1) 요소를 추출
        // 끝인덱스는 포함하지 않습니다.
        // 원본 배열에는 영향을 미치지 않습니다.

        area9.innerHTML +=`array.slice(2, 4) : [${array.slice(2, 4)}] <br>`;
        area9.innerHTML += `array : [${array}]<br><br>`;

        // array.splice(2, 0, 'spring')
        // 시작인덱스, 삭제할 갯수, 추가할 요소
        area9.innerHTML += `array.splice(2, 0 , 'spring', 'mybatis') : `
                                + `[${array.splice(2, 0, 'spring', 'mybatis')}] <br>;`


        area9.innerHTML +=  `array : [${array}]<br><br> ;`                                   
    });

   


}