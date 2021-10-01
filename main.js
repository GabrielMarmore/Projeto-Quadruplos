/*
->slider antigo
automatico
var imgs = [
    'imagens/nacionais/sul.png',
    'imagens/nacionais/sudeste.png',
    'imagens/nacionais/norte.png',
    'imagens/nacionais/nordeste.png',
    'imagens/nacionais/centro-oeste.png'
];
function slide1(){
    const img = document.querySelector('#slider');
    img.src=imgs[0];
    img.alt='Imagem turisca do sul do Brasil'
    setTimeout('slide2()', 3000);
}
function slide2(){
    const img = document.querySelector('#slider');
    img.src=imgs[1];
    img.alt='Imagem turisca do sudeste do Brasil'
    setTimeout('slide3()', 3000);
}
function slide3(){
    const img = document.querySelector('#slider');
    img.src=imgs[2];
    img.alt='Imagem turisca do norte do Brasil'
    setTimeout('slide4()', 3000);
}
function slide4(){
    const img = document.querySelector('#slider');
    img.src=imgs[3];
    img.alt='Imagem turisca do nordeste do Brasil'
    setTimeout('slide5()', 3000);
}
function slide5(){
    const img = document.querySelector('#slider');
    img.src=imgs[4];
    img.alt='Imagem turisca do centro oeste do Brasil'
    setTimeout('slide1()', 3000);
}

com botão
function comeco(){
    document.getElementById('slider').src = imgs[0];
    document.form.texto.value="0"
    }
    
function mais(){
    document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 + 1)
    if (document.form.texto.value > 2){
        document.form.texto.value = 0
    }
}
    
function menos(){
    document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 -1)
    if (document.form.texto.value < 0){
        document.form.texto.value = 2
    }
}
    
function regular(){
    document.getElementById('slider').src = imgs[document.form.texto.value];
    setTimeout("regular()", 1)
}*/
var imgs=[];
var slider;
var imgAtual;
var maxImg;
var tmp;
var tempotroca;
var vtempo;
var vbarra;

function iniciar(){
    precarregamento();
    
    imgAtual=1;
    maxImg=imgs.length-1;
    slider=document.querySelector("div.slider");
    
    carregar(imgAtual,imgs);
    
    vbarra=document.querySelector('div#dvbarra');
    tempotroca=0;
    anima();
    //tmp=setInterval(troca,tempotroca);
}

function precarregamento(){
    var s=1;
    for(let i=0;i<5;i++){
        //Sem usar backgroundImgae em carregar()
        //imgs[i]='imagens/slider/s'+s+'.jpg';//As imagens usadas possuem o nome de 's1.jpg' a 's5.jpg';*/
        imgs[i]=new Image();
        imgs[i].src='imagens/slider/s'+s+'.jpg';
        s++;
    }
}
function carregar(img){
    /* Sem usar backgroundImage
    if(document.querySelector('div.slider img')){
        slider.removeChild(document.querySelector('div.slider img'));
    }
    const el = document.createElement('img');
    el.src=imgs[img];
    slider.appendChild(el);
    */
    slider.style.backgroundImage="url('"+imgs[img].src+"')";
}

function troca(dir){
    //dir -> direção
    tempotroca=0;
    imgAtual+=dir;
    
    if(imgAtual>maxImg){
        imgAtual=0;
    }
    else if(imgAtual<0){
        imgAtual=maxImg;
    }
    carregar(imgAtual)
}

function anima(){
    tempotroca++;
    //500/60 = 8s -> logo cada troca leva 8s
    if(tempotroca>=500){
        tempotroca=0;
        troca(1);
    }
    vtempo=tempotroca/5; // '/5' é relativo ao valor no if 'tempotroca=500' se fosse 'tempotroca=1000' seria '/10'. A relação precisa ser de 100.
    vbarra.style.width=vtempo+'%';
    window.requestAnimationFrame(anima);//chama a função 60 por segundo 
}
/*Leia mais*/

function leia(){
    const btn = document.querySelector('.leia');
    btn.addEventListener("click", function(){
    this.classList.toggle("active");

    var panel = this.nextElementSibling;//A

    if (panel.style.maxHeight /*panel.style.display === "block"*/) {
        //panel.style.display = "none";
        panel.style.maxHeight = null;
        btn.innerHTML='Leia mais';
    } else {
        btn.innerHTML='Leia menos';
        //panel.style.display = "block";
        panel.style.maxHeight = panel.scrollHeight + "px"; //element.scrollHeight retorna a width de um elemento, mesmo que oculto.
    }
    });
}

function ofertas(){
    const textinter=document.querySelector('#inter>a>p');
    

    const textnacional=document.querySelector('#nacional>a>p');
    
    
    const inter=document.querySelector('#inter');
    const nacional = document.querySelector('#nacional');

    nacional.addEventListener('mouseover',function(){
        //textnacional.style.maxHeight = textnacional.scrollHeight + "px";
        textnacional.innerHTML='Opções de viagens por todo o Brasil!';
      
    })
    inter.addEventListener('mouseover', function(){
        //textinter.style.maxHeight = textinter.scrollHeight + "px";
        textinter.innerHTML='Opções de viagens por todo o mundo!';
        
    });

    nacional.addEventListener('mouseleave', function(){
        //textnacional.style.maxHeight = null;
        textnacional.innerHTML='Nacional';
    });

    inter.addEventListener('mouseleave', function(){
        //textinter.style.maxHeight = null;
        textinter.innerHTML='Internacional';
    });
}

function topo(ybtn){
    const btn = document.querySelector('.link-top');
    window.addEventListener("scroll", function(){
        //let y = window.scrollY;
        let y = window.pageYOffset;
        if(y>ybtn){
            // Se usuário rolar além da altura da janela inicial.
            btn.className='link-top show';
            
        }else{
            btn.className='link-top hide';
        }
    });
}

//Sidebar
