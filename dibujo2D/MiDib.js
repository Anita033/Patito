function setup() {
    // put setup code here
    createCanvas(800,800)
    background(213, 176, 224)
}
  
function draw() {
   //Crear un Patito

   //Charco   
   strokeWeight(5)
   stroke(0, 0, 0)
   fill(87, 235, 255)  
   ellipse(390, 470, 300, 90);
   noFill()
   stroke(255)
   arc(325, 468, 100, 35, 1.2, PI+.5, OPEN);  //blanco izq
   arc(490, 468, 50, 25, -0, PI-1, OPEN);  //blanco der

   //flores
   stroke(0,0,0)
   arc(225, 447, 50, 80, 5, PI-3, OPEN);//palito
   arc(230, 444, 50, 130, 5, PI-3, OPEN);//palito flor1
   arc(245, 437, 50, 130, 5, PI-3, OPEN);//palito flor2
   
   //petalos flor1
   fill(13, 190, 13)
   ellipse(230, 380, 25, 20)
   ellipse(250, 380, 25, 20)
   ellipse(235, 365, 20, 18)
   ellipse(250, 365, 18, 18)
   ellipse(230, 395, 20, 18)
   ellipse(248, 395, 20, 18)

   fill(190, 107, 13)
   ellipse(240, 380, 17, 25)//flor 1
     

   //Cuerpo
   strokeWeight(5)
   stroke(0,0,0)
   fill(255, 220, 66)
   arc(390, 400, 200,150,-0.2, PI+1, OPEN);//Cuerpo
   
   noFill()
   arc(540, 320, 320,120, 2.3, PI, OPEN);//colita
   
   fill(255, 220, 66)
   arc(380, 410, 90, 70, 0, PI+.4, OPEN);//Alita
   arc(430, 400, 35, 20, 4, PI-1.2, OPEN);
   arc(423, 414, 35, 20, 4.5, PI-1.2, OPEN);

   //cara
   strokeWeight(5)
    stroke(0,0,0)
    fill(255, 220, 66)
    ellipse(350,300, 170, 130)
    arc(335, 237, 37, 30, 8,2* PI, OPEN);
    arc(360, 237, 32, 41, 2.5, PI+HALF_PI+1.7, OPEN);
    
    //ojos
    fill(0, 0, 0)
    ellipse(315, 290, 10, 25)
    ellipse(385, 290, 10, 25)

    //cachetes
    strokeWeight(5)
   stroke(255, 77, 166)
   fill(255, 77, 166)   
   ellipse(300, 312, 30, 10);
   ellipse(400, 312, 30, 10);

   //Ocico
   strokeWeight(5)
    stroke(0,0,0)
    fill(255, 150, 30)
    //Arriba
    fill(255, 150, 30)
    noStroke()
    rect(330,312,40,20)
    rect(325,318,6,10)
    rect(370,318,6,10)
    stroke(0,0,0)
    arc(350, 315, 37, 20, 3.3, PI+3, OPEN);//Curva central
    arc(386, 310, 37, 20, 2.3, PI, OPEN);//curva sup der
    arc(313, 311, 37, 20,0 , PI+3.9, OPEN);//cuerva sup iz
    arc(337, 320, 30, 13,0.5 , PI, OPEN);//curva inferior izq
    arc(363, 321, 30, 12,0 , PI, OPEN);//curva inferior der
    fill(0,0,0)
    ellipse(350, 326, 25, 10);//Relleno del cenro
    //Abajo
    fill(255, 150, 30)
    arc(350, 329, 43, 20,0 , PI, OPEN);

   //flor cabeza
   fill(204, 0, 0)
    translate(375, 245);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(4, 10, 5, 20);
      rotate(PI/5);
    }
//guardr imagen
   if(flag){
    save("ObraMAestraByAnita")
    flag=false;
   }
}  