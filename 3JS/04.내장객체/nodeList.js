window.onload = function(){


    btn1.addEventListener('click', function(){

        let javaNode = document.createElement('p');
        // javaNode.innerHTML = 'Java';
        let javaTextNode = document.createTextNode('Java');

        // 텍스트 노드를 자식노드로 등록
        javaNode.appendChild(javaTextNode);

    
        // 부모요소 선택    
        let body = document.querySelector('body')
        // 삽입할 위치의 요소 선택
        let p = document.querySelector('p')

        // 요소를 선택한 요소의 앞에 삽입
        body.insertBefore(javaNode, p)



        //



        let oracleNode = document.createElement('p');
        let oracleText = document.createTextNode('Oracle');

        oracleNode.appendChild(oracleText);

        body.insertBefore(oracleNode,p);
        

        let pNode3 = document.createElement('p');
        let text3 = document.createTextNode('servlet');
    
        pNode3.appendChild(text3);
    
        body.appendChild(pNode3);

        let pNode4 = document.createElement('p');
        let text4 = document.createTextNode('Spring');
        
        pNode4.appendChild(text4);

        body.appendChild(pNode4);
    

    });

    
    

    

    

    

    
    //


    
//
 
//

    



    

}