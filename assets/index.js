
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



let btnScrollToTop = document.querySelector(".Btn-upPage");
const btnScrollToSecundSection = document.querySelector(".chevron");
const secundSection = document.querySelector("#Projetos");

btnScrollToTop.addEventListener("click",()=>{
    window.scrollTo(0,0)
})

btnScrollToSecundSection.addEventListener("click", ()=>{

    const posicaoTop = secundSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: posicaoTop,    
        behavior: 'smooth'
    });
})

window.addEventListener("scroll",()=>{
    if(secundSection.getBoundingClientRect().top <= 0){
        //ativar
        btnScrollToTop.style.transform = "scale(1)"
    }else{
        //desativar
        btnScrollToTop.style.transform = "scale(0)"
    }
})




/* ------------------------------------ Efeito máquina de escrever ----------------------------------- */

const textDisplay = document.querySelector('.Profession');
const frases = ['Desenvolvedor Front-End', 'Freelancer', 'Designer gráfico', 'Auxiliar administrativo']
let i = 0;
let j = 0;
let currentFrase = []
let isDeleting = false;


function typeWriter(){
    textDisplay.innerHTML = currentFrase.join('');   

    if(i < frases.length){

        if(!isDeleting && j <=   frases[i].length){
            currentFrase.push(frases[i][j])
            j++
        }

        if(isDeleting && j <=   frases[i].length){
            currentFrase.pop(frases[i][j])
            j--
        }

        if(j == frases[i].length){
            isDeleting = true
        }
        if( isDeleting && j === 0){
            currentFrase = []
            isDeleting = false
            i++
            if(i == frases.length){
                i = 0
            }
        }
        
    }
    setTimeout( typeWriter,150)
}

typeWriter()



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

    
}
    /* ------------------------------------ Efeito anima a entrada com scrool ----------------------------------- */
    


/*===================================== Habilidades ======================================================== */


/* ------------------------------------ Efeito aviso skill ----------------------------------- */


/* const boxSkill = document.querySelector(".contain-skill");

boxSkill.addEventListener('mouseenter',()=>{
    const textSkill = document.querySelector(".contain-skill span");

    textSkill.style.display="block"
    setTimeout(()=>{textSkill.style.display="none"},10000);

})
 */
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


















/* const containerCards = document.querySelector(".container")


for (let i = 0; i < 7; i++){

    const card = document.createElement('div')
    card.innerHTML = ` <img src="./assets/img/thumbs/thumbnail-Calculadora.png" alt="calculadora">`
    containerCards.appendChild(card);

}

function addClassInElements(){
    containerCards.childNodes[0].remove()

    containerCards.childNodes.forEach((card)=>{
        card.classList.add("card")

    })
    containerCards.childNodes
    
}
 */
/* const containerCards = document.querySelector(".container")
const card = document.querySelectorAll(".card");
var leftArray = []
var RightArray= []
var botaoClicado;
var slideCenter;
var position;

containerCards.addEventListener("click", (el)=>{

    if(el.target.parentNode.classList[1] == "leftPosition"){
        botaoClicado = el.target.parentNode;
    }else if(el.target.parentNode.classList[1] == "rightPosition"){
        botaoClicado = el.target.parentNode;
    }else if(el.target.parentNode.classList[1] == "center"){
        botaoClicado = el.target.parentNode;
        slideCenter = el.target.parentNode;
    }

    changeElementPosition()
})
function changeElementPosition(){
   

    card.forEach(center=>{
        if(center.classList.contains("center")){
            slideCenter = center;
        }
    })

    containerCards.insertBefore(slideCenter,botaoClicado)
    
}
function arrayCreation(){

    
    card.forEach( cardImg =>{

        if(cardImg.classList.contains("leftPosition")){
            leftArray.push(cardImg)
            

        }
        if(cardImg.classList.contains("rightPosition")){
            RightArray.push(cardImg)
            
        }
    
    });
}
function positionElementsToTheLeft(){  
    let translateLeft = 60;
    let scaleLeft = 70;

    leftArray.forEach(elemento =>{
        elemento.style.transform = `translateX(-${translateLeft}%) scale(0.${scaleLeft})`
        translateLeft -= 20;
        scaleLeft += 10; 
   })
}
function positionElementsToTheRight(){  
    let translateRight = 20;
    let scaleRight = 90;
    let Zindex= 3;

    RightArray.forEach(elemento =>{
        elemento.style.transform = `translateX(${translateRight}%) scale(0.${scaleRight})`
        elemento.style.zIndex = `${Zindex}`
        translateRight += 20;
        scaleRight -= 10;
        Zindex --
   })
}
arrayCreation()
positionElementsToTheLeft()
positionElementsToTheRight() */





   /* card.forEach( cardImg =>{

    cardImg.style.transform = `translateX(-${translate}%)`

    translate + 5;


    if(cardImg.classList.contains("center")){

        return false;
    }
   }) */
