window.onload = () => {

    
    btn1.addEventListener('click', ()=>{
        // 객체선언 
        let product = {
            // 속성 이름이 숫자인 경우에 접근하기 위해서는 
            // 반드시 대괄호를 사용하여 객체명['속성명'] 형식으로 접근해야한다.
            0 : '배열흉내'
            , pName : '아이폰12'
            , price : 1000000 // 같은 속성명으로 여러개가 정의된 경우에는
            , price : 1500000 // 뒤에 정의된 속성의 값만 저장된다.
            , brand : '애플'
            , spec : ['OLED','IS015']

        };
    
        console.log('product : ', product);
        area1.innerHTML = '객체 선언 테스트<br>'
        area1.innerHTML += `객체명['속성명'] 으로 접근하는 방법 <br>`

        area1.innerHTML += `객체명.속성명 으로 접근하는 방법 <br>`
    

        // 속성명에 공백, 특수문자가 입력된 경우 '', ""로 묶어 주어야 하며
        // .을 이용해서 접근이 불가능 하다.
        // []를 이용해서 값을 가져올 수 있다.
        let user = {
        
            'user name' : '문인수'
            , user_age : 20
            , 'id!!' : 'ismoon'
            
        }
    
    });


    btn2.addEventListener('click', () => {
        let name = '고경희';
    
        
        // 객체 선언
        
        let dog = {
            name : '백구'
            , kind : '진돗개'
            // 객체의 메소드
            // 함수 내부에서 이용 할때에는 function 을 그대로 이용하는 편이 좋다.
            , eat : function(food){
                // 객체의 내부속성에 접근하기 위해서 this 를 사용합니다.
                console.log(`${this['kind']} ${this.name}가 ${food}를 먹습니다.`);
            }

        }
        
        // 파라미터가 들어감.
        dog.eat('닭가슴살');


    })


    btn3.addEventListener('click', () =>{

        
        let game = {

            title : '크레이지 아케이드'
            , price : 0
            , supportOS : ['win7', 'win10']
            , service : true
        };


        console.log(game);
        
        for( const key in game ){

            console.log(`key : ${key}, game[key] : ${game[key]}`);

        }

    })

    btn4.addEventListener('click', () =>{

        // 빈 객체 선언
        let student = {};

        // 객체의 속성 추가
        // 속성이 이미 존재하는 경우 업데이트 없는 경우 추가
        student.name = '홍길동';
        student.age = 20;
        student['job'] = '의적';
        
        // 객체에 메서드 추가
        student.whoAreYou = function(){

            let str = '';

            for(const key in this){

                if(typeof(this[key]) !== 'function') {
                    str += `${key} : ${this[key]}`;
                }

            }

            return str;
        }
  

        console.log(student);
        console.log(student.whoAreYou());
        
        // 객체에 해당 속성이 정의되어 있으면 true
        // 없으면 false

        console.log('job' in student);

        // 객체의 속성을 제거
        delete(student.job);

        console.log(student);
        console.log(student.whoAreYou());
        console.log('job' in student);
        


    })
    

};