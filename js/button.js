//Seleziona il bottone
const button = document.getElementById('animatedButton');

//Aggiunge un listener per l'evento 'mouseover' sul bottone
button.addEventListener('mouseover', function() {
  //Aggiunge classi al bottone quando il mouse è sopra di esso
  button.style.transition = 'background-color 0.2s ease-in-out';
  button.style.backgroundColor = 'rgb(252, 118, 9)'; //Cambio di colore quando passi sopra il bottone
  button.style.color = 'white';
});

//Aggiunge un listener per l'evento 'mouseout' sul bottone
button.addEventListener('mouseout', function() {
  //Rimuove classi dal bottone quando il mouse esce
  button.style.transition = 'background-color 0.2s ease-in-out';
  button.style.backgroundColor = 'rgb(233, 233, 233)'; //Ritorna al colore originale quando il mouse esce
  button.style.color = 'rgb(252, 118, 9)';
});
