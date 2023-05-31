window.onload = ()=> {

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        // 미추홀구 시청 위도, 경도알아오기.
        center: new kakao.maps.LatLng(37.463598, 126.650254), // 지도의 중심좌표
        level: 6 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 



// 중심좌표 변경

var markerPosition  = new kakao.maps.LatLng(37.463598, 126.650254); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 마커생성

var positions = [];


let url = 'https://apis.data.go.kr/3510500/evacuation_facilites/getList?serviceKey=5%2BZ08pGAQa%2B%2FyYPyEmAcNCBDdikEtIEfedbmm7%2BOUSzXvXShj0wk70uQUpirtxLl%2B8nNvqfNWRK5L9Up3K1iOA%3D%3D&pageNo=1&numOfRows=10&type=json'
    
let xhr = new XMLHttpRequest();
xhr.open('get',url);
xhr.send();

xhr.onreadystatechange = function(){
    
    let resDiv = document.querySelector('#result')
    if(xhr.readyState === 4 && xhr.status == 200){

        console.log('출력테스트 ',xhr.responseText);

        let jsObj = JSON.parse(xhr.responseText);
        console.log('객체변환',jsObj);

        let itemArr = jsObj.response.body.items.item;

        var positions = [];

        resDiv.innerHTML += '<ul>'
        
        for(item of itemArr){

            resDiv.innerHTML +=

                `<li>
                    
                    <h1>시설명 : ${item.cvdf_shunt_fclt_names}</h1>
                    <p>주소 : ${item.road_nm_addr}</p>
                    <p>위도 : ${item.lat}</p>
                    <p>경도 : ${item.lot}</p>
                    <hr>

                    </li>
                    
                `

                let position = {  
            
                    title: item.cvdf_shunt_fclt_names, 
                    latlng: new kakao.maps.LatLng(item.lat, item.lot)
            
            };
    
            positions.push(position);

        }

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




}

}

