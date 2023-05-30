// 버튼이 클릭되면 json 형식 문자열을 파싱해서 화면에 출력


var jsonStr = `[ {

    "name" : "도레미"
    , "major" : "컴퓨터 공학"
    , "grade" : 2
}

,{

    "name" : "파솔라"
    , "major" : "건축과"
    , "grade" : 1

}

,{

    "name" : "시도"
    , "major" : "도시재생과"
    , "grade" : 4

}

,{

    "name" : "파파미"
    , "major" : "오징어순대과"
    , "grade" : 5

}

]`


var jsObj = JSON.parse(jsonStr);

window.onload = () => {


    const btn1 = document.getElementById("btn1")

    btn1.addEventListener("click", (e) => {



        e.preventDefault();

        // json 형식의 문자열

        console.log(jsObj);


        for (obj of jsObj) {
            // 화면에 출력

            // 테이블의 행을 생성
            let newTr = document.createElement('tr');


            // 테이블 한칸 생성 
            let newTdName = document.createElement('td');
            newTdName.innerHTML = obj.name;
            let newTdMajor = document.createElement('td');
            newTdMajor.innerHTML = obj.major;
            let newTdGrade = document.createElement('td');
            newTdGrade.innerHTML = obj.grade;

            newTr.appendChild(newTdName);
            newTr.appendChild(newTdMajor);
            newTr.appendChild(newTdGrade);

            let tbody = document.querySelector('#attendant > tbody');

            tbody.appendChild(newTr);

        }










    })




  



}