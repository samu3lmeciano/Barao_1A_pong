//variaveis da bolinha
let xBolinha = 200;
let yBolinha = 100;
let diametro = 20;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis da raquete
let xRaquete = 15;
let yRaquete = 150;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaMinhaRaquete();
}
 
function mostraBolinha(){circle(xBolinha, yBolinha, diametro);
 
}

function movimentaBolinha(){xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
   if (xBolinha + raio> width ||
     xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio<0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}


function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

