window.onload = ()=>{

    

    btn1.onclick = function(){

        let name = document.getElementById('username').value;
        let maj = document.getElementById('major').value;
        
        let tr = document.createElement('tr')
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        
        
        let userNode = document.createTextNode(name);
        let majorNode = document.createTextNode(maj);
    

    let td = document.createElement('td');

    td1.appendChild(userNode);
    td2.appendChild(majorNode);

    tr.appendChild(td1);
    tr.appendChild(td2);

    let tbody = document.querySelector('tbody')

    tbody.appendChild(tr);
    }



}