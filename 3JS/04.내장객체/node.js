window.onload = ()=>{


    btn1.addEventListener('click', function(){

        let javaLi = document.createElement('li');
        
        let javaText = document.createTextNode('Java');

        javaLi.appendChild(javaText);

        let li = document.querySelector('li');

        let items = document.getElementById('items')

        items.insertBefore(javaLi, li);


        // 

        let oracleLi = document.createElement('li');
        
        let oracleText = document.createTextNode('Oracle');

        oracleLi.appendChild(oracleText);

        items.insertBefore(oracleLi, li);

        //

        let servletLi = document.createElement('li');
        
        let servletText = document.createTextNode('Servlet');

        servletLi.appendChild(servletText);

        items.appendChild(servletLi);

        //

        let springLi = document.createElement('li');
        
        let SpringText = document.createTextNode('Spring');

        springLi.appendChild(SpringText);

        items.appendChild(springLi);


        



    })


}