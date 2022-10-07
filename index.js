let contadorProgressivo = new Date("Oct 7, 2022 13:00:00").getTime();

let x = setInterval(function(){
   let agora = new Date().getTime();
   let distancia =  agora - contadorProgressivo;
   let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
   let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
   let secundos = Math.floor((distancia % (1000 * 60)) / 1000);
   
   document.getElementById("demo").innerHTML = dias + "d " + horas + "h "
   + minutos + "m " + secundos + "s ";
});
