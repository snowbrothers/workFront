window.onload = function(){

    console.log('화면이 모두 로딩 되었습니다.')

    let btn1 = document.getElementById('btn1');
    let lottoDiv = document.getElementById('lottoDiv');

    // let nums = [3, 5, 7, 9, 12];

    // 3. 버튼이 클릭되면 div를 초기화
    btn1.onclick = function(){

        lottoDiv.innerHTML = '';
        var color = '';
    
    for(var i = 0;  i < 6; i++){

        var nums = parseInt((Math.random() * 45)) + 1;

            if(nums >= 0 && nums <= 10){
                color = 'red';
            }else if(nums >= 11 && nums <= 20){
                color = 'blue';
            }else if(nums >= 21 && nums <= 30){
                color = 'green';
            }else if(nums >= 31 && nums <= 40){
                color = 'orange';

            }else{
                color = 'yellow';
            }

            lottoDiv.innerHTML += `<div class = "ball" style='background-Color: ${color}'> ${nums}</div>`;
        
    }

    

        }
       
            

    };


    function getColor(){
        
        console.log('색상반환')

        let r,g,b;

        r = parseInt(Math.random()*256);
        g = parseInt(Math.random()*256);
        b = parseInt(Math.random()*256);


        return `rgb(${r},${g},${b})` ;
    }

    
    



// function createLotto(){

//     for(var i = 0; i < 6; i++){

//     }

//     var num = parseInt(math.random()*45+1);

    

// }
/**
 *  1. 화면이 모두 로드 된 이후 실행
 * 
 *  2. 버튼을 선택, div 선택
 *      document.getElementById('id')
 
*  3. 로또 번호 생성
 *      임의의 번호 생성
 *      parseInt(Mate.random()*6)
 * 
 *  4. 버튼을 클릭하면 div 에 생성된 번호를 출력 
 *      div.innerHTML = `<div class = 'ball'>${num}</div>`
 */