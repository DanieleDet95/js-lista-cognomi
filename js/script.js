// Creazione lista cognomi esistenti
var listaCognomi = [ 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// Creazione cognome utente con validazione esistente ed é stringa
do {
  var cognomeUtente = prompt('Inserisci il tuo cognome:');
} while ((cognomeUtente.length == 0 ) || (!(isNaN(cognomeUtente))));


// Prima lettera maiuscolo e inserimento del cognome nella lista
cognomeUtente = cognomeUtente.toUpperCase();
listaCognomi.push(cognomeUtente);

// Ordinare la lista alfabeticamente
listaCognomi.sort();

// Crezione delle variabili per output lista e posizione
var listaCognomiOutput = document.getElementById('listaCognomiOutput');
var posizione = listaCognomi.indexOf(cognomeUtente);

// Stampa della lista cognome su HTML
for (var i = 0; i < listaCognomi.length; i++) {
  listaCognomiOutput.innerHTML += '<li>' + listaCognomi[i] + '</li>';
}

// Stampa della posizione su HTML
posizioneOutput = document.getElementById('posizioneOutput').innerHTML = posizione + 1;
