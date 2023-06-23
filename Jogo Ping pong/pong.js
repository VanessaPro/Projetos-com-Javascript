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