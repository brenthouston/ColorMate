

// random swatches
function backGrd (color) {
    
    var x = Math.floor(Math.random() * 256)
    var y = Math.floor(Math.random() * 256)
    var z = Math.floor(Math.random() * 256)

    const main = document.querySelector("main")
    const RGB=document.createElement("div")
    
    
    RGB.innerHTML = ` 
    <div class="swatches" 
    id=${x}
    draggable="true" 
    style= "height:200px; width:200px; background-color:rgb(${x}, ${y}, ${z})" >
    <p>RGB: ${x}, ${y}, ${z}</p>
    </div>
       `
     
       main.appendChild(RGB)
       
       //select the swatches element
       document.querySelectorAll(".swatches").forEach(function(div){
        div.addEventListener('dragstart',dragStart)
       });
       // attach the dragstart event handleer
       
        
       // handle the dragstart

 function dragStart(e){
  
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() =>{
        e.target.classList.add('hide');
        }, 0);
    
        
       }

    const box = document.body.querySelector("#box")

   
        box.addEventListener('dragenter', dragEnter);
        box.addEventListener('dragover', dragOver);
        box.addEventListener('dragleave', dragLeave);
        box.addEventListener('drop', drop);
   
    function dragEnter(e) {
        e.preventDefault()
        e.target.classList.add('drag-over')
        
    }
    
    function dragOver(e) {
        e.preventDefault()
        e.target.classList.add('drag-over')
    }
   
    function dragLeave(e) {
        e.target.classList.remove('drag-over')
    }
    
    function drop(e) {
        e.preventDefault()
        e.target.classList.remove('drag-over')


        //get draggable element
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id)

        //add to drop target
        e.target.appendChild(draggable);

        //display draggable element
        draggable.classList.remove('hide')
    }
   
   
    }




  

