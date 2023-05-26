window.onload = ()=>{


    let date = new Date();

    let hour = date.getHours();

    

    



    let h1 = document.querySelector('h1')
    let imgNode = document.createElement('img');

    h1.onclick = function(){

        if(hour < 12){

            imgNode.src =  'images/afternoon.jpg';

            container.appendChild(imgNode);

        } else {

            imgNode.src =  'images/morning.jpg';
    
            container.appendChild(imgNode);
            

        }
        



    }
    
}