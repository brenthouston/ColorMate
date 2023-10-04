function backGrd (color) {
   

    var x = Math.floor(Math.random() * 256)
    var y = Math.floor(Math.random() * 256)
    var z = Math.floor(Math.random() * 256)

    const main = document.querySelector("main")
    const setBG = document.querySelector("body")
  
    const RGB=document.createElement("div")
   
    // setBG.style.background = "rgb("+x+","+y+","+z+")";
    
    
    RGB.innerHTML = ` 
    <div style= "height:100px; width:100px; border-style:2px,solid,black; background-color:rgb(${x}, ${y}, ${z})" ><p>RGB: ${x}, ${y}, ${z}</p></div>
       `
      

       main.appendChild(RGB)
       

       
}


