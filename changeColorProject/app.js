let colorName = document.querySelector(".colorName");
let button = document.querySelector(".button");
let container = document.querySelector(".container")
let body = document.body
eventListener();


function eventListener(){
    button.addEventListener("click",changeColor);
}


function changeColor(e){
    let color0 = ""
    let color1="turquoise"
    let color2="yellow"
    let color3 ="gray"
    let color4="red"
    let color5="white"
    let color6="wheat"
    let color7="blue"
    let color8="black"
    let color9="brown"
    let color10="orange"
    let array= [color0,color1,color2,color3,color4,color5,color6,color7,color8,color9,color10]
    let rand= Math.ceil(Math.random()*10)
    
    colorName.innerHTML= `Background-color:${array[rand]}`
    container.className= `${array[rand]}`
    body.className= `${array[rand]}`
    
    console.log(array[rand])
    e.preventDefault();

}