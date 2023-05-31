var map;
window.onload = () => {

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 8 // 지도의 확대 레벨
    };

    

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    map = new kakao.maps.Map(mapContainer, mapOption); 

    // let 키워드로 선언하면 자동완성 됨.
    // 타입을 명시하지 않아도 사용은 가능하나 자동완성이 안됨.
    const btn = document.getElementById('btn');

    
    let mapX = document.getElementById('X');
    let mapY = document.getElementById('Y');

    //  let res = document.querySelector('#result')

    // 함수의 인자로 이벤트 객체를 받아온다.
    btn.addEventListener('click', function (e) {
        // 기본 이벤트 제거
        e.preventDefault();

        if ("geolocation" in navigator) {

            navigator.geolocation.getCurrentPosition(function (position) {
             doSomething(position.coords.latitude, position.coords.longitude);
            
            })

        } else {

            alert('geolocation 지원 불가 ! - 현재위치를 알 수 없습ㄴ다.')

        }

        function doSomething(latitude, longitude) {
            // res.innerHTML += `경도 :${latitude} <br>위도 : ${longitude}<br`
            mapX.value = longitude;
            mapY.value = latitude;


            var locPosition = new kakao.maps.LatLng(latitude, longitude);
            
            
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map : map,
                position: locPosition
            });


            map.setCenter(locPosition);

            let campForm = document.querySelector("#campForm");
        let formData = new FormData(campForm);

        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        let parms = '';

        // key / value pairs 반환


        for (let pair of formData.entries()) {

            console.log('pair[0]', pair[0]);
            console.log('pair[1]', pair[1]);

            parms += `${pair[0]}=${pair[1]}&`



        }

        url += parms;
        console.log(parms);
        console.log(url);


        // ES6에서
        //url 요청결과를 받아야한다.

        fetch(url)
            // 요청결과가 성공이라면
            // 화살표함수 에서 한줄인 경우 return 문과 {}가 생략 가능
            // res.json() : javascript object로 반환
            .then(res => res.json())
            .then((json) => {
                console.log('json', json);

                if(json.response.body.items == ''){
                    alert('주변에 캠핑장이 없습니다. 반경을 확대해보세요 ! ')
                    
                    return;
                }
                // 캠핑장 리스트를 매개변수로 넣어준다.
                printCampInfo(json.response.body.items.item);


                // return false;
            })

            .catch((err) => console.log(err));

        }

        

    });


    // 현재 나의 위치를 확인하고 mapX, mapY요소의 value 값에 세팅하기.

}

// 캠핑장 정보 출력
// 배열을 매개변수로 받아서 배열에 입력된 캠핑장 정보를 화면에 출력합니다.
function printCampInfo(itmeArr) {



    let resDiv = document.querySelector('#result');

    // let itmeArr = jsObj.response.body.items.item;

    // div 초기화.
    resDiv.innerHTML = '';


    var positions = [];

    resDiv.innerHTML += '<ul>'

    // 마커를 여러개 생성 하기 위해서
    // 위치배열을 생성
    
    
   
    for (item of itmeArr) {

        resDiv.innerHTML +=


            `<li>   
                     <h1>${item.facltNm}</h1>
                    
                        <p><img src="${item.firstImageUrl}"></p>
                    
                        <p>캠핑장 : ${item.intro}</p>
                        <p>mapX : ${item.mapX}</p>
                        <p>mapY : ${item.mapY}</p>
                    
                    </li>
                    <hr>

                    `;

        // 포지션 객체를생성
        let position = {  
            
                title: item.facltNm, 
                latlng: new kakao.maps.LatLng(item.mapY, item.mapX)
        
        };

        positions.push(position);

    }

    resDiv.innerHTML += '</ul>'

    console.log("positions",positions)

    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        
        for (var i = 0; i < positions.length; i ++) {
    
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35); 
            
            // 마커 이미지를 생성합니다    
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
            
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({

                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage // 마커 이미지 

            });
        }

}