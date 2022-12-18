
function load(){
    const content = document.querySelector('.contain');
    const load = document.querySelector('.spinner');
    content.style.display="block"
    load.style.display="none"
}
/*============================================== NavBar ================================================== */

/* ------------------------------------Abertura e fechamento do menu ----------------------------------- */

const navBtn = document.querySelector('.btn');
var navList = document.querySelector('.Navbar ul');

function toggleMenu(){

    navList.classList.toggle('active'); 
    navBtn.classList.toggle('active');  
    
}

navBtn.addEventListener('click', toggleMenu);

/* ------------------------------------ Scroll suave da NavBar ----------------------------------- */

const menuItens = document.querySelectorAll('.Navbar ul li a');

menuItens.forEach(Itens =>{
    Itens.addEventListener('click', scrollToIdOnClick);  
});

function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) /* - 60 */;

    scrollToPosition(to);

}
function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}
function scrollToPosition(to){
    window.scroll({
        top: to,
    });
}
/* ------------------------------------ (Show/Hide NavBar )with scroll ----------------------------------- */
const navbar = document.querySelector('.Navbar');
    let prevScrollPos = window.pageYOffset;
    
    window.addEventListener('scroll', () =>{
        let currentScrollPos =  window.pageYOffset;

        if(prevScrollPos < currentScrollPos ){
            if(navList.classList !="active"){
                navbar.classList.add('hide');
            }
        }else{
            if(navList.classList !="active"){
                navbar.classList.remove('hide');
            }
        }
        prevScrollPos = currentScrollPos;
    });
 
    /*===================================== Inicio ======================================================== */

    /* ------------------------------------ Efeito máquina de escrever ----------------------------------- */
    function showProfession(){

        function typeWriter(elemento){
            const textArray = elemento.innerHTML.split("");
            elemento.innerHTML = "";

            textArray.forEach((letra, i) => {
                setTimeout(() => (elemento.innerHTML += letra),200 * i);
            });
            
        } 
        const profession = document.querySelector('.presentation span');
        typeWriter(profession);
    }
    
    showProfession();
    setInterval(showProfession,10000);
    
   

    /*===================================== Projetos ======================================================== */


    /* ------------------------------------ Efeito show preview dos projetos ----------------------------------- */

    const activatescreen = document.querySelectorAll(".screen");
    const screencontent = document.querySelectorAll(".screencontent");   
    const restScreen = document.querySelector(".restScreen");   
    

    
    function showscreen(i){
        restScreen.style.display="none"
        if(i == 0){
            screencontent.forEach(item =>{item.classList.remove("showscreen");})
            screencontent[0].classList.add("showscreen");
        }else if(i == 1){
            screencontent.forEach(item =>{item.classList.remove("showscreen");}) 
            screencontent[1].classList.add("showscreen");
        }else if(i == 2){
            screencontent.forEach(item =>{item.classList.remove("showscreen");}) 
            screencontent[2].classList.add("showscreen");
        }else if(i == 3){
            screencontent.forEach(item =>{item.classList.remove("showscreen");}) 
            screencontent[3].classList.add("showscreen");
        }else if(i == 4){
            screencontent.forEach(item =>{item.classList.remove("showscreen");}) 
            screencontent[4].classList.add("showscreen");
        }else if(i == 5){
            screencontent.forEach(item =>{item.classList.remove("showscreen");}) 
            screencontent[5].classList.add("showscreen");
        }

/*          setTimeout( ()=> {
                screencontent.forEach( 
                            item =>{item.classList.remove("showscreen");
                            restScreen.style.display="block"});
            }, 7000);
 */        
    }

    /*===================================== Habilidades ======================================================== */


    /* ------------------------------------ Efeito aviso skill ----------------------------------- */
    
    
    const boxSkill = document.querySelector(".contain-skill");

    boxSkill.addEventListener('mouseenter',()=>{
        const textSkill = document.querySelector(".contain-skill span");

        textSkill.style.display="block"
        setTimeout(()=>{textSkill.style.display="none"},10000);

    })

    /* ------------------------------------ Popup Skills ----------------------------------- */
    
    const infoSkill = document.querySelectorAll(".skill");
    const containerSkillPopup = document.querySelector('.infoSkill');

    
    function hidePopup(){
        /* ----- Fecha o Popup -------- */

        infoSkill.forEach(hide =>{

            //checa se existe uma classe com o nome informado
            if(hide.classList.contains("showSkill") ) hide.classList.remove("showSkill"); 
            
        }); 
    }
   
    function showPopup(popup){ 
        /* -------- Abre o Popup --------------- */

        if(popup == 0){
            infoSkill[0].classList.add("showSkill");
        }else if(popup == 1){
            infoSkill[1].classList.add("showSkill");
        }else if(popup == 2){
            infoSkill[2].classList.add("showSkill");
        }else if(popup == 3){
            infoSkill[3].classList.add("showSkill");
        }else if(popup == 4){
            infoSkill[4].classList.add("showSkill");
        }else if(popup == 5){
            infoSkill[5].classList.add("showSkill");
        }else if(popup == 6){
            infoSkill[6].classList.add("showSkill");
        }else if(popup == 7){
            infoSkill[7].classList.add("showSkill");
        }else if(popup == 8){
            infoSkill[8].classList.add("showSkill");
        }
            
    }

    const scrollToLast = document.querySelector(".scrollToLast");
    const scrollToFirst = document.querySelector(".scrollToFirst");

    scrollToLast.addEventListener('click', ()=>{
        boxSkill.scrollLeft = 1000;
    })
    scrollToFirst.addEventListener('click', ()=>{
        boxSkill.scrollLeft = 0;
    })
    boxSkill.addEventListener('scroll', ()=>{
        scrollToFirst.style.display="flex"
    })
    

  
  
   