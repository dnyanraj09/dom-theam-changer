

let img = document.getElementById("clk-Img")
let checkBtn= document.getElementById("checkValue")

let body = document.getElementById("body")

function chnageImage(color){

     switch(color){
         
    case 'blue':
        img.src=`images/blue.webp`
        break;

    case 'orange':
        img.src=`images/orange.webp`
    break; 

    case 'skin':
        img.src=`images/skin.webp`
    break;

    case 'yellow':
     img.src='images/yellow.webp'
     break;
    
    default:
        break;
     }

}

checkBtn.addEventListener('click',function(e){

     if(checkBtn.checked){
        body.classList.remove("white-theam")
        body.classList.add("black-theam")
     }else{
        body.classList.remove("black-theam")
        body.classList.add("white-theam")
     }
})


