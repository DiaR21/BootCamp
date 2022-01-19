let $btnGatito=document.querySelector('#btnGatito');

$btnGatito.addEventListener('click', ()=>{
  fetch('https://api.thecatapi.com/v1/images/search')
        
    .then(resp=>resp.json()
          // function(resp){
             //   return resp.json()
           // }
        
        ).then(data=>{
            console.log(data);
            let imagenGatito=document.createElement('img');
            imagenGatito.src=data[0].url;
            document.body.appendChild(imagenGatito);
        });
});



let $btnPerrito=document.querySelector('#btnPerrito');

$btnPerrito.addEventListener('click', ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp=>resp.json()
    ).then(data=>{
        console.log(data);
        let imagenPerrito=document.createElement('img');
        imagenPerrito.src=data.message;
        document.body.appendChild(imagenPerrito);
    });
});