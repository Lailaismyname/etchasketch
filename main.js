window.addEventListener('load', ()=>{
    let evenement = 'mouseover';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        evenement = 'touchmove';
        console.log('tel');
    }
    else{
        evenement = 'mouseover';
        console.log('pc');
    }
    
    //TODO: 
    const sketchBox = document.querySelector('#sketchBox');
    const box = document.querySelectorAll('box');
    const okBtn = document.querySelector('#okBtn');
    const colorBtn = document.querySelectorAll('.colorBtn');
    let color = '#ABF1C8';
        //functie die grid maakt
        function makeGrid(size){
            size = size;
            for(let i = 0; i < (size*size); i++){
                const box = document.createElement('div');
                box.classList.add('box');
                box.id = `box${i}`;         //heeft dit een id nodig? laten staan want is handig om te weten voor in de toekomst
                sketchBox.appendChild(box);
                sketchBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            }
        }
        //functie die random nummer teruggeeft
        function randomNumber(){
            let ranNum = Math.random() * (255 - 0) + 1;
            return Math.trunc(ranNum);
        }

        //bij start maak grid van 16*16
        makeGrid(16);       

        // onhover moet de achtergrondkleur van het blokje veranderen 
        sketchBox.addEventListener(evenement, (event)=>{
                if(event.target.classList.contains('box')){
                    event.target.style.background = color;
                }
            });

        // als er op gridsize knop word gedrukt, 
        okBtn.addEventListener('click', (event)=>{
            //pak waarde
            let gridSize = document.querySelector('#gridInput').value;
            //empty de sketchbox
            sketchBox.innerHTML = '';
            //maak nieuwe grid
            makeGrid(gridSize);
        })

        //als er een kleur geselecteerd is, wijs nieuwe kleur aan color toe. 
        colorBtn.forEach(item =>{
            item.addEventListener('click', (event)=>{
                console.log(navigator.platform);
                if(event.target.id == 'black'){
                    color = 'black';
                }
                else if(event.target.id == 'white'){
                    color = 'white';
                }
                else{
                    color = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
                }
            })
        })
})


//extra als het op mobiel is dan tekenen met onclick want hover bestaat niet volgens mij? eerst ff testen wat t doet?