var vbtIniciar;
var vbola;
var vCpu;
var vJogador;
var vPaineltxPontos;



//Controle de animação
var game, frames;

//Posição
var posBolaX, posBolaY,posCpuX, posCpuY;
var posJogadorX, posJogadorY;

//Direção de acordo com a tecla
var dirJogY;

//Posições iniciais
var posJogoIniY=180, posCpuIniY=180, posBolaIniX=475, posBolaIniY=240, posJogoIniX=0, posCpuIniX=930;


//Tamanhos
var campoX, campoY=0,campoW=960, campoH=500;
var barraW=20, barraH=140, bolaW=20, bolaH=20;

//Direção
var bolaX, bolaY;
var cpuY=0;

//Velocidade 
var velBola, velCpu, velJogador;

// controle
var pontos=0;
var tecla;
jogo=false;



function controlaCpu(){
    if(jogo){
        if((posBolaX > (campoW/2))&&(bolaX>0)){
            //Mover a cpu
            if (((posBolaY+(bolaH/2))>((posCpuY+(barraH/2)))+velCpu)){
                //Mover para baixo
                if ((posCpuY+barraH) <= campoH){
                  posCpuY+=velCpu;
                }

            }else if ((posBolaY +(bolaH/2)) < (posCpuY+(barraH/2)) -velCpu){
                //Mover para cima
                if (posCpuY >=0){
                  posCpuY-=velCpu;
                }

            }
        }else{
            // posicionar a cpu no centro
            if((posCpuY+(barraH/2)) < (campoH/2)){
                posCpuY+=velCpu;
            }else if((posCpuY+(barraH/2)) > (campoH/2)){
                posCpuY-=velCpu;
            }
        
            
        }
        vCpu.style.top=posCpuY+"px";
    }
}


function controlaJog(){

    if (jogo){
        posJogadorY+=velJogador*dirJogY;
        if (((posJogadorY+barraH)>= campoH)|| ((posJogadorY)<=0)){
            posJogadorY+=(velJogador*dirJogY)*(-1);
        }
        vJogador.style.top=posJogadorY+"px";

    }
}

function controlBola(){
    // Movimento da bola
    posBolaX+=velBola*bolaX;
    posBolaY+=velBola*bolaY;
     // colisão com o jogador 

    if (
        (posBolaX <= posJogadorX+barraW)&&((posBolaY+bolaH >= posJogadorY)&& (posBolaY <=posJogadorY+barraH))
        ){
        bolaY=(((posBolaY+(bolaH/2))-(posJogadorY+(barraH/2)))/16);
        bolaX*=-1;
    }
    // colisão com cpu
    if (
        (posBolaX >= posCpuX-barraW)&&((posBolaY+bolaH >= posCpuY)&&(posBolaY <=posCpuY+barraH))
        ){
        bolaY=(((posBolaY+(bolaH/2))-(posCpuY+(barraH/2)))/16);
        bolaX*=-1;
    }

    //Limites superior e inferior 

    if ((posBolaY>=480)||(posBolaY <=0)){
        bolaY*=-1;
    }

    //Saiu da tela 
     
    if (posBolaX >= (campoW-bolaW)){
        velBola=0;
        posBolaX=posBolaIniX;
        posBolaY=posBolaIniY;
        posJogadorY=posJogoIniX;
        posCpuY=posCpuIniY;
        pontos++;
        vPaineltxPontos.value=pontos;
        jogo=false;
        vJogador.style.top=posJogadorY+"px";
        vCpu.style.top=posCpuY+"px";
    }else if (posBolaX <= 0){
        velBola=0;
        posBolaX=posBolaIniX;
        posBolaY=posBolaIniY;
        posJogadorY=posJogoIniX;
        posCpuY=posCpuIniY;
        pontos--;
        vPaineltxPontos.value=pontos;
        jogo=false;
        vJogador.style.top=posJogadorY+"px";
        vCpu.style.top=posCpuY+"px";
    }

    vbola.style.top=posBolaY+"px";
    vbola.style.left=posBolaX+"px";

}



function teclaUp(event){
    tecla = event.key;
    if (tecla == 'ArrowUp'){ //Tecla Cima
        dirJogY = 0;
    } else if(tecla == 'ArrowDown'){ //Tecla Baixo
        dirJogY = 0;
    }
}

function teclaDw(event){
    tecla = event.key;
    if (tecla == 'ArrowUp'){ //Tecla Cima
        dirJogY = -1;
    } else if(tecla == 'ArrowDown'){ //Tecla Baixo
        dirJogY = 1;
    }
}


function game() { 

    if(jogo){
        controlaJog();
        controlBola();
        controlaCpu();
    }
    frames=requestAnimationFrame(game);
 }

function iniciaJogo(){
    if(!jogo){
       velBola=velCpu=velJogador=8;
       cancelAnimationFrame(frames);
       jogo=true; 
       bolaY=0;
       if((Math.random()*10)<5){
          bolaX=-1;
       }else{
          bolaX=1;
       }
       dirJogY=0;
       posBolaX=posBolaIniX;
       posBolaY=posBolaIniY;
       posJogadorY=posJogoIniY;
       posJogadorX=posJogoIniX;
       posCpuY=posCpuIniY;
       posCpuX=posCpuIniX;
       game();
    }
}

function iniciaLiza(){
    velBola=velCpu=velJogador=8;
    vbtIniciar=document.getElementById("btIniciar");
    vbtIniciar.addEventListener("click",iniciaJogo);
    vJogador=document.getElementById("dvJogador");
    vCpu=document.getElementById("dvCpu");
    vbola=document.getElementById("dvBola");
    vPaineltxPontos=document.getElementById("txtPontos");
    document.addEventListener("keydown", event => teclaDw(event))
    document.addEventListener("keyup", event => teclaUp(event))
}

window.addEventListener("load",iniciaLiza);