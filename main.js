let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Av. El Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();



let app1 = document.getElementById('typewriter1');
let typewriter1 = new Typewriter(app1, {
  loop: true,
  delay: 75,
});
 
typewriter1
  .pauseFor(2500)
  .typeString('Soluciones Digitales innovadoras para tus problemas de negocio')
  .pauseFor(200)
  .deleteChars(10)
  .start();