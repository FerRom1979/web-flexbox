

/* ****************nav_menu_responsive****************** */
const menu =document.getElementsByClassName("menu")[0];
const hamburguesa = document.getElementsByClassName("icon-menu")[0];
const menuHamburguesa = document.getElementById("boton_menu");
let abierto = false;


const toggleMenu = ()=>{
    menu.classList.toggle("menu-dos");
    menu.style.transition = "transform 0.8s ease-in-out";

}
hamburguesa.addEventListener("click",function(){
    toggleMenu();
    if(document.getElementById(".menu.menu-dos")){
        abierto = true;
    }else{
        abierto = false;
    }
})
window.addEventListener("click",function(e){
    
    if(abierto){
        if(e.target !== menuHamburguesa){
            toggleMenu();
            abierto = false;
        }
        
    }
})

window.addEventListener("resize", function (){
    if(screen.width > 700){
        if(abierto){
            toggleMenu();
            abierto.style.transition = "none";
            abierto = falso;
        }
    }
})
 