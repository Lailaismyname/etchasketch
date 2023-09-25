window.addEventListener('load', ()=>{
    let evenement = 'mouseover';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        evenement = 'mousedown';
        console.log('tel');
    }
    else{
        evenement = 'mouseover';
        console.log('pc');
    }
    const sketchBox = document.querySelector('#sketchBox');
    const box = document.querySelectorAll('box');
    const okBtn = document.querySelector('#okBtn');
    const colorBtn = document.querySelectorAll('.colorBtn');
    let color = '#ABF1C8';
        function makeGrid(size){
            size = size;
            for(let i = 0; i < (size*size); i++){
                const box = document.createElement('div');
                box.classList.add('box');
                box.id = `box${i}`;         
                sketchBox.appendChild(box);
                sketchBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            }
        }
        function randomNumber(){
            let ranNum = Math.random() * (255 - 0) + 1;
            return Math.trunc(ranNum);
        }
        makeGrid(16);       
        sketchBox.addEventListener(evenement, (event)=>{
                if(event.target.classList.contains('box')){
                    event.target.style.background = color;
                }
            });
        okBtn.addEventListener('click', (event)=>{
            let gridSize = document.querySelector('#gridInput').value;
            sketchBox.innerHTML = '';
            makeGrid(gridSize);
        })
        colorBtn.forEach(item =>{
            item.addEventListener('click', (event)=>{
                console.log(navigator.platform);
                if(event.target.id == 'black'){
                    color = 'black';
                }
                else if(event.target.id == 'white'){
                    color = 'white';
                }
                else if(event.target.id == 'eraser'){
                    color = '#757575';
                }
                else{
                    color = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
                }
            })
        })
})
