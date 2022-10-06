window.addEventListener('load', ()=>{
    //TODO: 
    const sketchBox = document.querySelector('#sketchBox');
        //met js een grid van 16*16 blokken maken, hier start de pagina ook mee
        function makeGrid(size){
            size = 16;
            for(let i = 0; i < (size*size); i++){
                const box = document.createElement('div');
                box.classList.add('box');
                box.textContent = i;
                box.id = `box${i}`;         //heeft dit een id nodig? laten staan want is handig om te weten
                sketchBox.appendChild(box);
                //console.log(sketchBox.childNodes);
            }
        }
        makeGrid(16);
                        //OKE PROGRESS! HOE ZORG IK ERVOOR DAT ER 16 DIVS OP 1 RIJ BLIJVEN STAAN?

        // onhover moet de achtergrondkleur van het blokje veranderen 

        // als er op knop word gedrukt, 
        //word de grid zo groot als de user invoert. en de vorige grid word vervangen met de nieuwe. max. 100
        
        //


})