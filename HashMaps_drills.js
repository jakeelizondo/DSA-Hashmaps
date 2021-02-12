const HashMap = require('./index.js');

function main() {
  let lotr = new HashMap();

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  return lotr;
}

console.log(main());

// PROBLEM 1

// It looks like setting a new value on the same key overwrites the previous value, like in an object
// The capacity is now at 24 since I hit the 50% threshold when adding items

// PROBLEM 2

// This function appears to be illustrating that keys can be overwritten, and is storing the overwritten key in a different hashmap?
