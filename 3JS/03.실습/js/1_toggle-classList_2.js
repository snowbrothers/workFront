// view.addEventListener('click', function(){
  //   // 넣었다 뺐다 할 수 있음. 토글   
  //   detail.classList.toggle('hidden');

  //   });

  // view 에 클릭 이벤트를 달아줬다.
  view.onclick = () =>{

    // toggle 스위치를 껏다 켰다 하는 것 처럼 
    // add / remove 메소드를 같이 쓸 수 있도록 만들어진 메소드 이다.
    detail.classList.toggle('hidden');
    // alert('Test')
  }
