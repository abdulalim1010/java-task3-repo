/* const person = ['alim', 'sakib', 'rafiq', 'karim', 'rahim', 'jamal', 'kamal', 'salam', 'kalam'];
const soortePerson = person.sort();
console.log(soortePerson); // [ 'alim', 'jamal', 'kalam', 'karim', 'kamal', 'rahim', 'rafiq', 'sakib', 'salam' ]
 */
const sentence = 'i am a not good person for the reson nobody love me';
let revers = '';
for (const letters of sentence) {
  revers = letters + revers;
}
console.log(revers);