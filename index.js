// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/*{
  MODE PLUS RAPIDE
  Il faut passer le plus de tests, le plus rapidement possible.

  Objectif

  Kyle wants to practice typing as fast as possible to impress his friends.
  Calculate the number of words he types per minute, taking into account the time and the number of errors.

  Typing speed formula :
  (number of characters typed/5-errors)/time(in minutes)

  Entrée

  Line 1 : A string words for the words to type.
  Line 2 : A string typed for the words he typed.
  Line 3 : A integer time for the time (in seconds) he took to type.

  Sortie

  Line 1 : The number of words per minute (rounded to the nearest integer).

  Contraintes
  0 ≤ words ≤ 10000
  0 ≤ typed ≤ 10000

  Exemple

  Entrée

  pneumonoultramicroscopicsilicovolcanoconiosis
  pneumonoultramiproscopicsilicodolcanoconiofis
  5

  Sortie

  72
  ==========================
  Entrée

  initial perforate commission smoke letter way front threat coffin worker tight brown rest sheet economist bother mixture tank chart fountain literature magnetic bush oral revise minimum anger stunning exotic contraction
  initial perkorate commzssion smope leteer way front threat coffin worker tihht brown rest shyet economist bother mixture tank chart fountain literature magnetic bush orak revise minimum anger stonning exotic contraction
  30

  Sortie

  72
  ==========================
  Entrée

  fancy grateful cook spiders second low praise ball turn gaudy cent dump exchange liquid provide ache separate omit redo depend education society office jobless incandescent preset cap cabbage efficacious crate drag trip amusement sacrifice chief equal screeching optimal boundary laugh zebra use decorate spooky shaky satisfying constrain room aquatic lean
  fancy grateful cook spiders second low praise ball turn gaudy cent dump exchange liquid provide ache separate omit redo depend education society office jobless incandescent preset cap cabbage efficacious crate drag trip amusement sacrifice chief equal screeching optimal boundary laugh zebra use decorate spooky shaky satisfying constrain room aquatic lean
  60

  Sortie

  71
  ==========================
  Entrée

  known magenta milk harmony wet jobless adventurous question secure doubtful
  known magenta mikk hanmony wet jobless acventurous question selure doubtful
  5

  Sortie

  132
}*/
/*{
  const WORDS = 'pneumonoultramicroscopicsilicovolcanoconiosis';
  const TYPED = 'pneumonoultramiproscopicsilicodolcanoconiofis';
  const TIME = 5;
/}*/
/*{
  const WORDS =
  'initial perforate commission smoke letter way front threat coffin worker tight brown rest sheet economist bother mixture tank chart fountain literature magnetic bush oral revise minimum anger stunning exotic contraction';
  const TYPED =
  'initial perkorate commzssion smope leteer way front threat coffin worker tihht brown rest shyet economist bother mixture tank chart fountain literature magnetic bush orak revise minimum anger stonning exotic contraction';
  const TIME = 30;
/}*/
/*{
  const WORDS = 'fancy grateful cook spiders second low praise ball turn gaudy cent dump exchange liquid provide ache separate omit redo depend education society office jobless incandescent preset cap cabbage efficacious crate drag trip amusement sacrifice chief equal screeching optimal boundary laugh zebra use decorate spooky shaky satisfying constrain room aquatic lean';
  const TYPED = 'fancy grateful cook spiders second low praise ball turn gaudy cent dump exchange liquid provide ache separate omit redo depend education society office jobless incandescent preset cap cabbage efficacious crate drag trip amusement sacrifice chief equal screeching optimal boundary laugh zebra use decorate spooky shaky satisfying constrain room aquatic lean';
  const TIME = 60;
/}*/
//*{
const WORDS =
  'known magenta milk harmony wet jobless adventurous question secure doubtful';
const TYPED =
  'known magenta mikk hanmony wet jobless acventurous question selure doubtful';
const TIME = 5;
//}*/
let errors = 0;
for (const key in WORDS) {
  errors += WORDS[key] != TYPED[key];
}
console.log(Math.round((WORDS.length / 5 - errors) / (TIME / 60)));
