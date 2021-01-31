
/**
 * 4. Fun with Handlebars
 *
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentece using handlebars.
 *
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */

const Handlebars = require('handlebars')

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

function drawCard() {
  // YOUR CODE GOES IN HERE
  let subject = getRandomElement(subjects);
  let punchline = getRandomElement(punchlines);
  const cardData = {subject, punchline};


  const card = '{{subject}} is great to {{punchline}}'

  let template = Handlebars.compile(card);

  let result = template(cardData);
  console.log(result)
}

drawCard();

/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  // YOUR CODE GOES IN HERE
  const item = array[Math.floor(Math.random() * array.length)];
  return item;
}

